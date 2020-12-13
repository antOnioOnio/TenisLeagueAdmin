const { Dator }  =   require("./Dator.js");
const { League } =   require("../models/league.js");
const { Player  } =   require("../models/player.js");
const { Match } =   require("../models/match.js");

const fs = require('fs');
var fakeData = require("../Data/data.json");
const league = require("../models/league.js");

class LeagueController extends Dator {

    constructor(){
        super();
        
        this.leagues = new Array();

        Object.entries(fakeData).forEach(([key, value]) => {

            
            var league = new League();

            league.fromJson(value);

            this.leagues.push(league);

        
        })
    }

    newLeague(year){
        var league = new League();
        league.year = year;

        this.leagues.push(league);
        this.updateDB();
    }


    getLeagues(){
       return this.leagues;
    }


    getLeague(year){
       console.log("getLeague called with the year " +year );
    
       for (var i = 0 ; i < this.leagues.length ; i++){
           console.log("Año--> " +this.leagues[i].year);
            if ( year == this.leagues[i].year){
                return this.leagues[i];
            }
       }

      return [];
    }

    getPlayers(year){

        for (var i = 0 ; i < this.leagues.length ; i++){
             if ( year == this.leagues[i].year){
                 return this.leagues[i].players;
             }
        }
        return [];
    }

    getPlayer(id){
    
        for (var i = 0 ; i < this.leagues.length ; i++){
            for ( var j = 0; j < this.leagues[i].players.length; j++){
                if (this.leagues[i].players[j].id  === id){
                    return this.leagues[i].players[j];
                }
            }
       }

        return null;
    }


    addPlayer(name, email, tlf, level, age, leagueId){
        

        if ( Player.validAge(age) && Player.validLevel(level) && Player.isAtlf(tlf)){
            console.log("is valid");

            for (var i = 0 ; i < this.leagues.length ; i++){
                
                if ( this.leagues[i].id === leagueId){
                 
                    var newPlayer = new Player(name, email, tlf, level, age);
                    this.leagues[i].addPlayer(newPlayer);
                    this.updateDB();

                    return newPlayer.id;
                }
            }
  
        }

        return null;

        
    }

    updatePlayer(player){
 
        this.leagues.forEach( (league) => {
            league.players.forEach((myPlayer)=> {
                if (myPlayer.id  ===  player.id){
                    // TODO test the equal operator
                    myPlayer = player;

                    this.updateDB();
                    return myPlayer.id;
                }
            })
        })    
     
        throw new Error("Player not playing");
       
    }


    addMatch(date, played, result, player1, player2, leagueId){

        if ( this.checkMatchData(date, played, result, player1, player2) ) {
            
            var newMatch = new Match(date, played, result, player1, player2);

            for (var i = 0 ; i < this.leagues.length ; i++){

                if ( this.leagues[i].id === leagueId){
                    
                    this.leagues[i].addMatch(newMatch);
                    this.updateDB();
                    
                    return newMatch.id;
                }
            }

            return null;
        }else {
            return null;
        }

    }

    getMatches(year){

        for (var i = 0 ; i < this.leagues.length ; i++){
             if ( year == this.leagues[i].year){
                 return this.leagues[i].matches;
             }
        }
        return null;
    }

    getMatch(id){

        for (var i = 0 ; i < this.leagues.length ; i++){
            for ( var j = 0; j < this.leagues[i].matches.length; j++){
                if (this.leagues[i].matches[j].id  === id){
                    return this.leagues[i].matches[j];
                }
            }
       }
    
    return null;
    }


    updateMatch(match){
         
        this.leagues.forEach( (league) => {
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

        const jsonString = JSON.stringify(this.leagues, null, 2);
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


        for (var i = 0; i < this.leagues.length ; i++){
            
            if (this.leagues[i].isPlayerInTheLeague(player1) ){
                isPlayingPlayer1 = true;
                break;
            }
            
        }

        for (var i = 0; i < this.leagues.length ; i++){
            if (this.leagues[i].isPlayerInTheLeague(player2) ){
       
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