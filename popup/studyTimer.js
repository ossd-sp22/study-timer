let container = document.getElementById("timer");
let debug = document.getElementById("debug");
let startBtn = document.getElementById('start');
let timeInput = document.getElementById('duration');

let duration;

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  timeInput.style.display = 'none';
  time_string = document.getElementById('duration').value;
  [h, m, s] = time_string.split(':');
  duration = Number(h) *60 *60 + Number(m) * 60 + Number(s);
  startTimer(duration, container);
});

function startTimer(duration, container) {
  var d = new Date().getTime();
  var countDownDate = new Date(d + duration * 60000); // add duration minutes to cdt
  if (!localStorage.getItem("countDownDate")) {
    localStorage.setItem("countDownDate", countDownDate);
  } else {
    countDownDate = new Date(localStorage.getItem("countDownDate")).getTime();
  }

  setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    container.innerHTML =
      hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      container.innerHTML = "EXPIRED";
      startBtn.style.display = 'block';
      timeInput.style.display = 'block';
    }
  }, 1000);
}
