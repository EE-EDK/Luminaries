// ================================================================
// Energy Lines + Echo Bloom Ring — crystal resonance visual effects
// ================================================================
// Extracted from main.js. Lazy-initialized Three.js objects for
// crystal chain energy lines and echo bloom wave rings.

import { AdditiveBlending, BufferAttribute, BufferGeometry, DoubleSide, DynamicDrawUsage, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, RingGeometry } from 'three';
import { C } from '../../constants.js';
import { scene } from '../../core/renderer.js';

// ================================================================
// Crystal resonance energy lines
// ================================================================
export const MAX_ENERGY_LINES = 15;
export const energyLines = [];
let energyLinesInited = false;

export function initEnergyLines() {
  if (energyLinesInited) return;
  energyLinesInited = true;
  const lineMat = new LineBasicMaterial({
    color: C.crystal, transparent: true, opacity: 0,
    blending: AdditiveBlending, depthWrite: false
  });
  for (let i = 0; i < MAX_ENERGY_LINES; i++) {
    const geo = new BufferGeometry();
    const positions = new Float32Array(6); // 2 points x 3 coords
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.attributes.position.setUsage(DynamicDrawUsage);
    const line = new Line(geo, lineMat.clone());
    line.visible = false;
    scene.add(line);
    energyLines.push({ line, geo, opacity: 0, active: false });
  }
}

// ================================================================
// Echo bloom wave ring
// ================================================================
let echoBloomRing = null;

export function getEchoBloomRing() {
  if (echoBloomRing) return echoBloomRing;
  const ringGeo = new RingGeometry(0.9, 1.0, 48);
  const ringMat = new MeshBasicMaterial({
    color: C.echoBloom, transparent: true, opacity: 0.5,
    side: DoubleSide, depthWrite: false, blending: AdditiveBlending
  });
  echoBloomRing = new Mesh(ringGeo, ringMat);
  echoBloomRing.rotation.x = -Math.PI / 2;
  echoBloomRing.visible = false;
  scene.add(echoBloomRing);
  return echoBloomRing;
}

// Echo bloom state (shared with magical entities update)
export const echoBloom = { timer: 0, center: null, radius: 0 };
