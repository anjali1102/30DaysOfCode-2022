/*
----------------------- METHOD 1 - reverse ---------------------
*/

// const array = [1, 2, 3, 4, 5, 6, 7];

// console.log(array.reverse());
// console.log("original array", array);
//orignal array mutated

/*
 ------------------------ METHOD 2- fill ------------------------
*/

// const array2 = [1, 2, 3, 4, 5];
// console.log(array2);
// array2.fill("💗");
// console.log(array2);
// array2.fill("⚛", 2, 5);
// console.log(array2);

/*
 ------------------------ METHOD 3- concat ------------------------
*/

//merge 2 or more arrays. this metho doesnot change existing array
//but instead return a new Array

// const arrayA = ["a", "b", "c", "d"];
// const arrayB = ["e", "f", "g", "h"];

// const mergedArray = arrayB.concat(arrayA);
// console.log(mergedArray);
// console.log(arrayA);
//doesnot change original array

/*
 ------------------------ METHOD 4- join ------------------------
*/

// join() method creates and return a new string by
// concatenating all all the elements in an array (or array like objects)
// separated by commas or a specific string,
// if array has only one item, then that item will be returned without using separator

// const arrayC = ["anjali", "anju", "ankush"];
// const newStr = arrayC.join("💞");
// console.log(newStr);
// console.log(arrayC);
// doesnot mutated
//create string from array

/*
 ------------------------ METHOD 5- push ------------------------
*/

//push retunes length of array

// const fruits = ["🍎", "🍏", "🍍", "🍇"];
// const whatisReturn = fruits.push("🧑‍⚕️");
// console.log(whatisReturn);
// console.log(fruits); //changed original array

/*
 ------------------------ METHOD 6- pop ------------------------
*/

// const fruitsbucket = ["🍎", "🍏", "🍍", "🍇"];
// const whatisReturn2 = fruitsbucket.pop(); //🍇
// console.log(whatisReturn2);
// console.log(fruitsbucket); //changed original array

/*
 ------------------------ METHOD 7- unshift ------------------------
*/

// add beginnning of array
// whatisReturn3=length of array ie 8

// const veggiesbucket = ["🥔", "🥕", "🫑", "🍠", "🍅", "🍍"];
// const whatisReturn3 = veggiesbucket.unshift("💪", "🔝"); //
// console.log(whatisReturn3);
// console.log(veggiesbucket);

/*
 ------------------------ METHOD 8- shift ------------------------
*/

const veggiesbucket2 = ["🥔", "🥕", "🫑", "🍠", "🍅", "🍍"];
const whatisReturn4 = veggiesbucket2.shift(); //
console.log(whatisReturn4);
console.log(veggiesbucket2);
