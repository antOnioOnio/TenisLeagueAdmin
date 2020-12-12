
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
     * 
     * @param {*} data 
     */
    addMatchFromAPI(data, withId){
        
        var new_match = new Match(
            data.date,
            data.played,
            data.result,
            data.player1,
            data.player2,
        );
        if (withId){
            new_match.id = data.id;
        }else{
            new_match.id = '_' + Math.random().toString(36).substr(2, 9);
        }

        this.addMatch(new_match);

        return new_match;
    }

    /**
     * Add player to our league
     * @param {*} player 
     */
    addPlayer(player){
        this._players.push(player);
    }


    /**
     * 
     * @param {*} name 
     */
    addPlayerFromAPI(data, withId){
        var new_Player = new Player(
            data.name,
            data.email,
            data.tlf,
            data.level,
            data.age,
        );
        if ( withId){
            new_Player.id = data.id;
        }else{
            new_Player.id = '_' + Math.random().toString(36).substr(2, 9);
        }

        this.addPlayer(new_Player);

        return new_Player;
    }

    /**
     * 
     * @param {*} data 
     */
    updatePlayer(data){
        var new_Player = new Player(
            data.name,
            data.email,
            data.tlf,
            data.level,
            data.age,
        );

        new_Player.id = data.id;

        for( var i = 0; i < this._players.length; i++){ 
    
            if ( this._players[i].id.localeCompare(new_Player.id)) { 
    
                this._players[i] = new_Player;
                return true
            }
        
        }
        return false;
    }


    /**
     * 
     * @param {*} data 
     */
    updateMatch(data){
        var new_match = new Match(
            data.date,
            data.played,
            data.result,
            data.player1,
            data.player2,
        );
        new_match.id = data.id;

        for( var i = 0; i < this._matches.length; i++){ 
            console.log("id mine-->" + new_match.id);
            console.log("id loop-->" + this._matches[i].id);
            if ( this._matches[i].id === new_match.id) { 
                console.log("they are equal");

                this._matches[i] = new_match;
                return true
            }
        
        }
        return false;
    }

    /**
     * 
     * @param {*} data 
     */
    checkDataPlayer(data){
        if (!data.name || !data.email || !data.tlf || !data.level || !data.age ){
            return false;
        }
        return true;
    }

    /**
     * 
     * @param {*} data 
     */
    checkDataPlayerWithId(data){
        if (!data.id || !data.name || !data.email || !data.tlf || !data.level || !data.age ){
            return false;
        }
        return true;
    }


    /**
     * 
     * @param {*} data 
     */
    checkDataMatch(data){
        if (!data.date || !data.played || !data.result || !data.player1 || !data.player2 ){
            return false;
        }
        return true;
    }

    /**
     * 
     * @param {*} data 
     */
    checkDataMatchWithId(data){
        if ( !data.id || !data.date || !data.played || !data.result || !data.player1 || !data.player2 ){
            return false;
        }
        return true;
    }

    /**
     * 
     */
    getPlayerByName(name){

        for( var i = 0; i < this._players.length; i++){ 
    
            if ( this._players[i].name === name) { 
    
                return this._players[i];
            }
        
        }

        return null;
    }

    /**
     * 
     */
    getPlayerById(id){
        for( var i = 0; i < this._players.length; i++){ 
            if ( this._players[i]._id === id) { 
                return this._players[i];
            }
        
        }

        return null;
    }

    /**
     * Delete player by id
     * 
     * @param {*} id 
     */
    deletePlayer(id){
        for( var i = 0; i < _players.length; i++){ 
    
            if ( _players[i].id.localeCompare(id)) { 
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
        var matchesOfPlayer = new Array();

        this._matches.forEach(element =>{
            if(element.player1 == name || element.player2 == name){
        
                matchesOfPlayer.push(element);
            }
        })
        if (matchesOfPlayer.length > 0){
            return matchesOfPlayer;
        }
    }

    /**
     * Return the matches where name has played or is going to play
     * @param {*} name 
     */
    getMatchesOfToday(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
      

        var matchesOfToday = new Array();

        this._matches.forEach(element =>{
            if(element.date == today ){
        
                matchesOfToday.push(element);
            }
        })
        
        return matchesOfToday;
        
    }


    /**
     * 
     */
    getMatch(id){

        for( var i = 0; i < this._matches.length; i++){ 
    
            if ( this._matches[i]._id === id) { 
                return this._matches[i];
            }
        
        }

        return null;
    }
    /**
     * Return whether playerName is our league or not
     * @param {*} playerName 
     */
    isPlayerInTheLeague(playerID){
        for( var i = 0; i < this._players.length; i++){ 
            if ( this._players[i].id === playerID) { 
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