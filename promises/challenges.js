/*
---------Challenge 1: Promise Construtor-----------
*/

// console.log("start");
// const promise2 = new Promise((resolve, reject) => {
//   console.log(10);
// });
// console.log("end");

// start 10 end

/*
----------Challenge 2: .then method----------------
*/

// console.log("start 1");
// const promise1 = new Promise((resolve, reject) => {
//   resolve(1);
// }).then((res) => console.log(res));
// console.log("end 1");

// start end 1

/*
----------Challenge 3: resolve()----------------
*/

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });
// console.log("end");

//start 1 3 end 2

//📃resolve method does not interrupt the execution of the function.
// The code behind it will still continue to execute.

/*
----------🚨🚨Challenge 4: resolve() isn't called 🚨🚨----------
*/

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1.then((res) => {
//   console.log(2);
// });
// console.log("end");

// start 1 end

//promise1 is pending, as resolve never called, so chaining will not proceed

/*
----------Challenge 5: The One That’s There to Confuse You-------
*/

// console.log("start");
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });
// console.log("end");

//start middle 1 success end

/*
-----------Challenge 6: The One With a Fulfilling Promise--------
*/

// console.log("start");
// Promise.resolve(1).then((res) => {
//   console.log(res);
// });

// Promise.resolve(2).then((res) => {
//   console.log(res);
// });
// console.log("end");

//start  end 1 2

/*
--------------Challenge 7: setTimeout vs Promise--------
*/

// console.log("start");
// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then(() => {
//   console.log("resolve");
// });
// console.log("end");

//start end setTimeout resolve all at same time
// microtask has more priority than setTimeout

/*
------- Challenge 8: Microtasks mix Macrotasks------------
*/

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);

// 1 2 4 timerStart  timerEnd  success

/*
--------Prioritise Between Microtasks and Macrotasks------------
*/

// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   const promise1 = Promise.resolve().then(() => {
//     console.log("promise1");
//   });
// }, 0);
// const timer2 = setTimeout(() => {
//   console.log("timer2");
// }, 0);

//timer1 promise1  timer2

// 📃The correct understanding is:
// Execute all microtasks first
// Execute one macrotask
// Execute all (newly added) microtasks again
// Execute next macrotask
// Cycle through

/*
------🚨🚨 Challenge 10: A Typical Interview Question 🚨🚨------
*/

console.log("start");

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");

// start end promise1 timer1 promise2 timer2
