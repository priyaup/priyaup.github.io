// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the 'animate' class when an element is in the viewport

function handleScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

// Listen for scroll events to trigger animations

window.addEventListener('scroll', handleScrollAnimation);

// Initial check to trigger animations on page load

handleScrollAnimation();


