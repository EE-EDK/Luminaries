// ================================================================
// Detailed puffling mushroom home — matches public/assets/
// mushroom-house-puffling-home.html geometry (bricks, cap, door, window).
// Built for world placement: merged meshes, no pond/orbit particles.
// ================================================================

import {
  BoxGeometry,
  BufferAttribute,
  Color,
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
import { C } from '../../constants.js';

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
 * Build a small flower garden ringing a cottage home. Merged to 4 draw calls
 * (stems, leaves, flower heads, centers) — static decor, no per-frame work.
 * Returns a Group positioned at the home base; caller toggles visibility.
 * @param {() => number} rng deterministic per-home RNG
 * @param {{ baseRadius: number }} H house footprint
 */
function makeCottageGarden(rng, H) {
  const group = new Group();
  const stemGeos = [];
  const leafGeos = [];
  const headGeos = [];
  const centerGeos = [];

  const stemTmpl = new CylinderGeometry(0.025, 0.04, 1, 5);
  const leafTmpl = new SphereGeometry(0.14, 6, 4);
  leafTmpl.scale(1, 0.28, 0.55);
  const headTmpl = new SphereGeometry(0.18, 8, 6);
  headTmpl.scale(1, 0.55, 1);
  const centerTmpl = new SphereGeometry(0.07, 6, 5);

  // Per-flower head color baked into vertex colors so one material covers the
  // whole ring (cottage palette: gold / pink / lavender garden blooms).
  const _hc = new Color();
  const palette = [C.puffGardenFlowerA, C.puffGardenFlowerB, C.puffGardenFlowerC];
  const headVCount = headTmpl.attributes.position.count;

  const ringInner = H.baseRadius + 0.6;
  const ringSpan = 2.6;
  const m = new Matrix4();
  const q = new Quaternion();
  const s = new Vector3();
  const yAxis = new Vector3(0, 1, 0);

  for (let i = 0; i < 22; i++) {
    const angle = rng() * Math.PI * 2;
    // Keep the doorway approach (door faces +Z) clear so the path stays open.
    if (angle > Math.PI / 2 - 0.5 && angle < Math.PI / 2 + 0.5) continue;
    const rad = ringInner + rng() * ringSpan;
    const fx = Math.cos(angle) * rad;
    const fz = Math.sin(angle) * rad;
    const stemH = 0.5 + rng() * 0.7;
    const lean = (rng() - 0.5) * 0.18;

    q.setFromAxisAngle(new Vector3(0, 0, 1), lean);
    // Stem (unit cyl scaled to height).
    s.set(1, stemH, 1);
    m.compose(new Vector3(fx, stemH * 0.5, fz), q, s);
    const sg = stemTmpl.clone();
    sg.applyMatrix4(m);
    stemGeos.push(sg);

    // Two leaves partway up the stem.
    for (let l = 0; l < 2; l++) {
      const la = angle + (l === 0 ? 0.9 : -0.9);
      const ly = stemH * (0.35 + l * 0.18);
      q.setFromAxisAngle(yAxis, la);
      s.set(1, 1, 1);
      m.compose(new Vector3(fx + Math.cos(la) * 0.12, ly, fz + Math.sin(la) * 0.12), q, s);
      const lg = leafTmpl.clone();
      lg.applyMatrix4(m);
      leafGeos.push(lg);
    }

    // Flower head with baked color.
    q.setFromAxisAngle(yAxis, rng() * Math.PI * 2);
    s.set(1, 1, 1);
    m.compose(new Vector3(fx, stemH + 0.05, fz), q, s);
    const hg = headTmpl.clone();
    hg.applyMatrix4(m);
    _hc.setHex(palette[Math.floor(rng() * palette.length)]);
    const colors = new Float32Array(headVCount * 3);
    for (let v = 0; v < headVCount; v++) {
      colors[v * 3] = _hc.r;
      colors[v * 3 + 1] = _hc.g;
      colors[v * 3 + 2] = _hc.b;
    }
    hg.setAttribute('color', new BufferAttribute(colors, 3));
    headGeos.push(hg);

    // Bright center pip.
    m.compose(new Vector3(fx, stemH + 0.11, fz), q, new Vector3(1, 1, 1));
    const cg = centerTmpl.clone();
    cg.applyMatrix4(m);
    centerGeos.push(cg);
  }

  const stemMat = new MeshStandardMaterial({ color: C.puffGardenStem, roughness: 0.9, fog: false });
  const leafMat = new MeshStandardMaterial({ color: C.puffGardenLeaf, roughness: 0.85, fog: false });
  const headMat = new MeshStandardMaterial({
    color: 0xffffff, vertexColors: true, roughness: 0.55, emissive: 0x331111, emissiveIntensity: 0.25, fog: false
  });
  const centerMat = new MeshStandardMaterial({
    color: C.puffGardenCenter, emissive: C.puffGardenCenter, emissiveIntensity: 0.35, roughness: 0.6, fog: false
  });

  if (stemGeos.length) group.add(new Mesh(mergeGeometries(stemGeos), stemMat));
  if (leafGeos.length) group.add(new Mesh(mergeGeometries(leafGeos), leafMat));
  if (headGeos.length) group.add(new Mesh(mergeGeometries(headGeos), headMat));
  if (centerGeos.length) group.add(new Mesh(mergeGeometries(centerGeos), centerMat));

  group.traverse((ch) => {
    if (ch.isMesh) {
      ch.castShadow = false;
      ch.receiveShadow = true;
      ch.frustumCulled = false;
    }
  });
  return group;
}

/**
 * Stepping-stone path leading from the cottage front door along +Z.
 * 5 flat irregular stones, merged to 1 draw call. Revealed only in cottage mode.
 */
function makeCottageStones(rng, H) {
  const group = new Group();
  const stoneGeos = [];
  const startZ = H.baseRadius + 0.45;
  const stoneMat = new MeshStandardMaterial({ color: 0x8a8272, roughness: 0.88, metalness: 0, fog: false });

  for (let i = 0; i < 5; i++) {
    const r = 0.26 + rng() * 0.14;
    const h = 0.07 + rng() * 0.03;
    const segs = 5 + Math.round(rng() * 2);
    const geo = new CylinderGeometry(r * (0.88 + rng() * 0.18), r, h, segs);
    const xOff = (rng() - 0.5) * 0.42;
    const zOff = startZ + i * 0.52 + (rng() - 0.5) * 0.10;
    const m4 = new Matrix4();
    m4.makeRotationY(rng() * Math.PI * 2);
    m4.setPosition(xOff, -h * 0.5, zOff);
    geo.applyMatrix4(m4);
    stoneGeos.push(geo);
  }

  if (stoneGeos.length) {
    const mesh = new Mesh(mergeGeometries(stoneGeos), stoneMat);
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    group.add(mesh);
  }
  return group;
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

  // Per-brick HSL variation is baked into vertex colors (see below), so the base
  // color stays white and the brick palette shows through at full saturation. The
  // `stalk` hex still drives the cottage theme (uniform color, no vertex variation).
  const brickVertexColored = !!theme.brickHueRange;
  const brickMat = new MeshStandardMaterial({
    color: brickVertexColored ? 0xffffff : (theme.stalk ?? 0x222a2a),
    vertexColors: brickVertexColored,
    roughness: 0.92,
    metalness: 0,
    fog: false
  });
  if (theme.brickEmissive !== undefined) {
    brickMat.emissive.setHex(theme.brickEmissive);
    brickMat.emissiveIntensity = theme.brickEmissiveInt ?? 0;
  }
  // Base emissive intensity floor, modulated per-frame by getLocalGlow so restored
  // sectors brighten the houses while dimmed sectors keep a readable floor.
  brickMat.userData.baseEmissiveInt = brickMat.emissiveIntensity;
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
  const doorMat = new MeshStandardMaterial({ color: theme.door, roughness: theme.doorRoughness ?? 0.9, metalness: theme.doorRoughness !== undefined ? 0.08 : 0, fog: false });
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
  // Per-brick HSL variation (hue 0.50–0.55, sat 0.05–0.18, lum 0.18–0.32 for the
  // bio theme) is baked into vertex colors so the merged geometry stays one draw
  // call while each brick reads distinctly against the night grade.
  const brickGeos = [];
  const brickH = H.baseHeight / H.brickLayers;
  const brickTemplate = new BoxGeometry(1, 1, 1);
  const hueR = theme.brickHueRange;
  const satR = theme.brickSatRange;
  const lumR = theme.brickLumRange;
  const _brickColor = new Color();
  const vCount = brickTemplate.attributes.position.count;
  for (let i = 0; i < H.brickLayers; i++) {
    const t = i / Math.max(H.brickLayers - 1, 1);
    const radius = H.baseRadius * (1 - t) + H.topRadius * t;
    const y = i * brickH + brickH / 2;
    const angleOffset = (i % 2 === 0) ? 0 : Math.PI / H.bricksPerRow;
    // Tighter mortar: near-zero tangential/vertical gaps so the shell reads as a
    // continuous, smooth brick wall (was 0.95 / 0.9 — visibly loose). Slightly
    // deeper, proud bricks (0.92 was 0.8) catch the rim light for a soft bevel.
    const brickWidth = ((Math.PI * 2 * radius) / H.bricksPerRow) * 0.99;
    for (let j = 0; j < H.bricksPerRow; j++) {
      const angle = j * ((Math.PI * 2) / H.bricksPerRow) + angleOffset;
      // Push bricks a hair outward so each course slightly overlaps the next,
      // hiding seams and giving a smoother, tighter silhouette.
      const br = radius + 0.06;
      const bx = Math.cos(angle) * br;
      const bz = Math.sin(angle) * br;
      _q.setFromAxisAngle(new Vector3(0, 1, 0), angle + Math.PI / 2);
      _m.compose(new Vector3(bx, y, bz), _q, new Vector3(brickWidth, brickH * 0.97, 0.92));
      const g = brickTemplate.clone();
      g.applyMatrix4(_m);
      if (brickVertexColored && hueR && satR && lumR) {
        const h = hueR[0] + rng() * (hueR[1] - hueR[0]);
        const s = satR[0] + rng() * (satR[1] - satR[0]);
        const l = lumR[0] + rng() * (lumR[1] - lumR[0]);
        _brickColor.setHSL(h, s, l);
        const colors = new Float32Array(vCount * 3);
        for (let v = 0; v < vCount; v++) {
          colors[v * 3] = _brickColor.r;
          colors[v * 3 + 1] = _brickColor.g;
          colors[v * 3 + 2] = _brickColor.b;
        }
        g.setAttribute('color', new BufferAttribute(colors, 3));
      }
      brickGeos.push(g);
    }
  }
  const mergedBricks = mergeGeometries(brickGeos);
  let brickMesh = null;
  if (mergedBricks) {
    brickMesh = new Mesh(mergedBricks, brickMat);
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
    new CylinderGeometry(H.capRadius + 0.1, H.topRadius - 0.2, 0.55, 36, 1, false),
    gillMat
  );
  gill.position.y = H.baseHeight - 0.22;
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

  // --- Glowing accent mushrooms ringing the base (matches the glow-decor in
  // mushroom-house-puffling-home.html). Merged to two draw calls (stems + caps),
  // emissive only — NO point lights (light budget) and NO per-frame work. Bio
  // theme only; the whole group is hidden under the cottage theme swap. ---
  const decorStemMat = new MeshStandardMaterial({
    color: theme.decorStem ?? C.puffDecorStem,
    roughness: 0.95,
    fog: false
  });
  const decorCapMat = new MeshStandardMaterial({
    color: theme.decorCap ?? C.puffDecorCap,
    emissive: theme.decorEmissive ?? C.puffDecorEmissive,
    emissiveIntensity: theme.decorEmissiveInt ?? 1.4,
    roughness: 0.4,
    fog: false
  });
  const decorGroup = new Group();
  const decorStemGeos = [];
  const decorCapGeos = [];
  const stemTemplate = new CylinderGeometry(0.06, 0.08, 0.3, 8);
  const capTemplate = new SphereGeometry(0.16, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  capTemplate.scale(1, 0.6, 1);
  const ringInner = H.capRadius - 1.0;
  const ringSpan = 3.5;
  const _s = new Vector3(1, 1, 1);
  for (let i = 0; i < 16; i++) {
    const angle = rng() * Math.PI * 2;
    // Keep the front doorway clear (door faces +Z).
    if (angle > Math.PI / 2 - 0.4 && angle < Math.PI / 2 + 0.4) continue;
    const rad = ringInner + rng() * ringSpan;
    const cx = Math.cos(angle) * rad;
    const cz = Math.sin(angle) * rad;
    const lean = 0.85 + rng() * 0.4;
    _s.set(lean, lean, lean);
    _q.identity();
    _m.compose(new Vector3(cx, 0.15 * lean, cz), _q, _s);
    const sg = stemTemplate.clone();
    sg.applyMatrix4(_m);
    decorStemGeos.push(sg);
    _m.compose(new Vector3(cx, 0.30 * lean, cz), _q, _s);
    const cg = capTemplate.clone();
    cg.applyMatrix4(_m);
    decorCapGeos.push(cg);
  }
  if (decorStemGeos.length) {
    const mStems = mergeGeometries(decorStemGeos);
    if (mStems) decorGroup.add(new Mesh(mStems, decorStemMat));
  }
  if (decorCapGeos.length) {
    const mCaps = mergeGeometries(decorCapGeos);
    if (mCaps) decorGroup.add(new Mesh(mCaps, decorCapMat));
  }
  // Decor lives at the home's base plane; visibility toggles with theme (glow accents
  // only make sense in the bioluminescent state).
  decorGroup.visible = theme.showDecor !== false;
  root.add(decorGroup);

  // --- Cottage flower garden (finale only). Tiny non-glowing flowers ringing the
  // home; built once (merged to 4 draw calls), hidden until the cottage theme swap.
  // Static decor — no per-frame work; culls/transforms with the parent house. ---
  const gardenGroup = makeCottageGarden(rng, H);
  gardenGroup.visible = theme.showGarden === true;
  root.add(gardenGroup);
  root.userData.pufflingGarden = gardenGroup;

  const stonesGroup = makeCottageStones(rng, H);
  stonesGroup.visible = theme.showStones === true;
  root.add(stonesGroup);
  root.userData.pufflingStones = stonesGroup;

  root.traverse((ch) => {
    if (ch.isMesh) {
      ch.castShadow = true;
      ch.receiveShadow = true;
      ch.frustumCulled = false;
    }
  });

  /** Materials for theme swapping (orb completion) */
  root.userData.pufflingMats = {
    brickMat, brickMesh,
    innerMat, capMat, gillMat, spotMat,
    doorMat, doorFrameMat, doorGrooveMat,
    knobMat, glassMat,
    decorStemMat, decorCapMat
  };
  /** Seed stored for per-brick vertex color re-baking on theme switch */
  root.userData.brickRngSeed = seed;
  /** Glow-accent group reference so the theme swap can hide it in cottage mode. */
  root.userData.pufflingDecor = decorGroup;

  return root;
}

/** Theme payload aligned with pufflingHomes THEME_BIO / THEME_COTTAGE + HTML innerWall/glass */
export function themePayloadBioluminescent() {
  return {
    stalk: C.puffBrick,
    // Per-brick HSL variation (matches mushroom-house-puffling-home.html, lightened
    // so the shell reads at night). hue 0.50–0.55, sat 0.05–0.18, lum 0.18–0.32.
    brickHueRange: [0.50, 0.55],
    brickSatRange: [0.05, 0.18],
    brickLumRange: [0.18, 0.32],
    brickEmissive: C.puffBrickEmissive,
    brickEmissiveInt: 1.0,
    innerWall: 0x0a1510,
    cap: 0x004444,
    capEmissive: 0x003833,
    capEmissiveInt: 0.6,
    gill: 0x00ff88,
    gillEmissive: 0x00cc66,
    gillEmissiveInt: 1.2,
    spot: 0x88ffcc,
    spotEmissive: 0x00ffaa,
    spotEmissiveInt: 1.65,
    door: 0x3a2820,
    doorFrame: 0x5a4a38,
    doorGroove: 0x1a0a05,
    knob: 0x88ffcc,
    knobEmissive: 0x00ffaa,
    knobEmissiveInt: 1.55,
    glass: 0x88ffcc,
    glassEmissive: 0x00ffaa,
    glassEmissiveInt: 1.4,
    // Glowing accent mushrooms ringing the home (visible at night).
    showDecor: true,
    decorStem: C.puffDecorStem,
    decorCap: C.puffDecorCap,
    decorEmissive: C.puffDecorEmissive,
    decorEmissiveInt: 1.4
  };
}

export function themePayloadCottage() {
  return {
    // Earthy brick with per-brick HSL variation — warm orange-tan to reddish-brown.
    // brickHueRange triggers vertex-color mode; colors re-baked on theme switch.
    stalk: C.puffCottageBrick,
    brickHueRange: [0.04, 0.09],
    brickSatRange: [0.32, 0.58],
    brickLumRange: [0.28, 0.54],
    brickEmissive: 0xb08050,
    brickEmissiveInt: 0.55,
    innerWall: 0x3a1f10,
    // Storybook toadstool: light pink-rose cap with crisp white spots.
    cap: C.puffCottageCap,
    capEmissive: C.puffCottageCapEmissive,
    capEmissiveInt: 0.45,
    gill: 0xfff0f5,
    gillEmissive: C.puffCottageGillEmissive,
    gillEmissiveInt: 0.4,
    spot: C.puffCottageSpot,
    spotEmissive: C.puffCottageSpotEmissive,
    spotEmissiveInt: 0.75,
    // Shiny warm-brown door: lower roughness + slight metalness gives a polished wood feel
    door: 0x7a4a22,
    doorRoughness: 0.32,
    doorFrame: 0x5a3818,
    doorGroove: 0x2a1408,
    knob: 0xb87333,
    knobEmissive: 0x000000,
    knobEmissiveInt: 0,
    glass: 0xe6c8ff,
    glassEmissive: 0xb088ff,
    glassEmissiveInt: 0.55,
    showDecor: false,
    showGarden: true,
    showStones: true
  };
}

export function applyThemeToDetailedHouse(root, cottage) {
  const p = cottage ? themePayloadCottage() : themePayloadBioluminescent();
  const m = root.userData.pufflingMats;
  if (!m) return;

  // Both themes now use vertex colors — bio uses teal HSL, cottage uses earthy HSL.
  // Re-bake brick vertex colors with theme-appropriate ranges on every theme switch.
  m.brickMat.color.setHex(0xffffff); // always white base; vertex colors carry the palette
  if (m.brickMat.vertexColors !== true) { m.brickMat.vertexColors = true; m.brickMat.needsUpdate = true; }
  if (p.brickHueRange && m.brickMesh) {
    const colorAttr = m.brickMesh.geometry.attributes.color;
    if (colorAttr) {
      const VERTS_PER_BRICK = 24; // BoxGeometry(1,1,1) vertex count
      // Offset seed so cottage gets a different palette than the bio theme bake
      const rng = mulberry32((root.userData.brickRngSeed ?? 1) + 0x4e4f);
      const arr = colorAttr.array;
      const _c = new Color();
      for (let vi = 0; vi < arr.length / 3; vi += VERTS_PER_BRICK) {
        const h = p.brickHueRange[0] + rng() * (p.brickHueRange[1] - p.brickHueRange[0]);
        const s = p.brickSatRange[0] + rng() * (p.brickSatRange[1] - p.brickSatRange[0]);
        const l = p.brickLumRange[0] + rng() * (p.brickLumRange[1] - p.brickLumRange[0]);
        _c.setHSL(h, s, l);
        for (let k = 0; k < VERTS_PER_BRICK; k++) {
          const b = (vi + k) * 3;
          arr[b] = _c.r; arr[b + 1] = _c.g; arr[b + 2] = _c.b;
        }
      }
      colorAttr.needsUpdate = true;
    }
  }
  if (p.brickEmissive !== undefined) {
    m.brickMat.emissive.setHex(p.brickEmissive);
    m.brickMat.emissiveIntensity = p.brickEmissiveInt ?? 0;
  }
  m.brickMat.userData.baseEmissiveInt = m.brickMat.emissiveIntensity;
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
  if (p.doorRoughness !== undefined) { m.doorMat.roughness = p.doorRoughness; m.doorMat.metalness = 0.08; }
  m.doorFrameMat.color.setHex(p.doorFrame);
  m.doorGrooveMat.color.setHex(p.doorGroove);
  m.knobMat.color.setHex(p.knob);
  m.knobMat.emissive.setHex(p.knobEmissive);
  m.knobMat.emissiveIntensity = p.knobEmissiveInt;
  m.glassMat.color.setHex(p.glass);
  m.glassMat.emissive.setHex(p.glassEmissive);
  m.glassMat.emissiveIntensity = p.glassEmissiveInt;
  // Glow-accent mushrooms: recolor + toggle visibility for the active theme.
  if (m.decorStemMat && p.decorStem !== undefined) m.decorStemMat.color.setHex(p.decorStem);
  if (m.decorCapMat && p.decorCap !== undefined) {
    m.decorCapMat.color.setHex(p.decorCap);
    if (p.decorEmissive !== undefined) m.decorCapMat.emissive.setHex(p.decorEmissive);
    if (p.decorEmissiveInt !== undefined) m.decorCapMat.emissiveIntensity = p.decorEmissiveInt;
  }
  if (root.userData.pufflingDecor) root.userData.pufflingDecor.visible = p.showDecor !== false;
  if (root.userData.pufflingGarden) root.userData.pufflingGarden.visible = p.showGarden === true;
  if (root.userData.pufflingStones) root.userData.pufflingStones.visible = p.showStones === true;
}
