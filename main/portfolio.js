/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu  */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const myName = document.querySelector(".box-one");
const windowWidth = window.matchMedia("(orientation: landscape) and (min-width: 1024px)");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const vid = document.getElementById("background-video");
vid.playbackRate = 0.75;


// add remove line break in h1
const reportWindowSize = () => {
        
        if (windowWidth.matches) {
            myName.innerHTML="<h1>Anna </br> Tyrka</h1>"
        } else {
            myName.innerHTML="<h1>Anna Tyrka</h1>"
        }
    
};

reportWindowSize();

window.onresize = reportWindowSize;
