const { expect } = require('chai');

const assert = require('chai').assert;
const { Match } = require("../src/models/match");


describe('Testing class Match', function () {

    let normalMatch = new Match(
        "22/10/20", true, 
        "6-2, 6-2","8c710459-559d-494f-9724-1321c5112d3b", 
        "f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7");



    it('get date should returns 22/10/20 ', function(){
        expect(normalMatch.date).to.equal("22/10/20");
    });
    it('get played should returns true ', function(){
        expect(normalMatch.played).to.equal(true);
    });
    it('get result should returns 6-2, 6-2 ', function(){
        expect(normalMatch.result).to.equal("6-2, 6-2");
    });
    it('get player1 should returns 8c710459-559d-494f-9724-1321c5112d3b ', function(){
        expect(normalMatch.player1).to.equal("8c710459-559d-494f-9724-1321c5112d3b");
    });
    it('get player2 should returns f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7 ', function(){
        expect(normalMatch.player2).to.equal("f3a2b537-c4c6-4b5b-a367-16dbbc29b7f7");
    });



});