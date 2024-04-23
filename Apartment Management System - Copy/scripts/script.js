// MAIN PAGE

// Navigation Background Change
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
      $('header').addClass('scrolled');
  } else {
      $('header').removeClass('scrolled');
  }
});

// Hamburger Menu
function toggleSidePanel() {
  var sidePanel = document.querySelector('.side-panel');
  var isOpen = sidePanel.style.right === '0px'; // Check the right property instead of transform

  if (isOpen) {
    sidePanel.style.right = '-250px'; // Close the side panel
  } else {
    sidePanel.style.right = '0px'; // Open the side panel
  }
}

// Function to handle navigation to the next card
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Function to handle navigation to the previous card
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateCarousel();
}

// Function to update the carousel by applying appropriate CSS classes
function updateCarousel() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add('current');
    } else {
      slide.classList.remove('current');
    }
  });
}

// Set event listeners for the previous and next buttons
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Set initial slide
let currentIndex = 0;
const slides = document.querySelectorAll('.card');
updateCarousel();
