var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var min = 1;
var max = 20;
var flickerRateMin = 25;
var flickerRateMax = 250;
var color = [0,1,0];

function getPattern() {
  flicker = Math.floor(Math.random() * (max - min + 1) + min);

  for (var i = 0; i < grb.length; i += 3) {
    grb[i  ] = color[0] * flicker;
    grb[i+1] = color[1] * flicker;
    grb[i+2] = color[0] * flicker;
  }

  return grb;
}

function flickerRate() {
  return Math.floor(Math.random() * (flickerRateMax - flickerRateMin + 1) + flickerRateMin);
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, flickerRate());

save();
