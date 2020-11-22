const matches = require ('./player.js')

class Match{
    
    constructor(date, played, result, player1, player2){
        this._id =  '_' + Math.random().toString(36).substr(2, 9);
        this._date = date;
        this._played = played;
        this._result = result;
        this._player1 = player1;
        this._player2 = player2;
    }

    // getters

    get id(){return this._id;}

    get date(){return this._date;}

    get played(){return this._played;}

    get result(){return this._result;}

    get player1(){return this._player1;}

    get player2(){return this._player2;}

    // setters

    set id(id){this._id = id;}

    set date(date){this._date = date;}

    set played(played){this._played = played;}

    set result(result){this._result = result;}

    set player1(player){this._player1 = player;}

    set player2(player){this._player2 = player;}



}

module.exports = Match;