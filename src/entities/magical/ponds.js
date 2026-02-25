// --- Pond Lily (enhanced water patch + lily pads + flowers) ---
import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makePond(x, z) {
  const g = new THREE.Group();
  const pondR = 1.5 + sr() * 1.0;
  // Shallow depression (dark disc below water for depth illusion)
  const depthMat = new THREE.MeshStandardMaterial({
    color: 0x050812, roughness: 0.9
  });
  const depth = new THREE.Mesh(new THREE.CircleGeometry(pondR * 0.85, 10), depthMat);
  depth.rotation.x = -Math.PI / 2; depth.position.y = 0.005; g.add(depth);
  // Water surface disc
  const waterMat = new THREE.MeshStandardMaterial({
    color: C.pondWater, emissive: C.pondGlow, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.55, roughness: 0.05, metalness: 0.4
  });
  const water = new THREE.Mesh(new THREE.CircleGeometry(pondR, 12), waterMat);
  water.rotation.x = -Math.PI / 2; water.position.y = 0.03; g.add(water);
  // Edge stones (5-8 irregular pebbles around rim)
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x3a3a42, roughness: 0.85 });
  const stoneN = 5 + Math.floor(sr() * 4);
  for (let si = 0; si < stoneN; si++) {
    const sa = si / stoneN * 6.28 + sr() * 0.3;
    const sd = pondR + sr() * 0.2 - 0.1;
    const sSz = 0.06 + sr() * 0.08;
    const stone = new THREE.Mesh(new THREE.SphereGeometry(sSz, 4, 3), stoneMat);
    stone.scale.set(1 + sr() * 0.5, 0.4 + sr() * 0.3, 1 + sr() * 0.5);
    stone.position.set(Math.cos(sa) * sd, sSz * 0.2, Math.sin(sa) * sd);
    stone.rotation.set(sr(), sr(), sr()); g.add(stone);
  }
  // Water grass tufts at edge (3 clumps)
  const wgMat = new THREE.MeshStandardMaterial({
    color: 0x1a5520, roughness: 0.7, side: THREE.DoubleSide
  });
  for (let wi = 0; wi < 3; wi++) {
    const wa = sr() * 6.28;
    const wd = pondR * 0.85 + sr() * 0.2;
    for (let wj = 0; wj < 3; wj++) {
      const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.015, 0.15 + sr() * 0.1), wgMat);
      blade.position.set(Math.cos(wa) * wd + (sr() - 0.5) * 0.05, 0.08, Math.sin(wa) * wd + (sr() - 0.5) * 0.05);
      blade.rotation.y = sr() * 3; blade.rotation.x = -0.2; g.add(blade);
    }
  }
  // Ripple rings (2 concentric torus at water surface)
  const rippleMat = new THREE.MeshBasicMaterial({
    color: 0xaaddee, transparent: true, opacity: 0.08
  });
  for (let rri = 0; rri < 2; rri++) {
    const ripple = new THREE.Mesh(new THREE.TorusGeometry(pondR * 0.3 + rri * pondR * 0.25, 0.005, 4, 16), rippleMat);
    ripple.rotation.x = Math.PI / 2; ripple.position.y = 0.035; g.add(ripple);
  }
  // Lily pads (4-5 flat discs)
  const padMat = new THREE.MeshStandardMaterial({
    color: C.lilyPad, roughness: 0.6, side: THREE.DoubleSide
  });
  const padCount = 4 + Math.floor(sr() * 2);
  const pads = [];
  for (let i = 0; i < padCount; i++) {
    const pa = sr() * 6.28, pd = sr() * pondR * 0.6;
    const padSize = 0.15 + sr() * 0.15;
    const pad = new THREE.Mesh(new THREE.CircleGeometry(padSize, 8), padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.set(Math.cos(pa) * pd, 0.05, Math.sin(pa) * pd);
    g.add(pad);
    // Pad vein line (subtle midrib)
    const veinMat = new THREE.MeshBasicMaterial({ color: 0x1a5020, transparent: true, opacity: 0.3 });
    const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.002, padSize * 1.5, 3), veinMat);
    vein.position.set(Math.cos(pa) * pd, 0.052, Math.sin(pa) * pd);
    vein.rotation.x = Math.PI / 2; vein.rotation.z = sr() * 3; g.add(vein);
    pads.push({ mesh: pad, phase: sr() * 6.28 });
  }
  // Lily flower on first pad
  const flMat = new THREE.MeshStandardMaterial({
    color: C.lilyFlower, emissive: C.lilyGlow, emissiveIntensity: 0.4,
    transparent: true, opacity: 0.85, side: THREE.DoubleSide
  });
  const flowerY = 0.08;
  for (let i = 0; i < 6; i++) {
    const fa = (i / 6) * 6.28;
    const petal = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.05), flMat);
    petal.position.set(pads[0].mesh.position.x + Math.cos(fa) * 0.05, flowerY,
      pads[0].mesh.position.z + Math.sin(fa) * 0.05);
    petal.rotation.x = -1.0; petal.rotation.y = -fa; g.add(petal);
  }
  // Flower center
  const fcMat = new THREE.MeshStandardMaterial({
    color: 0xffffaa, emissive: C.lilyGlow, emissiveIntensity: 0.8
  });
  const fc = new THREE.Mesh(new THREE.SphereGeometry(0.025, 4, 3), fcMat);
  fc.position.set(pads[0].mesh.position.x, flowerY + 0.02, pads[0].mesh.position.z);
  g.add(fc);
  // Second smaller bud on another pad (if enough pads)
  if (pads.length > 2) {
    const budMat = new THREE.MeshStandardMaterial({
      color: C.lilyFlower, emissive: C.lilyGlow, emissiveIntensity: 0.2,
      transparent: true, opacity: 0.7
    });
    const bud = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), budMat);
    bud.scale.set(0.8, 1.2, 0.8);
    bud.position.set(pads[2].mesh.position.x, 0.09, pads[2].mesh.position.z);
    g.add(bud);
  }

  // Submerged pebbles (visible through water)
  const pebMat = new THREE.MeshStandardMaterial({ color: 0x3a3835, roughness: 0.8, transparent: true, opacity: 0.5 });
  for (let pbi = 0; pbi < 5; pbi++) {
    const pbA = sr() * 6.28, pbD = sr() * pondR * 0.7;
    const peb = new THREE.Mesh(new THREE.SphereGeometry(0.02 + sr() * 0.025, 4, 3), pebMat);
    peb.scale.set(1 + sr() * 0.5, 0.4, 1 + sr() * 0.5);
    peb.position.set(Math.cos(pbA) * pbD, 0.015, Math.sin(pbA) * pbD); g.add(peb);
  }

  // Silt deposits (faint sandy patches on pond floor)
  const siltMat = new THREE.MeshBasicMaterial({ color: 0x2a2418, transparent: true, opacity: 0.12, side: THREE.DoubleSide });
  for (let sli = 0; sli < 3; sli++) {
    const slA = sr() * 6.28, slD = sr() * pondR * 0.5;
    const silt = new THREE.Mesh(new THREE.CircleGeometry(0.08 + sr() * 0.06, 5), siltMat);
    silt.rotation.x = -Math.PI / 2; silt.position.set(Math.cos(slA) * slD, 0.012, Math.sin(slA) * slD);
    g.add(silt);
  }

  // Tadpole shapes (2 tiny dark ovals with tail lines in water)
  const tadMat = new THREE.MeshStandardMaterial({ color: 0x112215, roughness: 0.7, transparent: true, opacity: 0.4 });
  for (let tdi = 0; tdi < 2; tdi++) {
    const tdA = sr() * 6.28, tdD = sr() * pondR * 0.5;
    const tadBody = new THREE.Mesh(new THREE.SphereGeometry(0.012, 4, 3), tadMat);
    tadBody.scale.set(0.8, 0.5, 1.3);
    tadBody.position.set(Math.cos(tdA) * tdD, 0.04, Math.sin(tdA) * tdD); g.add(tadBody);
    const tadTail = new THREE.Mesh(new THREE.CylinderGeometry(0.002, 0.001, 0.025, 3), tadMat);
    tadTail.position.set(Math.cos(tdA) * tdD - Math.cos(tdA) * 0.02, 0.04, Math.sin(tdA) * tdD - Math.sin(tdA) * 0.02);
    tadTail.rotation.z = Math.PI / 2; tadTail.rotation.y = tdA; g.add(tadTail);
  }

  // Algae patches (green film at water edge)
  const algaeMat = new THREE.MeshBasicMaterial({ color: 0x225520, transparent: true, opacity: 0.1, side: THREE.DoubleSide });
  for (let ali = 0; ali < 3; ali++) {
    const alA = sr() * 6.28, alD = pondR * 0.7 + sr() * pondR * 0.25;
    const algae = new THREE.Mesh(new THREE.CircleGeometry(0.06 + sr() * 0.04, 5), algaeMat);
    algae.rotation.x = -Math.PI / 2; algae.position.set(Math.cos(alA) * alD, 0.032, Math.sin(alA) * alD);
    g.add(algae);
  }

  // Surface tension film ring at edge (meniscus)
  const menMat = new THREE.MeshBasicMaterial({ color: 0xccddee, transparent: true, opacity: 0.06 });
  const meniscus = new THREE.Mesh(new THREE.TorusGeometry(pondR - 0.05, 0.01, 4, 16), menMat);
  meniscus.rotation.x = Math.PI / 2; meniscus.position.y = 0.035; g.add(meniscus);

  // Fallen leaf on water surface
  const fLeafMat = new THREE.MeshStandardMaterial({ color: 0x4a3018, roughness: 0.8, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
  const fLeaf = new THREE.Mesh(new THREE.CircleGeometry(0.03, 5), fLeafMat);
  fLeaf.rotation.x = -Math.PI / 2;
  fLeaf.position.set((sr() - 0.5) * pondR * 0.5, 0.04, (sr() - 0.5) * pondR * 0.5); g.add(fLeaf);

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, waterMat: waterMat, flMat: flMat, pads: pads, x: x, z: z,
    phase: sr() * 6.28, pondR: pondR
  };
}
