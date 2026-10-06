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

// Point the page icon at the circle PNG for the picked color.
// Add the new link before removing the old one so there is never no icon.
(function () {
  const old = document.querySelector('link[rel="icon"]');
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = "/favicons/" + PICKED_COLOR.slice(1).toLowerCase() + ".png";
  document.head.appendChild(link);
  if (old) old.remove();
})();
