const container = document.querySelector(".star-container");
const star = document.querySelectorAll(".star");
const ratingCount = document.getElementById("rating-count");

let filled = 0;

container.addEventListener("click", function (e) {
  let userClickedStar = e.target.dataset.index;
  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("fill-star");
  }
  for (let i = 0; i < userClickedStar; i++) {
    star[i].classList.add("fill-star");
  }
  filled = userClickedStar;

  ratingCount.innerText=filled
});

//hovering

container.addEventListener("mouseover", function (e) {
  let userClickedStar = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("fill-star");
  }
  for (let i = 0; i < userClickedStar; i++) {
    star[i].classList.add("fill-star");
  }
});

container.addEventListener("mouseleave", function (e) {
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("fill-star");
  }
  for (let i = 0; i < filled; i++) {
    star[i].classList.add("fill-star");
  }
});
