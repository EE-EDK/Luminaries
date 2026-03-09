// ================================================================
// Intro Effects — Animation and rendering for intro cinematic
// ================================================================
// Pixie movement, dust particles, puffling hop, mushroom glow,
// tree bioluminescence, title halo, and digital tunnel.
// All animations driven by DOM element references passed via initEffects().

// ================================================================
// DOM references — set by initEffects()
// ================================================================
let _pixieEl = null;
let _pixieTrailEl = null;
let _ambientGlowEl = null;
let _titleEl = null;
let _titleGlowEl = null;
let _treeEl = null;
let _mushDecor = [];
let _pufflingEls = [];
let _matrixCanvas = null;
let _matrixCtx = null;
let _container = null;

// ================================================================
// Pixie dust particle pool
// ================================================================
const DUST_MAX = 24;
let _dustEls = [];
let _dustParticles = [];

// ================================================================
// Digital tunnel state
// ================================================================
const TUNNEL_RINGS = 18;
const TUNNEL_SIDES = 8;
const TUNNEL_PULSES_MAX = 6;
let _tunnelPulses = [];

// ================================================================
// initEffects — receive DOM refs from orchestrator
// ================================================================
export function initEffects(refs) {
  _pixieEl = refs.pixieEl;
  _pixieTrailEl = refs.pixieTrailEl;
  _ambientGlowEl = refs.ambientGlowEl;
  _titleEl = refs.titleEl;
  _titleGlowEl = refs.titleGlowEl;
  _treeEl = refs.treeEl;
  _mushDecor = refs.mushDecor;
  _pufflingEls = refs.pufflingEls;
  _matrixCanvas = refs.matrixCanvas;
  _matrixCtx = refs.matrixCtx;
  _container = refs.container;
  _dustEls = refs.dustEls;
  _dustParticles = refs.dustParticles;
}

// ================================================================
// animateTitle — single entry point for all TITLE-phase animations
// ================================================================
export function animateTitle(t, dt) {
  animatePixie(t);
  animatePufflings(t);
  animateMushrooms(t);
  animateTitleGlow(t);
  animateTree(t);
  renderMatrix(t, dt);
  updateDust(dt);
}

// ================================================================
// cleanupEffects — fade out dust particles
// ================================================================
export function cleanupEffects() {
  for (let i = 0; i < _dustEls.length; i++) _dustEls[i].style.opacity = '0';
}

