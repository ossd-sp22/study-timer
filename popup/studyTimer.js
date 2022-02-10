let container = document.getElementById("timer");
let debug = document.getElementById("debug");

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
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    container.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      container.innerHTML = "EXPIRED";
    }
  }, 1000);
}
