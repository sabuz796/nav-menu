const hamburgerMenu = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  //changing hamburger menu while clicking
  hamburgerMenu.classList.toggle("ph-x");
  navList.classList.toggle("menu-show");
});
