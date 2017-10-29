var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var min = 0;
var max = 1;

function getColor() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var standardColor = [getColor(), getColor(), getColor()];
var intensity = 0;

function getPattern() {
  if (intensity <= 10) {
    intensity += 1;
  }
  else {
    intensity = 0;
  }

  for (var i = 0; i < grb.length; i += 3) {
     grb[i  ] = standardColor[0] ? standardColor[0] + (intensity) : standardColor[0];
     grb[i+1] = standardColor[1] ? standardColor[1] + (intensity) : standardColor[1];
     grb[i+2] = standardColor[2] ? standardColor[2] + (intensity) : standardColor[2];
  }

  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 100);

save();
