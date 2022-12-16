const arr = [1, 2, 3, 4, 5, 7, , 1, 2, 3, 1, 2, 4, 5, 7];

let count = {};
arr.forEach((val, index) => {
  if (!count[val]) {
    count[val] = 1;
  } else {
    count[val] = count[val] + 1;
  }
});

console.log(count);
