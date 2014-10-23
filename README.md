# battery-remaining

Get the remaining charge in a battery. Probably only works on Linux.

## Example

``` javascript
var batteryRemaining = require('battery-remaining');

batteryRemaining('BAT0', function(error, charge) {
  if (error) {
    throw error;
  }

  console.log(charge);
  // => 21.88
});
```

## Installation

``` bash
$ npm install battery-remaining
```

## API

``` javascript
var batteryRemaining = require('battery-remaining');
```

### `batteryRemaining([battery='BAT0'], callback)`

Calls `callback(error, remaining)`, where `error` is any _Error_ encountered
and _Number_ `remaining` is the charge remaining in _String_ `battery` in watts.