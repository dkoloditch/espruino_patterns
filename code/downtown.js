var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var pos = 0;
var min = 1;
var max = 5;
var standardColor = [];

function getColor() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPattern() {
  pos++;
  standardColor = [getColor(), getColor(), getColor()];
  for (var i = 0; i < grb.length; i += 3) {
     grb[i  ] = standardColor[0];
     grb[i+1] = standardColor[1];
     grb[i+2] = standardColor[2];
  }
  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 500);

save();
