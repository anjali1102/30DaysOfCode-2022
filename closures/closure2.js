// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Anjali Chauhan");

// }

// x();

//📃 callback function forms closures,
// and whereever this function goes,
// it rememebers the reference of i
// then, setTimeout take this callback f() and attaches timer with it and stores it somewhere
// and javascript proceed

// once timer is expire, it put callback function in callstack and execute it

/*

-------------------

*/

// print  1 2 3 4 5 after each and other second

// function timebomb() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hello");
// }

// timebomb();

/*  
 ------------------------------------------------------
*/

// function timebomb() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hello");
// }

// timebomb();

/*
---------------------------------------------------------
*/

// function timebomb() {
//   for (var i = 1; i <= 5; i++) {
//     function close(j) {
//       setTimeout(() => {
//         console.log(j);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("hello");
// }

// timebomb();

// everytime setTimeout is stored in separate memory and attach timer, so
// everytime close is called, it has new copy of i in it
