const nodemailer = require('nodemailer');

require('dotenv').config();

const { UKRNET_SENDER_PASSWORD } = process.env;

const nodemailerConfig = {
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
        user: 'rva24@ukr.net',
        pass: UKRNET_SENDER_PASSWORD
    }
}

const transporter = nodemailer.createTransport(nodemailerConfig);


const sendEmailNodemailer = (subscriberEmail, bitcoinRate) => {
    const mail = {
        to: subscriberEmail,
        from: 'rva24@ukr.net',
        subject: 'New bitcoin currency exchange rate',
        html: `<p>Hello!<br>We are glad to inform you a new Bitcoin rate is <b>${bitcoinRate} UAH</b>.<br>Sent by Nodemailer.</p>`
    };

    transporter.sendMail(mail);
};

module.exports = {
    sendEmailNodemailer
}

