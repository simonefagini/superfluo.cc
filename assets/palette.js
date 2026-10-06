const PALETTE = [
  "#FFFB76",   //Yellow
  "#8DFF76",   //Green
  "#76E9FF",   //Blue
  "#ff76b2"    //Pink
];

function randomColor() {
  return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}
