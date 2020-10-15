"use strict";

var _require = require('chai'),
    expect = _require.expect;

var assert = require('chai').assert;

var validAge = require("../src/models/player").validAge;

var validLevel = require("../src/models/player").validLevel;

var isAtlf = require("../src/models/player").isAtlf;

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
describe('Testing validLevel method', function () {
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
describe('Testing isTlf method', function () {
  it('isAtlf should return a type boolean', function () {
    var result = validLevel(-1);
    assert.typeOf(result, "boolean");
  });
  it('value should be false for a string parameter ', function () {
    var result = isAtlf("string parameter");
    assert.equal(result, false);
  });
  it('value should be true for number parameter', function () {
    var result = isAtlf(111111111);
    assert.equal(result, true);
  });
  it('value should return false if the number hasnt got 9 digits ', function () {
    var result = isAtlf(11);
    assert.equal(result, false);
  });
});