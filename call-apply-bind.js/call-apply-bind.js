/*

-------------call methods------------------------

*/

// let name = {
//   fname: "anjali",
//   lname: "chauhan",
//   printFullName: function () {
//     console.log(this.fname + " " + this.lname);
//   },
// };

// name.printFullName();

// let name2 = {
//   fname: "sukant",
//   lname: "chauhan",
// };

// name.printFullName.call(name2);

//function borrowing

/*
------------call method with arguments----------
*/

// let name = {
//   fname: "anjali",
//   lname: "chauhan",
// };

// let printFullName = function () {
//   console.log(this.fname + " " + this.lname);
// };

// let name2 = {
//   fname: "sukant",
//   lname: "chauhan",
// };

// printFullName.call(name2);
// printFullName.call(name);

/*


----------call method with arguments-------------

*/

// let name = {
//   fname: "anjali",
//   lname: "chauhan",
// };

// let printFullName = function (live, state) {
//   console.log(
//     this.fname +
//       " " +
//       this.lname +
//       " " +
//       ", she live in " +
//       live +
//       ", in " +
//       state
//   );
// };

// let name2 = {
//   fname: "sukant",
//   lname: "chauhan",
// };

// printFullName.call(name2);
// printFullName.call(name, "india ❤️ ", "Uttar Pradesh");

/*


-------------apply methods----------

*/

// const Person = {
//   fname: "bhushan",
//   lname: "chauhan",
// };

// const Person2 = {
//   fname: "ankush",
//   lname: "chauhan",
// };

// let getFullname = function (favouriteMovie, favouriteFood) {
//   console.log(
//     `${this.fname} ${this.lname} love to eat ${favouriteFood} and watches ${favouriteMovie}`
//   );
// };

// getFullname.apply(Person, ["sholay", "saag with makka"]);
// getFullname.apply(Person2, ["web 3 meetups", "namkeen"]);

/*


-------------Bind method---------------------

*/

const Person = {
  fname: "anjali",
  lname: "chauhan",
};
const Person2 = {
  fname: "ankush ",
  lname: "chauhan",
};

let fullname = function (food) {
  console.log(`${this.fname} ${this.lname} eats ${food}`);
};

let res = fullname.bind(Person, "ice cream");
res();
