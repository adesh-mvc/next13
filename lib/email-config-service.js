const { model } = require("mongoose");

const EmailReader = {
    imap: {
        user: '',
        password: '',
        host: 'imap.gmail.com',
        port: 993,
        authTimeout: 10000,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
    },
};
const EmailSend = {

};
module.exports = { EmailReader, EmailSend };