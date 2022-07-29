const express = require('express');

const { getBitcoinRate } = require('../thirdPartAPI');

const { getEmails } = require('../fileoperations');

const pathToFile = require('../database/emails');

const { sendEmailNodemailer } = require('../nodemailer');

const { sendEmailSendgrid } = require('../sendgrid');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const bitcoinObject = await getBitcoinRate();

        const { UAH } = bitcoinObject.data[0].quote;

        const emails = await getEmails(pathToFile);
        if (!emails.length) {
            res.json('There are no e-mails in the database');
        }
        emails.forEach(({ email }) => {
            // sendEmailNodemailer(email, UAH.price);
            sendEmailSendgrid(email, UAH.price);
        });

        res.json('Emails was sent');

    } catch (error) {
        console.log(error.message);
        res.json('Something went wrong');
    }
});

module.exports = router;