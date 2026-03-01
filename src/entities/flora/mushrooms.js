import * as THREE from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';

// --- Mushrooms (emissive pulse, NO PointLights) ---
// They pulse in waves. Step near a cluster and the rhythm changes —
// faster, brighter, then settling back. Dr. Chen called it "the
// greeting response." We still don't know what they're greeting.
export function makeMush(x, z) {
  const g = new THREE.Group();
  const sc = 0.4 + sr() * 1.2;
  const phase = sr() * 6.28, speed = 0.8 + sr() * 1.5, base = 0.5 + sr() * 0.8;

  const stem = new THREE.Mesh(GEO.mushStem, new THREE.MeshStandardMaterial({
    color: C.mushStem, roughness: 0.7, emissive: C.mushGlow, emissiveIntensity: 0.1
  }));
  stem.position.y = 0.3; g.add(stem);

  // Stem collar ring
  const collarMat = new THREE.MeshStandardMaterial({ color: C.mushStem, emissive: C.mushGlow, emissiveIntensity: 0.15, roughness: 0.6 });
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.012, 4, 8), collarMat);
  collar.position.y = 0.42; collar.rotation.x = Math.PI / 2; g.add(collar);

  const capMat = new THREE.MeshStandardMaterial({
    color: C.mushCap, emissive: C.mushGlow, emissiveIntensity: base,
    roughness: 0.3, transparent: true, opacity: 0.9
  });
  const cap = new THREE.Mesh(GEO.mushCap, capMat);
  cap.scale.set(1, 0.5, 1); cap.position.y = 0.55; cap.castShadow = true; cap.receiveShadow = true; g.add(cap);

  // Gill lines under cap (thin radial planes)
  const gillMat = new THREE.MeshStandardMaterial({
    color: 0x6622aa, emissive: C.mushGlow, emissiveIntensity: 0.3,
    transparent: true, opacity: 0.5, side: THREE.DoubleSide
  });
  for (let gi = 0; gi < 8; gi++) {
    const ga = (gi / 8) * 6.28;
    const gill = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.08), gillMat);
    gill.position.set(Math.cos(ga) * 0.15, 0.48, Math.sin(ga) * 0.15);
    gill.rotation.y = -ga; gill.rotation.x = 0.1;
    g.add(gill);
  }

  // Dots on cap (original)
  for (let i = 0; i < 4; i++) {
    const dM = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
    const dot = new THREE.Mesh(GEO.mushDot, dM);
    const da = sr() * 6.28, dr = 0.15 + sr() * 0.25;
    dot.position.set(Math.cos(da) * dr, 0.6 + sr() * 0.1, Math.sin(da) * dr);
    g.add(dot);
  }

  // Dew drops (2-3 tiny glass spheres on cap)
  const dewMat = new THREE.MeshStandardMaterial({
    color: 0xeeffff, emissive: 0xaaddff, emissiveIntensity: 0.2,
    transparent: true, opacity: 0.6, roughness: 0.0, metalness: 0.5
  });
  const dewN = 2 + Math.floor(sr() * 2);
  for (let di = 0; di < dewN; di++) {
    const dew = new THREE.Mesh(new THREE.SphereGeometry(0.015 + sr() * 0.015, 4, 3), dewMat);
    const dewA = sr() * 6.28, dewR = 0.1 + sr() * 0.2;
    dew.position.set(Math.cos(dewA) * dewR, 0.63 + sr() * 0.08, Math.sin(dewA) * dewR);
    g.add(dew);
  }

  // Mycelium threads at base (thin radiating lines)
  const mycMat = new THREE.MeshStandardMaterial({
    color: 0x4422aa, emissive: C.mushGlow, emissiveIntensity: 0.15,
    transparent: true, opacity: 0.35
  });
  for (let mi = 0; mi < 4; mi++) {
    const ma = sr() * 6.28, mLen = 0.15 + sr() * 0.25;
    const myc = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.002, mLen, 3), mycMat);
    myc.position.set(Math.cos(ma) * 0.12, 0.01, Math.sin(ma) * 0.12);
    myc.rotation.z = 1.3 * ((ma < 3.14) ? 1 : -1); myc.rotation.y = ma;
    g.add(myc);
  }

  // Cap edge fringe (slightly translucent rim ring)
  const fringeMat = new THREE.MeshStandardMaterial({
    color: C.mushCap, emissive: C.mushGlow, emissiveIntensity: base * 0.6,
    transparent: true, opacity: 0.4
  });
  const fringe = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.01, 4, 12), fringeMat);
  fringe.position.y = 0.49; fringe.rotation.x = Math.PI / 2; g.add(fringe);

  // Stem base volva bulb (swollen base)
  const volvaMat = new THREE.MeshStandardMaterial({
    color: C.mushStem, emissive: C.mushGlow, emissiveIntensity: 0.08, roughness: 0.7
  });
  const volva = new THREE.Mesh(new THREE.SphereGeometry(0.08, 5, 3), volvaMat);
  volva.scale.set(1, 0.5, 1); volva.position.y = 0.04; g.add(volva);

  // Substrate debris (tiny bark/soil bits around base)
  const subMat = new THREE.MeshStandardMaterial({ color: 0x1a1008, roughness: 0.95 });
  for (let si = 0; si < 3; si++) {
    const sa = sr() * 6.28, sd = 0.1 + sr() * 0.12;
    const sub = new THREE.Mesh(new THREE.SphereGeometry(0.008 + sr() * 0.008, 3, 3), subMat);
    sub.position.set(Math.cos(sa) * sd, 0.005, Math.sin(sa) * sd); g.add(sub);
  }

  // Micro spore cloud (tiny dots drifting below cap)
  const sporeMicroMat = new THREE.MeshBasicMaterial({
    color: C.mushGlow, transparent: true, opacity: 0.2
  });
  for (let spi = 0; spi < 4; spi++) {
    const spore = new THREE.Mesh(new THREE.SphereGeometry(0.006, 3, 3), sporeMicroMat);
    spore.position.set((sr() - 0.5) * 0.2, 0.35 + sr() * 0.1, (sr() - 0.5) * 0.2);
    g.add(spore);
  }

  // Cap wart bumps (3-5 raised spots on cap surface)
  const wartMat = new THREE.MeshStandardMaterial({
    color: 0xaa66dd, emissive: C.mushGlow, emissiveIntensity: base * 0.3, roughness: 0.5
  });
  const wartN = 3 + Math.floor(sr() * 3);
  for (let wi = 0; wi < wartN; wi++) {
    const wa = sr() * 6.28, wd = sr() * 0.25;
    const wart = new THREE.Mesh(new THREE.SphereGeometry(0.015 + sr() * 0.015, 3, 3), wartMat);
    wart.position.set(Math.cos(wa) * wd, 0.58 + sr() * 0.06, Math.sin(wa) * wd);
    g.add(wart);
  }

  // Ground moisture ring (dark damp circle at base)
  const dampMat = new THREE.MeshStandardMaterial({
    color: 0x0a0808, transparent: true, opacity: 0.2, roughness: 0.95, side: THREE.DoubleSide
  });
  const damp = new THREE.Mesh(new THREE.CircleGeometry(0.18, 8), dampMat);
  damp.rotation.x = -Math.PI / 2; damp.position.y = 0.005; g.add(damp);

  g.scale.setScalar(sc); g.position.set(x, 0, z); scene.add(g);
  return { group: g, capMat: capMat, phase: phase, speed: speed, base: base, x: x, z: z };
}
