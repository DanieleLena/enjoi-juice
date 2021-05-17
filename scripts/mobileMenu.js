const burger = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cross = document.getElementById("cross-mobile");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide-mobile-menu");
});

cross.addEventListener("click", () => {
  mobileMenu.classList.add("hide-mobile-menu");
});
