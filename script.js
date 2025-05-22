"use strict";

let startBtn = document.getElementById("startBtn");
let shortBtn = document.getElementsById("shortBtn");


let timeleft = 25 * 60; 

function formatTime(seconds){
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  ;  
}
startBtn.addEventListener("click", function () {
  if (startBtn.textContent === "START") {
    startBtn.textContent = "STOP";
  } else {
    startBtn.textContent = "START";
  }
});

// shortBtn.addEventListener("click", function () {
//   document.querySelector(".shortBtn").style.backgroundColor = "white";
// });

// startBtn.addEventListener("click", function () {
//   document.querySelector("#startBtn").textContent = "START";
// });
