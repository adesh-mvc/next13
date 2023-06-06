import { mkdir } from 'fs/promises';
// https://pdfkit.org/
var inspect = require('util').inspect;
var fs = require('fs');
var { Base64Decode } = require('base64-stream');
const { simpleParser } = require('mailparser');
export default function EmailTable() {
    var Imap = require('imap');
    var imap = new Imap({
        user: 'ictpamis@gmail.com',
        password: 'zisfamdchzibfgcf',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },

        //,debug: function(msg){console.log('imap:', msg);}
    });

    function toUpper(thing) { return thing && thing.toUpperCase ? thing.toUpperCase() : thing; }

    function findAttachmentParts(struct, attachments) {
        attachments = attachments || [];
        for (var i = 0, len = struct.length, r; i < len; ++i) {
            if (Array.isArray(struct[i])) {
                findAttachmentParts(struct[i], attachments);
            } else {
                if (struct[i].disposition && ['INLINE', 'ATTACHMENT'].indexOf(toUpper(struct[i].disposition.type)) > -1) {
                    attachments.push(struct[i]);
                }
            }
        }
        return attachments;
    }

    function buildAttMessageFunction(attachment) {
        var filename = attachment.params.name;
        var encoding = attachment.encoding;

        return function (msg, seqno) {
            var prefix = '(#' + seqno + ') ';
            msg.on('body', function (stream, info) {
                const attachment_url = 'attachments';
                try {
                    if (!fs.existsSync(attachment_url)) {
                        fs.mkdirSync(attachment_url);
                    }
                } catch (err) {
                    console.error(err);
                }
                //Create a write stream so that we can stream the attachment to file;
                console.log(prefix + 'Streaming this attachment to file', filename, info);

                var writeStream = fs.createWriteStream(`${attachment_url}/${filename}`);
                writeStream.on('finish', function () {
                    console.log(prefix + 'Done writing to file %s', filename);
                });

                //stream.pipe(writeStream); this would write base64 data to the file.
                //so we decode during streaming using 
                if (toUpper(encoding) === 'BASE64') {
                    //the stream is base64 encoded, so here the stream is decode on the fly and piped to the write stream (file)
                    stream.pipe(new Base64Decode()).pipe(writeStream);

                } else {
                    //here we have none or some other decoding streamed directly to the file which renders it useless probably
                    stream.pipe(writeStream);
                }

            });
            msg.once('end', function () {
                console.log(prefix + 'Finished attachment %s', filename);
            });
        };
    }

    imap.once('ready', function () {
        imap.openBox('INBOX', true, function (err, box) {
            imap.search([['SINCE', new Date()]], function (err, results) {
                if (!results || !results.length) {
                    console.log("The server didn't find any emails matching the specified criteria")
                    imap.end(); return;
                }
                if (err) throw err;
                var f = imap.fetch(results, { //you can set amount range like '1:2' or 'results' for all results
                    bodies: '',
                    struct: true
                })
                // var f = imap.seq.fetch('1:10', {
                //     bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)'],
                //     struct: true
                // });
                f.on('message', function (msg, seqno) {
                    console.log('Message #%d', seqno);
                    var prefix = '(#' + seqno + ') ';
                    msg.on('body', function (stream, info) {
                        simpleParser(stream, async (err, parsed) => {
                            const { from, subject, textAsHtml, text, attachments, date } = parsed;
                            console.log("<===============================================START========================================================>");
                            console.log(from);
                            console.log(text);
                            console.log("<===============================================END========================================================>");
                            /* Make API call to save the data
                               Save the retrieved data into a database.
                               E.t.c
                            */
                        });
                        var buffer = '';
                        stream.on('data', function (chunk) {
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', function () {
                            // console.log(prefix + 'Parsed header: %s', Imap.parseHeader(buffer));
                        });
                    });
                    msg.once('attributes', function (attrs) {
                        var attachments = findAttachmentParts(attrs.struct);
                        console.log(prefix + 'Has attachments: %d', attachments.length);
                        if (attachments.length) {
                            for (var i = 0, len = attachments.length; i < len; ++i) {
                                var attachment = attachments[i];

                                console.log(prefix + 'Fetching attachment %s', attachment.params?.name);
                                var f = imap.fetch(attrs.uid, { //do not use imap.seq.fetch here
                                    bodies: [attachment.partID],
                                    struct: true
                                });
                                if (attachment.params?.name) {
                                    //build function to process attachment message
                                    f.on('message', buildAttMessageFunction(attachment));
                                }
                            }
                        }
                    });
                    msg.once('end', function () {
                        console.log(prefix + 'Finished email');
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
    });

    imap.once('error', function (err) {
        console.log(err);
    });

    imap.once('end', function () {
        console.log('Connection ended');
    });

    imap.connect();
}