(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
  This module exposes methods that accept a horizontal sprite sheet and creates
  an html5 Canvas animation. The html will need a canvas element with the id "animate"
  or one should be attached to the DOM for this to work.

  As always, I stand on the shoulders of peers, can't get anywhere w/out research!

  Thanks to William Malone for the tutorial: http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/
  Thanks to Louis Fremi for a deeper dive into requestAnimationFrame:
  https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
*/

'use strict';

// need to use module.exports
// need to expose Sprite(options) constructor function
// need to expose gameLoop()
// options is an array of objects with the values for each sprite sheet "panel"
// one or more panels make up each animation object

// object to be exported
var frameAnimation = {};

// declaring variables, assign initial values
var currentImage = {};
var imageObjects = [];
// var initImgObjects = [];
var canvas;
var objectIndex = 0;
var framesPlayed = 0;
var framesToPlay;

// store canvas element in variable
canvas = document.getElementById('animate');
console.log('in frame-anim', canvas);

// create & store img element in a variable
// spriteImage = new Image();

// objects used to initialize imageObjects
// initImgObjects =
//   [{
//     name: 'vomit_zombie',
//     width: 4352,
//     height: 256,
//     context: canvas.getContext('2d'),
//     source: 'img/vomit_zombie.png',
//     numberOfFrames: 17,
//     ticksPerFrame: 5,
//     framesToPlay: 85,
//   }];

// imgObjArr is an array of img objects - each a separate sprite sheet
function initAnimation(imgObjArr) {
  //creating & storing imageObjects in array
  for (var i = 0; i < imgObjArr.length; i++) {
    imageObjects.push(new Sprite(imgObjArr[i]));
  }

  // the Sprite that contains current sprite sheet data
  currentImage = imageObjects[0];
}

// calls requestAnimationFrame, updates image object & renders frame
function gameLoop() {
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
  console.log('current Image', currentImage);
  if (currentImage === undefined) { return; }
  currentImage.update();
  currentImage.render();
}

// image constructor function
function Sprite(options) {
  this.name = options.name;
  this.context = canvas.getContext('2d');
  this.width = options.width;
  this.height = options.height;
  this.image = new Image();
  this.image.src = options.source;
  this.numberOfFrames = options.numberOfFrames;
  this.ticksPerFrame = options.ticksPerFrame;
  this.framesToPlay = options.framesToPlay;
  this.framesPlayed = 0;
  this.tickCount = 0;
  this.frameIndex = 0;
  this.ticksPerFrame = options.ticksPerFrame || 0;
  this.numberOfFrames = options.numberOfFrames || 1;
}

// counter mechanism info - used in update and render methods
// tickCount - used to switch to next frame on sprite sheet
//            resets to zero once ticksPerFrame reached
// ticksPerFrame - the number of update/render cycles before
//                next frame is rendered - to decrease the fps
// frameIndex - index of the current frame to display
//             resets to zero once numberOfFrames reached
// numberOfFrames - number of frames on the sprite sheet
// framesToPlay -  number of frames to play before switching
//                to next image(or spritesheet)
// framesPlayed - number of frames played for each image
//               resets to zero once framesToPlay reached

// update method - called from current image or sprite sheet
Sprite.prototype.update = function() {
  this.tickCount += 1;
  if (this.tickCount > this.ticksPerFrame) {
    this.tickCount = 0;
    if (this.frameIndex < this.numberOfFrames - 1) {
      this.frameIndex += 1;
    }else{
      this.frameIndex = 0;
    }
    if (this.framesPlayed < this.framesToPlay) {
      this.framesPlayed = this.framesPlayed + 1;
    }else{
      this.framesPlayed = 0;
      //changes to the next imageObject
      if (objectIndex + 1 < imageObjects.length) {
        objectIndex = objectIndex + 1;
        currentImage = imageObjects[objectIndex];
      }else{
        objectIndex = 0;
        currentImage = imageObjects[objectIndex];
      }
    }
  }
}

// render method - called from current image or sprite sheet
Sprite.prototype.render = function() {
  this.context.clearRect(0, 0, this.width, this.height);
  this.context.drawImage(
    this.image,
    this.frameIndex * this.width / this.numberOfFrames,
    0,
    this.width / this.numberOfFrames,
    this.height,
    0,
    0,
    this.width / this.numberOfFrames,
    this.height
  );
};

// method to switch from one animation to another
Sprite.prototype.switchOut = function() {
  this.context.clearRect(0, 0, 500, 500);
  this.tickCount = this.ticksPerFrame;
  this.framesPlayed = this.framesToPlay;
  this.frameIndex = 0;
};

frameAnimation.initAnimation = initAnimation;
frameAnimation.gameLoop = gameLoop;

module.exports = frameAnimation;
},{}],2:[function(require,module,exports){
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
},{"./frame-animation":1}]},{},[2]);
