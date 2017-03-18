##  This module exposes methods that accept a single image or an horizontal sprite
  sheet and creates an html5 Canvas animation. The html will need a canvas
  element with the id "animate" or one should be attached to the DOM for this
  to work.

  As always, I stand on the shoulders of peers, can't get anywhere w/out research!

  Thanks to William Malone for the tutorial: http:###www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/
  Thanks to Louis Fremi for a deeper dive into requestAnimationFrame:
  https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/



### works using constructor functions

###counter mechanism info - used in update and render methods
###tickCount - used to switch to next frame on sprite sheet
###            resets to zero once ticksPerFrame reached
###ticksPerFrame - the number of update/render cycles before
###                next frame is rendered - to decrease the fps
###frameIndex - index of the current frame to display
###             resets to zero once numberOfFrames reached
###numberOfFrames - number of frames on the sprite sheet
###framesToPlay -  number of frames to play before switching
###                to next image(or spritesheet)
###framesPlayed - number of frames played for each image
###               resets to zero once framesToPlay reached

###update method - can play from single image or sprite sheet

### as you can see from the following object structure you will need to have
### an "img" directory with the images you want to animate

['8_bit_inv_77',
  {name: '8_bit_inv_77',
  width: 33172,
  height: 312,
  context: canvas.getContext('2d'),
  source: 'img/8_bit_inv_77.png',
  numberOfFrames: 77,
  ticksPerFrame: 5,
  framesToPlay: 77}
]


[
  ['okmaybenot',
  {name: 'every',
  width: 1500,
  height: 500,
  context: canvas.getContext('2d'),
  source: 'img/every.png',
  numberOfFrames: 3,
  ticksPerFrame: 5,
  framesToPlay: 60,},
  {name: 'maybe1',
  width: 500,
  height: 500,
  context: canvas.getContext('2d'),
  source: 'img/maybe.png',
  numberOfFrames: 1,
  ticksPerFrame: 1,
  framesToPlay: 3},
  {name: 'every2',
  width: 1500,
  height: 500,
  context: canvas.getContext('2d'),
  source: 'img/every.png',
  numberOfFrames: 3,
  ticksPerFrame: 5,
  framesToPlay: 60,},
  {name: 'maybe2',
  width: 500,
  height: 500,
  context: canvas.getContext('2d'),
  source: 'img/maybe.png',
  numberOfFrames: 1,
  ticksPerFrame: 1,
  framesToPlay: 3},
  {name: 'every3',
  width: 1500,
  height: 500,
  context: canvas.getContext('2d'),
  source: 'img/every.png',
  numberOfFrames: 3,
  ticksPerFrame: 5,
  framesToPlay: 45},
  {name: 'not',
  width: 500,
  height: 500,
  context: canvas.getContext('2d'),
  source: 'img/not.png',
  numberOfFrames: 1,
  ticksPerFrame: 3,
  framesToPlay: 9}
  ]