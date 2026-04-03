// --- Fairy Ring (enhanced mushroom circle + glow ring) ---
import { CircleGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, RingGeometry, SphereGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C, FAIRY_RING_R } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';

export function makeFairyRing(x, z) {
  const g = new Group();
  const ringR = FAIRY_RING_R;
  const mushCount = 8 + Math.floor(sr() * 5);
  const mushMat = new MeshStandardMaterial({
    color: C.fairyMush, emissive: C.fairyGlow, emissiveIntensity: 0.2, roughness: 0.5
  });
  const stemMat = new MeshStandardMaterial({
    color: C.mushStem, roughness: 0.7, emissive: C.fairyGlow, emissiveIntensity: 0.05
  });
  for (let i = 0; i < mushCount; i++) {
    const a = (i / mushCount) * 6.28 + sr() * 0.15;
    const mr = ringR + sr() * 0.3 - 0.15;
    const sc = 0.15 + sr() * 0.2;
    const liftY = 0.06; // raise all mushrooms above ground to prevent terrain clipping
    // Mini mushroom stem
    const s = new Mesh(GEO.mushStem, stemMat);
    s.scale.setScalar(sc); s.position.set(Math.cos(a) * mr, sc * 0.3 + liftY, Math.sin(a) * mr); g.add(s);
    // Mini cap
    const cap = new Mesh(GEO.mushCap, mushMat);
    cap.scale.set(sc, sc * 0.4, sc); cap.position.set(Math.cos(a) * mr, sc * 0.55 + liftY, Math.sin(a) * mr); g.add(cap);
    // Cap dot (white spot on each mini cap)
    const dotMat = new MeshBasicMaterial({
      color: C.white, transparent: true, opacity: 0.7,
      depthWrite: false
    });
    const dot = new Mesh(new SphereGeometry(sc * 0.08, 3, 3), dotMat);
    dot.position.set(Math.cos(a) * mr, sc * 0.6 + liftY, Math.sin(a) * mr); g.add(dot);
  }
  // Tiny toadstools between main mushrooms (smaller extras)
  const toadMat = new MeshStandardMaterial({
    color: 0x885588, emissive: C.fairyGlow, emissiveIntensity: 0.1, roughness: 0.6
  });
  for (let ti = 0; ti < 5; ti++) {
    const ta = sr() * 6.28;
    const tr = ringR + sr() * 0.6 - 0.3;
    const tsc = 0.06 + sr() * 0.06;
    const toad = new Mesh(GEO.mushCap, toadMat);
    toad.scale.set(tsc, tsc * 0.5, tsc);
    toad.position.set(Math.cos(ta) * tr, tsc * 0.35 + 0.04, Math.sin(ta) * tr); g.add(toad);
  }
  // Moss patches on ground between mushrooms (3-5 green blobs)
  const mossMat = new MeshStandardMaterial({
    color: 0x1a5525, emissive: 0x0a2210, emissiveIntensity: 0.05, roughness: 0.9
  });
  for (let mi = 0; mi < 4; mi++) {
    const ma = sr() * 6.28, md = sr() * ringR * 0.8;
    const moss = new Mesh(new SphereGeometry(0.08 + sr() * 0.08, 4, 3), mossMat);
    moss.scale.set(1.5, 0.2, 1.5);
    moss.position.set(Math.cos(ma) * md, 0.01, Math.sin(ma) * md); g.add(moss);
  }
  // Center stone (flat pebble at ring center)
  const stoneMat = new MeshStandardMaterial({
    color: 0x445566, emissive: C.fairyGlow, emissiveIntensity: 0.05, roughness: 0.85
  });
  const stone = new Mesh(new SphereGeometry(0.12, 5, 3), stoneMat);
  stone.scale.set(1.2, 0.3, 1.0); stone.position.y = 0.03; g.add(stone);
  // Spore haze motes (floating particles inside ring — animated)
  const sporeMat = new MeshBasicMaterial({
    color: C.fairyGlow, transparent: true, opacity: 0.2,
    depthWrite: false
  });
  const spores = [];
  for (let si = 0; si < 8; si++) {
    const spore = new Mesh(new SphereGeometry(0.012, 3, 3), sporeMat);
    const sx = (sr() - 0.5) * ringR * 0.8, sz = (sr() - 0.5) * ringR * 0.8;
    spore.position.set(sx, 0.05 + sr() * 0.3, sz);
    g.add(spore);
    spores.push({ mesh: spore, baseX: sx, baseZ: sz, drift: sr() * 6.28, speed: 0.2 + sr() * 0.3 });
  }
  // Central glow disc (flat ring on ground — raised above terrain)
  const discMat = new MeshBasicMaterial({
    color: C.fairyRing, transparent: true, opacity: 0.0, side: DoubleSide,
    depthWrite: false
  });
  const disc = new Mesh(new RingGeometry(0.3, ringR - 0.3, 16), discMat);
  disc.rotation.x = -Math.PI / 2; disc.position.y = 0.12; g.add(disc); // raised from 0.02

  // Mycelium web threads on ground (radial connecting lines between mushrooms)
  const webMat = new MeshBasicMaterial({
    color: C.fairyGlow, transparent: true, opacity: 0.08,
    depthWrite: false
  });
  for (let wi = 0; wi < 6; wi++) {
    const wA1 = sr() * 6.28, wA2 = wA1 + 0.5 + sr() * 1.5;
    const webLen = ringR * 0.6 + sr() * ringR * 0.4;
    const web = new Mesh(new CylinderGeometry(0.002, 0.002, webLen, 3), webMat);
    web.position.set(Math.cos((wA1 + wA2) / 2) * ringR * 0.4, 0.005, Math.sin((wA1 + wA2) / 2) * ringR * 0.4);
    web.rotation.x = Math.PI / 2; web.rotation.z = wA1; g.add(web);
  }

  // Tiny fallen spore caps (old dried mushroom remnants)
  const oldCapMat = new MeshStandardMaterial({
    color: 0x4a3a30, roughness: 0.9, transparent: true, opacity: 0.5,
    depthWrite: false
  });
  for (let oci = 0; oci < 3; oci++) {
    const oa = sr() * 6.28, od = sr() * ringR * 0.7;
    const oldCap = new Mesh(new SphereGeometry(0.03, 4, 3), oldCapMat);
    oldCap.scale.set(1.3, 0.3, 1.3);
    oldCap.position.set(Math.cos(oa) * od, 0.008, Math.sin(oa) * od); g.add(oldCap);
  }

  // Lichen spots on center stone
  const lichMat = new MeshStandardMaterial({
    color: 0x778866, roughness: 0.9, transparent: true, opacity: 0.5,
    depthWrite: false
  });
  for (let lci = 0; lci < 2; lci++) {
    const lich = new Mesh(new CircleGeometry(0.02 + sr() * 0.02, 4), lichMat);
    lich.position.set((sr() - 0.5) * 0.08, 0.06, (sr() - 0.5) * 0.06);
    lich.rotation.x = -Math.PI / 2 + sr() * 0.4; g.add(lich);
  }

  // Glow worm dots (tiny bioluminescent specks at ground level)
  const glowWorms = [];
  for (let gwi = 0; gwi < 5; gwi++) {
    const gwa = sr() * 6.28, gwd = sr() * ringR * 0.9;
    const gwm = new MeshBasicMaterial({
      color: 0x88ffaa, transparent: true, opacity: 0.25,
      depthWrite: false
    });
    const gw = new Mesh(new SphereGeometry(0.005, 3, 3), gwm);
    gw.position.set(Math.cos(gwa) * gwd, 0.01, Math.sin(gwa) * gwd); g.add(gw);
    glowWorms.push(gw);
  }

  // Dew-wet soil ring (dark dampness circle just inside mushroom ring)
  const dampMat = new MeshBasicMaterial({
    color: 0x0a0a06, transparent: true, opacity: 0.15, side: DoubleSide,
    depthWrite: false
  });
  const damp = new Mesh(new RingGeometry(ringR * 0.5, ringR * 0.85, 12), dampMat);
  damp.rotation.x = -Math.PI / 2; damp.position.y = 0.008; g.add(damp);

  g.position.set(x, 0, z); scene.add(g);
  return {
    group: g, mushMat: mushMat, discMat: discMat, sporeMat, spores, glowWorms,
    x: x, z: z, ringR, phase: sr() * 6.28, glowIntensity: 0, active: false
  };
}
