import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';
import { GEO } from '../core/geometries.js';

const starMotes = [];
let starTimer = 0;

export function initStarMotes(n) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: C.starMote, transparent: true, opacity: 0 });
    const m = new THREE.Mesh(GEO.starMote, mat); m.visible = false; scene.add(m);
    starMotes.push({ mesh: m, mat: mat, life: 0, max: 0, active: false, vy: 0, drift: 0 });
  }
}

export function spawnStarMote(playerPos) {
  let s = null;
  for (let i = 0; i < starMotes.length; i++) { if (!starMotes[i].active) { s = starMotes[i]; break; } }
  if (!s) return;
  const px = playerPos.x + (Math.random() - 0.5) * 60;
  const pz = playerPos.z + (Math.random() - 0.5) * 60;
  const py = 15 + Math.random() * 20;
  s.mesh.position.set(px, py, pz);
  s.mesh.visible = true; s.mat.opacity = 0.8;
  s.life = 6 + Math.random() * 6; s.max = s.life; s.active = true;
  s.vy = -0.15 - Math.random() * 0.3;
  s.drift = Math.random() * 6.28;
}

export function updateStarMotes(dt, t, playerPos) {
  starTimer += dt;
  if (starTimer > 0.15) { starTimer = 0; spawnStarMote(playerPos); }
  for (let i = 0; i < starMotes.length; i++) {
    const s = starMotes[i]; if (!s.active) continue;
    s.life -= dt;
    if (s.life <= 0 || s.mesh.position.y < 0.5) { s.active = false; s.mesh.visible = false; continue; }
    s.mesh.position.y += s.vy * dt;
    s.drift += (Math.random() - 0.5) * 0.5 * dt;
    s.mesh.position.x += Math.sin(s.drift) * 0.1 * dt;
    s.mesh.position.z += Math.cos(s.drift) * 0.08 * dt;
    const frac = s.life / s.max;
    const twinkle = Math.sin(t * 4 + i) * 0.3 + 0.7;
    s.mat.opacity = frac * twinkle * 0.7;
    s.mesh.scale.setScalar(0.5 + twinkle * 0.5);
  }
}
