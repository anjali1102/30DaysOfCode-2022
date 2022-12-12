const add = document.getElementById("add");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const input = document.getElementById("input");
let count = document.getElementById("count");

add.addEventListener("click", function () {
  let currentVal = parseInt(count.innerText);
  let increamentVal = parseInt(input.value);
  let result = currentVal + increamentVal;
  count.innerText = result;
});

minus.addEventListener("click", function (e) {
  let currentVal = parseInt(count.innerText);
  let increamentVal = parseInt(input.value);
  let result = currentVal - increamentVal;
  if(result<0){
    result=0;
  }
  count.innerText = result;
});

reset.addEventListener("click", function (e) {
  count.innerText = 0;
});
