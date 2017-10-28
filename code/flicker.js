var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var pos = 0;
var min = 0;
var max = 5;

function getColor() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPattern() {
  pos++;
  for (var i = 0; i < grb.length; i += 3) {
     grb[i  ] = getColor();
     grb[i+1] = getColor();
     grb[i+2] = getColor();
  }
  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 1000);

save();
