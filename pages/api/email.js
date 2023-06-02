var imaps = require('imap-simple');


const { simpleParser } = require('mailparser');



var config = {
    imap: {
        user: 'ictpamis@gmail.com',
        password: 'zisfamdchzibfgcf',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
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
            var searchCriteria = [
                'UNSEEN'
            ];

            var fetchOptions = {
                bodies: ['HEADER', 'TEXT'],
                markSeen: false
            };

            return connection.search(searchCriteria, fetchOptions).then(function (results) {
                var subjects = results.map(function (res) {
                    return res.parts.filter(function (part) {
                        return part.which === 'HEADER';
                    })[0].body.subject[0];
                });

                console.log(subjects);
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