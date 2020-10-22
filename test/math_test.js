const { expect } = require('chai');

const assert = require('chai').assert;
const Match = require("../src/models/match");


describe('Testing class Match', function () {

    let normalMatch = new Match("958227700", "22/10/20", true, "6-2, 6-2", "antonio", "joselito");

    it('get Id should returns 958227700 ', function(){
        expect(normalMatch.id).to.equal("958227700");
    });
    it('get date should returns 22/10/20 ', function(){
        expect(normalMatch.date).to.equal("22/10/20");
    });
    it('get played should returns true ', function(){
        expect(normalMatch.played).to.equal(true);
    });
    it('get result should returns 6-2, 6-2 ', function(){
        expect(normalMatch.result).to.equal("6-2, 6-2");
    });
    it('get player1 should returns antonio ', function(){
        expect(normalMatch.player1).to.equal("antonio");
    });
    it('get player2 should returns joselito ', function(){
        expect(normalMatch.player2).to.equal("joselito");
    });
});