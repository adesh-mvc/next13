// https://ardianbudi.medium.com/how-to-read-email-download-attachment-and-set-it-to-read-in-nestjs-with-node-imap-999e3e10570c

// Define font files
var fonts = {
    Roboto: {
        normal: 'public/assets/fonts/Roboto-Regular.ttf',
        bold: 'public/assets/fonts/Roboto-Medium.ttf',
        italics: 'public/assets/fonts/Roboto-Italic.ttf',
        bolditalics: 'public/assets/fonts/Roboto-MediumItalic.ttf'
    },
    Fontello: {
        normal: 'public/assets/fonts/fontello/fontello.ttf',
        bold: 'public/assets/fonts/fontello/fontello.ttf',
        italics: 'public/assets/fonts/fontello/fontello.ttf',
        bolditalics: 'public/assets/fonts/fontello/fontello.ttf'
    },
    Courier: {
        normal: 'public/assets/fonts/Courier/Courier-Regular.ttf',
        bold: 'public/assets/fonts/Courier/Courier-BOLD.ttf',
        italics: 'public/assets/fonts/Courier/COURIER2.ttf',
        bolditalics: 'public/assets/fonts/Courier/CarrierBoldOblique.ttf',
    },
    // Helvetica: {
    //     normal: 'Helvetica',
    //     bold: 'Helvetica-Bold',
    //     italics: 'Helvetica-Oblique',
    //     bolditalics: 'Helvetica-BoldOblique'
    // },
    Times: {
        normal: 'public/assets/fonts/times/Times-Roman.ttf',
        bold: 'public/assets/fonts/times/Times-Bold.ttf',
        italics: 'public/assets/fonts/times/Times-Italic.ttf',
        bolditalics: 'public/assets/fonts/times/Times-BoldItalic.ttf'
    },
    // Symbol: {
    //     normal: 'Symbol'
    // },
    // ZapfDingbats: {
    //     normal: 'ZapfDingbats'
    // }

};
var Imap = require('node-imap'),
    inspect = require('util').inspect;
var fs = require('fs');
var base64 = require('base64-stream');
const { simpleParser } = require('mailparser');
// const { writeFileSync } = require("fs");

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
// var fs = require('fs');
var htmlToPdfmake = require("html-to-pdfmake");
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var { window } = new JSDOM("", { runScripts: "outside-only" });
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

export const FileWrite = () => {
    const path = "pages/api/purchase_history.json";

    const purchase_hist = { "name": "John Smith", "purchase_id": "20223", "price": "$23.95", "shipping_address": { "name": "Jane Smith", "address": "123 Maple Street", "city": "Pretendville", "state": "NY", "zip": 10005 }, "billing_address": { "name": "John Smith", "address": "123 Maple Street", "city": "Pretendville", "state": "NY", "zip": 10005 }, "is_reverse_charge_applied": false, "warehouse": [{ "warehouse_name": "ABC Warehouse", "warehouse_id": 143 }] };

    try {
        fs.writeFileSync(path, JSON.stringify(purchase_hist, null, 2), "utf8");
        console.log("Data successfully saved");
    } catch (error) {
        console.log("An error has occurred ", error);
    }
}
export const UpdateFile = () => {
    const path = "pages/api/purchase_history.json";
    // Read the contents of the JSON file
    const data = fs.readFileSync(path);
    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(data);
    console.log("Before Adding data", JSON.stringify(jsonData, null, 4));
    // Modify the JavaScript object by adding new data
    jsonData.users.push({
        name: "Adesh",
        email: "james.den@example.com"
    });
    // Convert the JavaScript object back into a JSON string
    const jsonString = JSON.stringify(jsonData);

    fs.writeFileSync(path, jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
    const update_data = fs.readFileSync(path);
    const updated_jsonData = JSON.parse(update_data);
    console.log("After Adding data", JSON.stringify(updated_jsonData, null, 4));
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
                                    // console.log("emails_data:", emails_data.content.html)
                                    email_array.push(emails_data);

                                    let dd = {
                                        pageSize: "A4",
                                        pageOrientation: "portrait",
                                        content: [
                                            emails_data.content.html
                                        ],
                                    }
                                    let doc = printer.createPdfKitDocument(dd);
                                    const filepath = fs.createWriteStream(`pdf/${dataheader.subject[0]}-adesh.pdf`);
                                    doc.pipe(filepath);
                                    doc.end()

                                }
                                else
                                    console.log(prefix + 'Body [%s] Finished', inspect(info.which));
                            });
                        });

                        //mark attributes email as read
                        msg.once('attributes', function (attrs) {
                            let uid = attrs.uid;
                            /* imap.addFlags(uid, ['\\Seen'], function (err) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log("Done, marked email as read!")
                                }
                            }); */
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
    // FileWrite();
    UpdateFile();
    return new Promise((resolve, reject) => {
        imap.once('close', async function () { //maybe, someone asking whether to use end or close and the author of the module says that close is always emitted so you should use that.
            resolve(email_array);
        });
    })

    res.status(200).json({ name: 'John Doe' })
}