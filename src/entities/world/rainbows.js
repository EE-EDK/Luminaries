// --- Rainbow ribbons (wide translucent glowing bands arcing over obelisk) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C, OBELISK_H } from '../../constants.js';
export const rainbowArcs = [];

export function makeRainbows() {
  for (let i = 0; i < 6; i++) {
    const col = C.rainbow[i];
    const ang = (i / 6) * 6.28;
    const r = 6 + i * 0.8;
    const h = OBELISK_H + 6 + i * 2.5;
    const ribbonWidth = 0.8 - i * 0.06; // wider ribbons

    // Create arc points
    const arcPts = [];
    const segments = 24;
    for (let j = 0; j <= segments; j++) {
      const frac = j / segments;
      const a = ang + frac * Math.PI;
      const px = Math.cos(a) * r;
      const pz = Math.sin(a) * r;
      const py = Math.sin(frac * Math.PI) * h;
      arcPts.push(new THREE.Vector3(px, py, pz));
    }

    // Build ribbon geometry: flat strip following the curve
    const verts = [];
    for (let j = 0; j < segments; j++) {
      const p0 = arcPts[j], p1 = arcPts[j + 1];
      const dx = p1.x - p0.x, dz = p1.z - p0.z;
      const len = Math.sqrt(dx * dx + dz * dz) || 1;
      const nx = -dz / len, nz = dx / len;
      const hw = ribbonWidth / 2;
      const bl = [p0.x + nx * hw, p0.y, p0.z + nz * hw];
      const br = [p0.x - nx * hw, p0.y, p0.z - nz * hw];
      const tl = [p1.x + nx * hw, p1.y, p1.z + nz * hw];
      const tr = [p1.x - nx * hw, p1.y, p1.z - nz * hw];
      verts.push(...bl, ...tl, ...br, ...br, ...tl, ...tr);
    }

    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    ribbonGeo.computeVertexNormals();

    const mat = new THREE.MeshBasicMaterial({
      color: col, transparent: true, opacity: 0,
      side: THREE.DoubleSide, depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(ribbonGeo, mat);
    mesh.visible = false;
    scene.add(mesh);

    // Sparkle motes along arc center (5 per band)
    const curve = new THREE.CatmullRomCurve3(arcPts);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    for (let si = 0; si < 5; si++) {
      const sfrac = (si + 0.5) / 5;
      const sp = curve.getPoint(sfrac);
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.08, 4, 3), sparkMat);
      spark.position.copy(sp); spark.visible = false; scene.add(spark);
    }

    // Ground glow pools at endpoints
    const poolMat = new THREE.MeshBasicMaterial({
      color: col, transparent: true, opacity: 0, side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const p0 = arcPts[0], pEnd = arcPts[arcPts.length - 1];
    const pool0 = new THREE.Mesh(new THREE.CircleGeometry(1.0, 8), poolMat);
    pool0.rotation.x = -Math.PI / 2; pool0.position.set(p0.x, 0.03, p0.z);
    pool0.visible = false; scene.add(pool0);
    const pool1 = new THREE.Mesh(new THREE.CircleGeometry(1.0, 8), poolMat);
    pool1.rotation.x = -Math.PI / 2; pool1.position.set(pEnd.x, 0.03, pEnd.z);
    pool1.visible = false; scene.add(pool1);

    rainbowArcs.push({ mesh, mat, targetOpacity: 0 });
  }

  // Secondary outer faint arc (single wide mixed-color ribbon)
  const secPts = [];
  const secR = 10, secH = OBELISK_H + 14;
  const secSegments = 24;
  for (let j = 0; j <= secSegments; j++) {
    const frac = j / secSegments;
    const a = frac * Math.PI;
    secPts.push(new THREE.Vector3(Math.cos(a) * secR, Math.sin(frac * Math.PI) * secH, Math.sin(a) * secR));
  }
  const secVerts = [];
  const secWidth = 1.2;
  for (let j = 0; j < secSegments; j++) {
    const p0 = secPts[j], p1 = secPts[j + 1];
    const dx = p1.x - p0.x, dz = p1.z - p0.z;
    const len = Math.sqrt(dx * dx + dz * dz) || 1;
    const nx = -dz / len, nz = dx / len;
    const hw = secWidth / 2;
    const bl = [p0.x + nx * hw, p0.y, p0.z + nz * hw];
    const br = [p0.x - nx * hw, p0.y, p0.z - nz * hw];
    const tl = [p1.x + nx * hw, p1.y, p1.z + nz * hw];
    const tr = [p1.x - nx * hw, p1.y, p1.z - nz * hw];
    secVerts.push(...bl, ...tl, ...br, ...br, ...tl, ...tr);
  }
  const secGeo = new THREE.BufferGeometry();
  secGeo.setAttribute('position', new THREE.Float32BufferAttribute(secVerts, 3));
  secGeo.computeVertexNormals();
  const secMat = new THREE.MeshBasicMaterial({
    color: 0xeeddff, transparent: true, opacity: 0,
    side: THREE.DoubleSide, depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const secMesh = new THREE.Mesh(secGeo, secMat);
  secMesh.visible = false;
  scene.add(secMesh);
  rainbowArcs.push({ mesh: secMesh, mat: secMat, targetOpacity: 0 });
}
