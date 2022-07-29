const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmailSendgrid = async (subscriberEmail, bitcoinRate) => {
    try {
        const mail = {
            to: subscriberEmail,
            from: 'rva24@ukr.net',
            subject: 'New bitcoin currency exchange rate',
            html: `<p>Hello!<br>We are glad to inform you a new Bitcoin rate is <b>${bitcoinRate} UAH</b>.<br>Sent by Sendgrid.</p>`
        }

        await sgMail.send(mail);

        console.log('Email sent successfully!');

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = {
    sendEmailSendgrid
}
