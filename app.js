const menuToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");

menuToggler.addEventListener("click", function () {
  navbarNav.classList.toggle("show");
});
