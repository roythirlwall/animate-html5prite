'use strict';

  //declaring variables, assign initial values
  var currentImage = {};
  var imageObjects = [];
  var initImgObjects = [];
  var canvas;
  var objectIndex = 0;
  var framesPlayed = 0;
  var framesToPlay;

  //store canvas element in variable
  canvas = document.getElementById('animate');

  //create & store img element in a variable
  //spriteImage = new Image();

  //objects used to initialize imageObjects
  initImgObjects =
    [{
    name: 'vomit_zombie',
    width: 4352,
    height: 256,
    context: canvas.getContext('2d'),
    source: 'img/vomit_zombie.png',
    numberOfFrames: 17,
    ticksPerFrame: 5,
    framesToPlay: 85,
    }];

  //creating & storing imageObjects in array
  for (var i=0; i<initImgObjects.length; i++) {
    imageObjects.push(new Sprite(initImgObjects[i]));
  }

  //store current image object in variable
  currentImage = imageObjects[objectIndex];
  console.log(imageObjects);

  //calls requestAnimationFrame, updates image object & renders frame
  function gameLoop() {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(gameLoop);
    currentImage.update();
    currentImage.render();
  }

  //image constructor function
  function Sprite(options) {
    this.name = options.name;
    this.context = options.context;
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

  //counter mechanism info - used in update and render methods
  //tickCount - used to switch to next frame on sprite sheet
  //            resets to zero once ticksPerFrame reached
  //ticksPerFrame - the number of update/render cycles before
  //                next frame is rendered - to decrease the fps
  //frameIndex - index of the current frame to display
  //             resets to zero once numberOfFrames reached
  //numberOfFrames - number of frames on the sprite sheet
  //framesToPlay -  number of frames to play before switching
  //                to next image(or spritesheet)
  //framesPlayed - number of frames played for each image
  //               resets to zero once framesToPlay reached

  //update method - can play from single image or sprite sheet
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

  //render method
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
  }

  //method to switch from one animation to another
  //does not work yet
  Sprite.prototype.switchOut = function() {
    this.context.clearRect(0, 0, 500, 500);
    this.tickCount = this.ticksPerFrame;
    this.framesPlayed = this.framesToPlay;
    this.frameIndex = 0;
  }
  //runs the gameLoop
  gameLoop();
