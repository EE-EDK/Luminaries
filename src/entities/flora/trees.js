import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// Bioluminescent color palettes for canopy variety
const GLOW_PALETTES = [
  { leaf: 0x145528, glow: 0x22cc77, core: 0x44ffaa },  // emerald
  { leaf: 0x0e3828, glow: 0x33bbaa, core: 0x55ffcc },  // teal
  { leaf: 0x1a4420, glow: 0x44cc55, core: 0x77ff88 },  // lime-green
  { leaf: 0x103030, glow: 0x2299aa, core: 0x44ddee },  // cyan
  { leaf: 0x182844, glow: 0x3388cc, core: 0x55bbff },  // blue (rare)
];

// --- Trees (bioluminescent canopy with layered glow, bark veins, roots) ---
export function makeTree(x, z) {
  const g = new THREE.Group();
  const h = 6 + sr() * 10, r = 0.2 + sr() * 0.3;

  // Trunk with bioluminescent undertone
  const tM = new THREE.MeshStandardMaterial({
    color: 0x5a4030, roughness: 0.75,
    emissive: 0x1a3820, emissiveIntensity: 0.18
  });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r, h, 6), tM);
  trunk.position.y = h / 2; trunk.castShadow = true; g.add(trunk);

  // Bioluminescent vein lines on trunk (2-4 glowing streaks)
  const veinM = new THREE.MeshStandardMaterial({
    color: 0x228855, emissive: C.leafGlow, emissiveIntensity: 0.5,
    transparent: true, opacity: 0.25
  });
  const veinN = 2 + Math.floor(sr() * 3);
  for (let vi = 0; vi < veinN; vi++) {
    const va = vi / veinN * 6.28 + sr() * 0.5;
    const vH = h * 0.4 + sr() * h * 0.4;
    const vein = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.015, vH, 3), veinM);
    vein.position.set(Math.cos(va) * r * 0.74, h * 0.15 + vH / 2, Math.sin(va) * r * 0.74);
    g.add(vein);
  }

  // Exposed roots (3-5 sprawling at base) with faint glow
  const rootM = new THREE.MeshStandardMaterial({
    color: 0x3a2c1a, roughness: 0.85,
    emissive: 0x182a14, emissiveIntensity: 0.12
  });
  const rootN = 3 + Math.floor(sr() * 3);
  for (let ri = 0; ri < rootN; ri++) {
    const ra = ri / rootN * 6.28 + sr() * 0.5;
    const rLen = 0.8 + sr() * 1.5;
    const root = new THREE.Mesh(new THREE.CylinderGeometry(0.02, r * 0.3, rLen, 4), rootM);
    root.position.set(Math.cos(ra) * r * 0.5, 0.08, Math.sin(ra) * r * 0.5);
    root.rotation.z = ra < 3.14 ? (1.2 + sr() * 0.3) : -(1.2 + sr() * 0.3);
    root.rotation.y = ra; g.add(root);
  }

  // Branches with multi-layered bioluminescent canopy clusters
  const bc = 3 + Math.floor(sr() * 4);
  for (let i = 0; i < bc; i++) {
    const by = h * (0.4 + sr() * 0.5), ang = sr() * Math.PI * 2, bl = 1.5 + sr() * 3;

    // Branch
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.06, bl, 4), tM);
    br.position.set(Math.cos(ang) * 0.3, by, Math.sin(ang) * 0.3);
    br.rotation.z = (sr() - 0.5) * 1.2; br.rotation.y = ang; br.castShadow = true; g.add(br);

    // Pick a glow palette for this cluster (color variety between branches)
    const pal = GLOW_PALETTES[Math.floor(sr() * GLOW_PALETTES.length)];
    const cx = Math.cos(ang) * (bl * 0.5);
    const cy = by + sr() * 1.5;
    const cz = Math.sin(ang) * (bl * 0.5);
    const leafSize = 1 + sr() * 2;

    // Inner glow core — small, bright emissive, drives bloom
    const coreM = new THREE.MeshStandardMaterial({
      color: pal.core, emissive: pal.core,
      emissiveIntensity: 0.7 + sr() * 0.5,
      transparent: true, opacity: 0.55, roughness: 0.3
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 0.3, 1), coreM);
    core.position.set(cx, cy, cz);
    g.add(core);

    // Mid canopy — organic shape, moderate glow, main visible mass
    const midM = new THREE.MeshStandardMaterial({
      color: pal.leaf, emissive: pal.glow,
      emissiveIntensity: 0.25 + sr() * 0.25,
      transparent: true, opacity: 0.55, roughness: 0.7
    });
    const mid = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 0.75, 1), midM);
    mid.position.set(cx + (sr() - 0.5) * 0.4, cy + (sr() - 0.5) * 0.4, cz + (sr() - 0.5) * 0.4);
    // Non-uniform scale for organic irregularity
    mid.scale.set(1 + sr() * 0.4, 0.65 + sr() * 0.5, 1 + sr() * 0.4);
    mid.castShadow = true; mid.receiveShadow = true;
    g.add(mid);

    // Outer haze — large, very faint, catches bloom for glow aura
    const hazeM = new THREE.MeshStandardMaterial({
      color: pal.glow, emissive: pal.glow,
      emissiveIntensity: 0.12,
      transparent: true, opacity: 0.08, depthWrite: false
    });
    const haze = new THREE.Mesh(new THREE.IcosahedronGeometry(leafSize * 1.2, 1), hazeM);
    haze.position.set(cx, cy, cz);
    g.add(haze);

    // Hanging moss (subtle glow, sparse)
    if (sr() < 0.35) {
      const mossMat = new THREE.MeshStandardMaterial({
        color: 0x2a5030, emissive: 0x115520, emissiveIntensity: 0.08,
        transparent: true, opacity: 0.5
      });
      const mLen = 0.3 + sr() * 0.8;
      const moss = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.003, mLen, 3), mossMat);
      const mOff = sr() * bl * 0.4;
      moss.position.set(Math.cos(ang) * (0.3 + mOff), by - mLen / 2 - sr() * 0.3, Math.sin(ang) * (0.3 + mOff));
      g.add(moss);
    }
  }

  // Shelf fungi (0-2, subtle glow)
  const fungM = new THREE.MeshStandardMaterial({
    color: 0x5a3520, emissive: 0x331a08, emissiveIntensity: 0.06, roughness: 0.8
  });
  const fungN = Math.floor(sr() * 3);
  for (let fi = 0; fi < fungN; fi++) {
    const fy = 1 + sr() * h * 0.4;
    const fa = sr() * 6.28;
    const fung = new THREE.Mesh(new THREE.SphereGeometry(0.08 + sr() * 0.08, 5, 3), fungM);
    fung.scale.set(1.5, 0.3, 1);
    fung.position.set(Math.cos(fa) * r * 0.8, fy, Math.sin(fa) * r * 0.8);
    fung.rotation.y = -fa; g.add(fung);
  }

  // Canopy underglow — overall glow aura below the leaf clusters
  const underM = new THREE.MeshStandardMaterial({
    color: C.leaf, emissive: C.leafGlow, emissiveIntensity: 0.06,
    transparent: true, opacity: 0.07, depthWrite: false
  });
  const under = new THREE.Mesh(new THREE.SphereGeometry(3 + sr() * 2, 8, 6), underM);
  under.position.y = h * 0.65; g.add(under);

  // Base soil mound
  const moundM = new THREE.MeshStandardMaterial({ color: 0x121008, roughness: 0.95 });
  const mound = new THREE.Mesh(new THREE.SphereGeometry(r * 2.5, 6, 3), moundM);
  mound.scale.set(1, 0.12, 1); mound.position.y = 0.02; g.add(mound);

  g.position.set(x, 0, z); scene.add(g);
  return g;
}
