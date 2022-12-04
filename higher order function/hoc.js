//higher order functions make Functional Programming in JavaScript possible

//HOC=> Functions which take another function as an argument or return a function from it

function x() {
  console.log("hello");
}

function y(x) {
  x();
}

//y is higer order function and x is callback functions

/*
----------------------------------------
*/

const radius = [3, 1, 2, 4];
//find area of all 4 circless

// function calculateArea() {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(~~(Math.PI * radius[i] * radius[i]));
//   }
//   return output;
// }
// console.log(calculateArea(radius));

/*
----------------------------------------
*/

// function calcCircumference() {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(~~(2 * Math.PI * radius[i]));
//   }
//   return output;
// }
// console.log(calcCircumference(radius));

/*
----------------------------------------
*/

// function calDiameter() {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(~~(2 * radius[i]));
//   }
//   return output;
// }
// console.log(calDiameter(radius));

/*
----Improvised Code--------
*/

function calcDiameter(radius) {
  return 2 * radius;
}

function calculateArea(radius) {
  return Math.PI * radius * radius;
}

function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculate(logic, radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(Math.floor(logic(radius[i])));
  }
  return output;
}
console.log(calculate(calcCircumference, radius));
console.log(calculate(calculateArea, radius));
console.log(calculate(calcDiameter, radius));

/*
-------------map polyfill------------

*/

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.prototype.myOwnMap = function () {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(double(array[i]));
//   }
//   return newArr;
// };

// function double(num) {
//   return num * num;
// }
// console.log(array.myOwnMap((item) => item));
