const config = require('./config');
const TelegramBot = require('node-telegram-bot-api');
const wordList = require('./words');



const token = config.token;
const chatId = config.chatId;

const bot = new TelegramBot(token, { polling: true });

let messageCount = 0;

bot.on('message', (msg) => {
  if (msg.chat.id == chatId) {
    messageCount++;
    //Here you can specify the desired interval of messages
    if (messageCount == 0) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const randomWord = wordList[randomIndex];
      const reply = `${randomWord}`;
      bot.sendMessage(chatId, reply);
      messageCount = 0;
    }
  }
});
