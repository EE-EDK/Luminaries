// --- Laser beam system (orb → sky → obelisk, with inter-laser connections) ---
import * as THREE from 'three';
import { scene } from '../core/renderer.js';
import { C, OBELISK_H } from '../constants.js';

const laserBeams = [];
const interLines = [];

// Create a laser that shoots up from orb pos, then bends to obelisk tip
export function makeLaser(fromX, fromZ, floatY) {
  const topY = OBELISK_H + 2; // obelisk tip
  const skyY = floatY + 15; // laser rises high first

  // Upward column (orb position straight up)
  const upPath = new THREE.LineCurve3(
    new THREE.Vector3(fromX, floatY, fromZ),
    new THREE.Vector3(fromX, skyY, fromZ)
  );
  const upMat = new THREE.MeshBasicMaterial({
    color: C.laserPink, transparent: true, opacity: 0.0,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const upTube = new THREE.Mesh(new THREE.TubeGeometry(upPath, 1, 0.06, 6, false), upMat);
  scene.add(upTube);

  // Outer glow for upward column
  const upGlowMat = new THREE.MeshBasicMaterial({
    color: C.laserGlow, transparent: true, opacity: 0.0,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const upGlow = new THREE.Mesh(new THREE.TubeGeometry(upPath, 1, 0.2, 6, false), upGlowMat);
  scene.add(upGlow);

  // Curved beam from sky point down to obelisk tip
  const bendPts = [];
  for (let j = 0; j <= 12; j++) {
    const frac = j / 12;
    const px = fromX * (1 - frac * frac); // curves toward center
    const pz = fromZ * (1 - frac * frac);
    const py = skyY + (topY - skyY) * frac;
    bendPts.push(new THREE.Vector3(px, py, pz));
  }
  const bendCurve = new THREE.CatmullRomCurve3(bendPts);
  const bendMat = new THREE.MeshBasicMaterial({
    color: C.laserPink, transparent: true, opacity: 0.0,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const bendTube = new THREE.Mesh(new THREE.TubeGeometry(bendCurve, 16, 0.05, 6, false), bendMat);
  scene.add(bendTube);

  const bendGlowMat = new THREE.MeshBasicMaterial({
    color: C.laserGlow, transparent: true, opacity: 0.0,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  const bendGlow = new THREE.Mesh(new THREE.TubeGeometry(bendCurve, 16, 0.18, 6, false), bendGlowMat);
  scene.add(bendGlow);

  const beam = {
    upTube, upGlow, bendTube, bendGlow,
    mat: upMat, glowMat: upGlowMat, bendMat, bendGlowMat,
    fromX, fromZ, floatY, skyY,
    animPhase: 0, // 0=rising, 1=bending, 2=complete
    animTimer: 0
  };
  laserBeams.push(beam);

  // Create inter-laser connections to all existing beams
  for (let i = 0; i < laserBeams.length - 1; i++) {
    const other = laserBeams[i];
    const midY = (beam.skyY + other.skyY) / 2;
    const connPts = [];
    for (let j = 0; j <= 8; j++) {
      const frac = j / 8;
      const px = beam.fromX * (1 - frac) + other.fromX * frac;
      const pz = beam.fromZ * (1 - frac) + other.fromZ * frac;
      const py = midY + Math.sin(frac * Math.PI) * 3; // arc between
      connPts.push(new THREE.Vector3(px, py, pz));
    }
    const connCurve = new THREE.CatmullRomCurve3(connPts);
    const connMat = new THREE.MeshBasicMaterial({
      color: C.laserGlow, transparent: true, opacity: 0.0,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const connTube = new THREE.Mesh(new THREE.TubeGeometry(connCurve, 10, 0.03, 4, false), connMat);
    scene.add(connTube);
    const connGlowMat = new THREE.MeshBasicMaterial({
      color: C.laserPink, transparent: true, opacity: 0.0,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const connGlow = new THREE.Mesh(new THREE.TubeGeometry(connCurve, 10, 0.1, 4, false), connGlowMat);
    scene.add(connGlow);
    interLines.push({ tube: connTube, glow: connGlow, mat: connMat, glowMat: connGlowMat, opacity: 0 });
  }

  return beam;
}

// Animate laser beams: rise phase, then bend phase
export function updateLasers(dt, t) {
  for (let i = 0; i < laserBeams.length; i++) {
    const b = laserBeams[i];
    b.animTimer += dt;

    if (b.animPhase === 0) {
      // Phase 0: upward column fading in (0.5s)
      const fade = Math.min(b.animTimer / 0.5, 1);
      b.mat.opacity = fade * 0.8;
      b.glowMat.opacity = fade * 0.3;
      if (b.animTimer > 0.5) { b.animPhase = 1; b.animTimer = 0; }
    } else if (b.animPhase === 1) {
      // Phase 1: bend beam appears (0.8s)
      const fade = Math.min(b.animTimer / 0.8, 1);
      b.bendMat.opacity = fade * 0.7;
      b.bendGlowMat.opacity = fade * 0.2;
      b.mat.opacity = 0.8;
      b.glowMat.opacity = 0.3;
      if (b.animTimer > 0.8) { b.animPhase = 2; }
    } else {
      // Phase 2: pulse sustain
      const p = Math.sin(t * 3 + i * 1.2) * 0.5 + 0.5;
      b.mat.opacity = 0.5 + p * 0.4;
      b.glowMat.opacity = 0.15 + p * 0.15;
      b.bendMat.opacity = 0.4 + p * 0.3;
      b.bendGlowMat.opacity = 0.1 + p * 0.12;
    }
  }

  // Animate inter-laser connections
  for (let i = 0; i < interLines.length; i++) {
    const conn = interLines[i];
    conn.opacity = Math.min(conn.opacity + dt * 0.5, 0.3);
    const p = Math.sin(t * 2 + i * 0.8) * 0.5 + 0.5;
    conn.mat.opacity = conn.opacity * (0.6 + p * 0.4);
    conn.glowMat.opacity = conn.opacity * (0.2 + p * 0.15);
  }
}
