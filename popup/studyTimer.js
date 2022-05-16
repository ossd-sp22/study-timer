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
let title = document.querySelector("h3");
let sound1 = document.getElementById("trumpet");
let sound2 = document.getElementById("clock");
let sound3 = document.getElementById("retro");

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

function play_trumpet(){
  var audio = new Audio("trumpet.wav");
  audio.play();
  setTimeout(() => {audio.pause();}, 5000);
}

function play_clock(){
  var audio = new Audio("clock.wav");
  audio.play();
  setTimeout(() => {audio.pause();}, 5000);
 
}

function play_retro(){
  var audio = new Audio("retro.wav");
  audio.play();
  setTimeout(() => {audio.pause();}, 5000);
};

sound1.addEventListener("click", () =>{
  sound3.classList.remove("active");
  sound2.classList.remove("active");
  sound1.classList.add("active");
});
sound2.addEventListener("click", () =>{
  sound1.classList.remove("active");
  sound3.classList.remove("active");
  sound2.classList.add("active");
})
sound3.addEventListener("click", () =>{
  sound1.classList.remove("active");
  sound2.classList.remove("active");
  sound3.classList.add("active");
})

startBtn.addEventListener("click", () => {

  title.innerHTML = "Study Timer";
  time_string = document.getElementById("duration").value;
  if (time_string && time_string.trim() != "") {
    startBtn.style.display = "none";
    timeInput.style.display = "none";
    container.style.display = "block";
    controls.style.display = "block";
    localStorage.setItem("countDownDate", "none");
    var h;
    var m;
    var s;
    let time_vars = time_string.split(":");
    if (time_vars.length == 3) {
      h = time_vars[0];
      m = time_vars[1];
      s = time_vars[2];
    }
    else if (time_vars.length == 2){
      h = 0
      m = time_vars[0]
      s = time_vars[1];
    }
    else {
      h = 0
      m = 0
      s = time_vars[0]
    }
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
      title.innerHTML = "TIMER DONE";
      if (sound1.classList.contains("active")){
        play_trumpet();
      }
      else if (sound3.classList.contains("active")){
        play_retro();
      }
      else {
        play_clock();
      }
      clearInterval(x);
      localStorage.setItem("countDownDate", "none");
      container.removeChild(clock);
      startBtn.style.display = "block";
      timeInput.style.display = "block";
      controls.style.display = "none";
    }
  }, 1000);
}
