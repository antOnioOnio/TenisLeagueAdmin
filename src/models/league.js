
const matches = require ('./match.js');
const players = requre ('./player.js');

const enumLevels = ["PRINCIPIANTE" , "MEDIO","AVANZADO","PRO"];

class League{

    constructor(){
        this._id = '_' + Math.random().toString(36).substr(2, 9);;
        this._matches = new Array();
        this.players = new Array();
    }

    get id(){return this._id;}
    get year(){return this._year;}
    get level(){return this._level;}
    get matches(){return this._matches;}


    set id(id){this._id = id;}

    set year(year){
        if (year >0){
            this._year = year;
        }
        throw new Error("Año no válido");
    }

    set level(level){
        var isGoodLevel = false;
        enumLevels.forEach(element => {
            if(level == element){
                isGoodLevel = true;
            }
            
        });
    }

    set matches(matches){this._matches = matches;}

    addMatch(match){

        this.matches.forEach(element =>{
            if(element.id == match.id){
                throw new Error("Partido ya existente");
            }
        })

        this.matches.push(match);
    }

    deleteMatch(id){
        var found = false;
        for( var i = 0; i < matches.length; i++){ 
    
            if ( matches[i].id === id) { 
                arr.splice(i, 1);
                found = true; 
            }
        
        }
        if (found == false){
            throw new Error("Partido no existe");
        }

    }

}

module.exports = League;