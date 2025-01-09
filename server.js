const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Your Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = '7834723053:AAE3oqsuPQyo5rqTOsHL_pwnF2zyN-Qv1GI';
const TELEGRAM_CHAT_ID = '7717508335';

// Endpoint to receive TradingView webhooks
app.post('/webhook', async (req, res) => {
    try {
        const alertMessage = req.body.message;
        console.log(alertMessage);
        

        // Send the message to Telegram
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: alertMessage,
        });

        res.status(200).send('Alert received and sent to Telegram');
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
