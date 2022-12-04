// due to callbacks, we can do asynchronous work in JS

// function x(y) {
//   console.log("hello");
// }

// x(function y() {});

//here y is callback function

/*
------------------------------------
*/

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

//closures with event listeners
//famous Interview Q
// show how many times button clicked

/*
------------------------------------
*/

// console.log("checking");
// const clickMeBtn = document.querySelector("#clickMe");
// let count = 0;
// clickMeBtn.addEventListener("click", function xyz() {
//   console.log("button clicked!");
//   console.log("button", (count += 1));
// });

/*
------  🚨 without global memory 🚨--------
*/

const clickMeBtn = document.querySelector("#clickMe");

function countButton() {
  let count = 0;
  clickMeBtn.addEventListener("click", function xyz() {
    console.log("button", (count += 1));
  });
}

countButton();

//event listeners are heavy, Event listeners are heavy, and if a page and
// so many buttons event listeners attach to it, page can go slow because of so many clsoures sitting and consuming the memory.
// so when we do removeEventListeners, all these variable hold by closures will be garbage collected
