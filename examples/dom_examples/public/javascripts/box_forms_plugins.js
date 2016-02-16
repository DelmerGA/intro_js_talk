$(function (event) {
  alert('hello')
  // Initialize a new plugin instance for all
  // e.g. $('input[type="range"]') elements.
  $('input[type="range"]').rangeslider({ polyfill: true});

  var red   = 0;
  var green = 0;
  var blue  = 0;

  var $resultBox = $('#resultBox');

  var $redRange = $('#redRange');

  function chooseRed(pos, val) {
      var $redishBox = $('#redBox');

      red = $redRange.val();

      $redishBox.css('backgroundColor', 'rgb(' + red + ', 0, 0)');

      $resultBox.css('backgroundColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
  }

  $redRange.on('change', chooseRed);

  var $greenRange = $('#greenRange');

  function chooseGreen(pos, val) {
      var $greenishBox = $('#greenBox');

      green = $greenRange.val();

      $greenishBox.css('backgroundColor', 'rgb(0,' + green + ', 0)');

      $resultBox.css('backgroundColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
  }

  $greenRange.on('change', chooseGreen);


  var $blueRange = $('#blueRange');

  function chooseBlue(pos, val) {
      var $blueishBox = $('#blueBox');

      blue = $blueRange.val();

      $blueishBox.css('backgroundColor', 'rgb(0,0,' + blue + ')');

      $resultBox.css('backgroundColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
  }

  $blueRange.on('change', chooseBlue);

});