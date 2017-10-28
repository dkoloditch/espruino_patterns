var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var min = 1;
var max = 2;
var intensity = 1;
var intensityMax = 10;
var color;

function setColor() {
  return [
    Math.floor(Math.random() * (max - min + 1) + min),
    Math.floor(Math.random() * (max - min + 1) + min),
    Math.floor(Math.random() * (max - min + 1) + min)
  ];
}

function getPattern() {
  color = color === undefined ? setColor() : color;
  if(intensity <= intensityMax) {
    intensity++;
  }
  else {
    intensity = 1;
    color = setColor();
  }

  for (var i = 0; i < grb.length; i += 3) {
    grb[i  ] = color[0] * intensity;
    grb[i+1] = color[1] * intensity;
    grb[i+2] = color[2] * intensity;
  }
  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 100);

save();
