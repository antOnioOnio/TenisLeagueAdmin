const functions = require('firebase-functions');
const axios = require('axios')
const { Telegraf } = require('telegraf');


let config = require('./env.json');

if (Object.keys(functions.config()).length){
  config = functions.config();
}

const bot = new Telegraf(config.service.telegram_key);



bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.launch();


// Posibilites
bot.help(ctx => ctx.reply('/All \t Muestra todos los partidos de la actual liga.\n/Today \tMuestra todos los partidos que se juegan hoy \n/Players \t Muestra los jugadores de la actual liga' ))


/**
 * 
 */
bot.command('Today', async (ctx) => {

  let res = 'Los partidos que se juegan hoy son:\n'
  
  const response = await axios.get(config.service.api_today)

  if ( response.data.length > 0){
      for( var i = 0; i < response.data.length ; i++){ 
        res +=  "" +response.data[i]._player1 + " vs " + response.data[i]._player2 + "\n";
      }

  }
  ctx.reply(res)
})

/**
 * 
 */
bot.command('All', async (ctx) => {

  let res = 'Todos los partidos de la liga son:\n'
  
  const response = await axios.get(config.service.api_matches)

  if ( response.data.length > 0){
      for( var i = 0; i < response.data.length ; i++){ 
        res +=  "" +response.data[i]._player1 + " vs " + response.data[i]._player2 + "\n";
      }
  }
  ctx.reply(res)
})

/**
 * 
 */
bot.command('Players', async (ctx) => {

  let res = 'Todos los jugadores de la liga son:\n'
  
  const response = await axios.get(config.service.api_players)

  if ( response.data.length > 0){
      for( var i = 0; i < response.data.length ; i++){ 
        res +=  "" +response.data[i]._name + "\n";
      }
  }
  ctx.reply(res)
})


exports.bot = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res);
})




