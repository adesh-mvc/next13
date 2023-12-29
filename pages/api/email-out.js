import { S3Client, GetObjectCommand, PutObjectCommand, ListObjectsV2Command, DeleteObjectC, GetObjectCommandommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const nodemailer = require('nodemailer');
export const s3Client = new S3Client({
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
    }
});
export const transporter = async (username, password) => {
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, //when secure:false use port: 587
        secure: true,
        auth: {
            user: username,
            pass: password
        }
    });
}
export const sendEmailFunc = async (username, password, s3obj, htmlTemplate, imageMeta) => {
    const trans = await transporter(username, password);
    const info = await trans.sendMail({
        from: '"Fred Foo 👻" <adesh.mvc@gmail.com>', // sender address
        to: "adeshmojo914@gmail.com, adesh.mvc@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: htmlTemplate, // html body
        attachments: [
            {   // use URL as an attachment
                filename: 'license.pdf',
                path: 'pdf/4 self-taught devs share their top tips for new coders-adesh.pdf'
            },
            imageMeta,
            {   // use URL as an attachment
                filename: 'prakash.pdf',
                path: s3obj
            },
            {   // encoded string as an attachment
                filename: 'text1.txt',
                content: 'aGVsbG8gd29ybGQh',
                encoding: 'base64'
            },
            {   // data uri as an attachment
                path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            },

        ]
    });

    console.log("Message sent: %s", info.messageId);
}
async function listObject() {
    const command = new ListObjectsV2Command({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `/`
    });
    const res = await s3Client.send(command);
    return res;
}
async function getObjectUrl(key) {
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    })
    const url = getSignedUrl(s3Client, command);
    return url;
}
// create transporter object with smtp server details
/* const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, //when secure:false use port: 587
    secure: true,
    auth: {
        user: 'adesh.mvc@gmail.com',
        pass: 'vbpjwckdnwvkxjyl'
    }
}); */

// async..await is not allowed in global scope, must use a wrapper
async function main(username, s3obj) {

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <adesh.mvc@gmail.com>', // sender address
        to: "adeshmojo914@gmail.com, adesh.mvc@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        // text: "Hello world?", // plain text body
        html: `<div class="notices tip">
        <p>Check out <a href="https://emailengine.app/?utm_source=nodemailer&amp;utm_campaign=nodemailer&amp;utm_medium=tip-link" class="highlight">EmailEngine</a> – a self-hosted email gateway that allows making REST requests against IMAP and SMTP servers. EmailEngine also sends webhooks whenever something changes on the registered accounts.<br>
        <br>
        Using the email accounts registered with EmailEngine, you can receive and <a href="https://emailengine.app/sending-emails?utm_source=nodemailer&amp;utm_campaign=nodemailer&amp;utm_medium=header-link" class="highlight">send emails</a>. EmailEngine supports OAuth2, delayed sends, opens and clicks tracking, bounce detection, etc. All on top of regular email accounts without an external MTA service.</p>
        </div>
        <h1>Example HTML Message Body ${username}</h1>`, // html body
        attachments: [
            {   // use URL as an attachment
                filename: 'license.pdf',
                path: 'pdf/4 self-taught devs share their top tips for new coders-adesh.pdf'
            },
            {   // use URL as an attachment
                filename: 'prakash.pdf',
                path: s3obj
            },
            {   // encoded string as an attachment
                filename: 'text1.txt',
                content: 'aGVsbG8gd29ybGQh',
                encoding: 'base64'
            },
            {   // data uri as an attachment
                path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            },

        ]
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}
export default async function handler(req, res) {
    // send email
    // transporter.sendMail({
    //     from: 'adesh.mvc@gmail.com',
    //     to: 'adeshmojo914@gmail.com,adesh.mvc@gmail.com',
    //     subject: 'Nodemailer is a module for Node.js applications to allow easy ',
    //     html: '<h1>Example HTML Message Body</h1>'
    // });
    // async function sendEmail({ from, to, subject, html }) {
    //     const transporter = nodemailer.createTransport(config.smtpOptions);
    //     await transporter.sendMail({ from, to, subject, html });
    // }

    const user = "Adesh kumar"
    const getobject = await getObjectUrl('hospital/6410b3138572d8a327b5d6e5/2023/10/image-1696142997809.pdf');
    // main(user, getobject).catch(console.error);
    const template = `<div class="notices tip">
    <p>Check out <a href="https://emailengine.app/?utm_source=nodemailer&amp;utm_campaign=nodemailer&amp;utm_medium=tip-link" class="highlight">EmailEngine</a> – a self-hosted email gateway that allows making REST requests against IMAP and SMTP servers. EmailEngine also sends webhooks whenever something changes on the registered accounts.<br>
    <br>
    Using the email accounts registered with EmailEngine, you can receive and <a href="https://emailengine.app/sending-emails?utm_source=nodemailer&amp;utm_campaign=nodemailer&amp;utm_medium=header-link" class="highlight">send emails</a>. EmailEngine supports OAuth2, delayed sends, opens and clicks tracking, bounce detection, etc. All on top of regular email accounts without an external MTA service.</p>
    </div>
    <h1>Example HTML Message Body ${user}</h1>`;
    let imageData = { filename: `s3-object.pdf`, path: getobject }
    // sendEmailFunc("adesh.mvc@gmail.com", '---', getobject, template, imageData);
    res.status(200).json({ name: 'John Doe' })
}