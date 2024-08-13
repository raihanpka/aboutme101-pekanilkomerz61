const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

// Carousel
const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselBtnPrev = document.querySelector('.carousel-btn prev');
const carouselBtnNext = document.querySelector('.carousel-btn next');
const carouselDots = document.querySelector('.carousel-dots');

let currentSlide = 0;

// Add event listeners to buttons
carouselBtnPrev.addEventListener('click', () => {
  currentSlide--;
  updateCarousel();
});

carouselBtnNext.addEventListener('click', () => {
  currentSlide++;
  updateCarousel();
});

// Add event listeners to dots
carouselDots.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    currentSlide = Array.prototype.indexOf.call(carouselDots.children, e.target);
    updateCarousel();
  }
});

// Update carousel function
function updateCarousel() {
  carousel.style.transform = `translateX(${currentSlide * -100}%)`;
  updateDots();
}

// Update dots function
function updateDots() {
  const dots = carouselDots.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[currentSlide].classList.add('active');
}

// Initialize carousel
updateCarousel();

// Create dots dynamically
for (let i = 0; i < carouselItems.length; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  carouselDots.appendChild(dot);
}