const express = require('express');

const emailsDatabasePath = require('../database/emails.js');

const { addEmail } = require('../fileoperations');

const router = express.Router();

router.post('/', (req, res, next) => {

    const { email } = req.body;

    addEmail(emailsDatabasePath, email)
        .then((result) => {
            if (result.message) {
                throw new Error(result.message);
            };

            res.json(result);
        })
        .catch((error) => {
            res.status(409).json(error.message);
        });

});

module.exports = router;
