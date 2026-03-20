import { AdditiveBlending, CatmullRomCurve3, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, Object3D, SphereGeometry, TorusGeometry, TubeGeometry, Vector3 } from 'three';
import { scene } from '../../core/renderer.js';
import { C } from '../../constants.js';
import { sr } from '../../utils/rng.js';

// ================================================================
// Snapthorn — Moving plant with waving tentacle-like fronds,
// a breathing bioluminescent body, and glowing tips
// ================================================================
// INCIDENT LOG (Station B, 03:41):
//   The snaphorns are not predatory. Repeat: NOT predatory. The
//   tentacle motion is respiratory, not aggressive. But they do
//   respond to proximity. Their tips brighten when you're near, as
//   if tasting the air. One researcher described them as "curious."
//   We've stopped sending anyone to the eastern cluster alone.

// --- Module-scope shared materials ---
const _rootMat = new MeshStandardMaterial({
  color: 0x1a3825, roughness: 0.85,
  emissive: 0x0a1a10, emissiveIntensity: 0.06
});
const _mouthMat = new MeshStandardMaterial({
  color: 0x1a6644, emissive: C.snapBodyGlow,
  emissiveIntensity: 0.25,
  transparent: true, opacity: 0.6
});

export function makeSnapthorn(x, z) {
  const g = new Group();
  const bodyR = 0.25 + sr() * 0.1;

  // --- Base roots (3 short cylinders splaying outward) ---
  for (let i = 0; i < 3; i++) {
    const ra = (i / 3) * 6.28 + sr() * 0.5;
    const rootLen = 0.25 + sr() * 0.15;
    // Curved root using 3-point CatmullRomCurve3
    const rootPts = [
      new Vector3(0, 0.06, 0),
      new Vector3(
        Math.cos(ra) * bodyR * 0.35,
        0.04,
        Math.sin(ra) * bodyR * 0.35
      ),
      new Vector3(
        Math.cos(ra) * bodyR * 0.7,
        -0.02,
        Math.sin(ra) * bodyR * 0.7
      )
    ];
    const rootCurve = new CatmullRomCurve3(rootPts);
    const root = new Mesh(
      new TubeGeometry(rootCurve, 4, 0.018, 4, false), _rootMat
    );
    g.add(root);
  }

  // --- Central body (bioluminescent bulb) ---
  const bodyMat = new MeshStandardMaterial({
    color: C.snapBody, emissive: C.snapBodyGlow,
    emissiveIntensity: 0.4,
    transparent: true, opacity: 0.7,
    roughness: 0.4, metalness: 0.1
  });
  const body = new Mesh(
    new SphereGeometry(bodyR, 10, 8), bodyMat
  );
  body.position.y = bodyR + 0.05;
  body.scale.set(1, 0.85, 1); // slightly flattened
  g.add(body);

  // --- Mouth/Opening (torus ring on top) ---
  const mouth = new Mesh(
    new TorusGeometry(bodyR * 0.45, 0.02, 6, 12), _mouthMat
  );
  mouth.position.y = bodyR * 1.7;
  mouth.rotation.x = Math.PI / 2;
  g.add(mouth);

  // --- Fronds/Tentacles (5-7 waving arms) ---
  // Each frond is a chain of 3-4 nested curved segments for cascading rotation
  const frondN = 5 + Math.floor(sr() * 3);
  const fronds = [];
  const tipMats = [];

  for (let fi = 0; fi < frondN; fi++) {
    const baseAngle = (fi / frondN) * 6.28 + sr() * 0.3;
    const phaseOffset = sr() * 6.28;
    const segCount = 3 + Math.floor(sr() * 2); // 3-4 segments
    const segLen = 0.2 + sr() * 0.1;
    const segments = [];

    // Create a pivot point at the body surface
    const pivot = new Object3D();
    pivot.position.set(
      Math.cos(baseAngle) * bodyR * 0.6,
      bodyR * 1.4,
      Math.sin(baseAngle) * bodyR * 0.6
    );
    pivot.rotation.y = baseAngle;
    g.add(pivot);

    let parent = pivot;
    for (let si = 0; si < segCount; si++) {
      const frac = si / segCount;
      const segR = 0.02 * (1 - frac * 0.6); // taper toward tip
      const outwardBow = 0.015 + sr() * 0.01; // gentle organic bow

      const frondMat = new MeshStandardMaterial({
        color: C.snapFrond, emissive: C.snapBodyGlow,
        emissiveIntensity: 0.08 + frac * 0.15,
        roughness: 0.6
      });

      // Each segment: short curved TubeGeometry instead of straight cylinder
      // 3-point curve from origin upward with outward bow
      const miniPts = [
        new Vector3(0, 0, 0),
        new Vector3(outwardBow, segLen * 0.5, 0),
        new Vector3(0, segLen, 0)
      ];
      const miniCurve = new CatmullRomCurve3(miniPts);
      const seg = new Mesh(
        new TubeGeometry(miniCurve, 4, segR * 0.85, 4, false), frondMat
      );
      // Position: first at pivot origin, rest stacked at end of previous segment
      seg.position.y = si === 0 ? 0 : segLen;
      parent.add(seg);
      segments.push(seg);
      parent = seg;
    }

    // Glowing tip sphere at the end of the last segment
    const tipMat = new MeshStandardMaterial({
      color: C.snapTip, emissive: C.snapTipGlow,
      emissiveIntensity: 0.6,
      transparent: true, opacity: 0.7,
      roughness: 0.2
    });
    const tip = new Mesh(
      new SphereGeometry(0.025 + sr() * 0.015, 5, 4), tipMat
    );
    tip.position.y = segLen;
    parent.add(tip);
    tipMats.push(tipMat);

    // Tip haze
    const tipHaze = new Mesh(
      new SphereGeometry(0.06, 4, 3),
      new MeshBasicMaterial({
        color: C.snapTipGlow, transparent: true, opacity: 0.04,
        blending: AdditiveBlending, depthWrite: false
      })
    );
    tip.add(tipHaze);

    fronds.push({ segments, baseAngle, phaseOffset, segLen });
  }

  g.position.set(x, 0, z);
  scene.add(g);

  return {
    group: g,
    body,
    bodyMat,
    tipMats,
    fronds,
    phase: sr() * 6.28,
    x, z
  };
}

