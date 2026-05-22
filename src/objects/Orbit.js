import * as THREE from 'three'

export class OrbitPath extends THREE.Line { 
    constructor(radius) {
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.LineBasicMaterial({ 
            color: 0xffffff,
            linewidth: 3,
        });
        
        super(geometry, material); 
        
        this.radius = radius;
        this.rotation.x = 0; 
        this.updateGeometry(); 
    }

    updateGeometry() {
        if (this.geometry) this.geometry.dispose();
        const curve = new THREE.EllipseCurve(
            0, 0,
            this.radius, this.radius, 
            0, 2 * Math.PI,
            false,
            0
        );        
        const points = curve.getPoints(50);
        this.geometry.setFromPoints(points);
    }

    updateRadius(newRadius){
        this.radius = newRadius;
        this.updateGeometry(); 
    }
}