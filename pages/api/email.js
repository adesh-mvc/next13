// https://ardianbudi.medium.com/how-to-read-email-download-attachment-and-set-it-to-read-in-nestjs-with-node-imap-999e3e10570c
var Imap = require('node-imap'),
    inspect = require('util').inspect;
var fs = require('fs');
var base64 = require('base64-stream');
const { simpleParser } = require('mailparser');

var imap = new Imap({
    user: "adesh.mvc@gmail.com",
    password: "vbpjwckdnwvkxjyl",
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

export default function handler(req, res) {
    let email_array = [];
    imap.once('ready', function () {
        console.log("start open inbox");
        try {
            openInbox(function (err, box) {
                imap.search(['UNSEEN', ['SINCE', new Date()]], function (err, results) {
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
                                    let dataheader = Imap.parseHeader(buffer)

                                    //start -> set data, that you want to save on your DB
                                    let emails_data = {
                                        "date": dataheader.date[0],
                                        "subject": dataheader.subject[0],
                                        "from": dataheader.from[0],
                                        "to": dataheader.to[0],
                                        "content": (await simpleParser(buffer)),
                                        "attachment": attach
                                    }
                                    //end -> set data
                                    console.log("emails_data:", emails_data.content.html)
                                    email_array.push(emails_data)
                                }
                                else
                                    console.log(prefix + 'Body [%s] Finished', inspect(info.which));
                            });
                        });

                        //mark attributes email as read
                        msg.once('attributes', function (attrs) {

                            let uid = attrs.uid;
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
            resolve(email_array);
        });
    })
    res.status(200).json({ name: 'John Doe' })
}