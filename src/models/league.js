
const matches = require ('./match.js')

class League{
    constructor(id, year, level, matches=[] )
    {
        this._id = id;
        this._year = year;
        this._level = level;
        this._matches = matches;

    }

    get id(){return this._id;}
    get year(){return this._year;}
    get level(){return this._level;}
    get matches(){return this._matches;}


    set id(id){this._id = id;}
    set year(year){this._year = year;}
    set level(level){this._level = level;}
    set matches(matches){this._matches = matches;}
}

module.exports = League;