import * as THREE from 'three';
import { C, SKY_STARS, SKY_NEBULA_N, SKY_CONSTELLATION_N, SKY_ANOMALY_N, SKY_R } from '../constants.js';
import { sr } from '../utils/rng.js';
import { scene } from '../core/renderer.js';

// ================================================================
// SPACE SKY DOME — realistic fantasy night sky
// Stars dominate, with subtle hints of color from distant nebulae
// ================================================================

export const skyGroup = new THREE.Group();

export function createSkyDome() {
  // --- Star field (main visual feature of the sky) ---
  const starGeos = [
    new THREE.SphereGeometry(0.2, 4, 3),   // tiny dim stars
    new THREE.SphereGeometry(0.35, 6, 4),   // medium stars
    new THREE.SphereGeometry(0.55, 6, 5)    // bright stars
  ];
  const starColors = [C.skyStarBright, C.skyStarDim, C.skyStarWarm, C.skyStarCool];

  for (let si = 0; si < SKY_STARS; si++) {
    const theta = sr() * 6.28;
    const phi = sr() * 0.85 * Math.PI * 0.5 + (si < 80 ? sr() * 0.4 : 0);
    const tier = si < 40 ? 2 : (si < 160 ? 1 : 0);
    const sCol = starColors[Math.floor(sr() * starColors.length)];
    const sMat = new THREE.MeshBasicMaterial({
      color: sCol, transparent: true,
      opacity: tier === 0 ? 0.2 + sr() * 0.3 : tier === 1 ? 0.45 + sr() * 0.35 : 0.8 + sr() * 0.2
    });
    const sMesh = new THREE.Mesh(starGeos[tier], sMat);
    const sx = SKY_R * Math.cos(theta) * Math.cos(phi);
    const sy = SKY_R * Math.sin(phi) + 20;
    const sz = SKY_R * Math.sin(theta) * Math.cos(phi);
    sMesh.position.set(sx, sy, sz);
    skyGroup.add(sMesh);
  }

  // --- Subtle star cluster patches (faint dense regions) ---
  for (let ci = 0; ci < 10; ci++) {
    const ca = sr() * 6.28, cph = 0.3 + sr() * 0.5;
    const ccx = SKY_R * 0.95 * Math.cos(ca) * Math.cos(cph);
    const ccy = SKY_R * 0.95 * Math.sin(cph) + 30;
    const ccz = SKY_R * 0.95 * Math.sin(ca) * Math.cos(cph);
    const clusterMat = new THREE.MeshBasicMaterial({
      color: starColors[Math.floor(sr() * starColors.length)],
      transparent: true, opacity: 0.03 + sr() * 0.04
    });
    const cluster = new THREE.Mesh(
      new THREE.SphereGeometry(10 + sr() * 15, 12, 8), clusterMat
    );
    cluster.position.set(ccx, ccy, ccz); skyGroup.add(cluster);
  }

  // --- Galaxy spirals (very subtle, distant) ---
  function makeGalaxy(gx, gy, gz, radius, armN, color) {
    const gg = new THREE.Group();
    // Faint core glow
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xccccbb, transparent: true, opacity: 0.12
    });
    gg.add(new THREE.Mesh(new THREE.SphereGeometry(radius * 0.12, 10, 8), coreMat));
    // Dim halo
    const haloMat = new THREE.MeshBasicMaterial({
      color: color, transparent: true, opacity: 0.04
    });
    gg.add(new THREE.Mesh(new THREE.SphereGeometry(radius * 0.35, 10, 8), haloMat));
    // Spiral arm dots (very faint)
    const armMat = new THREE.MeshBasicMaterial({
      color: color, transparent: true, opacity: 0.06
    });
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xddddcc, transparent: true, opacity: 0.15
    });
    for (let ai = 0; ai < armN; ai++) {
      const baseAng = (ai / armN) * 6.28;
      for (let si = 0; si < 14; si++) {
        const t = si / 14;
        const rr = radius * 0.1 + t * radius;
        const a = baseAng + t * 3.5;
        const dx = rr * Math.cos(a) + (sr() - 0.5) * radius * 0.08;
        const dz = rr * Math.sin(a) + (sr() - 0.5) * radius * 0.08;
        const dy = (sr() - 0.5) * radius * 0.03;
        const sz = 0.2 + sr() * 0.35;
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(sz, 4, 3),
          si % 4 === 0 ? dotMat : armMat
        );
        dot.position.set(dx, dy, dz); gg.add(dot);
      }
    }
    gg.position.set(gx, gy, gz);
    gg.rotation.set(sr() * 1.5, sr() * 3, sr() * 0.8);
    return gg;
  }

  const galaxyPositions = [
    { a: 0.8, ph: 0.6, r: SKY_R * 0.88, sz: 18, arms: 2, col: 0x554477 },
    { a: 3.2, ph: 0.45, r: SKY_R * 0.92, sz: 14, arms: 3, col: 0x446677 },
    { a: 5.1, ph: 0.7, r: SKY_R * 0.85, sz: 22, arms: 2, col: 0x665566 }
  ];
  for (const gp of galaxyPositions) {
    const gx = gp.r * Math.cos(gp.a) * Math.cos(gp.ph);
    const gy = gp.r * Math.sin(gp.ph) + 20;
    const gz = gp.r * Math.sin(gp.a) * Math.cos(gp.ph);
    skyGroup.add(makeGalaxy(gx, gy, gz, gp.sz, gp.arms, gp.col));
  }

  // --- Nebulae (very faint colored washes — watercolor hints, not blobs) ---
  const nebColors = [0x553366, 0x335566, 0x663355, 0x336655, 0x554455];
  for (let ni = 0; ni < SKY_NEBULA_N; ni++) {
    const na = sr() * 6.28, nph = 0.15 + sr() * 0.65;
    const nd = SKY_R * 0.75 + sr() * SKY_R * 0.15;
    const nx = nd * Math.cos(na) * Math.cos(nph);
    const ny = nd * Math.sin(nph) + 15;
    const nz = nd * Math.sin(na) * Math.cos(nph);
    const nebR = 25 + sr() * 35;
    const nebCol = nebColors[ni % nebColors.length];

    // 3 translucent layers (very low opacity)
    for (let nl = 0; nl < 3; nl++) {
      const layerR = nebR * (1 - nl * 0.2);
      const nebMat = new THREE.MeshBasicMaterial({
        color: nebCol, transparent: true,
        opacity: 0.008 + nl * 0.005,
        side: THREE.DoubleSide
      });
      const neb = new THREE.Mesh(new THREE.SphereGeometry(layerR, 14, 10), nebMat);
      neb.position.set(
        nx + (sr() - 0.5) * nebR * 0.3,
        ny + (sr() - 0.5) * nebR * 0.2,
        nz + (sr() - 0.5) * nebR * 0.3
      );
      neb.scale.set(1 + sr() * 0.8, 0.3 + sr() * 0.4, 1 + sr() * 0.6);
      skyGroup.add(neb);
    }

    // 2-3 faint wispy sub-regions
    const subN = 2 + Math.floor(sr() * 2);
    for (let sbi = 0; sbi < subN; sbi++) {
      const sbAng = sr() * 6.28, sbDist = nebR * 0.3 + sr() * nebR * 0.5;
      const sbR = nebR * 0.2 + sr() * nebR * 0.25;
      const sbMat = new THREE.MeshBasicMaterial({
        color: nebCol, transparent: true,
        opacity: 0.005 + sr() * 0.006,
        side: THREE.DoubleSide
      });
      const sb = new THREE.Mesh(new THREE.SphereGeometry(sbR, 8, 6), sbMat);
      sb.position.set(
        nx + Math.cos(sbAng) * sbDist,
        ny + (sr() - 0.5) * nebR * 0.25,
        nz + Math.sin(sbAng) * sbDist
      );
      sb.scale.set(1 + sr() * 0.5, 0.25 + sr() * 0.3, 1 + sr() * 0.5);
      skyGroup.add(sb);
    }
  }

  // --- Constellations (star patterns with faint connecting lines) ---
  const constellationDefs = [
    [[0, 0], [0.04, 0.03], [0.08, 0.01], [0.08, 0.05], [0.12, 0.03]],
    [[0, 0], [0.03, 0.04], [0.06, 0], [0.06, 0.06], [0.09, 0.03]],
    [[0, 0], [0.02, 0.05], [0.05, 0.02], [0.08, 0.06], [0.1, 0]],
    [[0, 0], [0.04, 0.02], [0.02, 0.05], [0.06, 0.05]],
    [[0, 0], [0.03, 0.01], [0.06, 0.03], [0.04, 0.06], [0.01, 0.04]],
    [[0, 0], [0.05, 0], [0.025, 0.04]],
    [[0, 0], [0.04, 0.03], [0.08, 0], [0.12, 0.03], [0.08, 0.06]],
    [[0, 0], [0.03, 0.02], [0.06, 0.04], [0.09, 0.02], [0.12, 0]]
  ];
  const conLineMat = new THREE.LineBasicMaterial({
    color: C.skyConstLine, transparent: true, opacity: 0.1
  });
  const conStarMat = new THREE.MeshBasicMaterial({
    color: C.skyStarBright, transparent: true, opacity: 0.8
  });
  for (let ci = 0; ci < SKY_CONSTELLATION_N; ci++) {
    const def = constellationDefs[ci % constellationDefs.length];
    const anchorTheta = sr() * 6.28;
    const anchorPhi = 0.2 + sr() * 0.55;
    const cg = new THREE.Group();
    const pts = [];
    for (let di = 0; di < def.length; di++) {
      const ct = anchorTheta + def[di][0] * 6;
      const cp = anchorPhi + def[di][1] * 3;
      const cx = SKY_R * 0.93 * Math.cos(ct) * Math.cos(cp);
      const cy = SKY_R * 0.93 * Math.sin(cp) + 20;
      const cz = SKY_R * 0.93 * Math.sin(ct) * Math.cos(cp);
      pts.push(new THREE.Vector3(cx, cy, cz));
      const cStar = new THREE.Mesh(
        new THREE.SphereGeometry(0.5 + sr() * 0.4, 4, 3), conStarMat
      );
      cStar.position.set(cx, cy, cz); cg.add(cStar);
    }
    for (let li = 0; li < pts.length - 1; li++) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([pts[li], pts[li + 1]]);
      cg.add(new THREE.Line(lineGeo, conLineMat));
    }
    skyGroup.add(cg);
  }

  // --- Distant anomalies (very subtle colored glows, no hard geometry) ---
  for (let ai = 0; ai < SKY_ANOMALY_N; ai++) {
    const aa = sr() * 6.28, aph = 0.2 + sr() * 0.6;
    const ad = SKY_R * 0.8 + sr() * SKY_R * 0.1;
    const ax = ad * Math.cos(aa) * Math.cos(aph);
    const ay = ad * Math.sin(aph) + 20;
    const az = ad * Math.sin(aa) * Math.cos(aph);
    const aCol = C.skyAnomaly[ai % C.skyAnomaly.length];
    const ag = new THREE.Group();
    // Tiny bright point
    ag.add(new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 6, 5),
      new THREE.MeshBasicMaterial({ color: aCol, transparent: true, opacity: 0.6 })
    ));
    // Soft inner glow
    ag.add(new THREE.Mesh(
      new THREE.SphereGeometry(2.5, 8, 6),
      new THREE.MeshBasicMaterial({ color: aCol, transparent: true, opacity: 0.08 })
    ));
    // Very faint outer halo
    ag.add(new THREE.Mesh(
      new THREE.SphereGeometry(5 + sr() * 3, 10, 8),
      new THREE.MeshBasicMaterial({ color: aCol, transparent: true, opacity: 0.025 })
    ));
    ag.position.set(ax, ay, az);
    skyGroup.add(ag);
  }

  // --- Milky band (faint galactic plane) ---
  const milkyMat = new THREE.MeshBasicMaterial({
    color: 0x556677, transparent: true, opacity: 0.025, side: THREE.DoubleSide
  });
  for (let mi = 0; mi < 14; mi++) {
    const mAng = mi * 0.25 + sr() * 0.1;
    const mPhi = 0.38 + sr() * 0.18;
    const mx = SKY_R * 0.9 * Math.cos(mAng) * Math.cos(mPhi);
    const my = SKY_R * 0.9 * Math.sin(mPhi) + 20;
    const mz = SKY_R * 0.9 * Math.sin(mAng) * Math.cos(mPhi);
    const bSize = 15 + sr() * 20;
    const band = new THREE.Mesh(new THREE.SphereGeometry(bSize, 10, 8), milkyMat);
    band.position.set(mx, my, mz);
    band.scale.set(1.5 + sr() * 1.0, 0.1 + sr() * 0.08, 0.4 + sr() * 0.3);
    band.lookAt(0, 25, 0);
    band.rotation.z = sr() * 0.5; skyGroup.add(band);
  }
  // Knots along the band
  const milkyKnotMat = new THREE.MeshBasicMaterial({
    color: 0x667788, transparent: true, opacity: 0.035
  });
  for (let mk = 0; mk < 6; mk++) {
    const mkAng = mk * 0.5 + sr() * 0.2;
    const mkPhi = 0.38 + sr() * 0.12;
    const mkx = SKY_R * 0.88 * Math.cos(mkAng) * Math.cos(mkPhi);
    const mky = SKY_R * 0.88 * Math.sin(mkPhi) + 22;
    const mkz = SKY_R * 0.88 * Math.sin(mkAng) * Math.cos(mkPhi);
    const knot = new THREE.Mesh(new THREE.SphereGeometry(4 + sr() * 6, 8, 6), milkyKnotMat);
    knot.position.set(mkx, mky, mkz);
    skyGroup.add(knot);
  }

  scene.add(skyGroup);

  // Disable fog on ALL sky materials
  skyGroup.traverse((child) => {
    if (child.material) child.material.fog = false;
  });
}

export function updateSky(dt, t) {
  skyGroup.rotation.y = t * 0.003;
}
