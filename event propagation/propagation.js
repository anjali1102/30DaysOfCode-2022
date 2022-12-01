import "./styles.css";

const grandParent = document.querySelector(".grandParent");
const Parent = document.querySelector(".parent");
const Child = document.querySelector(".child");

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent clicked");
//   },
//   false //bubbling
// );

// Parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked");
//   },
//   true //capturing
// );

// Child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked");
//   },
//   false //bubbling
// );

/*---------------------------- Example 2 --------------------------*/

// grandParent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent clicked");
//   },
//   true //capturing
// );

// Parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked");
//   },
//   false //bubbling
// );

// Child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child clicked");
//   },
//   true //capturing
// );

/*---------------------------- Example 3 --------------------------*/

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("grandparent clicked");
  },
  false //capturing
);

Parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent clicked");
  },
  false //bubbling
);

Child.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
  },
  false //capturing
);
