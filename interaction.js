'use strict';
//handles the form interaction that picks animation to display

//declaring variables, assigning initial values
var text;
var rButtons;

//listens for
rButtons = document.getElementById('radios');
rButtons.addEventListener('click', function(e) {
  //console.log(e.target.id);
  pickClickHandler(e.target.id);
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

//switches between animations now
//need method to stop new animation in its tracks
//need method to clear canvas
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
