'use strict';

//handles the form interaction that picks animation to display

//declaring variables, assigning initial values
var input;
var text;



input = document.getElementById('pick');
input.addEventListener('click', function(e) {
  e.preventDefault();
  pickClickHandler();
});

function pickClickHandler(){
  var element = document.getElementById('text')
  text = element.value;
  console.log(text);
  element.value = '';
  //takes input of form
  //loads those images into a new array of objects
  //assigns them to imageObjects array
}
