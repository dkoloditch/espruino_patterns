// Produce an animated rainbow
var neopixel = require("neopixel");
var rows = 4;
var cols = 8;
var led_count = rows*cols;
var happyFaceArray = new Uint8ClampedArray(led_count * 3);
var straightFaceArray = new Uint8ClampedArray(led_count * 3);
var sadFaceArray = new Uint8ClampedArray(led_count * 3);
var brightness = 3;
var pos = 1;

const happyFace = function() {
  // left eye
  happyFaceArray[6] = 10;

  // right eye
  happyFaceArray[15] = 10;

  // smile
  happyFaceArray[51] = 10;
  happyFaceArray[78] = 10;
  happyFaceArray[81] = 10;
  happyFaceArray[84] = 10;
  happyFaceArray[87] = 10;
  happyFaceArray[66] = 10;

  return happyFaceArray;
};

const straightFace = function() {
  // left eye
  straightFaceArray[6] = 10;
  straightFaceArray[7] = 10;

  // right eye
  straightFaceArray[15] = 10;
  straightFaceArray[16] = 10;

  // smile
  straightFaceArray[51] = 10;
  straightFaceArray[52] = 10;
  straightFaceArray[54] = 10;
  straightFaceArray[55] = 10;
  straightFaceArray[57] = 10;
  straightFaceArray[58] = 10;
  straightFaceArray[60] = 10;
  straightFaceArray[61] = 10;
  straightFaceArray[63] = 10;
  straightFaceArray[64] = 10;
  straightFaceArray[66] = 10;
  straightFaceArray[67] = 10;

  return straightFaceArray;
};

const sadFace = function () {
  // left eye
  sadFaceArray[7] = 10;

  // right eye
  sadFaceArray[16] = 10;

  // smile
  sadFaceArray[76] = 10;
  sadFaceArray[55] = 10;
  sadFaceArray[58] = 10;
  sadFaceArray[61] = 10;
  sadFaceArray[64] = 10;
  sadFaceArray[91] = 10;

  return sadFaceArray;
};

function getPattern() {
  if(pos === 1) {
    pos++;
    return happyFace();
  }
  else if(pos === 2) {
    pos++;
    return straightFace();
  }
  else if(pos === 3) {
    pos = 1;
    return sadFace();
  }
}

setInterval(function() {
  neopixel.write(D32, getPattern());
}, 2000);



//save();
