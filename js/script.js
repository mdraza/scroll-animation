// Get the div element
const divElement = document.querySelector(".glue-img");

// Add an event listener for the scroll event
window.addEventListener("scroll", () => {
  // Check if the div is in the viewport
  const rect = divElement.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowTop = window.scrollY || document.documentElement.scrollTop;
  const windowBottom = windowTop + windowHeight;

  if (rect.top >= windowTop && rect.bottom <= windowBottom) {
    // Add the CSS class
    // divElement.classList.remove("glue-img");
    divElement.classList.add("scrolled-image");
  } else {
    // Remove the CSS class
    // divElement.classList.add("glue-img");
    // divElement.classList.remove("scrolled-image");
  }
});
