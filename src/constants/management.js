import { AmbientLight, DirectionalLight } from "three";
import { color } from "three/tsl";

// Scene
export const SCENE = {
  cameraFov: 45,
  cameraNear: 0.1,
  cameraFar: 1000,
  cameraZ: 20
};
export const CAMERA ={
  fov: 45,
  near: 0.1,
  far: 1000,
  X: 0,
  Y: 0,
  Z: 20
}
export const LIGHT={
    AmbientLight:{
        color:0xffffff,
        intensity: 0.5
    },
    DirectionalLight:{
        color: 0xffffff,
        intensity: 1,
        X : 0,
        Y: 10,
        Z: 10
    }
}