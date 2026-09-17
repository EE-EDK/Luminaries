// --- Moat (ring of water around the obelisk — baked, 1 mesh; was 28) ---
// The water ring, glow stones that twinkle, foam patches, current arcs that
// drift and the darker depth channel are one mesh in one Group
// that questVisuals fades in during the finale. Previously the details were
// loose scene meshes built at opacity 0 and never raised — they were never
// seen. They now share the moat material, so the finale fade reveals them.
import { CircleGeometry, CylinderGeometry, Group, Mesh, Path, Shape, ShapeGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { createBaker, roleMaterial, MOTION } from '../_bake.js';

let moatMesh = null;
let moatMat = null;

export function getMoatMesh() { return moatMesh; }
export function getMoatMat() { return moatMat; }

export function makeMoat() {
  const g = new Group();
  const mat = roleMaterial('glow', { emissive: C.moatGlow, emissiveIntensity: 0.3, roughness: 0.1, metalness: 0.3, opacity: 0, doubleSide: true });
  mat.color.setHex(C.moatBlue);
  moatMat = mat;

  const b = createBaker();
  const shape = new Shape(); shape.absarc(0, 0, 6, 0, 6.28, false);
  const hole = new Path(); hole.absarc(0, 0, 3, 0, 6.28, true); shape.holes.push(hole);
  b.add(new ShapeGeometry(shape, 24), { role: 'water', pos: [0, 0, 0], rot: [-Math.PI / 2, 0, 0] });
  const depthShape = new Shape(); depthShape.absarc(0, 0, 5.2, 0, 6.28, false);
  const depthHole = new Path(); depthHole.absarc(0, 0, 3.8, 0, 6.28, true); depthShape.holes.push(depthHole);
  b.add(new ShapeGeometry(depthShape, 16), { role: 'water', pos: [0, -0.01, 0], rot: [-Math.PI / 2, 0, 0], color: C.skyDeep, emis: 0.3, opacity: 0.8 });
  for (let gsi = 0; gsi < 12; gsi++) {
    const gsA = (gsi / 12) * 6.28 + sr() * 0.3, gsR = 3.5 + sr() * 2.0;
    b.add(new SphereGeometry(0.04 + sr() * 0.04, 5, 4), { role: 'water', pos: [Math.cos(gsA) * gsR, -0.03, Math.sin(gsA) * gsR], scale: [1.2, 0.4, 1.2], color: C.moatStone, emis: 2.5, motion: { mode: MOTION.FLICKER, phase: gsi * 1.3, speed: 1.5 } });
  }
  for (let fmi = 0; fmi < 6; fmi++) {
    const fmA = (fmi / 6) * 6.28 + sr() * 0.5;
    b.add(new CircleGeometry(0.12 + sr() * 0.1, 6), { role: 'water', pos: [Math.cos(fmA) * 3.3, 0.01, Math.sin(fmA) * 3.3], rot: [-Math.PI / 2, 0, 0], color: C.white, emis: 0.5, opacity: 0.7, motion: { mode: MOTION.ORBIT, amp: 0.005, phase: fmi, speed: 0.15 }, pivot: [0, 0.01, 0] });
  }
  for (let cli = 0; cli < 8; cli++) {
    const clA = (cli / 8) * 6.28, clR = 4 + sr() * 1.5;
    b.add(new CylinderGeometry(0.003, 0.003, 0.4, 3), { role: 'water', pos: [Math.cos(clA) * clR, 0.005, Math.sin(clA) * clR], rot: [Math.PI / 2, 0, clA + Math.PI / 2], color: C.skyStarDim, emis: 1.0, opacity: 0.8, motion: { mode: MOTION.ORBIT, amp: 0.0, phase: cli * 0.3, speed: 0.25 }, pivot: [0, 0.005, 0] });
  }
  const m = b.build({ water: mat });
  g.add(m.water);
  g.position.y = 0.05;
  g.visible = false;
  scene.add(g);
  moatMesh = g;
}
