import Point from './point.js';

export default class Circles {
    constructor(args = {}) {
        this.total_points = args.total_points || 10;
        this.palette = args.palette || ['#FFC499', '#9BFF98', '#A999FF'];
        this.bg = this.palette[Math.floor(Math.random() * this.palette.length)];
        this.circles = [];
        for (let i = 1; i <= this.total_points; i++) {
            const randomColor = this.palette[Math.floor(Math.random() * this.palette.length)];
            const point = new Point({
                stroke: 0,
                fill: randomColor,
                size: 300 - (20 * i),
                friction: i * 0.1,
                alpha: 150
            })
            this.circles.push(point);
        }
    }

    draw() {
        background(this.bg);
        for (let i = 0; i < this.circles.length; i++) {
            // blendMode(DARKEST);
            this.circles[i].draw();
        }
    }
}