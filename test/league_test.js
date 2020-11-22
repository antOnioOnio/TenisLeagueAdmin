const { expect } = require('chai');

const assert = require('chai').assert;
const League = require("../src/models/league");
const Match = require("../src/models/match");

describe('Testing class League', function () {

    let normalMatch = new Match( "22/10/20", true, "6-2, 6-2", "antonio", "joselito");

    let league = new League();
    league.year = 2021;
    league.level = "AVANZADO"
    
    
    
    it('Añadiendo partido a la liga', function () {
        league.addMatch(normalMatch);
       

        expect(league.matches).to.have.lengthOf(1)
    })



    it('Eliminando un partido de forma correcta', function () {
    
        const remove = league.deleteMatch(league.matches[0].id)
    
        expect(remove).to.be.equal(true)
        expect(league.matches).to.have.lengthOf(0)
    })

    it('get year should returns 2021 ', function(){
        expect(league.year).to.equal(2021);
    });
    it('get level should returns avanzado ', function(){
        expect(league.level).to.equal("AVANZADO");
    });



});