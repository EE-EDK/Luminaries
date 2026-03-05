import { ConeGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// --- Glowing Flower (enhanced stem + petals + glowing center) ---
export function makeFlower(x, z) {
  const g = new Group();
  const h = 0.25 + sr() * 0.4;
  const stemMat = new MeshStandardMaterial({ color: C.flowerStem, roughness: 0.8 });
  // Stem with slight bend
  const stem = new Mesh(new CylinderGeometry(0.01, 0.015, h, 4), stemMat);
  stem.position.y = h / 2; g.add(stem);
  // Stem thorn nubs (1-2 tiny bumps)
  for (let ti = 0; ti < 2; ti++) {
    const thorn = new Mesh(new ConeGeometry(0.004, 0.012, 3), stemMat);
    thorn.position.set(0.012, h * 0.25 + ti * h * 0.25, 0);
    thorn.rotation.z = -1.2; g.add(thorn);
  }
  // Leaves on stem (2 opposite)
  const leafMat = new MeshStandardMaterial({ color: C.fern, roughness: 0.7, side: DoubleSide });
  const leaf1 = new Mesh(new PlaneGeometry(0.06, 0.04), leafMat);
  leaf1.position.set(0.03, h * 0.3, 0); leaf1.rotation.z = -0.5; g.add(leaf1);
  const leaf2 = new Mesh(new PlaneGeometry(0.05, 0.035), leafMat);
  leaf2.position.set(-0.025, h * 0.5, 0.01); leaf2.rotation.z = 0.6; g.add(leaf2);
  // Sepals (5 small green triangles under petals)
  const sepalMat = new MeshStandardMaterial({
    color: 0x1a6030, roughness: 0.7, side: DoubleSide
  });
  for (let si = 0; si < 5; si++) {
    const sa = (si / 5) * 6.28 + 0.3;
    const sepal = new Mesh(new PlaneGeometry(0.025, 0.02), sepalMat);
    sepal.position.set(Math.cos(sa) * 0.025, h - 0.005, Math.sin(sa) * 0.025);
    sepal.rotation.x = -1.2; sepal.rotation.y = -sa; g.add(sepal);
  }
  // Petals (6 around center, slightly overlapping) with vein detail
  const petalMat = new MeshStandardMaterial({
    color: C.flower, emissive: C.flowerGlow, emissiveIntensity: 0.4 + sr() * 0.4,
    transparent: true, opacity: 0.85, side: DoubleSide
  });
  const veinMat = new MeshBasicMaterial({
    color: C.flowerGlow, transparent: true, opacity: 0.15
  });
  for (let i = 0; i < 6; i++) {
    const pa = (i / 6) * 6.28;
    const petal = new Mesh(new PlaneGeometry(0.05, 0.04), petalMat);
    petal.position.set(Math.cos(pa) * 0.03, h + 0.01, Math.sin(pa) * 0.03);
    petal.rotation.x = -0.8; petal.rotation.y = -pa;
    g.add(petal);
    // Petal vein lines (1-2 thin cylinders per petal)
    for (let vi = 0; vi < 2; vi++) {
      const vein = new Mesh(new CylinderGeometry(0.001, 0.001, 0.03, 3), veinMat);
      vein.position.set(
        Math.cos(pa) * (0.025 + vi * 0.008), h + 0.012,
        Math.sin(pa) * (0.025 + vi * 0.008)
      );
      vein.rotation.x = -0.8; vein.rotation.y = -pa;
      vein.rotation.z = (vi - 0.5) * 0.3;
      g.add(vein);
    }
  }
  // Glowing center
  const centerMat = new MeshStandardMaterial({
    color: 0xffffff, emissive: C.flowerGlow, emissiveIntensity: 1.2
  });
  const center = new Mesh(new SphereGeometry(0.02, 4, 3), centerMat);
  center.position.y = h + 0.02; g.add(center);
  // Stamen filaments (3 tiny uprights with pollen tips) — stored for animation
  const stamenMat = new MeshBasicMaterial({ color: 0xffffaa, transparent: true, opacity: 0.7 });
  const pollenMat = new MeshBasicMaterial({ color: 0xffee44 });
  const stamens = [];
  for (let fi = 0; fi < 3; fi++) {
    const fa = (fi / 3) * 6.28 + 0.5;
    const stamenPivot = new Group();
    stamenPivot.position.set(Math.cos(fa) * 0.012, h + 0.03, Math.sin(fa) * 0.012);
    const filament = new Mesh(new CylinderGeometry(0.002, 0.002, 0.025, 3), stamenMat);
    stamenPivot.add(filament);
    const pollen = new Mesh(new SphereGeometry(0.005, 3, 3), pollenMat);
    pollen.position.y = 0.015;
    stamenPivot.add(pollen);
    g.add(stamenPivot);
    stamens.push(stamenPivot);
  }
  // Floating pollen dust (2 tiny motes above)
  const pdustMat = new MeshBasicMaterial({ color: 0xffffcc, transparent: true, opacity: 0.3 });
  for (let pi = 0; pi < 2; pi++) {
    const pdust = new Mesh(new SphereGeometry(0.006, 3, 3), pdustMat);
    pdust.position.set((sr() - 0.5) * 0.04, h + 0.06 + sr() * 0.04, (sr() - 0.5) * 0.04);
    g.add(pdust);
  }

  // Nectar drop (tiny glass bead at flower center base)
  const nectarMat = new MeshStandardMaterial({
    color: 0xffeeaa, emissive: 0xffdd44, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.5, roughness: 0.0, metalness: 0.4
  });
  const nectar = new Mesh(new SphereGeometry(0.006, 3, 3), nectarMat);
  nectar.position.set(0.005, h + 0.005, 0.005); g.add(nectar);

  // Pistil (central upright pin)
  const pistilMat = new MeshBasicMaterial({ color: 0xeeff88 });
  const pistil = new Mesh(new CylinderGeometry(0.002, 0.002, 0.03, 3), pistilMat);
  pistil.position.y = h + 0.035; g.add(pistil);
  // Stigma (tiny ball on pistil tip)
  const stigma = new Mesh(new SphereGeometry(0.005, 3, 3), pistilMat);
  stigma.position.y = h + 0.055; g.add(stigma);

  // Calyx tube (green cup under sepals)
  const calyxMat = new MeshStandardMaterial({ color: 0x1a5520, roughness: 0.7 });
  const calyx = new Mesh(new CylinderGeometry(0.015, 0.02, 0.02, 5), calyxMat);
  calyx.position.y = h - 0.01; g.add(calyx);

  // Petal edge micro-dots (dewdrop beads on petal tips)
  const petalDotMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
  for (let pdi = 0; pdi < 4; pdi++) {
    const pda = (pdi / 4) * 6.28 + 0.3;
    const pdot = new Mesh(new SphereGeometry(0.004, 3, 3), petalDotMat);
    pdot.position.set(Math.cos(pda) * 0.045, h + 0.005, Math.sin(pda) * 0.045);
    g.add(pdot);
  }

  g.position.set(x, 0, z); scene.add(g);
  return { group: g, petalMat: petalMat, stamens, phase: sr() * 6.28, baseH: h };
}
