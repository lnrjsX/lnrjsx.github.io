const navBtn = document.querySelector("nav ul");
const rightSide = document.querySelector("header nav .right-navbar");

navBtn.addEventListener("click", () => {
  rightSide.classList.toggle("slide");
});
