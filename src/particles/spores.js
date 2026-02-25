import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';

const spores = [];

export function initSpores(n) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: C.spore, transparent: true, opacity: 0 });
    const m = new THREE.Mesh(GEO.spore, mat); m.visible = false; scene.add(m);
    spores.push({ mesh: m, mat: mat, vel: new THREE.Vector3(), life: 0, max: 0, active: false });
  }
}

export function spawnSpore(px, py, pz) {
  let s = null;
  for (let i = 0; i < spores.length; i++) { if (!spores[i].active) { s = spores[i]; break; } }
  if (!s) { let best = Infinity; for (let i = 0; i < spores.length; i++) { if (spores[i].life < best) { best = spores[i].life; s = spores[i]; } } }
  s.mesh.position.set(px, py, pz); s.mesh.visible = true;
  s.vel.set((Math.random() - .5) * 0.3, 0.4 + Math.random() * 0.4, (Math.random() - .5) * 0.3);
  s.life = 3 + Math.random() * 3; s.max = s.life; s.active = true;
}

export function updateSpores(dt) {
  let ac = 0;
  for (let i = 0; i < spores.length; i++) {
    const s = spores[i]; if (!s.active) continue;
    s.life -= dt;
    if (s.life <= 0) { s.active = false; s.mesh.visible = false; continue; }
    ac++;
    s.vel.y += 0.3 * dt;
    s.vel.multiplyScalar(0.997);
    s.mesh.position.x += s.vel.x * dt;
    s.mesh.position.y += s.vel.y * dt;
    s.mesh.position.z += s.vel.z * dt;
    s.mat.opacity = (s.life / s.max) * 0.7;
  }
  return ac;
}
