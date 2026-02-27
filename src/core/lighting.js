import * as THREE from 'three';
import { C, MAX_CRYSTAL_LIGHTS } from '../constants.js';
import { scene } from './renderer.js';

// ================================================================
// PHASE I — Lighting
// ================================================================

// Hemisphere ambient
export const hemiLight = new THREE.HemisphereLight(C.ambient, C.ground, 0.65);
scene.add(hemiLight);

// Primary moonlight (directional with shadows)
export const moon = new THREE.DirectionalLight(C.moon, 0.85);
moon.position.set(30, 60, -20);
moon.castShadow = true;
moon.shadow.camera.left = -90;
moon.shadow.camera.right = 90;
moon.shadow.camera.top = 90;
moon.shadow.camera.bottom = -90;
moon.shadow.camera.near = 1;
moon.shadow.camera.far = 250;
moon.shadow.mapSize.set(1024, 1024);
moon.shadow.bias = -0.001;
scene.add(moon);

// Secondary moonlight (opposite angle — fill only, no shadow for performance)
export const moon2 = new THREE.DirectionalLight(0x223355, 0.3);
moon2.position.set(-40, 45, 25);
scene.add(moon2);

// Secondary fill light (opposite side, warmer, no shadow — simulates ground bounce)
const fillLight = new THREE.DirectionalLight(0x334455, 0.4);
fillLight.position.set(-25, 15, 30);
scene.add(fillLight);

// Warm uplight from ground (simulates bioluminescent glow bouncing up)
const groundGlow = new THREE.PointLight(0x336644, 0.7, 100);
groundGlow.position.set(0, 0.5, 0);
scene.add(groundGlow);

// Accent lights removed for performance — hemisphere light compensates

// Rim light from behind (backlight silhouette effect on trees)
const rimLight = new THREE.DirectionalLight(0x445577, 0.4);
rimLight.position.set(-10, 25, 40);
scene.add(rimLight);

// Player carry light (always illuminates nearby)
export const playerLight = new THREE.PointLight(0x668888, 0.6, 20);
scene.add(playerLight);

// Crystal proximity lights — pooled, moved to nearest crystals each frame
export const crystalLights = [];

export function initCrystalLights() {
  for (let i = 0; i < MAX_CRYSTAL_LIGHTS; i++) {
    const pl = new THREE.PointLight(C.crystal, 0, 16);
    scene.add(pl);
    crystalLights.push(pl);
  }
}

// Orb proximity light (single pooled — light budget +1)
export const orbLight = new THREE.PointLight(C.orbGold, 0, 15);
scene.add(orbLight);
