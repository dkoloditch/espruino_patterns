// Produce an animated rainbow
var rows = 4;
var cols = 8;
var led_count = rows*cols;
var rgb = new Uint8ClampedArray(led_count * 3);
var pos = 0;
function getPattern() {
  pos++;
  for (var i=0;i<rgb.length;i+=3) {
     rgb[i  ] = (1 + Math.sin((i+pos)*0.1324)) * 3;
     rgb[i+1] = (1 + Math.sin((i+pos)*0.1654)) * 3;
     rgb[i+2] = (1 + Math.sin((i+pos)*0.1)) * 3;
  }
  return rgb;
}
setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 100);

save();
