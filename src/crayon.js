import Preloader from "./preloader.js";
import Line from "./line.js";
let lines = [];
let _line;

const redoBtn = document.getElementById('redo-btn');
const eraseBtn = document.getElementById('erase-btn');
const undoBtn = document.getElementById('undo-btn');

redoBtn.addEventListener('click', () => {
});

eraseBtn.addEventListener('click', () => {
    lines = [];
    background(0);
});

undoBtn.addEventListener('click', () => {
    console.log("Undo clicked");
    if (lines.length > 0) {
        lines.pop();
    }
    console.log("Lines:", lines.length);
});

window.setup = (event) => {
    createCanvas(windowWidth, windowHeight);
};

window.mousePressed = (event) => {
    if (event.target.tagName === 'CANVAS') { // Verifica si el evento ocurrió en el canvas
        _line = new Line({
            stroke: color(random(255), random(255), random(255)),
            strokeWeight: random(1, 10),
        });
        lines.push(_line);
        console.log("Line added. Total lines:", lines.length);
    }
};

window.mouseDragged = (event) => {
    if (event.target.tagName === 'CANVAS' && mouseIsPressed) { // Verifica si el evento ocurrió en el canvas
        const p = createVector(event.x, event.y);
        _line.points.push(p);
    }
};

window.draw = (event) => {
    background(0);
    lines.forEach((line) => {
        line.draw();
    });
};

window.windowResized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
};

window.addEventListener('load', () => {
    const preloader = new Preloader();
    preloader.hide();
});