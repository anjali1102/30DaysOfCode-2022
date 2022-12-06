// 4 methods of promises
// Promise.allSettled, Promise.any()  came recent 2020
// Promise.race, Promise.all  // older

/*

------------------Promise.all ()-------------

*/

// const promise1 = Promise.resolve(3);
// const promise2 = Promise.resolve(42);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => console.log("error occured ", err));

/*
-----------------------------------------------------
*/

// const promise01 = Promise.resolve(3);
// const promise02 = Promise.reject(42);
// const promise03 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([promise01, promise02, promise03])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => console.log("error occured ", err));

// Promise.all () return an array of all individual returned promises in same sequence it's passed,
// if any of promises rejected, throws the error, which can be handled with .catch()

/*

------------------Promise.race()--------------------

*/

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo1");
//     reject("i am rejected 1");
//   }, 5000);
// });
// const promise2 = Promise.resolve(42);
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo2");
//     reject("i am rejected 2");
//   }, 1000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((err) => console.log("error occured ", err));

// Promise.race() return  fast executing promise.
// If the fast executing promise is rejected, it will show error message

/*

----------------Promise.any()--------------------

*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("i am rejected 1");
  }, 5000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo2");
  }, 1000);
});
const promise2 = Promise.resolve(42);

Promise.any([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log("error occured ", err));

// 42

//returns the fulfilled promise 