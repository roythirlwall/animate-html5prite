// this file is so browserify will work

var frameAnimate = require('./frame-animation');

var frameAnimation = require('./frame-animation');

var theImg = {
  name: '8_bit_inv_77',
  width: 33172,
  height: 312,
  context: '',
  source: 'img/8_bit_inv_77.png',
  numberOfFrames: 77,
  ticksPerFrame: 5,
  framesToPlay: 77
};

// window.addEventListener('load', console.log('in here'), false)
//   .then(Sprite(theImg))
//   .then(gameLoop())
//   .catch(function(err) {
//     console.log('oops, something went wrong')
//   });

new frameAnimate.Sprite(theImg);
console.log(frameAnimate.gameLoop);
console.log(frameAnimate);
frameAnimate.gameLoop();