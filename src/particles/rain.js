// ================================================================
// Rain Particle System (LineSegments-based streaks)
// ================================================================
import * as THREE from 'three';
import { scene } from '../core/renderer.js';
import { getGroundY } from '../world/terrain.js';

const MAX_DROPS = 300;

// Per-drop state
const dx = new Float32Array(MAX_DROPS);
const dy = new Float32Array(MAX_DROPS);
const dz = new Float32Array(MAX_DROPS);
const vx = new Float32Array(MAX_DROPS);
const vy = new Float32Array(MAX_DROPS);
const vz = new Float32Array(MAX_DROPS);
const life = new Float32Array(MAX_DROPS);

// LineSegments geometry (2 vertices per drop = 6 floats per drop)
const linePos = new Float32Array(MAX_DROPS * 6);

let rainLines = null;
let rainMat = null;

export function initRain() {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  rainMat = new THREE.LineBasicMaterial({
    color: 0x8899bb, transparent: true, opacity: 0.3, depthWrite: false
  });
  rainLines = new THREE.LineSegments(geo, rainMat);
  rainLines.frustumCulled = false;
  rainLines.visible = false;
  scene.add(rainLines);

  // Init all drops inactive
  for (let i = 0; i < MAX_DROPS; i++) {
    life[i] = 0;
    hideDropVerts(i);
  }
}

function hideDropVerts(i) {
  const i6 = i * 6;
  linePos[i6] = 0; linePos[i6 + 1] = -100; linePos[i6 + 2] = 0;
  linePos[i6 + 3] = 0; linePos[i6 + 4] = -100; linePos[i6 + 5] = 0;
}

export function updateRain(dt, playerPos, rainRate, windXVal, windZVal) {
  if (!rainLines) return;

  const active = rainRate > 0.01;
  rainLines.visible = active;
  if (!active) return;

  rainMat.opacity = Math.min(0.15 + rainRate * 0.35, 0.5);

  // Spawn new drops
  const spawnN = Math.floor(rainRate * 12 * dt * 60);
  for (let s = 0; s < spawnN; s++) {
    // Find inactive slot
    let idx = -1;
    for (let i = 0; i < MAX_DROPS; i++) { if (life[i] <= 0) { idx = i; break; } }
    if (idx === -1) break;

    const ang = Math.random() * Math.PI * 2;
    const dist = Math.random() * 30;
    dx[idx] = playerPos.x + Math.cos(ang) * dist;
    dy[idx] = 12 + Math.random() * 10;
    dz[idx] = playerPos.z + Math.sin(ang) * dist;
    vx[idx] = windXVal * 2 + (Math.random() - 0.5) * 0.3;
    vy[idx] = -12 - Math.random() * 8;
    vz[idx] = windZVal * 2 + (Math.random() - 0.5) * 0.3;
    life[idx] = 2 + Math.random() * 1.5;
  }

  // Update drops
  const streakLen = 0.06; // how long the streak is (fraction of velocity)
  for (let i = 0; i < MAX_DROPS; i++) {
    if (life[i] <= 0) continue;
    life[i] -= dt;

    if (life[i] <= 0 || dy[i] < getGroundY(dx[i], dz[i]) + 0.1) {
      life[i] = 0;
      hideDropVerts(i);
      continue;
    }

    dx[i] += vx[i] * dt;
    dy[i] += vy[i] * dt;
    dz[i] += vz[i] * dt;

    // Write streak vertices (current pos → pos + velocity*streakLen)
    const i6 = i * 6;
    linePos[i6]     = dx[i];
    linePos[i6 + 1] = dy[i];
    linePos[i6 + 2] = dz[i];
    linePos[i6 + 3] = dx[i] + vx[i] * streakLen;
    linePos[i6 + 4] = dy[i] + vy[i] * streakLen;
    linePos[i6 + 5] = dz[i] + vz[i] * streakLen;
  }

  rainLines.geometry.attributes.position.needsUpdate = true;
}
