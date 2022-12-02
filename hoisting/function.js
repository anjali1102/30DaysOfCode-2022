/*------------------    functions are hoisted  ----------------------------*/

// function foodthought() {
//   console.log("choice1" + favouriteFood); //choice1undefined
//   var favouriteFood = "gobhi";
//   console.log("choice2" + favouriteFood); //choice2gobhi
// }

// foodthought();

/*----------------------------   function expressions are not hoisted -------------------------------*/

// food();

// var food = function foodthought() {
//   console.log("choice1" + favouriteFood);
//   var favouriteFood = "gobhi";
//   console.log("choice2" + favouriteFood);
// };

//typeError food is not a function

// ---------------------------------------------

var favouriteFruit = "Grapes";
// console.log("choice3" + favouriteFruit); //choice3Grapes
var foodthought = function () {
  console.log("choice1" + favouriteFruit); //choice1Grapes
  favouriteFruit = "apple";
  console.log("choice2" + favouriteFruit); //choice2apple
};

foodthought();
console.log("choice3" + favouriteFruit); //

/*---------------------------------------------------*/

var favouriteFruit = "Grapes";
var foodthought = function () {
  console.log("choice1" + favouriteFruit);
  var favouriteFruit = "apple";
  console.log("choice2" + favouriteFruit);
};

foodthought();
console.log("choice3" + favouriteFruit);

