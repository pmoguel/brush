import { gsap } from 'gsap';

export default class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
    }

    show() {
        gsap(this.preloader, {
            opacity: 1,
            duration: 1,
            ease: 'power2.Out',
        });
    }

    hide() {
        gsap.to(this.preloader, {
            delay: 1,
            opacity: 0,
            duration: 1,
            y: "-100%",
            display: 'none',
            ease: 'power2.Out',
        });
    }
}