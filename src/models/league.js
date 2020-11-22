
const Match = require('./match.js');
const Player = require ('./player.js');

const enumLevels = ["PRINCIPIANTE" , "MEDIO","AVANZADO","PRO"];

class League{

    /**
     * Default constructor 
     */
    constructor(){
        this._id = '_' + Math.random().toString(36).substr(2, 9);
        this._matches = new Array();
        this._players = new Array();
    }

    /**
     * @return Main object identifier 
     */
    get id(){return this._id;}

    /**
     * @return Main object identifier 
     */
    get year(){return this._year;}


    /**
     * @return League level
     */
    get level(){return this._level;}
    
    /**
     * @return Array of league matches
     */
    get matches(){return this._matches;}

    /**
     * @return Array of league players
     */
    get players(){return this._players;}

    /**
     * @param new uuid
     */
    set id(id){this._id = id;}

    /**
     * @param year to st
     */
    set year(year){
        if (year > 0){
            this._year = year;
        }else {
            throw new Error("Año no válido");
        }

    }

    /**
     * @param level to set
     */
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

    /**
     * @param matches array to set 
     */
    set matches(matches){this._matches = matches;}


    /**
     * Add match to our league
     * @param {*} match 
     */
    addMatch(match){
        this._matches.push(match);
    }

    /**
     * Add player to our league
     * @param {*} player 
     */
    addPlayer(player){
        this._players.push(player);
    }


    /**
     * Delete player by id
     * 
     * @param {*} id 
     */
    deletePlayer(id){
        for( var i = 0; i < _players.length; i++){ 
    
            if ( _players[i].id === id) { 
                arr.splice(i, 1);
                
                return true;
            }
        
        }

        return false;
    }


    /**
     * Delete match by id
     * @param {*} id 
     */
    deleteMatch(id){
        for( var i = 0; i < this._matches.length; i++){ 
    
            if ( this._matches[i].id === id) { 
        
                this._matches.splice(i, 1);
                return true; 
            }
        
        }
        return false;
    }

    /**
     * Return the matches where name has played or is going to play
     * @param {*} name 
     */
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


    /**
     * Return whether playerName is our league or not
     * @param {*} playerName 
     */
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


    /**
     * Parse for our raw data
     * @param {*} json 
     */
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