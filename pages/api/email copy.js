var imaps = require('imap-simple');
import _ from 'lodash';

const { simpleParser } = require('mailparser');
//https://github.com/chadxz/imap-simple
// https://www.blazemeter.com/blog/import-lodash-libraries

var config = {
    imap: {
        user: 'ictpamis@gmail.com',
        password: 'zisfamdchzibfgcf',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        tlsOptions: {
            rejectUnauthorized: false
        },
        authTimeout: 3000,
        // debug: console.log
    }
};
// export const getEmails = () => {

//     const imap = new Imap({
//         user: 'ictpamis@gmail.com',
//         password: 'zisfamdchzibfgcf',
//         host: 'imap.gmail.com',
//         port: 993,
//         // tls: true,
//         tlsOptions: { rejectUnauthorized: false }
//     });
// }



export default function handler(req, res) {
    imaps.connect(config).then(function (connection) {

        return connection.openBox('INBOX').then(function () {
            // var searchCriteria = [
            //     'UNSEEN'
            // ];

            var fetchOptions = {
                bodies: ['HEADER', 'TEXT'],
                markSeen: false
            };
            // Fetch emails from the last 12hrs
            var delay = 12 * 3600 * 1000;
            var yesterday = new Date();
            yesterday.setTime(Date.now() - delay);
            yesterday = yesterday.toISOString();
            var searchCriteria = ['UNSEEN', ['SINCE', yesterday]];
            // var fetchOptions = { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)'], struct: true };
            return connection.search(searchCriteria, fetchOptions).then(function (results) {
                // var subjects = results.map(function (res) {
                //     return res.parts.filter(function (part) {
                //         console.log(part)
                //         return part.which === 'HEADER';
                //     })[0].body.subject[0];
                // });

                // console.log(subjects);


                results.forEach(function (item) {
                    var all = _.find(item.parts, { "which": "TEXT" })
                    var id = item.attributes.uid;
                    var idHeader = "Imap-Id: " + id + "\r\n";
                    // console.log(idHeader)
                    simpleParser(idHeader + all.body, (err, mail) => {
                        // access to the whole mail object
                        console.log(mail)
                        console.log(mail)
                    });
                });
                // =>
                //   [ 'Hey Chad, long time no see!',
                //     'Your amazon.com monthly statement',
                //     'Hacker Newsletter Issue #445' ]
            });
        });
    });
    console.log("custom email")
    res.status(200).json({ name: 'John Doe' })
}