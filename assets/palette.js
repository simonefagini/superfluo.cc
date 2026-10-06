const PALETTE = [
  "#FFFB76",   //Yellow
  "#8DFF76",   //Green
  "#76E9FF",   //Blue
  "#ff76b2"    //Pink
];

function randomColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}

// One color per page load, shared by the page, the logo and the favicon
const PICKED_COLOR = randomColor();

// Swap the static fallback icon for a circle in the picked color
(function () {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">' +
    '<circle cx="16" cy="16" r="15" fill="' + PICKED_COLOR + '"/></svg>';
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = "data:image/svg+xml," + encodeURIComponent(svg);
  const old = document.querySelector('link[rel="icon"]');
  if (old) old.remove();
  document.head.appendChild(link);
})();
