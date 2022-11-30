/*
  -------------------- METHOD 1 - forEach ----------------------
*/

//array.forEach(function(currrentValue, index, arr))

// const array = ["a", "b", "c", "d"];
// const resForEach = array.forEach((curr, index, arr) => {
//   console.log("name", curr + " at index " + index);
//   console.log(curr + " 👋");
//   console.log("array", arr);
// });

// console.log("resForEach", resForEach);
// console.log("original array", array);

// forEach() method execute a provided function once for each array Element. There is no point to break a forEach() loop other than by throwing an exception

/*
  -------------------- METHOD 2 - map ----------------------
*/

// return new array and it calls function on each element in array

// const nums = [1, 2, 3, 4];

// const newNumArray = nums.map(
//   (eachnum, index, arr) => `${eachnum * 10} at ${index} and array is ${arr}`
// );

// console.log(newNumArray);
// console.log(nums);

/*
 -------------------- METHOD 3 - every ----------------------
*/

// return boolean value
// checks whether all elements in array satisfies the callback function condition

// const age = [32, 33, 40];
// const isAllAdult = age.every((eachAge) => eachAge >= 18);

// console.log(isAllAdult);
// console.log(isAllAdult ? "all are adults" : "all are not adults");

/*
 -------------------- METHOD 4 - some ----------------------
*/

//return boolean
// checks whether atleast one element in the array satisfies te callback condition. Donot modifies the array

// const age = [32, 33, 13, 40];
// const isAllAdult = age.some((eachAge) => eachAge >= 18);
// console.log(isAllAdult);

/*
-------------------- METHOD 5 - filter ----------------------
*/

// Donot mutate array, create new array with all the elements that satisfies the callback condition

// const Personsage = [32, 33, 16, 40, 2, 1, 0, "abcd", null, " "];
// const filteredAge = Personsage.filter((item) => item >= 18);
// console.log(filteredAge);
// console.log(Personsage);

/*
 -------------------- METHOD 6 - reduce ----------------------
*/

// array.reduce(function(total, currentValue, currentIndex, array))

// const array = [1, 2, 3, 4];

// const sumOfElements = array.reduce(
//   (total, currentValue) => total + currentValue,
//   20
// );

// console.log(sumOfElements);

/*
 -------------------- METHOD 7 - reduceRight ----------------------
*/

// const array = [1, 200, 300, 400];
// const sumOfElements2 = array.reduceRight(
//   (total, currentValue) => total - currentValue,
//   20
// );
// console.log(sumOfElements2);

/* 
 -------------------- METHOD 8 - find ----------------------
*/

// const Personsage = [32, 33, 16, 40, 2, 1, 0, "abcd", null, " "];
// const findAge = Personsage.find((item) => item >= 18);
// console.log("find: ", findAge);
// console.log("original array", Personsage);

/*
 -------------------- METHOD 9 - findIndex ----------------------
*/

// return the index of first element in array that satisfies callback condition

// const array = [5, "10", 10, 10];
// const firstIndexOfSatisfiedCondition = array.findIndex((num) => num === 10);
// console.log("findIndex: ", firstIndexOfSatisfiedCondition);

/* 
 -------------------- METHOD 10 - indexOf ----------------------
*/

// const array2 = [5, 10, 15, 20];
// const indexOfres = array2.indexOf(20);
// console.log("indexOfres", indexOfres);
//return -1 if not found element in array
//try [5,10,15,-20]

// note :
// Array.prototype.indexOf() expects a value as first parameter
//this makes it a good choice to find index of arrays of primitive type like
//arrays, string, number or boolean

//Array.prototype.findIndex() expects a callback as first parameter
//use ***findIndex()*** when non primitive types objects
// or find conition is more complex than just a value

/*
 -------------------- METHOD 11 - lastIndexOf ----------------------
*/

// lastIndexOf() return last index at which a given element can be found in array
// ,or -1 if it is not present. the array is searched backwards

const array3 = [5, 10, 999, 10, 15, 20];
const index = array3.lastIndexOf(10); //3
console.log("lastIndexOf", index);

/* 
-------------------- METHOD 12 - includes ----------------------
*/

// return Boolean value
const names = ["anjali", "anju", "ankush"];
const isFound = names.includes("anjali");
console.log("isFound", isFound); //true