// Animate snapthorns — tentacle waving + body breathing
export function updateSnapthorns(snapthorns, dt, t, bioGlow, getLocalGlowFn) {
  for (let i = 0; i < snapthorns.length; i++) {
    const s = snapthorns[i];
    const localGlow = getLocalGlowFn ? getLocalGlowFn(s.x, s.z, bioGlow) : bioGlow;

    // Body breathing — gentle scale pulse
    const breathe = Math.sin(t * 1.5 + s.phase) * 0.08;
    s.body.scale.set(1 + breathe, 0.85 + breathe * 0.5, 1 + breathe);

    // Body glow pulse
    s.bodyMat.emissiveIntensity = (0.5 + Math.sin(t * 1.5 + s.phase) * 0.3) * localGlow;

    // Frond waving — cascading sine with whip-like drag delay
    for (let fi = 0; fi < s.fronds.length; fi++) {
      const f = s.fronds[fi];
      const speed = 1.2 + (fi % 3) * 0.3;

      for (let si = 0; si < f.segments.length; si++) {
        const seg = f.segments[si];
        const amp = 0.15 + si * 0.12;
        const drag = si * 0.35; // cumulative phase delay per segment — whip trailing
        const wave = Math.sin(t * speed + f.phaseOffset + drag) * amp;
        const wave2 = Math.cos(t * speed * 0.7 + f.phaseOffset + drag * 0.8) * amp * 0.6;
        seg.rotation.z = wave;
        seg.rotation.x = wave2;
      }
    }

    // Tip glow pulse
    for (let ti = 0; ti < s.tipMats.length; ti++) {
      const p = Math.sin(t * 2.5 + s.phase + ti * 1.2) * 0.5 + 0.5;
      s.tipMats[ti].emissiveIntensity = (0.5 + p * 0.6) * localGlow;
    }
  }
}
