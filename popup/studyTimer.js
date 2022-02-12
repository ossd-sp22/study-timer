let container = document.getElementById("timer");
let debug = document.getElementById("debug");
let startBtn = document.getElementById("start");
let timeInput = document.getElementById("duration");
let controls = document.getElementById("controls");
let start_btn = document.getElementById("start");
let pause_btn = document.getElementById("pause");
let reset_btn = document.getElementById("reset");
var clock;
var duration = 30;

if (
  !localStorage.getItem("started") ||
  localStorage.getItem("started") === "false"
) {
  startBtn.style.display = "block";
  timeInput.style.display = "block";
  controls.style.display = "none";
} else {
  startBtn.style.display = "none";
  timeInput.style.display = "none";
  clock = document.createElement("div");
  container.appendChild(clock);
  startTimer(Number(localStorage.getItem("duration")), clock);
}

startBtn.addEventListener("click", () => {
  time_string = document.getElementById("duration").value;
  if (time_string && time_string.trim() != "") {
    startBtn.style.display = "none";
    timeInput.style.display = "none";
    container.style.display = "block";
    controls.style.display = "block";
    localStorage.setItem("countDownDate", "none");
    [h, m, s] = time_string.split(":");
    duration = Number(h) * 60 * 60 + Number(m) * 60 + Number(s);
    clock = document.createElement("div");
    container.appendChild(clock);
    startTimer(duration, clock);
    localStorage.setItem("started", true);
  }
});

var hours, minutes, seconds;
function startTimer(duration, clock) {
  var d = new Date().getTime();
  var countDownDate = new Date(d + (duration + 2) * 1000); // add duration minutes to cdt
  if (
    !localStorage.getItem("countDownDate") ||
    localStorage.getItem("countDownDate") == "none"
  ) {
    localStorage.setItem("countDownDate", countDownDate);
  } else {
    countDownDate = new Date(localStorage.getItem("countDownDate")).getTime();
  }

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    clock.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      localStorage.setItem("countDownDate", "none");
      container.removeChild(clock);
      startBtn.style.display = "block";
      timeInput.style.display = "block";
      controls.style.display = "none";
    }
  }, 1000);
}
