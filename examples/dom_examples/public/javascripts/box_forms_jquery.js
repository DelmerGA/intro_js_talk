$(function (event) {

  var red   = 0;
  var green = 0;
  var blue  = 0;

  var $resultBox = $('#resultBox');

  var $redInput = $('#redInput');

  $redInput.on('change', function (event) {
      var $redishBox = $('#redBox');

      red = $redInput.val()

      $redishBox.css('backgroundColor', 'rgb(' + red + ', 0, 0)');

      $resultBox.css('backgroundColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
  });

  var $greenInput = $('#greenInput');

  $greenInput.on('change', function (event) {
      var $greenishBox = $('#greenBox');

      green = $greenInput.val()

      $greenishBox.css('backgroundColor', 'rgb(0,' + green + ', 0)');

      $resultBox.css('backgroundColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
  });


  var $blueInput = $('#blueInput');

  $blueInput.on('change', function (event) {
      var $blueishBox = $('#blueBox');

      blue = $blueInput.val();

      $blueishBox.css('backgroundColor', 'rgb(0,0,' + blue + ')');

      $resultBox.css('backgroundColor', 'rgb(' + red + ',' + green + ',' + blue + ')');
  });
});