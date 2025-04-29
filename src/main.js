import Circles from './circles.js';

let circles;
window.setup = (event) => {
  circles = new Circles({
    palette: ['#FFC499', '#9BFF98', '#A999FF'],
    total_points: 10
  });
  createCanvas(windowWidth, windowHeight);
};

window.draw = (event) => {
  circles.draw()
};

window.windowResized = (event) => {
  resizeCanvas(windowWidth, windowHeight);
};

window.mousePressed = (e) => {
  console.log(e);
};

window.mouseMoved = (e) => {
  console.log(e);
};

window.mouseReleased = (e) => {
  console.log(e);
};