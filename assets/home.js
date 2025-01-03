const colors = [
  "#FFFB76",   //Yellow
  "#8DFF76",   //Green
  "#76E9FF",  //Blue
  "#ff76b2"   //Pink
  
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
