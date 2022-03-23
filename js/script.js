/**
 * redirect the 404.html to the index page after a defined delay in seconds
 * @var string
 */
 function burger() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}