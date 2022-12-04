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
