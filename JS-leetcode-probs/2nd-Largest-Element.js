// let arr = [1, 10, 2, 9];
let arr = [1, 2, 5, 5, 6]; // if array is having duplicates

function SecondLargestElement() {
  let max = -1; //1 10
  let secondmax = -1; //-1  1  2  9
  let arr2 = [...new Set(arr)];
  arr2.forEach((ele) => {
    // console.log(ele);
    if (ele > max) {
      let temp = max;
      max = ele;
      secondmax = temp;
    } else if (ele > secondmax) {
      secondmax = ele;
    }
  });
  return secondmax;
}

console.log(SecondLargestElement(arr));
