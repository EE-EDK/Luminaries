import * as THREE from 'three';
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

export function makeSnapthorn(x, z) {
  const g = new THREE.Group();
  const bodyR = 0.25 + sr() * 0.1;

  // --- Base roots (3 short cylinders splaying outward) ---
  const rootMat = new THREE.MeshStandardMaterial({
    color: 0x1a3825, roughness: 0.85,
    emissive: 0x0a1a10, emissiveIntensity: 0.06
  });
  for (let i = 0; i < 3; i++) {
    const ra = (i / 3) * 6.28 + sr() * 0.5;
    const root = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.035, 0.25 + sr() * 0.15, 4), rootMat
    );
    root.position.set(
      Math.cos(ra) * bodyR * 0.6, 0.06,
      Math.sin(ra) * bodyR * 0.6
    );
    root.rotation.z = (ra < 3.14 ? 1.0 : -1.0);
    root.rotation.y = ra;
    g.add(root);
  }

  // --- Central body (bioluminescent bulb) ---
  const bodyMat = new THREE.MeshStandardMaterial({
    color: C.snapBody, emissive: C.snapBodyGlow,
    emissiveIntensity: 0.4,
    transparent: true, opacity: 0.7,
    roughness: 0.4, metalness: 0.1
  });
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(bodyR, 10, 8), bodyMat
  );
  body.position.y = bodyR + 0.05;
  body.scale.set(1, 0.85, 1); // slightly flattened
  g.add(body);

  // --- Mouth/Opening (torus ring on top) ---
  const mouthMat = new THREE.MeshStandardMaterial({
    color: 0x1a6644, emissive: C.snapBodyGlow,
    emissiveIntensity: 0.25,
    transparent: true, opacity: 0.6
  });
  const mouth = new THREE.Mesh(
    new THREE.TorusGeometry(bodyR * 0.45, 0.02, 6, 12), mouthMat
  );
  mouth.position.y = bodyR * 1.7;
  mouth.rotation.x = Math.PI / 2;
  g.add(mouth);

  // --- Fronds/Tentacles (5-7 waving arms) ---
  // Each frond is a chain of 3-4 nested cylinders for cascading rotation
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
    const pivot = new THREE.Object3D();
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

      const frondMat = new THREE.MeshStandardMaterial({
        color: C.snapFrond, emissive: C.snapBodyGlow,
        emissiveIntensity: 0.08 + frac * 0.15,
        roughness: 0.6
      });

      // Each segment is a cylinder, nested inside the previous
      const seg = new THREE.Mesh(
        new THREE.CylinderGeometry(segR * 0.7, segR, segLen, 4), frondMat
      );
      seg.position.y = si === 0 ? 0 : segLen; // first at pivot, rest stacked
      seg.geometry.translate(0, segLen / 2, 0); // pivot at bottom
      parent.add(seg);
      segments.push(seg);
      parent = seg;
    }

    // Glowing tip sphere at the end of the last segment
    const tipMat = new THREE.MeshStandardMaterial({
      color: C.snapTip, emissive: C.snapTipGlow,
      emissiveIntensity: 0.6,
      transparent: true, opacity: 0.7,
      roughness: 0.2
    });
    const tip = new THREE.Mesh(
      new THREE.SphereGeometry(0.025 + sr() * 0.015, 5, 4), tipMat
    );
    tip.position.y = segLen;
    parent.add(tip);
    tipMats.push(tipMat);

    // Tip haze
    const tipHaze = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 4, 3),
      new THREE.MeshBasicMaterial({
        color: C.snapTipGlow, transparent: true, opacity: 0.04,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    );
    tip.add(tipHaze);

    fronds.push({ segments, baseAngle, phaseOffset, segLen });
  }

  g.position.set(x, 0, z);
  scene.add(g);

  return {
    group: g,
    body: body,
    bodyMat: bodyMat,
    tipMats: tipMats,
    fronds: fronds,
    phase: sr() * 6.28,
    x: x, z: z
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

    // Frond waving — cascading sine waves through segments
    for (let fi = 0; fi < s.fronds.length; fi++) {
      const f = s.fronds[fi];
      const speed = 1.2 + (fi % 3) * 0.3; // vary speed per frond

      for (let si = 0; si < f.segments.length; si++) {
        const seg = f.segments[si];
        // Each segment adds more wave; tips move the most
        const amp = 0.15 + si * 0.12;
        const wave = Math.sin(t * speed + f.phaseOffset + si * 0.5) * amp;
        const wave2 = Math.cos(t * speed * 0.7 + f.phaseOffset + si * 0.3) * amp * 0.6;
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
