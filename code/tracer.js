var rows = 4;
var cols = 8;
var led_count = rows*cols;
var grb = new Uint8ClampedArray(led_count * 3);
var current = [0, 1, 2];
var previous = [0, 1, 2];
var direction = "right";
var move;

function topLeftCorner() {
  return current.toString() === [0,1,2].toString();
}

function topRightCorner() {
  return current.toString() === [21,22,23].toString();
}

function bottomRightCorner() {
  return current.toString() === [93,94,95].toString();
}

function bottomLeftCorner() {
  return current.toString() === [72,73,74].toString();
}

function setDirection() {
  if (topLeftCorner()) { direction = "right"; }
  else if (topRightCorner()) { direction = "down"; }
  else if (bottomRightCorner()) { direction = "left"; }
  else if (bottomLeftCorner()) { direction = "up"; }
}

function movementCount() {
  if (direction === "right") { return 3; }
  else if (direction === "down") { return 24; }
  else if (direction === "left") { return -3; }
  else if (direction === "up") { return -24; }
}

function handleTransition() {
  previous = current;
  setDirection();
  move = movementCount();

  current = [
    previous[0] + move,
    previous[1] + move,
    previous[2] + move,
  ];
}

function turnPreviousLedOff() {
  grb[previous[0]] = 0;
  grb[previous[1]] = 0;
  grb[previous[2]] = 0;
}

function turnCurrentLedOn() {
  grb[current[0]] = 0;
  grb[current[1]] = 1;
  grb[current[2]] = 0;
}

function getPattern() {
  for (var i = 0; i < grb.length; i += 3) {
    turnPreviousLedOff();
    turnCurrentLedOn();
  }

  handleTransition();

  return grb;
}

setInterval(function() {
  require("neopixel").write(D32, getPattern());
}, 100);

save();
