window.addEventListener('load', function (event) {

  var red   = 0;
  var green = 0;
  var blue  = 0;

  var resultBox = document.querySelector('#resultBox');

  var redInput = document.querySelector('#redInput');

  redInput.addEventListener('change', function (event) {
      var redishBox = document.querySelector('#redBox');

      red = redInput.value

      redishBox.style.backgroundColor = "rgb(" + red + ", 0, 0)";

      resultBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  });

  var greenInput = document.querySelector('#greenInput');

  greenInput.addEventListener('change', function (event) {
      var greenishBox = document.querySelector('#greenBox');

      green = greenInput.value

      greenishBox.style.backgroundColor = "rgb(0," + green + ", 0)";

      resultBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  });


  var blueInput = document.querySelector('#blueInput');

  blueInput.addEventListener('change', function (event) {
      var blueishBox = document.querySelector('#blueBox');

      blue = blueInput.value

      blueishBox.style.backgroundColor = "rgb(0,0," + blue + ")";

      resultBox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  });
});