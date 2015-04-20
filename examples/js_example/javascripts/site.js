window.onload = function () {

// storing the btn as a variable in JS
 var greetBtn = document.getElementById("greet");

 // when you click the button it's going
 //   to display the alert with Hello Worlds
 greetBtn.onclick = function () {
    var myDiv = document.getElementById("greeting");
    alert(myDiv.value); 
 }


 // grab raveBox
 var raveBox = document.getElementById("raveBox");

 var randNum = function () {
    var randVal = Math.random()*255;
    var randColor = Math.floor(randVal);
    return randColor;
 }

 var getColor = function () {
  return "rgb("+ randNum() + "," + randNum() + "," + randNum +")";
 }

 raveBox.onclick = function () {
  raveBox.style.height = "500px";
  raveBox.style.color = "white";

  raveBox.style.backgroundColor = getColor();
 }




}