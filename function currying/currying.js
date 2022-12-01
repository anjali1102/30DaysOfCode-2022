/*-----------------------  multiply via bind  -------------------------*/

let multiplyme = function (x, y) {
  // console.log(`x is ${x} and y is ${y}`);
  console.log(x * y);
};
// console.log(multiplyme.call(this, 2, 5));

let multiplyBywo = multiplyme.bind(this, 2);
multiplyBywo(5);

/*------------------    multiply via currying      ---------------------*/

let multiplyme2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let res = multiplyme2(2);
console.log(res(3));
