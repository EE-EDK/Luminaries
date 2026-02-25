import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// --- Trees (bioluminescent canopy, bark detail, moss, roots) ---
export function makeTree(x, z) {
  const g = new THREE.Group();
  const h = 6 + sr() * 10, r = 0.2 + sr() * 0.3;
  const tM = new THREE.MeshStandardMaterial({ color: C.bark, roughness: 0.95 });
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r, h, 6), tM);
  trunk.position.y = h / 2; trunk.castShadow = true; g.add(trunk);

  // Bark ridge lines (4-6 vertical strips on trunk surface)
  const ridgeM = new THREE.MeshStandardMaterial({ color: 0x120a04, roughness: 1.0 });
  const ridgeN = 4 + Math.floor(sr() * 3);
  for (let rdi = 0; rdi < ridgeN; rdi++) {
    const rdA = rdi / ridgeN * 6.28 + sr() * 0.3;
    const rdH = h * 0.4 + sr() * h * 0.4;
    const rdY = sr() * h * 0.3;
    const ridge = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, rdH, 3), ridgeM);
    ridge.position.set(Math.cos(rdA) * r * 0.72, rdY + rdH / 2, Math.sin(rdA) * r * 0.72);
    g.add(ridge);
  }

  // Lichen patches (2-4 flat discs on trunk)
  const lichM = new THREE.MeshStandardMaterial({
    color: 0x667755, emissive: 0x223311, emissiveIntensity: 0.03, roughness: 0.9
  });
  const lichN = 2 + Math.floor(sr() * 3);
  for (let li = 0; li < lichN; li++) {
    const la = sr() * 6.28, ly = 1 + sr() * h * 0.5;
    const lich = new THREE.Mesh(new THREE.CircleGeometry(0.04 + sr() * 0.05, 5), lichM);
    lich.position.set(Math.cos(la) * r * 0.73, ly, Math.sin(la) * r * 0.73);
    lich.rotation.y = -la; g.add(lich);
  }

  // Exposed roots (3-5 sprawling at base)
  const rootM = new THREE.MeshStandardMaterial({ color: 0x1a0f06, roughness: 0.95 });
  const rootN = 3 + Math.floor(sr() * 3);
  for (let ri = 0; ri < rootN; ri++) {
    const ra = ri / rootN * 6.28 + sr() * 0.5;
    const rLen = 0.8 + sr() * 1.5;
    const root = new THREE.Mesh(new THREE.CylinderGeometry(0.02, r * 0.3, rLen, 4), rootM);
    root.position.set(Math.cos(ra) * r * 0.5, 0.08, Math.sin(ra) * r * 0.5);
    root.rotation.z = ra < 3.14 ? (1.2 + sr() * 0.3) : -(1.2 + sr() * 0.3);
    root.rotation.y = ra; g.add(root);
  }

  // Knotholes on trunk (1-3 dark spots)
  const knotM = new THREE.MeshStandardMaterial({ color: 0x0a0604, roughness: 1.0 });
  const knotN = 1 + Math.floor(sr() * 3);
  for (let ki = 0; ki < knotN; ki++) {
    const ky = h * 0.2 + sr() * h * 0.5;
    const ka = sr() * 6.28;
    const knot = new THREE.Mesh(new THREE.SphereGeometry(0.04 + sr() * 0.04, 4, 3), knotM);
    knot.scale.set(1, 0.6, 0.3);
    knot.position.set(Math.cos(ka) * r * 0.7, ky, Math.sin(ka) * r * 0.7);
    knot.rotation.y = -ka; g.add(knot);
  }

  // Fallen leaf debris at base (3-5 tiny flat shapes)
  const debrisM = new THREE.MeshStandardMaterial({
    color: 0x2a1a08, roughness: 0.9, side: THREE.DoubleSide
  });
  for (let dbi = 0; dbi < 4; dbi++) {
    const dba = sr() * 6.28, dbd = r + sr() * 1.5;
    const debris = new THREE.Mesh(new THREE.CircleGeometry(0.03 + sr() * 0.03, 4), debrisM);
    debris.rotation.x = -Math.PI / 2 + sr() * 0.3; debris.rotation.z = sr() * 3;
    debris.position.set(Math.cos(dba) * dbd, 0.01, Math.sin(dba) * dbd);
    g.add(debris);
  }

  const bc = 3 + Math.floor(sr() * 4);
  for (let i = 0; i < bc; i++) {
    const by = h * (0.4 + sr() * 0.5), ang = sr() * Math.PI * 2, bl = 1.5 + sr() * 3;
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.06, bl, 4), tM);
    br.position.set(Math.cos(ang) * 0.3, by, Math.sin(ang) * 0.3);
    br.rotation.z = (sr() - 0.5) * 1.2; br.rotation.y = ang; br.castShadow = true; g.add(br);

    // Branch tip bud (tiny green sphere)
    const budM = new THREE.MeshStandardMaterial({
      color: 0x88cc66, emissive: C.leafGlow, emissiveIntensity: 0.15, roughness: 0.7
    });
    const bud = new THREE.Mesh(new THREE.SphereGeometry(0.025, 3, 3), budM);
    bud.position.set(Math.cos(ang) * (0.3 + bl * 0.35), by + sr() * 0.5, Math.sin(ang) * (0.3 + bl * 0.35));
    g.add(bud);

    const lM = new THREE.MeshStandardMaterial({
      color: C.leaf, emissive: C.leafGlow, emissiveIntensity: 0.2 + sr() * 0.4,
      roughness: 0.7, transparent: true, opacity: 0.85
    });
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(1, 7, 5), lM);
    leaf.scale.setScalar(1 + sr() * 2);
    leaf.position.set(Math.cos(ang) * (bl * 0.5), by + sr() * 1.5, Math.sin(ang) * (bl * 0.5));
    leaf.castShadow = true; leaf.receiveShadow = true;
    g.add(leaf);

    // Hanging moss strands from branches (0-2 per branch)
    if (sr() < 0.5) {
      const mossMat = new THREE.MeshStandardMaterial({
        color: 0x2a5030, emissive: 0x113318, emissiveIntensity: 0.05,
        transparent: true, opacity: 0.6
      });
      const mossN = 1 + Math.floor(sr() * 2);
      for (let mi = 0; mi < mossN; mi++) {
        const mLen = 0.3 + sr() * 0.8;
        const moss = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.003, mLen, 3), mossMat);
        const mOff = sr() * bl * 0.4;
        moss.position.set(Math.cos(ang) * (0.3 + mOff), by - mLen / 2 - sr() * 0.3, Math.sin(ang) * (0.3 + mOff));
        g.add(moss);
      }
    }
  }

  // Trunk shelf fungi (0-3)
  const fungM = new THREE.MeshStandardMaterial({
    color: 0x5a3520, emissive: 0x331a08, emissiveIntensity: 0.05, roughness: 0.8
  });
  const fungN = Math.floor(sr() * 4);
  for (let fi = 0; fi < fungN; fi++) {
    const fy = 1 + sr() * h * 0.4;
    const fa = sr() * 6.28;
    const fung = new THREE.Mesh(new THREE.SphereGeometry(0.08 + sr() * 0.08, 5, 3), fungM);
    fung.scale.set(1.5, 0.3, 1);
    fung.position.set(Math.cos(fa) * r * 0.8, fy, Math.sin(fa) * r * 0.8);
    fung.rotation.y = -fa; g.add(fung);
  }

  // Bark growth rings (2-3 torus bands around trunk at intervals)
  const ringM = new THREE.MeshStandardMaterial({ color: 0x1a0e05, roughness: 1.0 });
  for (let bri = 0; bri < 3; bri++) {
    const bry = h * 0.15 + bri * h * 0.2 + sr() * h * 0.05;
    const brkR = r * 0.72 - bri * 0.02;
    const bark = new THREE.Mesh(new THREE.TorusGeometry(brkR, 0.008, 4, 8), ringM);
    bark.position.y = bry; bark.rotation.x = Math.PI / 2; g.add(bark);
  }

  // Canopy underglow layer (dim emissive sphere below leaves)
  const underM = new THREE.MeshStandardMaterial({
    color: C.leaf, emissive: C.leafGlow, emissiveIntensity: 0.06,
    transparent: true, opacity: 0.12
  });
  const under = new THREE.Mesh(new THREE.SphereGeometry(2.5 + sr() * 1.5, 5, 4), underM);
  under.position.y = h * 0.65; g.add(under);

  // Leaf drip tips (3-5 tiny dangling water drops under canopy)
  const dripM = new THREE.MeshStandardMaterial({
    color: 0xaaddcc, emissive: 0x88ccbb, emissiveIntensity: 0.1,
    transparent: true, opacity: 0.35, roughness: 0.0
  });
  for (let dri = 0; dri < 4; dri++) {
    const dra = sr() * 6.28, drd = 1 + sr() * 2;
    const drip = new THREE.Mesh(new THREE.SphereGeometry(0.02, 3, 3), dripM);
    drip.scale.set(0.7, 1.5, 0.7);
    drip.position.set(Math.cos(dra) * drd, h * 0.35 + sr() * h * 0.2, Math.sin(dra) * drd);
    g.add(drip);
  }

  // Base soil mound (subtle rise around trunk)
  const moundM = new THREE.MeshStandardMaterial({ color: 0x121008, roughness: 0.95 });
  const mound = new THREE.Mesh(new THREE.SphereGeometry(r * 2.5, 6, 3), moundM);
  mound.scale.set(1, 0.12, 1); mound.position.y = 0.02; g.add(mound);

  g.position.set(x, 0, z); scene.add(g);
  return g;
}
