var Imap = require('node-imap'),
    inspect = require('util').inspect;
// var fs = require('fs');
// var base64 = require('base64-stream');
const { simpleParser } = require('mailparser');
// https://dev.to/mesadhan/manage-your-re-mail-using-imap-2p18
// https://dev.to/akinmyde/reading-email-data-with-node-js-bjf
// https://ardianbudi.medium.com/how-to-read-email-download-attachment-and-set-it-to-read-in-nestjs-with-node-imap-999e3e10570c
export default function EmailTable() {

    var imap = new Imap({

        user: "ictpamis@gmail.com",
        password: "zisfamdchzibfgcf",
        host: "imap.gmail.com", //this may differ if you are using some other mail services like yahoo
        port: 993,
        tls: true,
        connTimeout: 10000, // Default by node-imap 
        authTimeout: 5000, // Default by node-imap, 
        debug: null, // Or your custom function with only one incoming argument. Default: null 
        tlsOptions: { rejectUnauthorized: false },
        mailbox: "INBOX", // mailbox to monitor 
        searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved 
        markSeen: true, // all fetched email willbe marked as seen and not fetched next time 
        fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`, 
        mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib. 
        attachments: true, // download attachments as they are encountered to the project directory 
        attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments 

    });
    function openInbox(cb) {
        imap.openBox('INBOX', false, cb);
    }

    let email_array = [];

    imap.once('ready', function () {
        console.log("start open inbox");
        try {
            openInbox(function (err, box) {
                imap.search([['SINCE', new Date()]], function (err, results) {
                    if (!results || !results.length) {
                        console.log("The server didn't find any emails matching the specified criteria")
                        imap.end(); return;
                    }

                    var f = imap.fetch(results, { //you can set amount range like '1:2' or 'results' for all results
                        bodies: '',
                        struct: true
                    })

                    f.on('message', function (msg, seqno) {
                        console.log('Message #%d', seqno);
                        var prefix = '(#' + seqno + ') ';
                        msg.on('body', function (stream, info) {
                            //Retrieve the 'from' header and buffer the entire body of the newest message:
                            if (info.which === 'TEXT')

                                var buffer = '', count = 0;

                            stream.on('data', async function (chunk) {
                                count += chunk.length;
                                buffer += chunk.toString('utf8');
                            });

                            stream.once('end', async function () {
                                let attach = null
                                //console.log((await simpleParser(buffer))) -> to see entire data of email

                                if (((await simpleParser(buffer)).attachments).length != 0) {
                                    attach = (await simpleParser(buffer)).attachments[0].content //to get attachments
                                }

                                if (info.which !== 'TEXT') {
                                    const dataheader = Imap.parseHeader(buffer)
                                    console.log("<===============================================START========================================================>");
                                    console.log(attach);
                                    // console.log(text);
                                    console.log("<===============================================END========================================================>");
                                    //start -> set data, that you want to save on your DB
                                    let emails_data = {
                                        "date": dataheader?.date[0],
                                        "subject": dataheader.subject[0],
                                        "from": dataheader.from[0],
                                        "to": dataheader.to[0],
                                        "content": (await simpleParser(buffer)).textAsHtml,
                                        "attachment": attach
                                    };
                                    //end -> set data

                                    email_array.push(emails_data)
                                }
                                else
                                    console.log(prefix + 'Body [%s] Finished', inspect(info.which));
                            });
                        });

                        //mark attributes email as read
                        msg.once('attributes', function (attrs) {
                            let uid = attrs.uid;
                            var attachments = findAttachmentParts(attrs.struct);
                            console.log(prefix + 'Has attachments: %d', attachments.length);
                            if (attachments.length) {
                                for (var i = 0, len = attachments.length; i < len; ++i) {
                                    var attachment = attachments[i];
                                    /*This is how each attachment looks like {
                                        partID: '2',
                                        type: 'application',
                                        subtype: 'octet-stream',
                                        params: { name: 'file-name.ext' },
                                        id: null,
                                        description: null,
                                        encoding: 'BASE64',
                                        size: 44952,
                                        md5: null,
                                        disposition: { type: 'ATTACHMENT', params: { filename: 'file-name.ext' } },
                                        language: null
                                      }
                                    */
                                    console.log(prefix + 'Fetching attachment %s', attachment.params.name);
                                    var f = imap.fetch(attrs.uid, { //do not use imap.seq.fetch here
                                        bodies: [attachment.partID],
                                        struct: true
                                    });
                                    if (attachment.params.name) {
                                        //build function to process attachment message
                                        f.on('message', buildAttMessageFunction(attachment));
                                    }
                                }
                            }
                            imap.addFlags(uid, ['\\Seen'], function (err) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log("Done, marked email as read!")
                                }
                            });



                        });
                        msg.once('end', function () {
                            console.log(prefix + 'Finished');
                        });
                    });

                    f.once('error', function (err) {
                        console.log('Fetch error: ' + err);
                    });

                    f.once('end', function () {
                        console.log('Done fetching all messages!');
                        imap.end();
                    });

                })
            });
        } catch (err) {
            console.log("Error when request open inbox mail", err)
        }
    });

    imap.once('error', function (err) {
        console.log("Error when connection to IMAP", err);
    });

    imap.once('close', function () {
        console.log('Connection ended');
    });

    imap.connect();

    return new Promise((resolve, reject) => {
        imap.once('close', async function () { //maybe, someone asking whether to use end or close and the author of the module says that close is always emitted so you should use that.
            console.log("email_array:", email_array);
            // resolve(email_array);
        });
    })
}