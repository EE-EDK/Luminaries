import { DirectionalLight, HemisphereLight, PointLight } from 'three';
import { C, MAX_CRYSTAL_LIGHTS } from '../constants.js';
import { scene } from './renderer.js';

// ================================================================
// PHASE I — Lighting
// ================================================================

// Hemisphere ambient
export const hemiLight = new HemisphereLight(C.ambient, C.ground, 0.75);
scene.add(hemiLight);

// Primary moonlight (directional with shadows)
export const moon = new DirectionalLight(C.moon, 0.85);
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
moon.shadow.autoUpdate = false;
moon.shadow.needsUpdate = true;
scene.add(moon);

// Secondary moonlight (opposite angle — fill only, no shadow for performance)
export const moon2 = new DirectionalLight(C.moon2, 0.35);
moon2.position.set(-40, 45, 25);
scene.add(moon2);

// Fill, groundGlow, and rim lights removed for light budget compliance (8 max).
// Hemisphere intensity raised to compensate.

// Player carry light (always illuminates nearby)
export const playerLight = new PointLight(C.playerLight, 0.6, 20);
scene.add(playerLight);

// Priority Light Pooler — manages the limited point light budget
// Budget: 1 Hemi + 2 Dir + 1 Player + 4 Dynamic Slots = 8 Hardware Lights
export const dynamicLights = [];

export function initLightPooler() {
  for (let i = 0; i < MAX_CRYSTAL_LIGHTS; i++) {
    const pl = new PointLight(0xffffff, 0, 10);
    scene.add(pl);
    dynamicLights.push(pl);
  }
}

// Legacy exports for compatibility (now handled by pooler)
export const crystalLights = dynamicLights;
export const orbLight = new PointLight(C.orbGold, 0, 20);
scene.add(orbLight);

export function initCrystalLights() {
  initLightPooler();
}

