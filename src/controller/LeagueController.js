const { Dator }  =   require("./Dator.js");
const { League } =   require("../models/league.js");
const { Match  } =   require("../models/player.js");
const { Player } =   require("../models/match.js");

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

     throw new Error("There is no league for that year.");
    }


    getPlayer(id){

        this.leagues.forEach( (league) => {
            
            league.players.forEach((player)=> {
                if (player.id === id ){
                    return player;
                }
            })

        });
        throw new Error("That player does not exists.");
    }


    addPlayer(name, email, tlf, level, age, leagueId){

        if ( Player.validAge(age) && Player.validLevel(level) && Player.isAtlf(tlf)){
            var newPlayer = new Player(name, email, tlf, level, age);

            this.leagues.forEach( (league) => {
                if ( league.id == leagueId){
                    league.addPlayer(newPlayer);
                    updateDB();

                    return newPlayer.id;
                }
            })
        } 

  
        throw new Error("Wrong info.");
        
    }


    updatePlayer(player){
 
        this.leagues.forEach( (league) => {
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
        
        if ( checkMatchData(date, played, result, player1, player2) ) {

            var newMatch = new Match(date, played, result, player1, player2);

            this.leagues.forEach((league) => {
                if ( leagueId  === league.id){
                    league.addMatch(newMatch);
                    
                    this.updateDB();
                    return match.id;
                }
            })

            throw new Error("League does not exists");
        }else {
            throw new Error("Wrong information, one of the players does not play any league");
        }

    }

    getMatch(id){
        this.leagues.forEach( (league) => {
            
            league.matches.forEach((match)=> {
                if (match.id === id ){
                    return match;
                }
            })

        });
        throw new Error("That match does not exists.");
    }


    updateMatch(match){
         
        this.leagues.forEach( (league) => {
            league.matches.forEach((myMatch)=> {
                if (myMatch.id  ===  match.id){
                    // TODO test the equal operator
                    myMatch = match;

                    updateDB();
                    return myMatch.id;
                }
            })
        })    
     
        throw new Error("Player not playing");
    }


    updateDB(){

        const jsonString = JSON.stringify(this.leagues);
        //TODO change this to its name
        fs.writeFile('../Data/newLeague.json', jsonString, err => {
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
            if (this.leagues[0].isPlayerInTheLeague(player1.id) ){
                isPlayingPlayer1 = true;
                break;
            }
            
        }

        for (var i = 0; i < this.leagues.length ; i++){
            if (this.leagues[0].isPlayerInTheLeague(player2.id) ){
                isPlayingPlayer1 = true;
                break;
            }
            
        }

        return isPlayingPlayer2 && isPlayingPlayer1 ? true: false

    }
    
}


module.exports = { LeagueController };