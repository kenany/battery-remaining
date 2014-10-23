var path = require('path');
var firstLine = require('first-line');
var isFunction = require('lodash.isfunction');
var batteryPath = require('battery-path');

function batteryRemaining(battery, callback) {
  if (isFunction(battery)) {
    callback = battery;
    battery = 'BAT0';
  }

  function getRemaining(location, callback) {
    firstLine(location, function(error, remaining) {
      if (error) {
        callback(error);
        return;
      }

      remaining = parseFloat(remaining.toString());

      // convert muWatts to Watts
      remaining *= Math.pow(10, -6);

      callback(null, remaining);
    });
  }

  var bstr = path.resolve(batteryPath(battery), 'energy_now');
  getRemaining(bstr, function(error, remaining) {
    if (error) {

      // try alternate location
      bstr = path.resolve(batteryPath(battery), 'charge_now');
      getRemaining(bstr, callback);
      return;
    }

    callback(null, remaining);
  });
}

module.exports = batteryRemaining;