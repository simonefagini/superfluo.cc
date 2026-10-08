// Set random color on load
window.onload = function () {
  const root = document.documentElement.style;
  root.setProperty("--logo-bg", PICKED_COLOR);
  root.setProperty("--highlight-color", lightComplement(PICKED_COLOR));
};

// Opposite hue of a #rrggbb color, lightened and muted for the text selection
function lightComplement(hex) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
  }
  h = (h * 60 + 180 + 360) % 360;
  return "hsl(" + Math.round(h) + " 45% 82%)";
}
