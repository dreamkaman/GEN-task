const express = require('express');

const { getBitcoinRate } = require('../thirdPartAPI');

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const bitcoinObject = await getBitcoinRate();

        const { UAH } = bitcoinObject.data[0].quote;

        response.json(UAH.price);
    } catch (error) {
        error => console.log(error.message);
    }

});


module.exports = router;