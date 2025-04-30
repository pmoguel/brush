export default class Line {
    constructor({ stroke, strokeWeight }) {
        this.stroke = stroke;
        this.strokeWeight = strokeWeight;
        this.points = [];
    }

    draw() {
        stroke(this.stroke); // Apply the stroke color
        strokeWeight(this.strokeWeight); // Apply the stroke weight
        noFill();
        beginShape();
        this.points.forEach((point) => {
            vertex(point.x, point.y);
        });
        endShape();
    }
}