// ================================================================
// Pseudo-noise for pixie randomness (deterministic, no imports)
// ================================================================
function noise1d(x) {
  const s = Math.sin(x * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function smoothNoise(t, freq) {
  const i = Math.floor(t * freq);
  const f = (t * freq) - i;
  const smooth = f * f * (3 - 2 * f); // smoothstep
  return noise1d(i) * (1 - smooth) + noise1d(i + 1) * smooth;
}

// ================================================================
// Puffling animation — two 3D pufflings as the dots of both I's
// ================================================================
function animatePufflings(t) {
  if (!_pufflingEls.length || !_titleEl) return;

  const iCols = _titleEl.querySelectorAll('[data-i-col]');
  if (iCols.length < 2) return;

  for (let pi = 0; pi < 2; pi++) {
    const pData = _pufflingEls[pi];
    const col = iCols[pi];
    if (!col) continue;

    const colRect = col.getBoundingClientRect();
    if (!colRect.width) continue;

    const centerX = colRect.left + colRect.width * 0.5;
    // Position above the stem bar — the puffling IS the dot
    const stemTop = colRect.top;
    const baseY = stemTop - pData.h * 0.5 - 4;

    // Gentle hop cycle — staggered between the two pufflings
    const hopT = t * 1.3 + pData.hopOffset * Math.PI * 2;
    const hopCycle = hopT % 1.0;
    let hopY = 0;
    if (hopCycle < 0.18) {
      const p = hopCycle / 0.18;
      hopY = -Math.sin(p * Math.PI * 0.5) * 7;
    } else if (hopCycle < 0.32) {
      const p = (hopCycle - 0.18) / 0.14;
      hopY = -Math.cos(p * Math.PI * 0.5) * 7;
    }

    // Squash on landing, stretch on rise
    let scaleX = 1, scaleY = 1;
    if (hopCycle < 0.05) {
      // Pre-jump crouch
      scaleX = 1 + hopCycle / 0.05 * 0.08;
      scaleY = 1 - hopCycle / 0.05 * 0.06;
    } else if (hopCycle >= 0.30 && hopCycle < 0.40) {
      // Landing squash
      const sq = (hopCycle - 0.30) / 0.10;
      scaleX = 1 + Math.sin(sq * Math.PI) * 0.1;
      scaleY = 1 - Math.sin(sq * Math.PI) * 0.07;
    }

    const tilt = hopCycle < 0.32 ? Math.sin(hopCycle * Math.PI * 3) * 3.5 : 0;

    pData.el.style.left = (centerX - pData.w * 0.5) + 'px';
    pData.el.style.top = (baseY + hopY) + 'px';
    pData.el.style.transform = 'rotate(' + tilt + 'deg) scale(' + scaleX + ',' + scaleY + ')';
  }
}

// ================================================================
// Tree animation — pulsing bioluminescence on canopy and roots
// ================================================================
function animateTree(t) {
  if (!_treeEl) return;
  const svg = _treeEl.querySelector('svg');
  if (!svg) return;

  // Wind sway on branches and foliage
  const windAngle = Math.sin(t * 0.4) * 1.2 + Math.sin(t * 0.7) * 0.6;
  const branches = svg.querySelector('.branches');
  if (branches) branches.setAttribute('transform', 'rotate(' + windAngle + ',250,400)');
  const frontFoliage = svg.querySelector('.front-foliage');
  if (frontFoliage) frontFoliage.setAttribute('transform', 'rotate(' + (windAngle * 1.3) + ',250,350)');
  const backFoliage = svg.querySelector('.back-foliage');
  if (backFoliage) backFoliage.setAttribute('transform', 'rotate(' + (windAngle * 0.8) + ',250,350)');

  // Pulse canopy glow
  const canopyGlow = svg.querySelector('.canopy-glow');
  if (canopyGlow) {
    const cPulse = Math.sin(t * 0.6) * 0.5 + 0.5;
    canopyGlow.setAttribute('opacity', String(0.6 + cPulse * 0.4));
    canopyGlow.setAttribute('ry', String(170 + cPulse * 12));
  }

  // Pulse leaf cluster inner glows
  const leafInners = svg.querySelectorAll('.leaf-inner');
  for (let i = 0; i < leafInners.length; i++) {
    const phase = i * 0.7;
    const pulse = Math.sin(t * 0.9 + phase) * 0.5 + 0.5;
    leafInners[i].setAttribute('fill', 'rgba(60,220,130,' + (0.08 + pulse * 0.15) + ')');
  }

  // Pulse root veins
  const veins = svg.querySelectorAll('.root-vein');
  for (let i = 0; i < veins.length; i++) {
    const phase = i * 1.2;
    const pulse = Math.sin(t * 0.7 + phase) * 0.5 + 0.5;
    veins[i].setAttribute('stroke', 'rgba(80,220,140,' + (0.15 + pulse * 0.2) + ')');
  }

  // Pulse trunk bioluminescent patches
  const trunkGlowEls = svg.querySelectorAll('.trunk-glow');
  for (let i = 0; i < trunkGlowEls.length; i++) {
    const phase = i * 1.5 + 2.0;
    const pulse = Math.sin(t * 0.8 + phase) * 0.5 + 0.5;
    trunkGlowEls[i].setAttribute('fill', 'rgba(60,200,120,' + (0.06 + pulse * 0.12) + ')');
  }

  // Pulse root ambient glow
  const rootBg = svg.querySelector('.root-glow-bg');
  if (rootBg) {
    const rPulse = Math.sin(t * 0.5 + 1.0) * 0.5 + 0.5;
    rootBg.setAttribute('opacity', String(0.5 + rPulse * 0.5));
  }
}

// ================================================================
// Title glow — multi-layer breathing halo behind the title text
// ================================================================
function animateTitleGlow(t) {
  if (!_titleGlowEl) return;
  // Slow breathing cycle — 4-second inhale/exhale
  const breath = Math.sin(t * 0.8) * 0.5 + 0.5; // 0→1
  const scale = 1.0 + breath * 0.3;  // 1.0→1.3 size pulse
  const opacity = 0.5 + breath * 0.5; // 0.5→1.0 brightness

  _titleGlowEl.style.transform = 'translate(-50%,-50%) scale(' + scale + ')';
  _titleGlowEl.style.opacity = String(opacity);

  // Also pulse the title's own drop-shadow filter for inner glow
  if (_titleEl) {
    const innerGlow = 12 + breath * 12;
    const outerGlow = 30 + breath * 25;
    _titleEl.style.filter =
      'drop-shadow(0 0 ' + innerGlow + 'px rgba(100,255,200,' + (0.35 + breath * 0.25) + '))' +
      ' drop-shadow(0 0 ' + outerGlow + 'px rgba(50,200,150,' + (0.1 + breath * 0.15) + '))';
  }
}

// ================================================================
// Mushroom glow animation — emissive cap pulse like in-game
// ================================================================
function animateMushrooms(t) {
  for (let i = 0; i < _mushDecor.length; i++) {
    const m = _mushDecor[i];
    // Slow organic pulse — emissive intensity breathing
    const pulse = Math.sin(t * 1.0 + m.phase) * 0.5 + 0.5; // 0 to 1
    const brightness = 0.9 + pulse * 0.3;
    const glowSpread = Math.round(m.capW * 0.4 + pulse * m.capW * 0.4);
    const glowAlpha = 0.3 + pulse * 0.25;

    if (m.cap) {
      m.cap.style.filter = 'brightness(' + brightness + ')';
      m.cap.style.boxShadow =
        '0 0 ' + glowSpread + 'px rgba(136,51,238,' + glowAlpha + '),' +
        '0 0 ' + (glowSpread * 2) + 'px rgba(204,119,255,' + (glowAlpha * 0.35) + ')';
    }
    // Whole mushroom drop-shadow pulses too
    const dropGlow = Math.round(12 * m.s + pulse * 10 * m.s);
    m.el.style.filter =
      'drop-shadow(0 0 ' + dropGlow + 'px rgba(136,51,238,' + (0.4 + pulse * 0.2) + '))' +
      ' drop-shadow(0 0 ' + (dropGlow * 2) + 'px rgba(204,119,255,' + (0.15 + pulse * 0.1) + '))';
  }
}

// ================================================================
// Pixie animation — smooth sweeping arcs across entire screen
// Uses Lissajous curves for graceful looping trajectories
// ================================================================
function pixiePos(t) {
  // Lissajous with irrational frequency ratios = never-repeating smooth arcs
  // Wide coverage of the full screen area
  const a = 0.55; // x frequency
  const b = 0.71; // y frequency (irrational ratio to a)
  const d = Math.PI * 0.37; // phase offset
  const x = Math.sin(a * t + d);
  const y = Math.sin(b * t);
  // Add a slow secondary wobble for variety
  const wx = Math.sin(t * 0.17) * 0.15;
  const wy = Math.cos(t * 0.13) * 0.12;
  return { nx: x * 0.42 + wx, ny: y * 0.38 + wy };
}

function animatePixie(t) {
  if (!_pixieEl || !_container) return;

  const cw = _container.clientWidth;
  const ch = _container.clientHeight;
  const cx = cw * 0.5;
  const cy = ch * 0.48;

  // Smooth Lissajous arc position
  const pos = pixiePos(t);
  const px = cx + pos.nx * cw;
  const py = cy + pos.ny * ch;

  // Clamp to container with padding
  const clampedX = Math.max(20, Math.min(cw - 30, px));
  const clampedY = Math.max(20, Math.min(ch - 30, py));

  _pixieEl.style.left = (clampedX - 9) + 'px';
  _pixieEl.style.top = (clampedY - 9) + 'px';

  // Breathing glow — smooth intensity cycles
  const breath = 0.75 + Math.sin(t * 1.3) * 0.15 + Math.sin(t * 2.7) * 0.06;
  _pixieEl.style.opacity = String(Math.max(0.6, Math.min(1, breath)));

  // Dynamic glow size — pulses gently
  const glowBase = 15 + Math.sin(t * 1.1) * 4;
  _pixieEl.style.boxShadow =
    '0 0 ' + glowBase + 'px #aaffdd,' +
    '0 0 ' + (glowBase * 2) + 'px #66eebb,' +
    '0 0 ' + (glowBase * 4) + 'px rgba(80,240,170,.35),' +
    '0 0 ' + (glowBase * 8) + 'px rgba(50,220,150,.15),' +
    '0 0 ' + (glowBase * 14) + 'px rgba(50,200,130,.06)';

  // Trail — follows on the same arc with time offset
  const trailPos = pixiePos(t - 0.6);
  const trailX = Math.max(20, Math.min(cw - 25, cx + trailPos.nx * cw));
  const trailY = Math.max(20, Math.min(ch - 25, cy + trailPos.ny * ch));
  _pixieTrailEl.style.left = (trailX - 5) + 'px';
  _pixieTrailEl.style.top = (trailY - 5) + 'px';
  _pixieTrailEl.style.opacity = String(0.3 + Math.sin(t * 1.3 - 0.5) * 0.1);

  // Ambient glow follows pixie — huge soft radial wash
  if (_ambientGlowEl) {
    _ambientGlowEl.style.left = (clampedX - 200) + 'px';
    _ambientGlowEl.style.top = (clampedY - 200) + 'px';
    _ambientGlowEl.style.opacity = String(0.5 + Math.sin(t * 0.9) * 0.3);
  }

  // Spawn pixie dust from current position
  spawnDust(clampedX, clampedY);
}

// ================================================================
// Pixie dust — spawns at pixie position, falls and fades
// ================================================================
function spawnDust(x, y) {
  // Spawn 1-2 particles per call (~60fps = 60-120/s, but pool caps at 24)
  for (let n = 0; n < 2; n++) {
    // Find inactive slot
    let idx = -1;
    for (let i = 0; i < DUST_MAX; i++) {
      if (!_dustParticles[i].active) { idx = i; break; }
    }
    if (idx < 0) {
      // Reuse oldest (lowest life)
      let minLife = Infinity;
      for (let i = 0; i < DUST_MAX; i++) {
        if (_dustParticles[i].life < minLife) { minLife = _dustParticles[i].life; idx = i; }
      }
    }
    if (idx < 0) return;

    const p = _dustParticles[idx];
    p.active = true;
    p.x = x + (Math.random() - 0.5) * 8;
    p.y = y + (Math.random() - 0.5) * 4;
    p.vx = (Math.random() - 0.5) * 15; // slight horizontal drift
    p.vy = 20 + Math.random() * 30;     // falls downward
    p.life = 1.5 + Math.random() * 1.0; // 1.5-2.5 seconds
    p.maxLife = p.life;
    p.size = 2 + Math.random() * 3;
  }
}

export function updateDust(dt) {
  for (let i = 0; i < DUST_MAX; i++) {
    const p = _dustParticles[i];
    if (!p.active) continue;

    p.life -= dt;
    if (p.life <= 0) {
      p.active = false;
      _dustEls[i].style.opacity = '0';
      continue;
    }

    // Physics: fall with slight deceleration and horizontal drift
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy *= 0.98; // slight deceleration
    p.vx *= 0.96; // horizontal damping

    // Opacity fades as life decreases
    const lifeRatio = p.life / p.maxLife;
    const opacity = lifeRatio * lifeRatio * 0.7; // quadratic fade

    const el = _dustEls[i];
    el.style.left = (p.x - p.size * 0.5) + 'px';
    el.style.top = (p.y - p.size * 0.5) + 'px';
    el.style.width = (p.size * lifeRatio) + 'px';
    el.style.height = (p.size * lifeRatio) + 'px';
    el.style.opacity = String(opacity);
    el.style.boxShadow = '0 0 ' + Math.round(p.size * lifeRatio * 2) + 'px rgba(100,255,200,' + (opacity * 0.5) + ')';
  }
}

// ================================================================
// Digital tunnel — perspective corridor we're traveling through
// Wireframe grid receding to vanishing point with data pulses
// Represents navigating the interior of the Archive
// ================================================================
function renderMatrix(t, dt) {
  if (!_matrixCanvas || !_matrixCtx) return;

  const cw = _matrixCanvas.clientWidth;
  const ch = _matrixCanvas.clientHeight;
  if (cw === 0 || ch === 0) return;

  if (_matrixCanvas.width !== cw || _matrixCanvas.height !== ch) {
    _matrixCanvas.width = cw;
    _matrixCanvas.height = ch;
  }

  // Cycle: 8s period — fade in 2s, hold 3s, fade out 2s, dark 1s
  const cycle = t % 8.0;
  let alpha = 0;
  if (cycle < 2.0) {
    alpha = (cycle / 2.0) * 0.18;
  } else if (cycle < 5.0) {
    alpha = 0.18;
  } else if (cycle < 7.0) {
    alpha = ((7.0 - cycle) / 2.0) * 0.18;
  }

  _matrixCanvas.style.opacity = String(alpha);
  if (alpha < 0.001) return;

  const ctx = _matrixCtx;
  // Clear with very slight trail for ghosting effect
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.fillRect(0, 0, cw, ch);

  const cx = cw * 0.5;
  const cy = ch * 0.5;

  // Vanishing point drifts slowly
  const vpx = cx + Math.sin(t * 0.15) * cw * 0.05;
  const vpy = cy + Math.cos(t * 0.11) * ch * 0.04;

  // Camera moves forward through tunnel — rings approach
  const zOffset = (t * 0.4) % 1.0; // 0→1 repeating forward motion

  // Draw tunnel rings from far to near
  for (let r = TUNNEL_RINGS - 1; r >= 0; r--) {
    // Depth parameter: 0 = closest, 1 = farthest
    const rawDepth = (r + zOffset) / TUNNEL_RINGS;
    const depth = rawDepth * rawDepth; // quadratic for perspective compression

    // Ring size: large when close, tiny at vanishing point
    const ringScale = 0.08 + (1.0 - depth) * 1.5;
    const ringW = cw * ringScale * 0.5;
    const ringH = ch * ringScale * 0.45;

    // Position: interpolate from vanishing point to screen edges
    const ringCx = vpx + (cx - vpx) * (1.0 - depth);
    const ringCy = vpy + (cy - vpy) * (1.0 - depth);

    // Ring opacity: fades at distance and up close
    const fadeNear = Math.min(1, rawDepth * 4);     // fade when very close
    const fadeFar = Math.min(1, (1 - rawDepth) * 3); // fade at distance
    const ringAlpha = fadeNear * fadeFar * 0.6;
    if (ringAlpha < 0.01) continue;

    // Draw octagonal ring
    ctx.strokeStyle = 'rgba(0,' + Math.floor(140 + (1 - depth) * 80) + ',60,' + ringAlpha + ')';
    ctx.lineWidth = 0.5 + (1 - depth) * 1.0;
    ctx.beginPath();
    for (let s = 0; s <= TUNNEL_SIDES; s++) {
      const angle = (s / TUNNEL_SIDES) * Math.PI * 2 + t * 0.05; // slow rotation
      const px = ringCx + Math.cos(angle) * ringW;
      const py = ringCy + Math.sin(angle) * ringH;
      if (s === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Longitudinal lines connecting this ring to the next (every other ring)
    if (r < TUNNEL_RINGS - 1 && r % 2 === 0) {
      const nextRawDepth = (r + 1 + zOffset) / TUNNEL_RINGS;
      const nextDepth = nextRawDepth * nextRawDepth;
      const nextScale = 0.08 + (1.0 - nextDepth) * 1.5;
      const nextW = cw * nextScale * 0.5;
      const nextH = ch * nextScale * 0.45;
      const nextCx = vpx + (cx - vpx) * (1.0 - nextDepth);
      const nextCy = vpy + (cy - vpy) * (1.0 - nextDepth);

      ctx.strokeStyle = 'rgba(0,' + Math.floor(100 + (1 - depth) * 60) + ',50,' + (ringAlpha * 0.4) + ')';
      ctx.lineWidth = 0.4;
      for (let s = 0; s < TUNNEL_SIDES; s += 2) {
        const angle = (s / TUNNEL_SIDES) * Math.PI * 2 + t * 0.05;
        const px1 = ringCx + Math.cos(angle) * ringW;
        const py1 = ringCy + Math.sin(angle) * ringH;
        const px2 = nextCx + Math.cos(angle) * nextW;
        const py2 = nextCy + Math.sin(angle) * nextH;
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();
      }
    }
  }

  // Data pulses — bright rings that rush toward us along the tunnel
  // Spawn new pulses
  if (_tunnelPulses.length < TUNNEL_PULSES_MAX && Math.random() < 0.02) {
    _tunnelPulses.push({
      z: 1.0,        // starts at far end
      speed: 0.15 + Math.random() * 0.2,
      hue: Math.random() < 0.5 ? 140 : 180, // green or cyan
      width: 1.5 + Math.random() * 1.5
    });
  }

  // Update and draw pulses
  for (let i = _tunnelPulses.length - 1; i >= 0; i--) {
    const pulse = _tunnelPulses[i];
    pulse.z -= pulse.speed * dt;
    if (pulse.z < -0.1) {
      _tunnelPulses.splice(i, 1);
      continue;
    }

    const depth = pulse.z * pulse.z;
    const ringScale = 0.08 + (1.0 - depth) * 1.5;
    const ringW = cw * ringScale * 0.5;
    const ringH = ch * ringScale * 0.45;
    const ringCx = vpx + (cx - vpx) * (1.0 - depth);
    const ringCy = vpy + (cy - vpy) * (1.0 - depth);

    const fadeNear = Math.min(1, pulse.z * 3);
    const fadeFar = Math.min(1, (1 - pulse.z) * 3);
    const pulseAlpha = fadeNear * fadeFar * 0.8;

    ctx.strokeStyle = 'hsla(' + pulse.hue + ',80%,60%,' + pulseAlpha + ')';
    ctx.lineWidth = pulse.width + (1 - depth) * 2;
    ctx.shadowColor = 'hsla(' + pulse.hue + ',80%,50%,' + (pulseAlpha * 0.5) + ')';
    ctx.shadowBlur = 8 + (1 - depth) * 12;
    ctx.beginPath();
    for (let s = 0; s <= TUNNEL_SIDES; s++) {
      const angle = (s / TUNNEL_SIDES) * Math.PI * 2 + t * 0.05;
      const px = ringCx + Math.cos(angle) * ringW;
      const py = ringCy + Math.sin(angle) * ringH;
      if (s === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // Vanishing point glow — distant light at end of tunnel
  const vpGlow = 0.04 + Math.sin(t * 0.7) * 0.02;
  const grad = ctx.createRadialGradient(vpx, vpy, 0, vpx, vpy, 60);
  grad.addColorStop(0, 'rgba(0,200,80,' + vpGlow + ')');
  grad.addColorStop(0.5, 'rgba(0,150,60,' + (vpGlow * 0.3) + ')');
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.fillRect(vpx - 60, vpy - 60, 120, 120);
}
