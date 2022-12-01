Function.prototype.myownvariable = function lovelyFunc() {
  console.log("hello");
};

function hello() {}

console.log(hello.__proto__.myownvariable()); //hello
console.log(hello.__proto__); // { myownvariable: [Function: lovelyFunc] }

//inheritance in JS => When an object trying to access variables and properties of another object

//Whenever we create object/ function/ methods/ array/variable , these come with some hidden properties, which we call prototype

// prototype is an Object that get attach to function/method/oject and this object has some hidden properties
//which can be access via dot (.)

// __proto__ is reference to prototype, if we want to access prototype, we do __proto__

// prototype object has a prototype of its own, and so on until an object is reached with null as its prototype,
//this is called prototype chaining
