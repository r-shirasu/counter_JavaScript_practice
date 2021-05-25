"use strict";
let count = 0;

const buttons = document.querySelectorAll(".btn");

// buttons.forEach((btn) => {
//   console.log(btn);
btn.addEventListener("click", (e) => {
  console.log(e);
  const buttonStyle = e.currentTarget.classList;
  console.log(buttonStyle);
});
// });

// let count = 012;

// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const buttonStyle = e.currentTarget.classList;
//     if (buttonStyle.contains("increase")) {
//       count++;
//       console.log(count);
//     }
//     const getCount = document.getElementById("value");
//     getCount.textContent = count;
//   });
// });
