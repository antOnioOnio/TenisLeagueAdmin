const { expect } = require('chai');

const assert = require('chai').assert;
const League = require("../src/models/league");
const Match = require("../src/models/match");

describe('Testing class League', function () {

     let normalMatch = new Match("958227700", "22/10/20", true, "6-2, 6-2", "antonio", "joselito");

    let league = new League("123456", "2021", "avanzado", [normalMatch] );


    it('get Id should returns 123456 ', function(){
        expect(league.id).to.equal("123456");
    });
    it('get year should returns 2021 ', function(){
        expect(league.year).to.equal("2021");
    });
    it('get level should returns avanzado ', function(){
        expect(league.level).to.equal("avanzado");
    });

});