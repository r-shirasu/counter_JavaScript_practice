"use strict";
let count = 0;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const buttonStyle = e.currentTarget.classList;
    if (buttonStyle.contains("increase")) {
      count++;
    }
    const getCount = document.getElementById("value");
    getCount.textContent = count;
  });
});
