const TelegramBot = require('node-telegram-bot-api');


const token = '6922552106:AAE2crJErwm6ufwT6C3U2AbDPqsMCZIVUxU';


const bot = new TelegramBot(token, { polling: true });


bot.on("message", (msg) => {
    const chatId = msg.chat.id
    if(msg.text === "/start"){
        bot.sendMessage(chatId, "Salom " + msg.chat.first_name + "bizning botimizga xush kelibsiz")
    }else{
        bot.sendMessage(chatId, "Xato ma'lumot")
    }
})