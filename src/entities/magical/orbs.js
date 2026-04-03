// --- Golden Orb (enhanced multi-shell glow) ---
// FIELD REPORT (Dr. R. Vasquez, final entry):
//   Five of them. Always five. Placed at positions that look random
//   until you map them — then you see the pentagonal symmetry. They
//   pulse at 0.8 Hz, exactly matching human resting heart rate.
//   Coincidence? I stopped believing in coincidence on day 3.
//   The forest put them here for someone to find. I just don't think
//   that someone was us.
import { CircleGeometry, ConeGeometry, DoubleSide, Group, IcosahedronGeometry, Mesh, MeshBasicMaterial, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

export function makeOrb(x, z) {
  const g = new Group();
  // Core sphere
  const coreMat = new MeshBasicMaterial({ color: C.orbGold });
  const core = new Mesh(new SphereGeometry(0.2, 10, 8), coreMat);
  g.add(core);
  // Inner seed (tiny bright white center)
  const seedMat = new MeshBasicMaterial({ color: 0xffffff });
  const seed = new Mesh(new SphereGeometry(0.06, 6, 4), seedMat);
  g.add(seed);
  // Inner star wireframe (icosahedron)
  const starMat = new MeshBasicMaterial({
    color: C.skyStarWarm, transparent: true, opacity: 0.4, wireframe: true,
    depthWrite: false
  });
  const star = new Mesh(new IcosahedronGeometry(0.15, 0), starMat);
  g.add(star);
  // Inner glow shell
  const glowMat = new MeshBasicMaterial({
    color: C.orbGlow, transparent: true, opacity: 0.5,
    depthWrite: false
  });
  const glow = new Mesh(new SphereGeometry(0.35, 8, 6), glowMat);
  g.add(glow);
  // Corona ray spikes (8 thin cones radiating outward)
  const rayMat = new MeshBasicMaterial({
    color: C.orbGlow, transparent: true, opacity: 0.3,
    depthWrite: false
  });
  for (let ri = 0; ri < 8; ri++) {
    const ra = (ri / 8) * 6.28;
    const ray = new Mesh(new ConeGeometry(0.02, 0.25, 3), rayMat);
    ray.position.set(Math.cos(ra) * 0.3, Math.sin(ra * 2) * 0.05, Math.sin(ra) * 0.3);
    ray.rotation.z = -ra + Math.PI / 2; ray.rotation.y = ra;
    g.add(ray);
  }
  // Outer haze shell
  const hazeMat = new MeshBasicMaterial({
    color: C.orbInner, transparent: true, opacity: 0.15,
    depthWrite: false
  });
  const haze = new Mesh(new SphereGeometry(0.6, 8, 5), hazeMat);
  g.add(haze);
  // Orbiting sparkle ring (small dots)
  for (let i = 0; i < 6; i++) {
    const sp = new Mesh(new SphereGeometry(0.03, 4, 3),
      new MeshBasicMaterial({ color: C.white }));
    const a = (i / 6) * 6.28;
    sp.position.set(Math.cos(a) * 0.4, Math.sin(a * 2) * 0.1, Math.sin(a) * 0.4);
    g.add(sp);
  }
  // Rune dots (4 tiny golden markers on equatorial band)
  const runeMat = new MeshBasicMaterial({
    color: C.orbGold, transparent: true, opacity: 0.7,
    depthWrite: false
  });
  for (let di = 0; di < 4; di++) {
    const da = (di / 4) * 6.28 + 0.4;
    const rune = new Mesh(new SphereGeometry(0.015, 3, 3), runeMat);
    rune.position.set(Math.cos(da) * 0.5, 0, Math.sin(da) * 0.5);
    g.add(rune);
  }

  // Sacred geometry lines (3 great-circle arcs around orb)
  const sacredMat = new MeshBasicMaterial({
    color: C.skyStarWarm, transparent: true, opacity: 0.12,
    depthWrite: false
  });
  for (let sgi = 0; sgi < 3; sgi++) {
    const sgR = new Mesh(new TorusGeometry(0.28, 0.003, 4, 12), sacredMat);
    sgR.rotation.set(sgi * 1.05, sgi * 0.7, 0); g.add(sgR);
  }

  // Orbit trail arc (faint ring showing sparkle path)
  const trailMat = new MeshBasicMaterial({
    color: C.orbGlow, transparent: true, opacity: 0.08,
    depthWrite: false
  });
  const trail = new Mesh(new TorusGeometry(0.4, 0.004, 4, 16), trailMat);
  trail.rotation.x = Math.PI / 2; g.add(trail);

  // Energy pulse ring (thicker torus at midpoint)
  const pulseMat = new MeshBasicMaterial({
    color: C.orbInner, transparent: true, opacity: 0.15,
    depthWrite: false
  });
  const pulse = new Mesh(new TorusGeometry(0.25, 0.012, 4, 10), pulseMat);
  pulse.rotation.x = Math.PI / 2; g.add(pulse);

  // Micro-facet surface sparkles (tiny dots on core surface)
  const facetMat = new MeshBasicMaterial({
    color: C.white, transparent: true, opacity: 0.5,
    depthWrite: false
  });
  for (let fci = 0; fci < 6; fci++) {
    const fca = sr() * 6.28, fce = sr() * Math.PI - Math.PI / 2;
    const fc = new Mesh(new SphereGeometry(0.008, 3, 3), facetMat);
    fc.position.set(Math.cos(fca) * Math.cos(fce) * 0.2, Math.sin(fce) * 0.2, Math.sin(fca) * Math.cos(fce) * 0.2);
    g.add(fc);
  }

  // Ground glow disc (projected light circle below orb)
  const gndMat = new MeshBasicMaterial({
    color: C.orbGlow, transparent: true, opacity: 0.1, side: DoubleSide,
    depthWrite: false
  });
  const gndGlow = new Mesh(new CircleGeometry(0.5, 8), gndMat);
  gndGlow.rotation.x = -Math.PI / 2; gndGlow.position.y = -0.95; g.add(gndGlow);

  g.position.set(x, 1.0, z);
  scene.add(g);
  return {
    group: g, coreMat: coreMat, glowMat: glowMat, hazeMat: hazeMat,
    x: x, z: z, found: false, flyUp: false, flyY: 1.0, phase: sr() * 6.28,
    laserLine: null, laserMat: null
  };
}
