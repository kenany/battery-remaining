var batteryRemaining = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isNumber = require('lodash.isnumber');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(batteryRemaining));
});

test('returns capacity', function(t) {
  t.plan(2);
  batteryRemaining('BAT0', function(error, remaining) {
    t.error(error);
    t.ok(isNumber(remaining));
  });
});

test('defaults to BAT0', function(t) {
  t.plan(2);
  batteryRemaining(function(error, remaining) {
    t.error(error);
    t.ok(isNumber(remaining));
  });
});