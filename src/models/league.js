
const Match = require('./match.js');
const Player = require ('./player.js');

const enumLevels = ["PRINCIPIANTE" , "MEDIO","AVANZADO","PRO"];

class League{

    constructor(){
        this._id = '_' + Math.random().toString(36).substr(2, 9);
        this._matches = new Array();
        this._players = new Array();
    }


    get id(){return this._id;}
    get year(){return this._year;}
    get level(){return this._level;}
    get matches(){return this._matches;}
    get players(){return this._players;}


    set id(id){this._id = id;}

    set year(year){
        if (year > 0){
            this._year = year;
        }else {
            throw new Error("Año no válido");
        }

    }

    set level(level){
        var isGoodLevel = false;
        enumLevels.forEach(element => {
            if(level == element){
                isGoodLevel = true;
            }
            
        });
        if(isGoodLevel){
            this._level = level;
        }
    }

    set matches(matches){this._matches = matches;}


    addMatch(match){
        // this._matches.forEach(element =>{
        //     if(element.id == match.id){
        //         throw new Error("Partido ya existente");
        //     }
        // })

        this._matches.push(match);
    }

    addPlayer(player){

        // this._players.forEach(element =>{
        //     if(element.id == player.id){
        //         throw new Error("Partido ya existente");
        //     }
        // })

        this._players.push(player);
    }


    deletePlayer(id){
        for( var i = 0; i < _players.length; i++){ 
    
            if ( _players[i].id === id) { 
                arr.splice(i, 1);
                
                return true;
            }
        
        }

        return false;
    }


    deleteMatch(id){
        for( var i = 0; i < this._matches.length; i++){ 
    
            if ( this._matches[i].id === id) { 
        
                this._matches.splice(i, 1);
                return true; 
            }
        
        }
        return false;
    }

    getMatchesOfPlayer(name){

        console.log("getMatchesOfPlayer called")
        var matchesOfPlayer = new Array();

        this._matches.forEach(element =>{
            console.log("player 1-->" + element.player1 );
            console.log("player 2-->" + element.player2 );
            if(element.player1 == name || element.player2 == name){
        
                matchesOfPlayer.push(element);
            }
        })
        if (matchesOfPlayer.length > 0){
            return matchesOfPlayer;
        }
    }


    isPlayerInTheLeague(playerName){
        console.log("isPlayerInTheLeague called");
        for( var i = 0; i < this._players.length; i++){ 
            console.log("PLAYER VISITED--> " + this._players[i].name );
            if ( this._players[i].name === playerName) { 
                return true;
            }
        
        }
        return false;
    }


    fromJson(json){
        json.forEach((item) => {
            this._year = item.year;
            this._level = item.level;

            item.matches.forEach((match)=> {
                var new_match = new Match(
                    match.date,
                    match.played,
                    match.result,
                    match.player1,
                    match.player2,
                );

                new_match.id = match.id;
                this.addMatch(new_match);
            });

            item.players.forEach((player)=> {
                var new_player = new Player(
                    player.name,
                    player.email,
                    player.tlf,
                    player.level,
                    player.age,
                );

                new_player.id = player.id;
                this.addPlayer(new_player);
            });


          });
    }


}

module.exports = League;