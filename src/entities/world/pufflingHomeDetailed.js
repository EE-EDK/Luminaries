// ================================================================
// Detailed puffling mushroom home — matches public/assets/
// mushroom-house-puffling-home.html geometry (bricks, cap, door, window).
// Built for world placement: merged meshes, no pond/orbit particles.
// ================================================================

import {
  BoxGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  Group,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  Quaternion,
  Shape,
  SphereGeometry,
  Vector3
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Same footprint as mushroom-house-puffling-home.html HOUSE */
export const PUFF_HOUSE = Object.freeze({
  baseHeight: 5.0,
  baseRadius: 3.5,
  topRadius: 3.0,
  capRadius: 6.5,
  capFlatten: 0.55,
  brickLayers: 10,
  bricksPerRow: 18
});

/** Uniform scale applied so settlements fit existing terrain pads ~ old instanced size */
export const PUFF_HOME_WORLD_SCALE = 0.68;

/**
 * Horizontal collision radius at xz — must cover the scaled cap rim (same as HTML asset),
 * not a shrunk factor; otherwise the cylinder is narrower than the brick shell and you walk through.
 */
export function pufflingHomeCollisionRadius() {
  const capXZ = PUFF_HOUSE.capRadius * PUFF_HOME_WORLD_SCALE;
  const stalkXZ = Math.max(PUFF_HOUSE.baseRadius, PUFF_HOUSE.topRadius) * PUFF_HOME_WORLD_SCALE;
  return Math.max(capXZ, stalkXZ) + 0.55;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * @param {{ brickHueRange: number[], brickSatRange: number[], brickLumRange: number[],
 *   innerWall: number, cap: number, capEmissive: number, capEmissiveInt: number,
 *   gill: number, gillEmissive: number, gillEmissiveInt: number,
 *   spot: number, spotEmissive: number, spotEmissiveInt: number,
 *   door: number, doorFrame: number, doorGroove: number,
 *   knob: number, knobEmissive: number, knobEmissiveInt: number,
 *   glass: number, glassEmissive: number, glassEmissiveInt: number }} theme
 * @param {number} seed
 */
export function createPufflingHomeDetailedGroup(theme, seed) {
  const rng = mulberry32(seed);
  const H = PUFF_HOUSE;

  const brickMat = new MeshStandardMaterial({
    color: theme.stalk ?? 0x222a2a,
    roughness: 0.92,
    metalness: 0,
    fog: false
  });
  if (theme.brickEmissive !== undefined) {
    brickMat.emissive.setHex(theme.brickEmissive);
    brickMat.emissiveIntensity = theme.brickEmissiveInt ?? 0;
  }
  const innerMat = new MeshStandardMaterial({ color: theme.innerWall ?? 0x0a0a0a, roughness: 0.95, fog: false });
  const capMat = new MeshStandardMaterial({
    color: theme.cap,
    emissive: theme.capEmissive,
    emissiveIntensity: theme.capEmissiveInt ?? 0.25,
    roughness: 0.45,
    metalness: 0.05,
    fog: false
  });
  const gillMat = new MeshStandardMaterial({
    color: theme.gill,
    emissive: theme.gillEmissive,
    emissiveIntensity: theme.gillEmissiveInt ?? 0.7,
    roughness: 0.9,
    fog: false
  });
  const spotMat = new MeshStandardMaterial({
    color: theme.spot,
    emissive: theme.spotEmissive,
    emissiveIntensity: theme.spotEmissiveInt ?? 1.5,
    roughness: 0.35,
    fog: false
  });
  const doorMat = new MeshStandardMaterial({ color: theme.door, roughness: 0.9, fog: false });
  const doorFrameMat = new MeshStandardMaterial({ color: theme.doorFrame ?? 0x4b4038, roughness: 1.0, fog: false });
  const doorGrooveMat = new MeshStandardMaterial({ color: theme.doorGroove ?? 0x150805, roughness: 0.95, fog: false });
  const knobMat = new MeshStandardMaterial({
    color: theme.knob,
    emissive: theme.knobEmissive,
    emissiveIntensity: theme.knobEmissiveInt ?? 1.5,
    metalness: 0.7,
    roughness: 0.25,
    fog: false
  });
  const glassMat = new MeshStandardMaterial({
    color: theme.glass,
    emissive: theme.glassEmissive,
    emissiveIntensity: theme.glassEmissiveInt ?? 1.0,
    transparent: true,
    opacity: 0.85,
    fog: false
  });

  const root = new Group();
  root.scale.setScalar(PUFF_HOME_WORLD_SCALE);

  const _m = new Matrix4();
  const _q = new Quaternion();
  const _v = new Vector3();

  // --- Brick rings → single merged geometry (single material for perf) ---
  const brickGeos = [];
  const brickH = H.baseHeight / H.brickLayers;
  const brickTemplate = new BoxGeometry(1, 1, 1);
  for (let i = 0; i < H.brickLayers; i++) {
    const t = i / Math.max(H.brickLayers - 1, 1);
    const radius = H.baseRadius * (1 - t) + H.topRadius * t;
    const y = i * brickH + brickH / 2;
    const angleOffset = (i % 2 === 0) ? 0 : Math.PI / H.bricksPerRow;
    const brickWidth = ((Math.PI * 2 * radius) / H.bricksPerRow) * 0.95;
    for (let j = 0; j < H.bricksPerRow; j++) {
      const angle = j * ((Math.PI * 2) / H.bricksPerRow) + angleOffset;
      const bx = Math.cos(angle) * radius;
      const bz = Math.sin(angle) * radius;
      _q.setFromAxisAngle(new Vector3(0, 1, 0), angle + Math.PI / 2);
      _m.compose(new Vector3(bx, y, bz), _q, new Vector3(brickWidth, brickH * 0.9, 0.8));
      const g = brickTemplate.clone();
      g.applyMatrix4(_m);
      brickGeos.push(g);
    }
  }
  const mergedBricks = mergeGeometries(brickGeos);
  if (mergedBricks) {
    const brickMesh = new Mesh(mergedBricks, brickMat);
    brickMesh.castShadow = true;
    brickMesh.receiveShadow = true;
    root.add(brickMesh);
  }

  const innerWall = new Mesh(
    new CylinderGeometry(H.topRadius - 0.4, H.baseRadius - 0.4, H.baseHeight, 28),
    innerMat
  );
  innerWall.position.y = H.baseHeight / 2;
  innerWall.castShadow = true;
  innerWall.receiveShadow = true;
  root.add(innerWall);

  const seal = new Mesh(
    new CylinderGeometry(H.topRadius - 0.3, H.topRadius - 0.3, 0.2, 28),
    innerMat
  );
  seal.position.y = H.baseHeight;
  root.add(seal);

  // --- Cap + gill ---
  const capGeo = new SphereGeometry(H.capRadius, 36, 20, 0, Math.PI * 2, 0, Math.PI / 2);
  capGeo.scale(1, H.capFlatten, 1);
  const cap = new Mesh(capGeo, capMat);
  cap.position.y = H.baseHeight;
  cap.castShadow = true;
  cap.receiveShadow = true;
  root.add(cap);

  const gill = new Mesh(
    new CylinderGeometry(H.capRadius - 0.1, H.capRadius * 0.6, 0.5, 36, 1, false),
    gillMat
  );
  gill.position.y = H.baseHeight - 0.25;
  gill.receiveShadow = true;
  root.add(gill);

  // --- Spots (merged) ---
  const spotGeos = [];
  const spotTemplate = new SphereGeometry(0.5, 10, 8);
  spotTemplate.scale(1, 0.3, 1);
  const r = H.capRadius;
  const flat = H.capFlatten;
  const yPos = H.baseHeight;
  for (let i = 0; i < 18; i++) {
    const theta = rng() * Math.PI * 2;
    const phi = rng() * (Math.PI / 2.2);
    const sx = r * Math.sin(phi) * Math.cos(theta);
    const sy = r * flat * Math.cos(phi);
    const sz = r * Math.sin(phi) * Math.sin(theta);
    const normal = new Vector3(sx, sy / flat, sz).normalize();
    _q.setFromUnitVectors(new Vector3(0, 1, 0), normal);
    const sc = 0.5 + rng() * 1.5;
    _m.compose(new Vector3(sx, sy + yPos, sz), _q, new Vector3(sc, sc, sc));
    const g = spotTemplate.clone();
    g.applyMatrix4(_m);
    spotGeos.push(g);
  }
  if (spotGeos.length) {
    root.add(new Mesh(mergeGeometries(spotGeos), spotMat));
  }

  // --- Door ---
  const doorRoot = new Group();
  const doorShape = new Shape();
  doorShape.moveTo(-1, 0);
  doorShape.lineTo(-1, 1.5);
  doorShape.absarc(0, 1.5, 1, Math.PI, 0, true);
  doorShape.lineTo(1, 0);
  doorShape.lineTo(-1, 0);

  const frame = new Mesh(new ExtrudeGeometry(doorShape, { depth: 0.3, bevelEnabled: false }), doorFrameMat);
  frame.scale.set(1.18, 1.15, 1);
  frame.position.z = -0.06;
  frame.castShadow = true;
  doorRoot.add(frame);

  const doorPanel = new Mesh(new ExtrudeGeometry(doorShape, { depth: 0.2, bevelEnabled: false }), doorMat);
  doorPanel.castShadow = true;
  doorPanel.receiveShadow = true;
  doorRoot.add(doorPanel);

  const grooveGeo = new BoxGeometry(0.05, 2.4, 0.22);
  for (let i = -0.5; i <= 0.5; i += 0.5) {
    const g = new Mesh(grooveGeo, doorGrooveMat);
    g.position.set(i, 1.2, 0.001);
    doorRoot.add(g);
  }
  const knob = new Mesh(new SphereGeometry(0.15, 14, 12), knobMat);
  knob.position.set(0.6, 1.0, 0.25);
  doorRoot.add(knob);

  doorRoot.position.set(0, 0, H.baseRadius + 0.35);
  root.add(doorRoot);

  // --- Window ---
  const win = new Mesh(new PlaneGeometry(1.2, 1.4), glassMat);
  const wr = H.topRadius + 0.35;
  win.position.set(-wr * 0.85, 1.3, wr * 0.45);
  win.rotation.y = 0.9;
  root.add(win);

  root.traverse((ch) => {
    if (ch.isMesh) {
      ch.castShadow = true;
      ch.receiveShadow = true;
      ch.frustumCulled = false;
    }
  });

  /** Materials for theme swapping (orb completion) */
  root.userData.pufflingMats = {
    brickMat,
    innerMat,
    capMat,
    gillMat,
    spotMat,
    doorMat,
    doorFrameMat,
    doorGrooveMat,
    knobMat,
    glassMat
  };

  return root;
}

/** Theme payload aligned with pufflingHomes THEME_BIO / THEME_COTTAGE + HTML innerWall/glass */
export function themePayloadBioluminescent() {
  return {
    stalk: 0x222a2a,
    brickEmissive: 0x062822,
    brickEmissiveInt: 0.22,
    innerWall: 0x0a0a0a,
    cap: 0x003333,
    capEmissive: 0x002222,
    capEmissiveInt: 0.35,
    gill: 0x00ff88,
    gillEmissive: 0x00aa55,
    gillEmissiveInt: 0.75,
    spot: 0x88ffcc,
    spotEmissive: 0x00ffaa,
    spotEmissiveInt: 1.65,
    door: 0x2a1a15,
    doorFrame: 0x4b4038,
    doorGroove: 0x150805,
    knob: 0x88ffcc,
    knobEmissive: 0x00ffaa,
    knobEmissiveInt: 1.55,
    glass: 0x88ffcc,
    glassEmissive: 0x00ffaa,
    glassEmissiveInt: 1.25
  };
}

export function themePayloadCottage() {
  return {
    stalk: 0xb8a890,
    brickEmissive: 0x000000,
    brickEmissiveInt: 0,
    innerWall: 0x3a1f10,
    cap: 0xff7aa8,
    capEmissive: 0x000000,
    capEmissiveInt: 0,
    gill: 0xfff0f5,
    gillEmissive: 0x000000,
    gillEmissiveInt: 0,
    spot: 0xffffff,
    spotEmissive: 0x000000,
    spotEmissiveInt: 0,
    door: 0x5a3a1f,
    doorFrame: 0x7a5a3c,
    doorGroove: 0x2e1a0a,
    knob: 0xb87333,
    knobEmissive: 0x000000,
    knobEmissiveInt: 0,
    glass: 0xe6c8ff,
    glassEmissive: 0xb088ff,
    glassEmissiveInt: 0.55
  };
}

export function applyThemeToDetailedHouse(root, cottage) {
  const p = cottage ? themePayloadCottage() : themePayloadBioluminescent();
  const m = root.userData.pufflingMats;
  if (!m) return;

  m.brickMat.color.setHex(p.stalk);
  if (p.brickEmissive !== undefined) {
    m.brickMat.emissive.setHex(p.brickEmissive);
    m.brickMat.emissiveIntensity = p.brickEmissiveInt ?? 0;
  }
  m.innerMat.color.setHex(p.innerWall);
  m.capMat.color.setHex(p.cap);
  m.capMat.emissive.setHex(p.capEmissive);
  m.capMat.emissiveIntensity = p.capEmissiveInt;
  m.gillMat.color.setHex(p.gill);
  m.gillMat.emissive.setHex(p.gillEmissive);
  m.gillMat.emissiveIntensity = p.gillEmissiveInt;
  m.spotMat.color.setHex(p.spot);
  m.spotMat.emissive.setHex(p.spotEmissive);
  m.spotMat.emissiveIntensity = p.spotEmissiveInt;
  m.doorMat.color.setHex(p.door);
  m.doorFrameMat.color.setHex(p.doorFrame);
  m.doorGrooveMat.color.setHex(p.doorGroove);
  m.knobMat.color.setHex(p.knob);
  m.knobMat.emissive.setHex(p.knobEmissive);
  m.knobMat.emissiveIntensity = p.knobEmissiveInt;
  m.glassMat.color.setHex(p.glass);
  m.glassMat.emissive.setHex(p.glassEmissive);
  m.glassMat.emissiveIntensity = p.glassEmissiveInt;
}
