// const arr = [5, 1, 3, 2, 6];

// function double(num) {
//   return num * num;
// }
// console.log(arr.map(double));

// function convertToBinary(num) {
//   return num.toString(2);
// }
// console.log(arr.map(convertToBinary));

/*
------------Filter-------------------
*/

const arr2 = [5, 1, 3, 2, 6];

function isOdd(item) {
  return item % 2 != 0;
}
const filterOdd = arr2.filter(isOdd);
console.log(filterOdd);
console.log("original", arr2);

/*
-------------------------------------------
*/

// const arr3 = [5, 1, 3, 2, 6];
// console.log(arr3.filter((item) => item > 4));

/*

------------  Reduce -----------------
*/

// const arr4 = [5, 1, 3, 2, 6];
// function findSum() {
//   let sum = 0;
//   for (let i = 0; i < arr4.length; i++) {
//     sum = sum + arr4[i];
//   }
//   return sum;
// }
// console.log(findSum(arr4));

/*------------------------------*/

// const output = arr4.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

/*--------------------------------*/

// const result = arr4.reduce((acc, curr) => {
//   return (acc = acc + curr);
// }, 0);
// console.log(result);

/*------------------------------*/

// const arr5 = [500, 10, 30, 20, 60];
// function findMax(arr5) {
//   let max = 0;
//   for (let i = 0; i < arr5.length; i++) {
//     if (arr5[i] > max) {
//       max = arr5[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr5));

/*------------------------------*/

// const maxOfResult = arr5.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(maxOfResult);

/*----------tricky Q----------*/

const users = [
  { fname: "anjali", lname: "chauhan", age: 26 },
  { fname: "anju", lname: "chauhan", age: 75 },
  { fname: "ankush", lname: "chauhan", age: 50 },
  { fname: "bhushan", lname: "chauhan", age: 50 },
  { fname: "sukant", lname: "chauhan", age: 26 },
];

//list of full names
// ["anjali chauhan", ........]

// const getFullName = users.map((eachObj) => `${eachObj.fname} ${eachObj.lname}`);
// console.log(getFullName);

/*---------- 🚨 TRICKY Q 🚨----------*/

// {26 : 2, 75: 1 , 50:1}

// const ageFrequency = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] += 1;
//   } else {
//     acc[curr.age] = 1;
//   }

//   return acc;
// }, {});
// console.log(ageFrequency);

/*------------------------------------*/

// const fnameLessThan30 = users
//   .filter((item) => item.age < 30)
//   .map((item) => item.fname);
// console.log(fnameLessThan30);

/*----------------------------------*/

// console.log(
//   users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//       acc.push(curr.fname);
//     }
//     return acc;
//   }, [])
// );
