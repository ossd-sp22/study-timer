localStorage.setItem("paused", false);
pause_btn.onclick = function () {
  var paused = localStorage.getItem("paused");
  if (paused === "false") {
    localStorage.setItem("paused", true);
    pause_btn.innerHTML = "Resume";
    localStorage.setItem(
      "duration",
      Math.max(hours, 0) * 60 * 60 +
        Math.max(minutes, 0) * 60 +
        Math.max(seconds, 0)
    );
    container.removeChild(clock);
    container.innerHTML = "Time paused";
    localStorage.setItem("countDownDate", "none");
    clearInterval(x);
  } else {
    localStorage.setItem("paused", false);
    pause_btn.innerHTML = "Pause";
    container.innerHTML = "";
    clock = document.createElement("div");
    container.appendChild(clock);
    startTimer(Number(localStorage.getItem("duration")), clock);
  }
};

reset_btn.onclick = function () {
  localStorage.setItem("countDownDate", "none");
  localStorage.setItem("started", false);
  container.removeChild(clock);
  startBtn.style.display = "block";
  timeInput.style.display = "block";
  controls.style.display = "none";
  clearInterval(x);
};
