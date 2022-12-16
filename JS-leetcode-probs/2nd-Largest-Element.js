let arr = [1, 10, 2, 9];

function SecondLargestElement() {
  let max = -1; //1 10
  let secondmax = -1; //-1  1  2  9
  arr.forEach((ele) => {
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
