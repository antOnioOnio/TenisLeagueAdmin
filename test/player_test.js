const assert = require('chai').assert;
const validAge = require("../src/models/player").validAge;
const validLevel = require("../src/models/player").validLevel;

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

describe('Testing valid level method', function () {
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