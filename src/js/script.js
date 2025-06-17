document.addEventListener("DOMContentLoaded", () => {
  const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");
  let startBtn = document.getElementById("startBtn");
  let pomodoroBtn = document.getElementById("pomodoroBtn");
  let timer = document.getElementById("timer");
  const modebuttons = document.querySelectorAll(".buttons");
  const buttonclick = new Audio("./assets/buttonclick.mp3");
  buttonclick.volume = 0.1;

  const modes = {
    pomodoro: 25,
    short: 5,
    long: 15,
  };

  /* Default settings */

  // Set the pomodoro btn as the default active btn
  pomodoroBtn.classList.add("active-button");

  // Set default mode to pomodoro
  outer.classList.add("pomodoro");
  inner.classList.add("pomodoro");

  let isRunning = false;
  let currentMode = "pomodoro";
  let timerDuration;
  let timeLeft = modes[currentMode] * 60;

  startBtn.addEventListener("click", function () {
    startBtn.classList.toggle("pressed");
    buttonclick.play();

    if (!isRunning) {
      startBtn.textContent = "STOP";
      startTimer();
      isRunning = true;
    } else {
      startBtn.textContent = "START";
      stopTimer();
      isRunning = false;
    }
  });

  // For each mode in the modes object
  Object.keys(modes).forEach((mode) => {
    const button = document.getElementById(`${mode}Btn`);
    button.addEventListener("click", function () {
      startBtn.classList.remove("pressed");
      clearInterval(timerDuration);
      startBtn.textContent = "START";
      isRunning = false;

      // Remove any old classes
      outer.className = "";
      inner.className = "";

      // Add new mode class to both of the elements
      outer.classList.add(mode);
      outer.style.transition = "background-color 2s ease";
      inner.classList.add(mode);
      inner.style.transition = "background-color 2s ease";

      // For each of the buttons, remove the active class mode
      modebuttons.forEach((btn) => btn.classList.remove("active-button"));
      button.classList.add("active-button"); // When a button is clicked, add the active mode

      currentMode = mode;
      timeLeft = modes[currentMode] * 60;
      timer.textContent = `${modes[currentMode]}:00`;
    });
  });

  // Timer Functionality
  function startTimer() {
    clearInterval(timerDuration);

    timerDuration = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerDuration);
        return;
      }

      timeLeft--;

      const minutes = Math.floor(timeLeft / 60)
        .toString()
        .padStart(1, "0");
      const seconds = (timeLeft % 60).toString().padStart(2, "0");
      timer.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerDuration);
  }
});
