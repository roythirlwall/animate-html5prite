#  animate-HTML5prite

## This module takes a horizontal sprite sheet and creates an html5 animation. It uses a constructor function to take the data and connect a counter that is used to advance frame-by-frame.
## module.exports exposes methods that takes an array of data objects that correspond to each sprite sheet used in the animation.
## The html will need a canvas element with the id "animate" or one should be attached to the DOM for this to work. As always, I stand on the shoulders of peers, can't get anywhere w/out research!
## This module is on npm - <link>

  Thanks to William Malone for the tutorial:
  http:www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/
  Thanks to Louis Fremi for a deeper dive into requestAnimationFrame:
  https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/


## Data properties on Constructor Function

### structure of the incoming image data
```
var theImg = [{
  name: 'example',
  width: 7500,
  height: 300,
  source: 'img/example.png',
  numberOfFrames: 25,
  ticksPerFrame: 15,
  framesToPlay: 25
}];
```

### data properties that describe sprite sheet
- name    - sprite sheet name
- width   - pixel width of sprite sheet
- height  - pixel height of sprite sheet
- source  - path to image file

### constructed properties
- image     - each instance creates a new frame image
- image.src - fills image with sprite sheet file
- context   - grabs context of html5 canvas element

### counter mechanism info - used in update and render methods
- tickCount       - used to switch to next frame on sprite sheet
                  - resets to zero once ticksPerFrame reached
- ticksPerFrame   - the number of update/render cycles before
                  - next frame is rendered - to decrease the fps
- frameIndex      - index of the current frame to display
                  - resets to zero once numberOfFrames reached
- numberOfFrames  - number of frames on the sprite sheet
- framesToPlay    - number of frames to play before switching
                  - to next sprite sheet
- framesPlayed    - number of frames played for each image
                  - resets to zero once framesToPlay reached

## API - exposes 2 methods
- initAnimation: takes the array of imgDataObj, has two methods - update and render - work as counter and renderer for constructed sprite objects
- gameLoop: calls requestAnimationFrame iterating through the animation

### as you can see from the following object structure you will need to have
### an "img" directory with the images you want to animate


## Simple Example

![example.png](/example/example.png?raw=true "example spritesheet")

### Used Browserify - https://browserify.org/ - to create a bundle to test module while development
### run bundle by downloading repo and opening up example.html in your favorite browser.

## License

### ISC - see LICENSE.md for more details