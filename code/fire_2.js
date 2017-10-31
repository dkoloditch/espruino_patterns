var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var min = 1;
var max = 20;
var flickerRateMin = 25;
var flickerRateMax = 150;
var color = [0,1,0];

function getPattern() {
  for (var i = 0; i < grb.length; i += 3) {
    flicker = Math.floor(Math.random() * (max - min + 1) + min);
    grb[i  ] = color[0];
    grb[i+1] = color[1] * flicker;
    grb[i+2] = color[0];
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
