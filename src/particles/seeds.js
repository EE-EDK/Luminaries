import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';

const dandSeeds = [];

export function initDandSeeds(n) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: C.dandSeed, transparent: true, opacity: 0 });
    const m = new THREE.Mesh(GEO.dandSeed, mat); m.visible = false; scene.add(m);
    dandSeeds.push({ mesh: m, mat: mat, vel: new THREE.Vector3(), life: 0, max: 0,
      active: false, drift: 0 });
  }
}

export function spawnDandSeed(px, py, pz) {
  let s = null;
  for (let i = 0; i < dandSeeds.length; i++) { if (!dandSeeds[i].active) { s = dandSeeds[i]; break; } }
  if (!s) return;
  s.mesh.position.set(px + (Math.random() - 0.5) * 0.1, py, pz + (Math.random() - 0.5) * 0.1);
  s.mesh.visible = true; s.mat.opacity = 0.8;
  const a = Math.random() * 6.28;
  s.vel.set(Math.cos(a) * 0.5 + Math.random() * 0.3, 0.6 + Math.random() * 0.8, Math.sin(a) * 0.5);
  s.life = 4 + Math.random() * 5; s.max = s.life; s.active = true;
  s.drift = Math.random() * 6.28;
}

export function updateDandSeeds(dt, t) {
  for (let i = 0; i < dandSeeds.length; i++) {
    const s = dandSeeds[i]; if (!s.active) continue;
    s.life -= dt;
    if (s.life <= 0) { s.active = false; s.mesh.visible = false; continue; }
    s.drift += (Math.random() - 0.5) * 1.5 * dt;
    s.vel.x += Math.sin(s.drift) * 0.3 * dt;
    s.vel.z += Math.cos(s.drift) * 0.2 * dt;
    s.vel.y += (0.15 - s.vel.y) * dt * 0.5;
    s.vel.multiplyScalar(0.998);
    s.mesh.position.x += s.vel.x * dt;
    s.mesh.position.y += s.vel.y * dt;
    s.mesh.position.z += s.vel.z * dt;
    const frac = s.life / s.max;
    s.mat.opacity = frac * 0.7 * (0.6 + Math.sin(t * 2 + i) * 0.4);
    s.mesh.scale.setScalar(0.8 + Math.sin(t * 3 + i * 0.5) * 0.3);
  }
}
