// --- Rainbow arcs (curved tubes arcing over obelisk) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, OBELISK_H } from '../../constants.js';
export const rainbowArcs = [];

export function makeRainbows() {
  for (let i = 0; i < 6; i++) {
    const col = C.rainbow[i];
    const ang = (i / 6) * 6.28;
    const r = 5 + i * 0.5;
    const h = OBELISK_H + 5 + i * 2;
    // Create arc as CatmullRomCurve3
    const pts = [];
    for (let j = 0; j <= 12; j++) {
      const frac = j / 12;
      const a = ang + frac * Math.PI; // half circle
      const px = Math.cos(a) * r;
      const pz = Math.sin(a) * r;
      const py = Math.sin(frac * Math.PI) * h; // parabolic arc
      pts.push(new THREE.Vector3(px, py, pz));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const mat = new THREE.MeshBasicMaterial({
      color: col, transparent: true, opacity: 0
    });
    const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.12 - i * 0.008, 5, false);
    const mesh = new THREE.Mesh(tubeGeo, mat);
    mesh.visible = false;
    scene.add(mesh);

    // Sparkle motes along arc (5 tiny bright dots per band)
    const sparkMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0 });
    for (let si = 0; si < 5; si++) {
      const sfrac = (si + 0.5) / 5;
      const sp = curve.getPoint(sfrac);
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.05, 3, 3), sparkMat);
      spark.position.copy(sp); spark.visible = false; scene.add(spark);
    }

    // Ground glow pool at each endpoint
    const poolMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0, side: THREE.DoubleSide });
    const p0 = pts[0], pEnd = pts[pts.length - 1];
    const pool0 = new THREE.Mesh(new THREE.CircleGeometry(0.5, 6), poolMat);
    pool0.rotation.x = -Math.PI / 2; pool0.position.set(p0.x, 0.03, p0.z); pool0.visible = false; scene.add(pool0);
    const pool1 = new THREE.Mesh(new THREE.CircleGeometry(0.5, 6), poolMat);
    pool1.rotation.x = -Math.PI / 2; pool1.position.set(pEnd.x, 0.03, pEnd.z); pool1.visible = false; scene.add(pool1);

    rainbowArcs.push({ mesh: mesh, mat: mat, targetOpacity: 0 });
  }

  // Secondary faint outer arc (single mixed-color band offset outward)
  const secPts = [];
  const secR = 9.5, secH = OBELISK_H + 12;
  for (let j = 0; j <= 12; j++) {
    const frac = j / 12;
    const a = frac * Math.PI;
    secPts.push(new THREE.Vector3(Math.cos(a) * secR, Math.sin(frac * Math.PI) * secH, Math.sin(a) * secR));
  }
  const secCurve = new THREE.CatmullRomCurve3(secPts);
  const secMat = new THREE.MeshBasicMaterial({ color: 0xeeddff, transparent: true, opacity: 0 });
  const secTube = new THREE.Mesh(new THREE.TubeGeometry(secCurve, 16, 0.04, 4, false), secMat);
  secTube.visible = false;
  scene.add(secTube);
  rainbowArcs.push({ mesh: secTube, mat: secMat, targetOpacity: 0 });
}
