/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=======MENU SHOW======== */
// validate if contant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=======MENU HIDDEN======== */
// Validate if contamt exixts
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__menu");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link , we remove the show-menu
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");

const bgHeader = () => {
  // when the scroll is greater than 50 viewport height , add the bg-header
  this.scrollY > 0
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__img-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__img-3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from(".home__img-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home__img-4", 1.2, { opacity: 0, x: 200, delay: 1.3 });
gsap.from(".moon", 100, { opacity: 0, x: 1000, delay: 0 });

//======= Menu ========
const homeData = document.getElementById("home");
const contactData = document.getElementById("contact");
const priceData = document.getElementById("price");
const eventsData = document.getElementById("events");

function home() {
  homeData.style.display = "";
  priceData.style.display = "none";
  contactData.style.display = "none";
  eventsData.style.display = "none";
  gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: 0 });
  gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 0 });
  gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 0 });
}
function contact() {
  homeData.style.display = "none";
  priceData.style.display = "none";
  contactData.style.display = "";
  eventsData.style.display = "none";
  gsap.from(".contact__data", 1.2, { opacity: 0, y: -60, delay: 0 });
  gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 0 });
  gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 0 });
}
function price() {
  homeData.style.display = "none";
  priceData.style.display = "";
  contactData.style.display = "none";
  eventsData.style.display = "none";
  gsap.from(".pricing__data", 1.2, { opacity: 0, y: -60, delay: 0 });
  gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 0 });
  gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 0 });
}
function events() {
  homeData.style.display = "none";
  priceData.style.display = "none";
  contactData.style.display = "none";
  eventsData.style.display = "";
  gsap.from(".events__data", 1.2, { opacity: 0, y: -60, delay: 0 });
  gsap.from(".home__bird-1", 1.2, { opacity: 0, x: -80, delay: 0 });
  gsap.from(".home__bird-2", 1.2, { opacity: 0, x: 80, delay: 0 });
}

// onwer social media
function myInstegram (){
    window.open("https://www.instagram.com/rillwan.tech/", "_blank");
}

// disable to inspect Option
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });