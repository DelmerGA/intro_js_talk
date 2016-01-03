window.addEventListener('load', function (event) {

  // step 1.

  // select the red box from the body
  var redishBox = document.querySelector("#redBox");

  // change the color of the box on click
  redishBox.addEventListener("click", function (event) {
    redishBox.style.backgroundColor = 'red';
  });

  // select the blue box from the body
  var blueishBox = document.querySelector("#blueBox");

  // change the color of the box on click
  blueishBox.addEventListener("click", function (event) {
    blueishBox.style.backgroundColor = 'blue';
  });

  // select the green box from the body
  var greenishBox = document.querySelector("#greenBox");

  // change the color of the box on click
  greenishBox.addEventListener("click", function (event) {
    greenishBox.style.backgroundColor = 'green';
  });

});