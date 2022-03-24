/**
 * redirect the 404.html to the index page after a defined delay in seconds
 * @var string
 */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".nav-link");

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));