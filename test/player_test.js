const { expect } = require('chai');

const assert = require('chai').assert;
const validAge = require("../src/models/player").validAge;
const validLevel = require("../src/models/player").validLevel;
const isAtlf = require("../src/models/player").isAtlf;
const Player = require("../src/models/player");


describe('Testing class Player', function () {

    let normalPlayer = new Player("123456", 
    "Brian", 
    "brian@correo.es", 
    "612453456", 
    "medium", 
    "33");

    it('get Id should returns 123456 ', function(){
        expect(normalPlayer.id).to.equal("123456");
    });
    it('get name should returns Brian ', function(){
        expect(normalPlayer.name).to.equal("Brian");
    });
    it('get email should returns brian@correo.es', function(){
        expect(normalPlayer.email).to.equal("brian@correo.es");
    });
    it('get tlf should returns 612453456', function(){
        expect(normalPlayer.tlf).to.equal("612453456");
    });
    it('get level should returns medium ', function(){
        expect(normalPlayer.level).to.equal("medium");
    });
    // it('get age should returns 33 ', function(){
    //     expect(normalPlayer.age).to.equal("33");
    // });
});


describe('Testing validAge method', function () {
    it('validAge should return a type boolean', function(){
        let result = validAge(-1);
        assert.typeOf(result, "boolean");
    });
    it('value should be false for a value lower than 0', function(){
        let result = validAge(-1);
        assert.equal(result, false);
    });
    it('value should be false for a value higher than 0', function(){
        let result = validAge(1);
        assert.equal(result, true);
    });
    
});

describe('Testing validLevel method', function () {
    it('validLevel should return a type boolean', function(){
        let result = validLevel(-1);
        assert.typeOf(result, "boolean");
    });
    it('value should be false for a value lower than 0 ', function(){
        let result = validAge(-1);
        assert.equal(result, false);
    });
    it('value should be false for a value higher than 3', function(){
        let result = validAge(5);
        assert.equal(result, true);
    });
    
});


describe('Testing isTlf method', function () {
    it('isAtlf should return a type boolean', function(){
        let result = validLevel(-1);
        assert.typeOf(result, "boolean");
    });
    it('value should be false for a string parameter ', function(){
        let result = isAtlf("string parameter");
        assert.equal(result, false);
    });
    it('value should be true for number parameter', function(){
        let result = isAtlf(111111111);
        assert.equal(result, true);
    });
    it('value should return false if the number hasnt got 9 digits ', function(){
        let result = isAtlf(11);

        assert.equal(result, false);
    });
    
});