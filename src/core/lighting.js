import { DirectionalLight, HemisphereLight, PointLight } from 'three';
import { C, MAX_CRYSTAL_LIGHTS, PLAYER_LIGHT_INTENSITY, PLAYER_LIGHT_RANGE } from '../constants.js';
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

// The brightest the player's lantern ever gets, from the constants table: six
// orbs' worth of intensity times six orbs' worth of range. Read from the table
// rather than typed as a number so adding a seventh entry cannot silently make
// `getPlayerLightLevel` stop reaching 1.
const _PL_MAX = PLAYER_LIGHT_INTENSITY[PLAYER_LIGHT_INTENSITY.length - 1]
  * PLAYER_LIGHT_RANGE[PLAYER_LIGHT_RANGE.length - 1];

/**
 * @brief How bright the player reads to a creature, 0 to 1.
 *
 * Intensity alone is not enough: a dim light with a long reach and a bright
 * one with a short reach look about the same from five metres away, and it is
 * the product that decides whether a deer notices you standing there. Includes
 * the orb-collection flare, so walking up to something right after an orb is
 * genuinely more startling.
 *
 * @return {number} 0..1
 */
export function getPlayerLightLevel() {
  const v = (playerLight.intensity * playerLight.distance) / _PL_MAX;
  if (!Number.isFinite(v)) return 0;
  return v < 0 ? 0 : (v > 1 ? 1 : v);
}

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

