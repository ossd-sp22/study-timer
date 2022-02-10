let container = document.getElementById("timer");
let debug = document.getElementById("debug");

// Update the count down every 1 second
var duration = 60 * 5;

function startTimer(duration, container) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    container.innerHTML = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

startTimer(duration, container);
