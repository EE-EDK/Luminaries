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
const lightRequests = [];

export function initLightPooler() {
  for (let i = 0; i < MAX_CRYSTAL_LIGHTS; i++) {
    const pl = new PointLight(0xffffff, 0, 10);
    scene.add(pl);
    dynamicLights.push(pl);
  }
}

/**
 * Register a light request for the current frame.
 * @param {number} x, y, z - World position
 * @param {number} color - Hex color
 * @param {number} intensity - Target intensity
 * @param {number} distance - Light range
 * @param {number} importance - Priority score (higher = more likely to get a slot)
 */
export function requestLight(x, y, z, color, intensity, distance, importance) {
  lightRequests.push({ x, y, z, color, intensity, distance, importance });
}

export function updateLightPooler() {
  // Sort requests by importance (descending)
  lightRequests.sort((a, b) => b.importance - a.importance);

  for (let i = 0; i < dynamicLights.length; i++) {
    const pl = dynamicLights[i];
    if (i < lightRequests.length) {
      const r = lightRequests[i];
      pl.position.set(r.x, r.y, r.z);
      pl.color.setHex(r.color);
      pl.intensity = r.intensity;
      pl.distance = r.distance;
    } else {
      pl.intensity = 0;
    }
  }
  // Clear for next frame
  lightRequests.length = 0;
}

// Legacy exports for compatibility (now handled by pooler)
export const crystalLights = dynamicLights;
export const orbLight = new PointLight(C.orbGold, 0, 20);
scene.add(orbLight);

export function initCrystalLights() {
  initLightPooler();
}

