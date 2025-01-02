/* Function to set --overall-dim based on aspect ratio */
function setOverallDim() {
  const isVertical = window.innerHeight >= window.innerWidth;
  const root = document.documentElement;

  if (isVertical) {
    root.style.setProperty("--overall-dim", "100vw");
  } else {
    root.style.setProperty("--overall-dim", "50vw");
  }
}

// Initial check on page load
setOverallDim();

// Listen for resize events to update dynamically
window.addEventListener("resize", setOverallDim);
