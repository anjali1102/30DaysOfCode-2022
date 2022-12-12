let box = document.querySelectorAll(".box");
let boxContainer = document.getElementById("box-container");

let queue = [];
boxContainer.addEventListener("click", function (e) {
  let index = e.target.dataset.index;
  //   console.log(index);
  if (index != undefined) {
    queue.push(index);
    // console.log(queue);
    box[index].classList.add("green-color");
  }

  if (queue.length == 7) {
    let count = 0;
    while (queue.length > 0) {
      let removedIndex = queue.shift();
      count++;
      setTimeout(() => {
        box[removedIndex].classList.remove("green-color");
      }, count * 1000);
    }
  }
});
