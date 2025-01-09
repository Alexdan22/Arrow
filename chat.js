const axios = require('axios');

const TELEGRAM_BOT_TOKEN = '7834723053:AAE3oqsuPQyo5rqTOsHL_pwnF2zyN-Qv1GI';

async function getChatId() {
    try {
        const response = await axios.get(`https://api.telegram.org/bot7834723053:AAE3oqsuPQyo5rqTOsHL_pwnF2zyN-Qv1GI/getUpdates`);
        
        const chatId = response.data.result[2].channel_post.chat.id;

        // chatId.forEach(function(element){
        //     console.log(element);
        // });

        console.log('Chat ID:', chatId);
    } catch (error) {
        console.error('Error fetching chat ID:' + error);
    }
}

getChatId();
