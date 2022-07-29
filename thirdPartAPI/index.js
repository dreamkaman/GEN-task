const axios = require('axios');

require('dotenv').config();

const { BITCOIN_API_KEY } = process.env;

const getBitcoinRate = async () => {
    let response = null;

    try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=UAH', {
            headers: {
                'X-CMC_PRO_API_KEY': BITCOIN_API_KEY,
            },
        });
    } catch (error) {
        response = null;
        // error
        console.log(error);
    }
    if (response) {
        // success
        const result = response.data;

        return result;
    }

};

module.exports = {
    getBitcoinRate
}