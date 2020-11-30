const functions = require('firebase-functions');
const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');
let config = require('./env.json');


if (Object.keys(functions.config()).length){
  config = functions.config();
}

const bot = new Telegraf(config.service.telegram_key);

var urlPlayers = "https://tenis-league-admin.vercel.app/api/players";
var urlMatches = "https://tenis-league-admin.vercel.app/api/matches";


var settings = { method: "Get" };

var options = "/All \t Muestra todos los partidos de la actual liga.\n" ;
    options+= "/Today \tMuestra todos los partidos que se juegan hoy \n";
    options+=  "/Players \t Muestra los jugadores de la actual liga ";


bot.hears('hi', (ctx) => ctx.reply('Hola ! como puedo ayudarte ? las opciones son :\n' + options));

bot.launch();

bot.help(ctx => ctx.reply(options))


/**
 * 
 */
bot.command('Today', async (ctx) => {

  let res = 'Los partidos que se juegan hoy son:\n';

  await fetch(urlMatches+"?date=today", settings)
    .then(res => res.json())
    .then((json) => {

      if ( json.length > 0){

        for( var i = 0; i < json.length ; i++){ 
          res +=  "" + json[i]._player1 + " vs " + json[i]._player2 + "\n";
        }

    }

    return null;
  }) 

  
  ctx.reply(res)
})

async function getMatchesToday(){
  
}

/**
 * 
 */
bot.command('All', async (ctx) => {

  let res = 'Todos los partidos de la liga son:\n';
  await fetch(urlMatches, settings)
    .then(res => res.json())
    .then((json) => {

      if ( json.length > 0){
        for( var i = 0; i < json.length ; i++){ 
          res +=  "" +json[i]._player1 + " vs " + json[i]._player2 + "\n";
        }
      }

      return null;
  })  

  
  ctx.reply(res)
})



/**
 * 
 */
bot.command('Players', async (ctx) => {

  let res = 'Todos los jugadores de la liga son:\n';

  await fetch(urlPlayers, settings)
  .then(res => res.json())
  .then((json) => {

    if ( json.length > 0){
      for( var i = 0; i < json.length ; i++){ 
        res +=  "" +json[i]._name +"\n";
      }
    }
    return null;
  })  


  ctx.reply(res)
})


exports.bot = functions.https.onRequest((req, res) => {
  bot.handleUpdate(req.body, res);
})




