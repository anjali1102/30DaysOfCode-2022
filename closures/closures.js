// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); //7
//   }
//   y();
// }
// x();

//closures is a function
//bundled along with its lexical scope

/*

-------------------------------------------

*/

// function x1() {
//   var a1 = function y1() {
//     console.log("hello");
//   };
//   a1();
// }
// x1();

/*

-------------------------------------------

*/

// function x2(y2) {
//   var a = 7;
//   console.log("y2", y2);
// }

// x2(function y2() {});

/*

-------------------------------------------

*/

// function x3() {
//   var a3 = 7;
//   function y3() {
//     console.log("a3", a3);
//   }
//   return y3;
// }
// x3()();

/* 
-----🚨corner case🚨----------------------
*/

// function x4() {
//   var a4 = 7;
//   function y4() {
//     console.log("a4", a4);
//   }
//   a4 = 100;
//   return y4;
// }

// x4()();

//function along with the reference to variable
//NOT value

/*

----------------------------------------------

*/

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     a = 100;
//     return y;
//   }
//   return x;
// }

// z()()();

// y forms a closure along with scope of x an scope of y

// USAGES OF CLOSURES:
// - currying
// - memoize
// - setTimeout
// - iterators
// - Module Design Pattern
// - Function like once
