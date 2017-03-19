// this file is so browserify will work

var frameAnimate = require('./frame-animation');

var frameAnimation = require('./frame-animation');

var theImg = [{
  name: '8_bit_inv_77',
  width: 33172,
  height: 312,
  source: 'img/8_bit_inv_77.png',
  numberOfFrames: 77,
  ticksPerFrame: 5,
  framesToPlay: 77
}];

frameAnimate.initAnimation(theImg);
frameAnimate.gameLoop();