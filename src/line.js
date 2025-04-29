export default class Line {
    constructor(args = {}) {
        this.points = [];
        this.stroke = args.stroke || color(255,0,0)
        this.strokeWeight = args.strokeWeight || 1
}

draw() {
    noFill();
    stroke(this.stroke);
    strokeWeight(this.strokeWeight);
    beginShape();
    this.points.forEach((p) => {
        vertex(p.x, p.y);
        });
        endShape();
    }
}