let controls = document.getElementById("controls");
let pause_btn = document.getElementById("pause");
let reset_btn = document.getElementById("reset");

var paused = false;
pause_btn.onclick = function () {
  if (!paused) {
    pause_btn.innerHTML = "Resume";
  } else {
    pause_btn.innerHTML = "Pause";
  }
};

reset_btn.onclick = function () {};
