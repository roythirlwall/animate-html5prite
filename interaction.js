'use strict';
//handles the form interaction that picks animation to display

//declaring variables, assigning initial values
var text;
var rButtons;
var lButton;
var loop;
var running;

//listens for
//radio buttons to change animation
rButtons = document.getElementById('radios');
rButtons.addEventListener('click', function(e) {
  //console.log(e.target.id);
  pickClickHandler(e.target.id);
});
//loop start button
lButton = document.getElementById('loop');
lButton.addEventListener('click', function(ev){
  loopClickHandler(ev.target.id);
});

//radio buttons
for (var k=0; k<animations.length; k++) {
  var radioInput = document.createElement('input');
  var radioLabel = document.createElement('label');
  radioInput.setAttribute('type', 'radio');
  radioInput.setAttribute('name', 'animations');
  radioInput.setAttribute('id', animations[k][0]);
  radioLabel.textContent = animations[k][0] + ' ';
  radioLabel.appendChild(radioInput);
  rButtons.appendChild(radioLabel);
}

//start button for the loop - no way to stop yet
function loopClickHandler(){
  if (!running) {
    running = true;
    gameLoop();
  }else{
    console.log('no more!');
  }
}

//switches between animations
function pickClickHandler(id) {
  for (var m=0; m<animations.length; m++) {
    if (animations[m][0] === id) {
      var current = animations[m].slice(1, animations[m].length);
      imageObjects = [];
      for (var j=0; j<current.length; j++) {
        imageObjects.push(new Sprite(current[j]));
      }
      currentImage.switchOut();
      m = animations.length;
    }else{
      console.log('not yet');
    }
  }
}
