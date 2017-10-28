var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var min = 0;
var max = 1;
var intensity = 0;
var intensityMax = 5;
var color;

function getColor() {
  return [
    Math.floor(Math.random() * (max - min + 1) + min),
    Math.floor(Math.random() * (max - min + 1) + min),
    Math.floor(Math.random() * (max - min + 1) + min)
  ];
}

function getPattern() {
  if(intensity <= intensityMax) {
    intensity++;
  }
  else {
    intensity = 0;
    color = getColor();
  }

  for (var i = 0; i < grb.length; i += 3) {
    grb[i  ] = color[0] + intensity;
    grb[i+1] = color[1] + intensity;
    grb[i+2] = color[2] + intensity;
  }
  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 200);

save();
