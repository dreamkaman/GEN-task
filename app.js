const express = require('express');

const cors = require('cors');

const bp = require('body-parser')

require('dotenv').config();

const { SERVER_PORT = 4000 } = process.env;

const { getBitcoinRate } = require('./thirdPartAPI');

const emails = require('./database/emails');

const bitcoinRateRouter = require('./routs/bitcoinRate');

const emailSubscribeRouter = require('./routs/emailSubscribe');

const emailSendRouter = require('./routs/emailSend');

const app = express();

//middlewares
app.use(cors());

app.use(bp.json());

app.use(bp.urlencoded({ extended: true }));

app.use('/api/rate', bitcoinRateRouter);

app.use('/api/subscribe', emailSubscribeRouter);

app.use('/api/sendemail', emailSendRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not found'
    });
});

app.listen(SERVER_PORT, () => console.log(`Server run on port ${SERVER_PORT}`));