import * as THREE from 'three';
import * as ManagementConst from "./constants/management.js"
import {Star} from './objects/Star.js';
import { OrbitPath } from './objects/Orbit.js' 
import{Text} from './objects/Text.js'
import {initialRadius,minRadius,maxRadius} from './constants/radiusvars.js'
const scene = new THREE.Scene();
scene.background=new THREE.Color(0x45b1db); 
const camera = new THREE.PerspectiveCamera(ManagementConst.CAMERA.fov, 
  window.innerWidth/window.innerHeight, 
  ManagementConst.CAMERA.near, ManagementConst.CAMERA.far);

camera.position.set(ManagementConst.CAMERA.X, ManagementConst.CAMERA.Y,
   ManagementConst.CAMERA.Z);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const orbitGroup = new THREE.Group();
scene.add(orbitGroup);

const orbitRadius = 5;
const star = new Star();
orbitGroup.add(star);

const O = new OrbitPath(orbitRadius,0); 
orbitGroup.add(O);
let growing = true; 
let currentRadius = initialRadius;
let angle = 0;
let movingRight = false;

const text = new Text();
text.position.set(2.3, -0.2, 0.05);
scene.add(text);
function animate() {

    requestAnimationFrame(animate);
    if (growing) {
        if (currentRadius < maxRadius) {
            currentRadius += 0.05;  
            O.updateRadius(currentRadius);
        } else {
            growing = false;  
        }
    } 
    else if (currentRadius > minRadius) {
        currentRadius -= 0.1;
        O.updateRadius(currentRadius);
    } 
    else if (!movingRight && orbitGroup.position.x > -3.1) {
        orbitGroup.position.x -= 0.07;
    } 
    else if (orbitGroup.position.x <= -3.1) {
        movingRight = true;
    }
    if (movingRight && orbitGroup.position.x < -3) {  
        orbitGroup.position.x += 0.02;
    }

    if (orbitGroup.position.x <= -3.1) {  
        text.fadeIn(0.9);
    }

    angle += 0.1; 
    star.position.x = Math.cos(angle) * currentRadius;
    star.position.y = Math.sin(angle) * currentRadius; 

    renderer.render(scene, camera);
}
animate();
