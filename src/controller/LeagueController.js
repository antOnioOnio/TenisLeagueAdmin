const { Dator }  =   require("./Dator.js");
const { League } =   require("../models/league.js");
const { Player  } =   require("../models/player.js");
const { Match } =   require("../models/match.js");
let config = require('../../env.json');
const fs = require('fs');
//var dataleagues = require("../Data/data.json");

const league = require("../models/league.js");


const mongoose = require("mongoose");
const url = process.env.MONGO_URL || config.service.url;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log("db connected"))
    .catch(err => console.log(err));

var conn = mongoose.connection;

var leagues

class LeagueController extends Dator {

    constructor(){
        super();
        console.log("is declared");
        this.init();
        
    }

    async init(){

        conn.once('open', function () {

            conn.db.collection("leagues", function(err, collection){
            
                collection.find({}).toArray(function(err, data){
                
                    leagues = data;
                
                })
            });
        });    
    }

    newLeague(year){
        var league = new League();
        league.year = year;

        this.leagues.push(league);
        this.updateDB();
    }


    getLeagues(){
        console.log("getLeagues called "); 

    //    return this.leagues;
        return leagues;
    }


    getLeague(year){
        console.log("getLeague called with " + year); 
       for (var i = 0 ; i < leagues.length ; i++){
            if ( year == leagues[i].year){
                return leagues[i];
            }
       }

      return [];
    }

    getPlayers(year){
        console.log("getPlayers called with " + year);
        for (var i = 0 ; i < leagues.length ; i++){
             if ( year == leagues[i].year){
                 return leagues[i].players;
             }
        }
        return [];
    }

    getPlayer(id){
        console.log("getPlayer called with " + id);
        for (var i = 0 ; i < leagues.length ; i++){
            for ( var j = 0; j < leagues[i].players.length; j++){
                if (leagues[i].players[j].id  === id){
                    return leagues[i].players[j];
                }
            }
       }

        return null;
    }


    addPlayer(name, email, tlf, level, age, leagueId){
        console.log("addPlayer called with : name: " +name+ " email: " + 
                    email + " tlf: " + tlf + " level:  "+ level+ " age: " 
            + age+ " league ID" + leagueId  );

        

            for (var i = 0 ; i < leagues.length ; i++){
                
                if ( leagues[i].id === leagueId){
                 
                    var newPlayer = new Player(name, email, tlf, level, age);
                    if ( newPlayer.validAge(age) && newPlayer.validLevel(level) && newPlayer.isAtlf(tlf)){
                    
                        leagues[i].addPlayer(newPlayer);
                        this.updateDB();
                    }

                    return newPlayer.id;
                }
            

  
        }

        return null;

        
    }

    updatePlayer(player){
        console.log("updatePlayer called with " + player);
 
        leagues.forEach( (league) => {
            league.players.forEach((myPlayer)=> {
                if (myPlayer.id  ===  player.id){
                    // TODO test the equal operator
                    myPlayer = player;

                    updateDB();
                    return myPlayer.id;
                }
            })
        })    
     
        throw new Error("Player not playing");
       
    }


    addMatch(date, played, result, player1, player2, leagueId){
        console.log("addMatch called with : date: " +date+ " played: " + 
                    played + " result: " + result + " player1:  "+ player1+ " player2: " 
                    + player2+ " league ID" + leagueId  );
       
        if ( this.checkMatchData(date, played, result, player1, player2) ) {
            
            var newMatch = new Match(date, played, result, player1, player2);

            for (var i = 0 ; i < leagues.length ; i++){

                if ( leagues[i].id === leagueId){
                    
                    leagues[i].addMatch(newMatch);
                    //this.updateDB();
                    
                    return newMatch.id;
                }
            }

            return null;
        }else {
            return null;
        }

    }

    getMatches(year){
        console.log("getMatches called for : "+year );
        for (var i = 0 ; i < leagues.length ; i++){
             if ( year == leagues[i].year){
                 return leagues[i].matches;
             }
        }
        return null;
    }

    getMatch(id){
        console.log("getMatch called with : "+id );
        for (var i = 0 ; i < leagues.length ; i++){
            for ( var j = 0; j < leagues[i].matches.length; j++){
                if (leagues[i].matches[j].id  === id){
                    return leagues[i].matches[j];
                }
            }
       }
    
    return null;
    }


    updateMatch(match){
        console.log("updatedMatch called with : "+match );
        leagues.forEach( (league) => {
            league.matches.forEach((myMatch)=> {
                if (myMatch.id  ===  match.id){
                    // TODO test the equal operator
                    myMatch = match;

                    this.updateDB();
                    return myMatch.id;
                }
            })
        })    
     
        throw new Error("Player not playing");
    }


    updateDB(){

        const jsonString = JSON.stringify(leagues, null, 2);
        //TODO change this to its name

        fs.writeFileSync('newLeague.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }

    checkMatchData(date, played, result, player1, player2){

        var isPlayingPlayer1 = new Boolean(false);
        var isPlayingPlayer2 = new Boolean(false);


        for (var i = 0; i < leagues.length ; i++){
            
            if (leagues[i].isPlayerInTheLeague(player1) ){
                isPlayingPlayer1 = true;
                break;
            }
            
        }

        for (var i = 0; i < leagues.length ; i++){
            if (leagues[i].isPlayerInTheLeague(player2) ){
       
                isPlayingPlayer2 = true;
                break;
            }
            
        }


        if ( isPlayingPlayer1== true && isPlayingPlayer2 == true){
            return true;
        }else {
            return false;
        }

    }
    
}


module.exports = { LeagueController };