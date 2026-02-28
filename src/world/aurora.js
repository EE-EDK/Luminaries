import * as THREE from 'three';
import { SKY_R } from '../constants.js';
import { scene } from '../core/renderer.js';

// ================================================================
// Northern Lights (Aurora Borealis)
// ================================================================
// Shimmering ribbon bands on the sky dome during DEEP_NIGHT.
// 3 overlapping ribbon strips with vertex color animation.
// Single draw call per ribbon. MeshBasicMaterial + additive blending.
// Only active ~25% of the day/night cycle — zero cost otherwise.

const RIBBON_COUNT = 3;
const SEGMENTS = 60;
const ribbons = [];
let auroraGroup = null;

// Color palette for aurora bands
const AURORA_COLORS = [
  new THREE.Color(0x33ffaa), // green-teal
  new THREE.Color(0x44ffdd), // bright teal
  new THREE.Color(0x88ffcc), // pale green
  new THREE.Color(0xaa88ff), // purple hint
  new THREE.Color(0xff66aa), // pink edge
];

export function initAurora() {
  auroraGroup = new THREE.Group();
  auroraGroup.visible = false;

  for (let r = 0; r < RIBBON_COUNT; r++) {
    // Each ribbon is a PlaneGeometry curved along a sky arc
    const width = SKY_R * (1.4 + r * 0.3);
    const height = SKY_R * (0.06 + r * 0.015);
    const geo = new THREE.PlaneGeometry(width, height, SEGMENTS, 1);

    // Curve the ribbon into an arc across the sky
    const posArr = geo.attributes.position.array;
    const vertCount = (SEGMENTS + 1) * 2;
    const arcSpan = Math.PI * (0.5 + r * 0.12); // angular span
    const arcStart = -arcSpan / 2;
    const elevation = (0.28 + r * 0.08) * Math.PI; // altitude angle from zenith
    const azimuthOffset = r * 0.4 - 0.3; // spread ribbons apart

    for (let i = 0; i < vertCount; i++) {
      const col = Math.floor(i / 2);
      const row = i % 2; // 0 = top edge, 1 = bottom edge
      const t = col / SEGMENTS;
      const azimuth = arcStart + t * arcSpan + azimuthOffset;

      const elev = elevation + (row === 0 ? -0.03 : 0.03);
      const skyR = SKY_R * 0.92;

      posArr[i * 3] = Math.sin(azimuth) * Math.sin(elev) * skyR;
      posArr[i * 3 + 1] = Math.cos(elev) * skyR;
      posArr[i * 3 + 2] = Math.cos(azimuth) * Math.sin(elev) * skyR;
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();

    // Vertex colors for animation
    const colors = new Float32Array(vertCount * 3);
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.attributes.color.setUsage(THREE.DynamicDrawUsage);

    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false
    });

    const mesh = new THREE.Mesh(geo, mat);
    auroraGroup.add(mesh);

    ribbons.push({
      mesh, mat, geo,
      colorArr: colors,
      vertCount,
      segments: SEGMENTS,
      phase: r * 2.1, // offset wave phase per ribbon
      speed: 0.3 + r * 0.1,
      colorShift: r * 1.5
    });
  }

  scene.add(auroraGroup);
}

// Fade state
let currentOpacity = 0;

export function updateAurora(dt, t, dayPhase, bioGlow, weatherState) {
  if (!auroraGroup) return;

  // Determine target visibility:
  // Visible during DEEP_NIGHT (and partially during NIGHT transition)
  // Hidden during storms, heavy rain, fog
  const obscured = weatherState === 'HEAVY_RAIN' || weatherState === 'LUMINOUS_STORM' || weatherState === 'FOG_BANK';
  let targetOpacity = 0;
  if (!obscured) {
    if (dayPhase === 'DEEP_NIGHT') targetOpacity = 0.7;
    else if (dayPhase === 'NIGHT') targetOpacity = 0.25;
  }

  // Smooth fade in/out
  const fadeSpeed = targetOpacity > currentOpacity ? 0.3 : 0.5;
  currentOpacity += (targetOpacity - currentOpacity) * fadeSpeed * dt;

  // Toggle visibility to avoid unnecessary draw calls
  if (currentOpacity < 0.01) {
    auroraGroup.visible = false;
    return;
  }
  auroraGroup.visible = true;

  // Animate each ribbon
  for (let r = 0; r < ribbons.length; r++) {
    const rb = ribbons[r];
    const colors = rb.colorArr;
    const segs = rb.segments;

    rb.mat.opacity = currentOpacity * (0.6 + r * 0.15);

    // Wave propagation along ribbon length
    for (let col = 0; col <= segs; col++) {
      const u = col / segs; // 0..1 along ribbon

      // Primary traveling wave
      const wave1 = Math.sin(u * 8 + t * rb.speed + rb.phase) * 0.5 + 0.5;
      // Secondary slower wave for complexity
      const wave2 = Math.sin(u * 3.5 - t * rb.speed * 0.6 + rb.phase * 1.3) * 0.5 + 0.5;
      // Slow lateral drift
      const drift = Math.sin(u * 2 + t * 0.1) * 0.5 + 0.5;

      const brightness = (wave1 * 0.6 + wave2 * 0.3 + drift * 0.1) * currentOpacity;

      // Color selection — blend between aurora palette based on position + time
      const colorIdx = (u * 3 + t * 0.15 + rb.colorShift) % AURORA_COLORS.length;
      const ci = Math.floor(colorIdx);
      const cf = colorIdx - ci;
      const c1 = AURORA_COLORS[ci % AURORA_COLORS.length];
      const c2 = AURORA_COLORS[(ci + 1) % AURORA_COLORS.length];

      const cr = (c1.r + (c2.r - c1.r) * cf) * brightness;
      const cg = (c1.g + (c2.g - c1.g) * cf) * brightness;
      const cb = (c1.b + (c2.b - c1.b) * cf) * brightness;

      // Apply to both top and bottom vertices of this column
      const topIdx = col * 2;
      const botIdx = col * 2 + 1;

      // Top edge slightly dimmer for gradient effect
      colors[topIdx * 3] = cr * 0.7;
      colors[topIdx * 3 + 1] = cg * 0.7;
      colors[topIdx * 3 + 2] = cb * 0.7;

      colors[botIdx * 3] = cr;
      colors[botIdx * 3 + 1] = cg;
      colors[botIdx * 3 + 2] = cb;
    }

    rb.geo.attributes.color.needsUpdate = true;
  }
}
