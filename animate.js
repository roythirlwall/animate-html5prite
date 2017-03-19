var frameAnimation = require('./frame-animation');

var theImg = {
  name: '8_bit_inv_77',
  width: 33172,
  height: 312,
  context: canvas.getContext('2d'),
  source: 'img/8_bit_inv_77.png',
  numberOfFrames: 77,
  ticksPerFrame: 5,
  framesToPlay: 77
};

window.addEventListener('load', console.log('in here'), false)
  .then(Sprite(theImg))
  .then(gameLoop())
  .catch(function(err) {
    console.log('oops, something went wrong')
  });