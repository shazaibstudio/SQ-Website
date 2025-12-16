// ===== IMPORTS (TOP ONLY) =====
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { startSpaceship, stopSpaceship } from './animations.js';

// ===== BASIC SETUP =====
const canvas = document.getElementById('portfolio-canvas');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000010);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// ===== LIGHTING =====
scene.add(new THREE.AmbientLight(0xffffff, 0.7));

const keyLight = new THREE.PointLight(0x88ffff, 1.2);
keyLight.position.set(5, 10, 5);
scene.add(keyLight);


const testCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
scene.add(testCube);


// ===== LOADERS =====
const loader = new GLTFLoader();

let spaceship = null;
const planets = [];

// ===== LOAD SPACESHIP =====
loader.load('/models/spaceship.glb', (gltf) => {
    spaceship = gltf.scene;
    spaceship.scale.set(0.5, 0.5, 0.5);
    spaceship.rotation.y = Math.PI;
    scene.add(spaceship);
});

// ===== LOAD PLANETS =====
const planetPositions = [
    [4, 0, -20],
    [-4, 1, -40],
    [3, -1, -60]
];

planetPositions.forEach((pos, i) => {
    loader.load(`/models/planet${i + 1}.glb`, (gltf) => {
        const planet = gltf.scene;
        planet.position.set(...pos);
        scene.add(planet);
        planets.push(planet);
    });
});

// ===== BUTTON CONTROLS =====
document.getElementById('start-btn').addEventListener('click', () => {
    if (spaceship) startSpaceship(spaceship);
});

document.getElementById('stop-btn').addEventListener('click', stopSpaceship);

// ===== ANIMATION LOOP =====
function animate() {
    requestAnimationFrame(animate);

    planets.forEach(p => {
        p.rotation.y += 0.001;
    });

    renderer.render(scene, camera);
}
animate();

// ===== RESIZE =====
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
