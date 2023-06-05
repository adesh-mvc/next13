var Imap = require('node-imap'),

    inspect = require('util').inspect;
// https://dev.to/mesadhan/manage-your-re-mail-using-imap-2p18
// https://dev.to/akinmyde/reading-email-data-with-node-js-bjf
// https://ardianbudi.medium.com/how-to-read-email-download-attachment-and-set-it-to-read-in-nestjs-with-node-imap-999e3e10570c
export default function EmailTable() {

    var imap = new Imap({
        user: 'ictpamis@gmail.com',
        password: 'zisfamdchzibfgcf',
        host: 'imap.gmail.com',
        port: 993,
        tls: true
    });
    function openInbox(cb) {
        imap.openBox('INBOX', true, cb);
    }

    imap.once('ready', function () {
        openInbox(function (err, box) {
            if (err) throw err;
            imap.search([['SINCE', 'JUNE 01, 2023']], function (err, results) {
                if (err) throw err;
                var f = imap.fetch(results, { bodies: '' });
                const simpleParser = require('mailparser').simpleParser;
                // const MailParser = require('mailparser').MailParser;
                // let parser = new MailParser();

                // const MailParser = require('mailparser').MailParser;
                // let parser = new MailParser();
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
                            // const emailHeader = inspect(Imap.parseHeader(buffer));
                            // const { received } = emailHeader;
                            // console.log(prefix + 'Parsed header: %s', received);

                        });
                        //     console.log(prefix + 'Body', info, stream);
                        //     // stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
                        // });
                        // msg.once('attributes', function (attrs) {
                        //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                        // });
                        // msg.once('end', function () {
                        //     console.log(prefix + 'Finished');
                    });
                });
                f.once('error', function (err) {
                    console.log('Fetch error: ' + err);
                });
                f.once('end', function () {
                    console.log('Done fetching all messages!');
                    imap.end();
                });
            });
        });
    });

    imap.once('error', function (err) {
        console.log(err);
    });

    imap.once('end', function () {
        console.log('Connection ended');
    });

    imap.connect();
    return (<>email</>)
}