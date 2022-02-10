let controls = document.getElementById("controls");
let start_btn = document.getElementById("start");
let pause_btn = document.getElementById("pause");
let reset_btn = document.getElementById("reset");

var duration = 30;
startTimer(duration, container);

var paused = false;
pause_btn.onclick = function () {
  if (!paused) {
    pause_btn.innerHTML = "Resume";
  } else {
    pause_btn.innerHTML = "Pause";
  }
};

reset_btn.onclick = function () {};
