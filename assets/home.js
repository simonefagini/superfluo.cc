const colors = [
  "#FFFB76",
  "#8DFF76",
  "#76E9FF",
  "#ff76b2"
  
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Set random color on load
window.onload = function () {
  const randomIndex = getRandomInt(colors.length);
  const selectedColor = colors[randomIndex];
   document.documentElement.style.setProperty("--logo-bg", selectedColor);
};
