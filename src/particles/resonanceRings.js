// ================================================================
// Resonance Rings — Visual feedback during spirit hum pitch matching
// ================================================================
// Concentric rings expand outward from the nearest resonating creature
// toward the player. Ring color matches creature glow. Opacity scales
// with resonance strength (brighter as pitch approaches center).
//
// Pool of 12 ring sprites, recycled. Each ring lives ~1s.

import { Mesh, RingGeometry, MeshBasicMaterial, DoubleSide, AdditiveBlending } from 'three';
import { C } from '../constants.js';

// ================================================================
// Pool
// ================================================================
const POOL_SIZE = 12;
const RING_LIFE = 1.0;        // seconds per ring
const RING_START_R = 0.3;     // inner radius at spawn
const RING_END_R = 2.5;       // inner radius at death
const RING_WIDTH = 0.15;      // ring thickness

let _scene = null;
const _rings = [];
const _geo = new RingGeometry(1.0, 1.15, 24, 1);

// Creature glow colors
const _creatureColors = {
  deer:  C.deerGlow,
  moth:  C.mothGlow,
  jelly: C.jellyGlow,
  puff:  C.puffGlow
};

// ================================================================
// Init — call once, pass scene reference
// ================================================================
export function initResonanceRings(scene) {
  _scene = scene;
  for (let i = 0; i < POOL_SIZE; i++) {
    const mat = new MeshBasicMaterial({
      color: C.white,
      transparent: true,
      opacity: 0,
      side: DoubleSide,
      blending: AdditiveBlending,
      depthWrite: false
    });
    const mesh = new Mesh(_geo, mat);
    mesh.rotation.x = -Math.PI / 2; // lay flat
    mesh.visible = false;
    scene.add(mesh);
    _rings.push({
      mesh,
      mat,
      life: 0,
      maxLife: RING_LIFE,
      active: false
    });
  }
}

// ================================================================
// Spawn — call at ~3Hz when resonance > 0
// ================================================================
export function spawnResonanceRing(x, y, z, creatureType, resonanceStrength) {
  // Find an inactive ring
  for (let i = 0; i < POOL_SIZE; i++) {
    const r = _rings[i];
    if (r.active) continue;

    r.active = true;
    r.life = 0;
    r.maxLife = RING_LIFE;
    r.mesh.position.set(x, y + 0.5, z);
    r.mesh.visible = true;
    r.mat.color.setHex(_creatureColors[creatureType] || C.white);
    r.startOpacity = resonanceStrength * 0.6;
    r.mat.opacity = r.startOpacity;
    r.mesh.scale.set(RING_START_R, RING_START_R, RING_START_R);
    return;
  }
}

// ================================================================
// Update — call each frame
// ================================================================
export function updateResonanceRings(dt) {
  for (let i = 0; i < POOL_SIZE; i++) {
    const r = _rings[i];
    if (!r.active) continue;

    r.life += dt;
    const t = r.life / r.maxLife;

    if (t >= 1.0) {
      r.active = false;
      r.mesh.visible = false;
      continue;
    }

    // Expand ring
    const scale = RING_START_R + (RING_END_R - RING_START_R) * t;
    r.mesh.scale.set(scale, scale, scale);

    // Fade out (absolute, not compounding)
    r.mat.opacity = (r.startOpacity || 0.6) * (1.0 - t);
    r.mesh.position.y += dt * 0.3; // gentle rise
  }
}
