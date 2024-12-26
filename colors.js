// List of color codes
const colors = [
  "#b9dde5",
  "#b9d599",
  "#f7c59e",
  "#d988ae"
  
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Set random color on load
window.onload = function () {
  const randomIndex = getRandomInt(colors.length);
  const selectedColor = colors[randomIndex];
  document.documentElement.style.setProperty("--body-bg", selectedColor);
};
