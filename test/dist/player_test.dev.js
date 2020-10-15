"use strict";

var assert = require('chai').assert;

var validAge = require("../src/models/player").validAge;

var validLevel = require("../src/models/player").validLevel;

describe('Testing validAge method', function () {
  it('validAge should return a type boolean', function () {
    var result = validAge(-1);
    assert.typeOf(result, "boolean");
  });
  it('value should be false for a value lower than 0', function () {
    var result = validAge(-1);
    assert.equal(result, false);
  });
  it('value should be false for a value higher than 0', function () {
    var result = validAge(1);
    assert.equal(result, true);
  });
});
describe('Testing valid level method', function () {
  it('validLevel should return a type boolean', function () {
    var result = validLevel(-1);
    assert.typeOf(result, "boolean");
  });
  it('value should be false for a value lower than 0 ', function () {
    var result = validAge(-1);
    assert.equal(result, false);
  });
  it('value should be false for a value higher than 3', function () {
    var result = validAge(5);
    assert.equal(result, true);
  });
});