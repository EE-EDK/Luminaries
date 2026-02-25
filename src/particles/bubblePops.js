import * as THREE from 'three';
import { C } from '../constants.js';
import { scene } from '../core/renderer.js';

const bubblePops = [];

export function initBubblePops(n) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.MeshBasicMaterial({ color: C.bubblePop, transparent: true, opacity: 0 });
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), mat); m.visible = false; scene.add(m);
    bubblePops.push({ mesh: m, mat: mat, vel: new THREE.Vector3(), life: 0, max: 0, active: false });
  }
}

export function spawnBubblePop(px, py, pz, count) {
  for (let c = 0; c < count; c++) {
    let p = null;
    for (let i = 0; i < bubblePops.length; i++) { if (!bubblePops[i].active) { p = bubblePops[i]; break; } }
    if (!p) continue;
    const a = Math.random() * 6.28, elev = Math.random() * 3.14;
    const spd = 1 + Math.random() * 2;
    p.mesh.position.set(px, py, pz); p.mesh.visible = true; p.mat.opacity = 0.9;
    p.vel.set(Math.cos(a) * Math.sin(elev) * spd, Math.cos(elev) * spd, Math.sin(a) * Math.sin(elev) * spd);
    p.life = 0.4 + Math.random() * 0.4; p.max = p.life; p.active = true;
  }
}

export function updateBubblePops(dt) {
  for (let i = 0; i < bubblePops.length; i++) {
    const p = bubblePops[i]; if (!p.active) continue;
    p.life -= dt;
    if (p.life <= 0) { p.active = false; p.mesh.visible = false; continue; }
    p.vel.y -= 2 * dt; p.vel.multiplyScalar(0.97);
    p.mesh.position.x += p.vel.x * dt;
    p.mesh.position.y += p.vel.y * dt;
    p.mesh.position.z += p.vel.z * dt;
    p.mat.opacity = (p.life / p.max) * 0.8;
  }
}
