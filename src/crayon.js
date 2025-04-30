import Preloader from "./preloader.js";
import Line from "./line.js";
let lines = [];
let _line;
let selectedColor = '#000000';
const colorPicker = document.getElementById('color-picker');

if (!colorPicker) {
    console.error("Color picker element not found!");
}
const redoBtn = document.getElementById('redo-btn');
const eraseBtn = document.getElementById('erase-btn');
const undoBtn = document.getElementById('undo-btn');

redoBtn.addEventListener('click', () => {
});

eraseBtn.addEventListener('click', () => {
    lines = [];
    background(0);
});

let brushSize = 1; // Variable para almacenar el grosor del trazo

const brushSizeInput = document.getElementById('brush-size');
brushSizeInput.addEventListener('input', (event) => {
    brushSize = parseFloat(event.target.value); // Actualiza el grosor del trazo
    console.log("Brush size updated:", brushSize);
});

let redoStack = [];

undoBtn.addEventListener('click', () => {
    console.log("Undo clicked");
    if (lines.length > 0) {
        const lastLine = lines.pop(); 
        redoStack.push(lastLine); 
    }
    console.log("Lines:", lines.length);
});

redoBtn.addEventListener('click', () => {
    console.log("Redo clicked");
    if (redoStack.length > 0) {
        const lastRedoLine = redoStack.pop(); 
        lines.push(lastRedoLine); 
    }
    console.log("Lines:", lines.length);
});

colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value; // Update the selected color
    console.log("Selected color updated:", selectedColor);
});


window.setup = (event) => {
    createCanvas(windowWidth, windowHeight);
};

window.mousePressed = (event) => {
    if (event.target.tagName === 'CANVAS') { // Check if the event occurred on the canvas
        _line = new Line({
            stroke: color(selectedColor), // Use the selected color
            strokeWeight: brushSize
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
    background(255);
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