let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (interval) return; // Prevent multiple intervals
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}
