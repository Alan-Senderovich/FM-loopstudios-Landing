const toggleBtn = document.querySelector(".menu__btn");
const navMenu = document.querySelector(".nav__menu");
const heroContent = document.querySelector(".hero__content");
const header = document.getElementById("header");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle("active");
  console.log(navMenu);
  heroContent.classList.toggle("none");
}

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
