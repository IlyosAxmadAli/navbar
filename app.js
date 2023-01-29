let navBar = document.querySelector(".navbar");
let openBtn = document.querySelector(".toggle");
let closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  navBar.style = `display:block;`;
});

closeBtn.addEventListener("click", () => {
  navBar.style = "display-none";
});
