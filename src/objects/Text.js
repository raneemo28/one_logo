import * as THREE from 'three'
import{ canvas_width,canvas_hieght } from'../constants/canvas_config'
export class Text extends THREE.Mesh{
  constructor(){
    
    const cv = document.createElement('canvas');
    cv.width = canvas_width; cv.height = canvas_hieght;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = '100 144px "Helvetica Neue", Helvetica, Arial, sans-serif';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', 4, canvas_hieght/2);
    const nw = ctx.measureText('N').width;
    ctx.fillText('E', nw + 14, canvas_hieght/2);
    const tex = new THREE.CanvasTexture(cv);
    const geo = new THREE.PlaneGeometry((canvas_width/canvas_hieght) * 4.2, 4.2);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false });
    super(geo, mat);
  }
  fadeIn(speed) {
    if (this.material.opacity < 1) {
      this.material.opacity = Math.min(this.material.opacity + speed, 1);
    }
  }
}