const { expect } = require('chai');

const assert = require('chai').assert;
const League = require("../src/models/league");
const Match = require("../src/models/match");

describe('Testing class League', function () {

    let normalMatch = new Match( "22/10/20", true, "6-2, 6-2", "antonio", "joselito");

    let league = new League();
    league.year = 2021;
    league.level = "AVANZADO"
    
    league.addMatch(normalMatch);
    

    it('get year should returns 2021 ', function(){
        expect(league.year).to.equal(2021);
    });
    it('get level should returns avanzado ', function(){
        expect(league.level).to.equal("AVANZADO");
    });

});