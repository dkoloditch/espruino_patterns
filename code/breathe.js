var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var min = 0;
var max = 1;
var direction = 'up';

function getColor() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var standardColor = [getColor(), getColor(), getColor()];
var intensity = 0;

function setDirection() {
  if (intensity === 0) {
    direction = 'up';
  }
  else if (intensity === 10) {
    direction = 'down';
  }
}

function setIntensity(){
  if (intensity <= 10 && direction === 'up') {
    intensity += 1;
  }
  else if (intensity <= 10 && direction === 'down') {
    intensity -= 1;
  }
}

function getPattern() {
  setDirection();
  setIntensity();

  for (var i = 0; i < grb.length; i += 3) {
     grb[i  ] = standardColor[0] ? standardColor[0] + (intensity) : min;
     grb[i+1] = standardColor[1] ? standardColor[1] + (intensity) : min;
     grb[i+2] = standardColor[2] ? standardColor[2] + (intensity) : min;
  }

  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 100);

save();
