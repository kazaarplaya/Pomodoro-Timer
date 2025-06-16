document.addEventListener("DOMContentLoaded", () => {
  const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");
  let startBtn = document.getElementById("startBtn");
  let pomodoroBtn = document.getElementById("pomodoroBtn");
  const modebuttons = document.querySelectorAll(".buttons");

  const modes = {
    pomodoro: 25,
    short: 5,
    long: 15,
  };

  Object.keys(modes).forEach((mode) => {
    const button = document.getElementById(`${mode}Btn`);
    button.addEventListener("click", function () {
      // Remove any old classes
      outer.className = "";
      inner.className = "";

      // Add new mode class to both of the elements
      outer.classList.add(mode);
      inner.classList.add(mode);

      // For each of the buttons, remove the active class mode
      modebuttons.forEach((btn) => btn.classList.remove("active-button"));
      button.classList.add("active-button"); // When a button is clicked, add the active mode
    });
  });

  // Set the pomodoro btn as the default active btn
  pomodoroBtn.classList.add("active-button");

  // Set default mode to pomodoro
  outer.classList.add("pomodoro");
  inner.classList.add("pomodoro");

  startBtn.addEventListener("click", function () {
    if (startBtn.textContent === "START") {
      startBtn.textContent = "STOP";
      // Start timer logic here
    } else {
      startBtn.textContent = "START";
      // Stop timer logic here
    }
  });
});
