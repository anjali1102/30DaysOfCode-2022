// getName(); //hello because functions are hoisted
// console.log(x);
// console.log("getName", getName);
//undefined, on memory creation phase, JS allocates undefined(placeholder, special keyword) to variable

// var x = 7;
// function getName() {
//   console.log("hello");
// }

//📝 HOISTING is accessing the variable and functions before defining them without getting errors

/*  
  ---------- undefined vs not defined  ------------
  
*/

// getName();
// console.log(x); //reference error
// function getName() {
//   console.log("hello");
// }

/*

 -----hoisting with arrow Functions---------

*/

// getName(); //typeError
// console.log(x);
// var getName = () => {
//   console.log("hello");
// };
// x = "👋";

//📝 arrow function behave just like another variable, arrow f() are not hoisted

/*
---------------- function expressions are not hoisted--------------
*/

// getName();
// var getName = function () {
//   console.log("hello");
// };

/*------------------------------------*/

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var y = 20;
  console.log(y);
}

//📝1. In JS, before the code is executed, the variables get initialized to undefined.
// 2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
// 3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
// 4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.
// 5. Variable declarations are scanned and are made undefined
// 6. Function declarations are scanned and are made available
