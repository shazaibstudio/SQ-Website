import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

let shipTween = null;

export function startSpaceship(spaceship) {
    if (!spaceship) return;

    shipTween = gsap.to(spaceship.position, {
        duration: 25,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
            path: [
                { x: 0, y: 1, z: 0 },
                { x: 3, y: 2, z: -15 },
                { x: -3, y: 1, z: -30 },
                { x: 0, y: 2, z: -50 },
                { x: 2, y: 1, z: -70 }
            ],
            curviness: 2
        }
    });
}

export function stopSpaceship() {
    if (shipTween) shipTween.pause();
}
