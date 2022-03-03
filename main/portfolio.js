/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu  */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const homePage = document.querySelector(".home");
const myName = document.querySelector(".box-one");
const windowWidth = window.matchMedia("(orientation: landscape) and (min-width: 1025px)");


hamburger.addEventListener("click", mobileMenu);
navMenu. addEventListener("click", hideMenu);
homePage.addEventListener("click", hideMenu);

// show / hide menu when clicked on an icon
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// hide menu when clicked on a section
function hideMenu() {
    setTimeout(() => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    },100);
 
}

const vid = document.getElementById("background-video");
vid.playbackRate = 0.75;


reportWindowSize();

window.onresize = reportWindowSize;
