var score = 0;
document.getElementById("score").innerHTML = +score;

function correct() {
alert("X Marks the Spot, that is Correct!")
++score;
document.getElementById("score").innerHTML = +score;

return true;
}

function wrong() {
alert("TO THE PLANK YOU GO!")

return false;
}


var times = 0;
document.getElementById("count").innerHTML = +score;

function yourname() {
++times;
document.getElementById("count").innerHTML = +times;

}

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}