const functions = require('firebase-functions');
const { Telegraf } = require('telegraf');


let config = require('./env.json');

if (Object.keys(functions.config()).length){
  config = functions.config();
}

console.log(config.service.telegram_key);

const bot = new Telegraf(config.service.telegram_key);
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

exports.bot = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res);
})

