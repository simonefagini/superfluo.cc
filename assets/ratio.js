// Debounce function to limit resize calculations
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function setOverallDim() {
  const isVertical = window.innerHeight >= window.innerWidth;
  const root = document.documentElement;
  const width = isVertical ? "85vw" : "47vw";
  
  // Check window width for additional breakpoints
  if (window.innerWidth > 1920) { // Very large screens
    root.style.setProperty("--overall-dim", "40vw");
  } else if (window.innerWidth <= 800) { // Mobile devices
    root.style.setProperty("--overall-dim", "85vw");
  } else {
    root.style.setProperty("--overall-dim", width);
  }
}

// Initial check on page load
setOverallDim();

// Debounced resize handler
const debouncedSetOverallDim = debounce(setOverallDim, 100);

// Listen for resize events with debounced handler
window.addEventListener("resize", debouncedSetOverallDim);
