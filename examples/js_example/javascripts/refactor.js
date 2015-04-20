$(document).on("ready", function () {

// storing the btn as a variable in JS
 var $greetBtn = $("#greet");

 // when you click the button it's going
 //   to display the alert with Hello Worlds
 $greetBtn.on("click", function () {
    var $myDiv = $("#greeting");
    alert( $myDiv.val() ); 
 });


 // grab raveBox
 var $raveBox = $("#raveBox");

 var randNum = function () {
    var randVal = Math.random()*255;
    var randColor = Math.floor(randVal);
    return randColor;
 }

 var getColor = function () {
  return "rgb("+ randNum() + "," + randNum() + "," + randNum() +")";
 }

 $raveBox.on("click", function () {
  $raveBox.css("height", "500px");
  $raveBox.css("color",  "white");

  $raveBox.css("backgroundColor", getColor());
 })


})

