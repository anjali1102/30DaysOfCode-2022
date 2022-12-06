/*

-----------the problem-------------


*/

// const uno = () => {
//   return "I am One";
// };

// const dos = () => {
//   setTimeout(() => {}, 3000);
// };

// const tres = () => {
//   return "I am Three";
// };

// const callMe = async () => {
//   let valOne = uno();
//   console.log(valOne);

//   let valTwo = await dos();
//   console.log(valTwo);

//   let valThree = tres();
//   console.log(valThree);
// };

// callMe();

/*

-------------the solution----------

*/

// const uno = () => {
//   return "I am One";
// };

// const dos = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am two");
//     }, 3000);
//   });
// };

// const tres = () => {
//   return "I am Three";
// };

// const callMe = async () => {
//   let valOne = uno();
//   console.log(valOne);

//   let valTwo = await dos();
//   console.log(valTwo);

//   let valThree = tres();
//   console.log(valThree);
// };

// callMe();

//📃 Promise is object representing eventual completion of an
// asynchrnous operation

// Promise : {data: undefined}
// empty object and after sometime data object will be filled automatically

// BEAUTY OF .then
// .then give us the guarantee, control of program to us, it give us trust
// that code will fulfilled / rejected and will execute only once.
// but with callback we don't have this trust and control over the program

//Promise Chaining avoid callback hell,
// it make code  evenly lean vertically
// we can attach function to Promise Object by Promise Chaining, as incallback we were passing one f() to another f()
