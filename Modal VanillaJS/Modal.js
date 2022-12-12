let openModal = document.querySelector(".modal");
openModal.style.display = "none";

let btn = document.getElementById("open-modal");

let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
  if (openModal.style.display === "none") {
    openModal.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
    openModal.style.display="none"
});
