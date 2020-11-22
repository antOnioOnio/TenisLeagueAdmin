
const matches = require ('./match.js');
const players = require ('./player.js');

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
        this._matches.forEach(element =>{
            if(element.id == match.id){
                throw new Error("Partido ya existente");
            }
        })

        this._matches.push(match);
    }

    addPlayer(player){

        this._players.forEach(element =>{
            if(element.id == player.id){
                throw new Error("Partido ya existente");
            }
        })

        this._players.push(player);
    }


    deletePlayer(id){
        var found = false;
        for( var i = 0; i < _players.length; i++){ 
    
            if ( _players[i].id === id) { 
                arr.splice(i, 1);
                found = true; 
            }
        
        }

        if (found == false){
            throw new Error("Partido no existe");
        }
    }


    deleteMatch(id){

        var found = false;
        for( var i = 0; i < this._matches.length; i++){ 
    
            if ( this._matches[i].id === id) { 
        
                this._matches.splice(i, 1);
                found = true; 
            }
        
        }
        return found;
    }



    getMatchesOfPlayer(name){
        matchesOfPlayer = new Array();

        this._matches.forEach(element =>{
            if(element.player1 == name || element.player2 == name){

                matchesOfPlayer.push(element);
            }
        })
        if (matchesOfPlayer.length > 0){
            return matchesOfPlayer;
        }else {
            throw new Error("No hay partidos para el jugador dado.");
        }
        
    }

}

module.exports = League;