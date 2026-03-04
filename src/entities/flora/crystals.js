import { CircleGeometry, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, PointLight, SphereGeometry, TorusGeometry } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';
import { GEO } from '../../core/geometries.js';

// ================================================================
// Shared materials — created once, reused across all 100 crystal instances
// ================================================================
const _rockMat = new MeshStandardMaterial({ color: 0x1a1a22, roughness: 0.9, metalness: 0.1 });
const _veinMat = new MeshBasicMaterial({ color: C.crystalCore, transparent: true, opacity: 0.5 });
const _moteMat = new MeshBasicMaterial({ color: 0xaaffee, transparent: true, opacity: 0.6 });
const _shardMat = new MeshStandardMaterial({
  color: C.crystal, emissive: C.crystalCore, emissiveIntensity: 0.8,
  transparent: true, opacity: 0.5
});
const _stainMat = new MeshStandardMaterial({
  color: 0x335566, emissive: 0x112233, emissiveIntensity: 0.05, roughness: 0.9, side: DoubleSide
});
const _filMat = new MeshBasicMaterial({ color: C.crystalCore, transparent: true, opacity: 0.2 });
const _inclMat = new MeshStandardMaterial({
  color: 0x115544, emissive: 0x113322, emissiveIntensity: 0.3,
  transparent: true, opacity: 0.25
});
const _prismMat = new MeshBasicMaterial({ color: 0xaaffee, transparent: true, opacity: 0.06 });
const _groundGlowMat = new MeshBasicMaterial({
  color: C.crystal, transparent: true, opacity: 0.06, side: DoubleSide
});

// --- Crystals (emissive + SHARED proximity PointLights managed by Director) ---
export function makeCrystal(x, z) {
  const g = new Group();
  const phase = sr() * 6.28;
  const cMat = new MeshStandardMaterial({
    color: C.crystal, emissive: C.crystalCore, emissiveIntensity: 1.5,
    transparent: true, opacity: 0.7, roughness: 0.1, metalness: 0.5
  });
  const main = new Mesh(GEO.crystal, cMat);
  main.position.y = 0.9; main.castShadow = true; g.add(main);

  for (let i = 0; i < 3; i++) {
    const sh = new Mesh(GEO.crystalSm, cMat);
    const a = (i / 3) * 6.28 + sr() * 0.5;
    sh.position.set(Math.cos(a) * 0.4, 0.45, Math.sin(a) * 0.4);
    sh.rotation.z = (sr() - 0.5) * 0.8; sh.castShadow = true; g.add(sh);
  }

  // Base rock cluster (3-5 dark stones)
  const rockN = 3 + Math.floor(sr() * 3);
  for (let ri = 0; ri < rockN; ri++) {
    const ra = sr() * 6.28, rd = 0.2 + sr() * 0.5;
    const rSz = 0.08 + sr() * 0.12;
    const rock = new Mesh(new SphereGeometry(rSz, 4, 3), _rockMat);
    rock.scale.set(1 + sr() * 0.5, 0.5 + sr() * 0.4, 1 + sr() * 0.5);
    rock.position.set(Math.cos(ra) * rd, rSz * 0.3, Math.sin(ra) * rd);
    rock.rotation.set(sr(), sr(), sr()); g.add(rock);
  }

  // Inner fracture veins (thin bright lines inside main crystal)
  for (let vi = 0; vi < 3; vi++) {
    const vLen = 0.4 + sr() * 0.8;
    const vein = new Mesh(new CylinderGeometry(0.008, 0.008, vLen, 3), _veinMat);
    vein.position.set((sr() - 0.5) * 0.15, 0.5 + sr() * 0.7, (sr() - 0.5) * 0.15);
    vein.rotation.set((sr() - 0.5) * 0.8, (sr() - 0.5) * 0.5, (sr() - 0.5) * 0.8);
    g.add(vein);
  }

  // Ambient floating motes near crystal (tiny static sparkles)
  for (let mi = 0; mi < 5; mi++) {
    const mote = new Mesh(new SphereGeometry(0.012, 3, 3), _moteMat);
    mote.position.set((sr() - 0.5) * 1.0, 0.3 + sr() * 1.5, (sr() - 0.5) * 1.0);
    g.add(mote);
  }

  // Micro-crystal shards (tiny spikes on base rocks)
  for (let sci = 0; sci < 4; sci++) {
    const sa = sr() * 6.28, sd = 0.3 + sr() * 0.3;
    const shard = new Mesh(new CylinderGeometry(0, 0.015, 0.12 + sr() * 0.1, 3), _shardMat);
    shard.position.set(Math.cos(sa) * sd, 0.06 + sr() * 0.1, Math.sin(sa) * sd);
    shard.rotation.z = (sr() - 0.5) * 0.6; g.add(shard);
  }

  // Mineral stain rings on base rocks (flat colored circles)
  for (let sti = 0; sti < 2; sti++) {
    const sta = sr() * 6.28, std = 0.2 + sr() * 0.3;
    const stain = new Mesh(new CircleGeometry(0.04 + sr() * 0.03, 5), _stainMat);
    stain.rotation.x = -Math.PI / 2 + sr() * 0.4;
    stain.position.set(Math.cos(sta) * std, 0.05, Math.sin(sta) * std); g.add(stain);
  }

  // Energy filament wisps (curved lines connecting crystal tips)
  for (let fli = 0; fli < 2; fli++) {
    const fil = new Mesh(new CylinderGeometry(0.003, 0.003, 0.6 + sr() * 0.4, 3), _filMat);
    fil.position.set((sr() - 0.5) * 0.3, 0.7 + sr() * 0.5, (sr() - 0.5) * 0.3);
    fil.rotation.set((sr() - 0.5) * 1.0, sr(), (sr() - 0.5) * 1.0); g.add(fil);
  }

  // Surface inclusions (tiny darker spots inside crystal body)
  for (let ii = 0; ii < 4; ii++) {
    const incl = new Mesh(new SphereGeometry(0.02 + sr() * 0.02, 3, 3), _inclMat);
    incl.position.set((sr() - 0.5) * 0.15, 0.4 + sr() * 0.6, (sr() - 0.5) * 0.15);
    g.add(incl);
  }

  // Prismatic halo ring (rainbow tint torus around main crystal)
  const prism = new Mesh(new TorusGeometry(0.35, 0.02, 4, 10), _prismMat);
  prism.position.y = 0.6; prism.rotation.x = Math.PI / 2 + sr() * 0.3; g.add(prism);

  // Ground glow stain (emissive circle on floor beneath crystal)
  const groundGlow = new Mesh(new CircleGeometry(0.8, 8), _groundGlowMat);
  groundGlow.rotation.x = -Math.PI / 2; groundGlow.position.y = 0.01; g.add(groundGlow);

  g.position.set(x, 0, z); scene.add(g);
  // Crystal casts local colored light onto surroundings
  const crystLight = new PointLight(C.crystal, 0.5, 8);
  crystLight.position.set(x, 1.2, z);
  scene.add(crystLight);
  return { group: g, mat: cMat, phase: phase, x: x, z: z, light: crystLight };
}
