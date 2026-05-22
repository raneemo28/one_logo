import * as THREE from 'three';

export class Star extends THREE.Mesh {
    constructor() {
        const starGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        super(starGeometry, starMaterial);
    }
}