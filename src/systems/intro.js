// ================================================================
// Opening Cinematic — The Briefing
// ================================================================
// A dual-layer narrative introduction: poetic fantasy text paired
// with cold scientific terminal readouts. The camera begins high
// above the canopy looking down, then sweeps to ground level as
// the player is handed control.
//
// OBSERVATION LOG (Dr. E. Vasquez, Principal Investigator):
//   We found the recording device in the root hollow of specimen
//   T-0017 — the oldest trunk in the array. The audio was
//   corrupted, but the text buffer was intact. Two voices.
//   One lyrical, one clinical. Saying the same thing in
//   different languages. We think the forest was trying
//   to explain itself. To anyone who would listen.

import { EYE_H } from '../constants.js';

// ================================================================
// Narration pairs — fantasy layer + terminal layer
// ================================================================
const NARRATION = [
  {
    fantasy: 'Once, this forest sang.',
    terminal: '// BIOSENSOR ARRAY v4.2 — Historical luminance baseline detected'
  },
  {
    fantasy: 'Every root hummed with light. Every canopy blazed.',
    terminal: '// Bioluminescent network coverage: 100% — Symbiotic frequency: NOMINAL'
  },
  {
    fantasy: 'Then the glow began to dim. The songs grew quiet.',
    terminal: '// WARNING: Sector luminance decay — 73% loss over 2,400 cycles'
  },
  {
    fantasy: 'Five anchors of light remain, buried beneath the dark.',
    terminal: '// 5 restoration nodes offline — Awaiting frequency carrier activation'
  },
  {
    fantasy: 'The creatures still remember the old harmony.',
    terminal: '// Native fauna vocalizations contain encoded frequency patterns'
  },
  {
    fantasy: 'Listen to them. Move with them. Carry their voice to the light.',
    terminal: '// PROTOCOL: Attune to carrier organisms → Transport frequency → Restore nodes'
  }
];

// ================================================================
// State
// ================================================================
// Phases: TITLE → FADE_OUT → NARRATION → SWEEP → HANDOFF → DONE
let phase = 'TITLE';
let phaseTimer = 0;
let titleTime = 0; // accumulated time for pixie animation during TITLE
let narrationIndex = 0;
let narrationCharIndex = 0; // for terminal typing effect
let sweepProgress = 0;
let onComplete = null; // callback when cinematic ends

// DOM elements
let container = null;
let titleEl = null;
let titleSubEl = null;
let blackScreen = null;
let fantasyEl = null;
let terminalEl = null;
let attuneEl = null;
let pixieEl = null;
let pixieTrailEl = null;
let mushDecor = []; // decorative mushroom elements
let pufflingEls = []; // two pufflings — dots of both I's in LUMINARIES

// Pixie dust particle pool
const DUST_MAX = 24;
let dustEls = [];
let dustParticles = [];

// Camera sweep parameters
const SWEEP_START_Y = 120;
const SWEEP_DURATION = 8.0;
const NARRATION_PER_CARD = 7.0; // seconds per text pair — slow and dramatic
const NARRATION_FADE = 1.2;     // fade in/out duration
const NARRATION_HOLD = 5.0;     // hold at full opacity when complete

// ================================================================
// Init — create DOM structure (called at startup)
// ================================================================
export function initIntro(completeFn) {
  onComplete = completeFn;

  // Container for all intro elements
  container = document.createElement('div');
  container.id = 'intro-cinematic';
  container.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;z-index:300;pointer-events:auto;overflow:hidden;';

  // Dark grey backdrop — visible immediately, covers the 3D scene
  blackScreen = document.createElement('div');
  blackScreen.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;background:#111;opacity:1;' +
    'transition:opacity 1.2s ease;';
  container.appendChild(blackScreen);

  // ================================================================
  // Decorative glowing mushrooms around the title
  // ================================================================
  const mushPositions = [
    { x: '8%',  y: '60%', scale: 1.0,  delay: 0,    hue: 270 },
    { x: '14%', y: '66%', scale: 0.6,  delay: 0.4,  hue: 280 },
    { x: '20%', y: '62%', scale: 0.75, delay: 0.2,  hue: 260 },
    { x: '80%', y: '61%', scale: 0.85, delay: 0.15, hue: 275 },
    { x: '86%', y: '67%', scale: 0.55, delay: 0.55, hue: 290 },
    { x: '92%', y: '63%', scale: 0.7,  delay: 0.3,  hue: 265 },
  ];
  for (let i = 0; i < mushPositions.length; i++) {
    const mp = mushPositions[i];
    const mush = document.createElement('div');
    const sz = Math.round(36 * mp.scale);
    const capH = Math.round(sz * 0.55);
    const stemW = Math.round(sz * 0.22);
    const stemH = Math.round(sz * 0.55);
    mush.style.cssText =
      'position:absolute;pointer-events:none;' +
      'left:' + mp.x + ';top:' + mp.y + ';transform:translate(-50%,-100%);' +
      'opacity:0;';

    // Mushroom cap — layered gradients for depth
    const cap = document.createElement('div');
    cap.style.cssText =
      'position:relative;width:' + sz + 'px;height:' + capH + 'px;' +
      'background:radial-gradient(ellipse at 50% 90%,' +
        'hsl(' + mp.hue + ',60%,55%) 0%,' +
        'hsl(' + mp.hue + ',55%,40%) 35%,' +
        'hsl(' + mp.hue + ',50%,25%) 70%,' +
        'transparent 100%);' +
      'border-radius:50% 50% 15% 15%;margin:0 auto;';
    mush.appendChild(cap);

    // Inner highlight on cap
    const highlight = document.createElement('div');
    highlight.style.cssText =
      'position:absolute;top:15%;left:25%;width:50%;height:40%;' +
      'background:radial-gradient(ellipse,' +
        'hsla(' + mp.hue + ',70%,75%,.4) 0%,transparent 70%);' +
      'border-radius:50%;';
    cap.appendChild(highlight);

    // Gill lines under cap
    const gills = document.createElement('div');
    gills.style.cssText =
      'position:absolute;bottom:0;left:15%;width:70%;height:25%;' +
      'background:repeating-linear-gradient(90deg,' +
        'hsla(' + mp.hue + ',40%,30%,.6) 0px,' +
        'hsla(' + mp.hue + ',40%,30%,.6) 1px,' +
        'transparent 1px,transparent 3px);' +
      'border-radius:0 0 40% 40%;opacity:0.5;';
    cap.appendChild(gills);

    // Bioluminescent spots on cap
    const spotCount = 2 + Math.floor(mp.scale * 3);
    for (let d = 0; d < spotCount; d++) {
      const spot = document.createElement('div');
      const spotSz = Math.round(2 + mp.scale * 2.5);
      const spotX = 20 + (d * 60 / spotCount) + Math.sin(d * 2.7) * 10;
      const spotY = 15 + Math.cos(d * 3.1) * 20;
      spot.className = 'mush-spot';
      spot.style.cssText =
        'position:absolute;width:' + spotSz + 'px;height:' + spotSz + 'px;border-radius:50%;' +
        'background:hsla(' + (mp.hue - 20) + ',80%,80%,.9);' +
        'box-shadow:0 0 ' + (spotSz * 2) + 'px hsla(' + (mp.hue - 20) + ',80%,70%,.6),' +
          '0 0 ' + (spotSz * 4) + 'px hsla(' + (mp.hue - 20) + ',60%,60%,.25);' +
        'top:' + spotY + '%;left:' + spotX + '%;';
      cap.appendChild(spot);
    }

    // Stem — gradient with subtle texture
    const stem = document.createElement('div');
    stem.style.cssText =
      'width:' + stemW + 'px;height:' + stemH + 'px;' +
      'background:linear-gradient(to right,' +
        'hsl(' + mp.hue + ',30%,25%) 0%,' +
        'hsl(' + mp.hue + ',25%,38%) 40%,' +
        'hsl(' + mp.hue + ',30%,28%) 100%);' +
      'margin:-1px auto 0;border-radius:2px 2px 3px 3px;' +
      'box-shadow:inset -1px 0 2px rgba(0,0,0,.2);';
    mush.appendChild(stem);

    // Ground glow beneath mushroom
    const groundGlow = document.createElement('div');
    const glowW = Math.round(sz * 1.4);
    groundGlow.style.cssText =
      'width:' + glowW + 'px;height:' + Math.round(sz * 0.25) + 'px;' +
      'background:radial-gradient(ellipse,' +
        'hsla(' + mp.hue + ',60%,50%,.25) 0%,transparent 70%);' +
      'margin:-2px auto 0;';
    mush.appendChild(groundGlow);

    container.appendChild(mush);
    mushDecor.push({ el: mush, cap: cap, delay: mp.delay, phase: Math.random() * 6.28, hue: mp.hue, sz: sz });
  }

  // ================================================================
  // Title — clean serif with subtle glow
  // ================================================================
  titleEl = document.createElement('div');
  titleEl.style.cssText =
    'position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:Georgia,\"Times New Roman\",serif;font-size:clamp(28px,4.8vw,52px);' +
    'color:#aaffdd;letter-spacing:0.35em;font-weight:bold;' +
    'text-shadow:0 0 15px rgba(100,255,200,.5),0 0 35px rgba(50,200,150,.25),' +
    '0 2px 4px rgba(0,0,0,.6);' +
    'text-align:center;opacity:0;white-space:nowrap;' +
    'background:linear-gradient(180deg,#ddfff0 0%,#99eebb 35%,#66bb99 100%);' +
    '-webkit-background-clip:text;-webkit-text-fill-color:transparent;' +
    'background-clip:text;' +
    'filter:drop-shadow(0 0 12px rgba(100,255,200,.4)) drop-shadow(0 0 30px rgba(50,200,150,.15));';

  // Build title — each letter is a span, I letters get a special structure
  // L-U-M-I-N-A-R-I-E-S
  const letters = ['L','U','M','I','N','A','R','I','E','S'];
  let titleHTML = '';
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === 'I') {
      // The I is built from a visible stem (the vertical bar) + invisible dot
      // The puffling element will be absolutely positioned as the dot
      titleHTML += '<span data-i-col="' + i + '" style="display:inline-block;position:relative;' +
        'width:0.45em;text-align:center;vertical-align:baseline;">' +
        // Invisible I to hold spacing — we draw the stem via border
        '<span style="display:inline-block;width:0.14em;height:0.68em;' +
        'background:linear-gradient(180deg,#ddfff0 0%,#99eebb 35%,#66bb99 100%);' +
        'border-radius:1px;vertical-align:baseline;margin-bottom:-0.05em;"></span>' +
        '</span>';
    } else {
      titleHTML += letters[i];
    }
  }
  titleEl.innerHTML = titleHTML;
  container.appendChild(titleEl);

  // ================================================================
  // Two puffling elements — the dots of each I in LUMINARIES
  // ================================================================
  pufflingEls = [];
  for (let pi = 0; pi < 2; pi++) {
    const puff = document.createElement('div');
    const pSz = 16; // puffling body size in pixels
    puff.style.cssText =
      'position:absolute;pointer-events:none;opacity:0;transition:opacity 1.5s ease;';
    puff.innerHTML =
      '<div style="position:relative;width:' + pSz + 'px;height:' + pSz + 'px;">' +
        // Body — warm round shape with depth
        '<div style="position:absolute;width:' + pSz + 'px;height:' + Math.round(pSz * 0.9) + 'px;border-radius:50%;' +
          'background:radial-gradient(ellipse at 38% 32%,#fff5e0 0%,#f0cc80 25%,#d4a050 55%,#b07830 100%);' +
          'box-shadow:0 0 8px rgba(240,200,120,.6),0 0 16px rgba(200,160,60,.3),' +
          '0 1px 2px rgba(0,0,0,.3);"></div>' +
        // Eyes — small, expressive
        '<div style="position:absolute;width:3px;height:3.5px;border-radius:50%;background:#1a0800;' +
          'top:' + Math.round(pSz * 0.28) + 'px;left:' + Math.round(pSz * 0.26) + 'px;"></div>' +
        '<div style="position:absolute;width:3px;height:3.5px;border-radius:50%;background:#1a0800;' +
          'top:' + Math.round(pSz * 0.28) + 'px;left:' + Math.round(pSz * 0.56) + 'px;"></div>' +
        // Eye highlights
        '<div style="position:absolute;width:1.5px;height:1.5px;border-radius:50%;background:rgba(255,255,255,.7);' +
          'top:' + Math.round(pSz * 0.26) + 'px;left:' + Math.round(pSz * 0.30) + 'px;"></div>' +
        '<div style="position:absolute;width:1.5px;height:1.5px;border-radius:50%;background:rgba(255,255,255,.7);' +
          'top:' + Math.round(pSz * 0.26) + 'px;left:' + Math.round(pSz * 0.60) + 'px;"></div>' +
        // Beak
        '<div style="position:absolute;width:4px;height:2.5px;background:#e08030;border-radius:50%;' +
          'top:' + Math.round(pSz * 0.48) + 'px;left:' + Math.round(pSz * 0.38) + 'px;"></div>' +
        // Tiny feet
        '<div style="position:absolute;width:3.5px;height:2px;background:#c07030;border-radius:0 0 1.5px 1.5px;' +
          'top:' + Math.round(pSz * 0.88) + 'px;left:' + Math.round(pSz * 0.22) + 'px;"></div>' +
        '<div style="position:absolute;width:3.5px;height:2px;background:#c07030;border-radius:0 0 1.5px 1.5px;' +
          'top:' + Math.round(pSz * 0.88) + 'px;left:' + Math.round(pSz * 0.58) + 'px;"></div>' +
      '</div>';
    container.appendChild(puff);
    pufflingEls.push({ el: puff, hopOffset: pi * 0.45 }); // stagger hops
  }

  titleSubEl = document.createElement('div');
  titleSubEl.style.cssText =
    'position:absolute;top:51%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:\'Courier New\',monospace;font-size:12px;color:#66ccaa;letter-spacing:2px;' +
    'text-align:center;opacity:0;transition:opacity 1s ease;';
  titleSubEl.textContent = 'click to begin';
  container.appendChild(titleSubEl);

  // ================================================================
  // Pixie sprite — larger glowing orb with richer glow
  // ================================================================
  pixieEl = document.createElement('div');
  pixieEl.style.cssText =
    'position:absolute;width:12px;height:12px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,#ccffee 0%,#66ddaa 30%,#33aa77 60%,transparent 80%);' +
    'box-shadow:0 0 10px #88ffcc,0 0 20px #44dd99,0 0 35px rgba(50,220,150,.35),' +
    '0 0 50px rgba(50,200,130,.15);' +
    'opacity:0.9;transition:opacity 1s ease;';
  container.appendChild(pixieEl);

  // Pixie trail — smaller, fainter, follows with delay
  pixieTrailEl = document.createElement('div');
  pixieTrailEl.style.cssText =
    'position:absolute;width:7px;height:7px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,#88eebb 0%,#33aa77 50%,transparent 70%);' +
    'box-shadow:0 0 6px #44cc88,0 0 14px rgba(50,200,130,.25);' +
    'opacity:0.45;transition:opacity 1s ease;';
  container.appendChild(pixieTrailEl);

  // ================================================================
  // Pixie dust particle pool — pre-create DOM elements
  // ================================================================
  for (let i = 0; i < DUST_MAX; i++) {
    const el = document.createElement('div');
    el.style.cssText =
      'position:absolute;border-radius:50%;pointer-events:none;opacity:0;' +
      'background:radial-gradient(circle,#aaffdd 0%,#55cc88 60%,transparent 100%);';
    container.appendChild(el);
    dustEls.push(el);
    dustParticles.push({ active: false, x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 0, size: 0 });
  }

  // ================================================================
  // Fantasy text layer (upper center, serif, luminous)
  // ================================================================
  fantasyEl = document.createElement('div');
  fantasyEl.style.cssText =
    'position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:Georgia,serif;font-size:clamp(20px,3vw,28px);color:#ccffee;letter-spacing:3px;' +
    'text-shadow:0 0 14px rgba(100,255,200,.6),0 0 30px rgba(50,200,150,.3);' +
    'text-align:center;max-width:650px;line-height:1.6;opacity:0;' +
    'transition:opacity 1.2s ease;pointer-events:none;';
  container.appendChild(fantasyEl);

  // Terminal text layer (lower center, monospace, green)
  terminalEl = document.createElement('div');
  terminalEl.style.cssText =
    'position:absolute;top:62%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:\'Courier New\',monospace;font-size:13px;color:#88aa66;letter-spacing:1px;' +
    'text-shadow:0 0 6px rgba(100,180,60,.4),0 0 15px rgba(60,120,30,.2);' +
    'text-align:center;max-width:650px;line-height:1.4;opacity:0;' +
    'transition:opacity 1.2s ease;pointer-events:none;';
  container.appendChild(terminalEl);

  // Final "Attune..." text
  attuneEl = document.createElement('div');
  attuneEl.style.cssText =
    'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:Georgia,serif;font-size:28px;color:#ffddaa;letter-spacing:5px;' +
    'text-shadow:0 0 12px rgba(255,200,100,.5),0 0 30px rgba(200,150,50,.3);' +
    'text-align:center;opacity:0;transition:opacity 1s ease;pointer-events:none;';
  attuneEl.textContent = 'Attune\u2026';
  container.appendChild(attuneEl);

  document.body.appendChild(container);

  // Hide the old #overlay since we're replacing it
  const oldOverlay = document.getElementById('overlay');
  if (oldOverlay) oldOverlay.style.display = 'none';

  // Fade in title + decorations after a short delay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      titleEl.style.transition = 'opacity 2.5s ease';
      titleEl.style.opacity = '1';
      titleSubEl.style.transition = 'opacity 2s ease 1s';
      titleSubEl.style.opacity = '0.6';
      for (let i = 0; i < pufflingEls.length; i++) pufflingEls[i].el.style.opacity = '1';
      // Stagger mushroom fade-ins
      for (let i = 0; i < mushDecor.length; i++) {
        const m = mushDecor[i];
        m.el.style.transition = 'opacity ' + (1.5 + m.delay) + 's ease ' + m.delay + 's';
        m.el.style.opacity = '0.85';
      }
    });
  });
}

// ================================================================
// Start — triggered by first user interaction (click/key)
// ================================================================
let started = false;
export function startIntro() {
  if (started || phase !== 'TITLE') return;
  started = true;

  phase = 'FADE_OUT';
  phaseTimer = 0;

  // Fade title + pixie + decorations out, black screen goes fully black
  titleEl.style.opacity = '0';
  titleSubEl.style.opacity = '0';
  pixieEl.style.opacity = '0';
  pixieTrailEl.style.opacity = '0';
  for (let i = 0; i < pufflingEls.length; i++) pufflingEls[i].el.style.opacity = '0';
  for (let i = 0; i < mushDecor.length; i++) mushDecor[i].el.style.opacity = '0';
  // Hide dust particles
  for (let i = 0; i < dustEls.length; i++) dustEls[i].style.opacity = '0';
  blackScreen.style.background = '#000';

  // Allow input system through during cinematic
  container.style.pointerEvents = 'none';

  container.removeEventListener('click', onTitleClick);
  container.removeEventListener('touchstart', onTitleClick);
}

function onTitleClick(e) {
  e.preventDefault();
  startIntro();
}

// ================================================================
// Attach click handler — called after DOM is ready
// ================================================================
export function enableTitleClick() {
  if (!container) return;
  container.addEventListener('click', onTitleClick);
  container.addEventListener('touchstart', onTitleClick);
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
// Update — called each frame from animate loop
// ================================================================
export function updateIntro(dt, camera) {
  if (phase === 'DONE') return;

  // Pixie animation during TITLE phase
  if (phase === 'TITLE') {
    titleTime += dt;
    animatePixie(titleTime);
    animatePufflings(titleTime);
    animateMushrooms(titleTime);
    updateDust(dt);
    return;
  }

  phaseTimer += dt;

  switch (phase) {
    case 'FADE_OUT': {
      // Wait for fade to complete (1.5s transition + 0.3s buffer)
      if (phaseTimer > 1.8) {
        phase = 'NARRATION';
        phaseTimer = 0;
        narrationIndex = 0;
        narrationCharIndex = 0;
      }
      break;
    }

    case 'NARRATION': {
      const cardTime = phaseTimer % NARRATION_PER_CARD;
      const cardIndex = Math.floor(phaseTimer / NARRATION_PER_CARD);

      if (cardIndex >= NARRATION.length) {
        // Narration complete — start camera sweep
        phase = 'SWEEP';
        phaseTimer = 0;
        sweepProgress = 0;
        fantasyEl.style.opacity = '0';
        terminalEl.style.opacity = '0';
        break;
      }

      // Update narration index
      if (cardIndex !== narrationIndex) {
        narrationIndex = cardIndex;
        narrationCharIndex = 0;
      }

      const card = NARRATION[narrationIndex];

      // Fantasy text — slow dramatic fade in, hold, then fade out
      if (cardTime < NARRATION_FADE) {
        // Fade in over 1.2s
        fantasyEl.style.opacity = String(cardTime / NARRATION_FADE);
      } else if (cardTime > NARRATION_PER_CARD - NARRATION_FADE) {
        // Fade out over last 1.2s
        fantasyEl.style.opacity = String((NARRATION_PER_CARD - cardTime) / NARRATION_FADE);
      } else {
        // Hold at full opacity in the middle
        fantasyEl.style.opacity = '1';
      }
      fantasyEl.textContent = card.fantasy;

      // Terminal typing effect — slower for dramatic effect
      const typingDelay = 0.5; // start typing after fantasy fades in
      const charsPerSec = 25;  // slower typing (was 40)
      if (cardTime > typingDelay) {
        const elapsed = cardTime - typingDelay;
        narrationCharIndex = Math.min(
          Math.floor(elapsed * charsPerSec),
          card.terminal.length
        );
      }
      terminalEl.textContent = card.terminal.substring(0, narrationCharIndex);

      // Terminal fade matches fantasy with slight delay
      if (cardTime < NARRATION_FADE + typingDelay) {
        terminalEl.style.opacity = String(Math.min(1, (cardTime - typingDelay * 0.5) / NARRATION_FADE));
      } else if (cardTime > NARRATION_PER_CARD - NARRATION_FADE) {
        terminalEl.style.opacity = String((NARRATION_PER_CARD - cardTime) / NARRATION_FADE);
      } else {
        terminalEl.style.opacity = '0.8';
      }

      break;
    }

    case 'SWEEP': {
      sweepProgress = Math.min(phaseTimer / SWEEP_DURATION, 1.0);

      // Ease-out cubic for smooth landing
      const ease = 1.0 - Math.pow(1.0 - sweepProgress, 3);

      // Camera Y: descend from sky to eye height
      const camY = SWEEP_START_Y + (EYE_H - SWEEP_START_Y) * ease;
      camera.position.set(0, camY, 0);

      // Pitch: start looking straight down (-PI/2), end horizontal (0)
      camera.rotation.order = 'YXZ';
      camera.rotation.x = -Math.PI * 0.5 * (1.0 - ease);

      // Slow yaw rotation for visual interest
      camera.rotation.y = phaseTimer * 0.12;

      // Fade from black as sweep begins
      if (sweepProgress < 0.15) {
        blackScreen.style.opacity = String(1.0 - sweepProgress / 0.15);
      } else {
        blackScreen.style.opacity = '0';
      }

      if (sweepProgress >= 1.0) {
        phase = 'HANDOFF';
        phaseTimer = 0;
        // Show "Attune..." text
        attuneEl.style.opacity = '1';
      }
      break;
    }

    case 'HANDOFF': {
      // Hold "Attune..." for 5 seconds (was 3), then complete
      camera.position.set(0, EYE_H, 0);
      camera.rotation.order = 'YXZ';
      camera.rotation.x = 0;
      camera.rotation.y += dt * 0.06;

      if (phaseTimer > 5.0) {
        // Fade out attune text
        attuneEl.style.opacity = '0';
      }

      if (phaseTimer > 6.2) {
        // Cinematic complete — remove DOM and hand off to game
        phase = 'DONE';
        container.style.opacity = '0';
        container.style.transition = 'opacity 0.5s';
        setTimeout(() => {
          try { container.remove(); } catch (e) { /* noop */ }
        }, 600);
        if (onComplete) onComplete();
      }
      break;
    }
  }
}

// ================================================================
// Puffling animation — two pufflings as the dots of both I's
// ================================================================
function animatePufflings(t) {
  if (!pufflingEls.length || !titleEl) return;

  // Find the I-column spans via data attribute
  const iCols = titleEl.querySelectorAll('[data-i-col]');
  if (iCols.length < 2) return;

  for (let pi = 0; pi < 2; pi++) {
    const pData = pufflingEls[pi];
    const col = iCols[pi];
    if (!col) continue;

    const colRect = col.getBoundingClientRect();
    if (!colRect.width) continue;

    // Puffling sits centered above the stem, as the dot of the I
    const pSz = 16;
    const centerX = colRect.left + colRect.width * 0.5;
    // Position above the stem — gap between dot and stem
    const stemTop = colRect.top;
    const baseY = stemTop - pSz * 0.5 - 3; // small gap above stem

    // Gentle hop animation — subtle bounce in place
    const hopT = t * 1.4 + pData.hopOffset * Math.PI * 2;
    const hopCycle = hopT % 1.0;
    let hopY = 0;
    if (hopCycle < 0.2) {
      // Rise
      const p = hopCycle / 0.2;
      hopY = -Math.sin(p * Math.PI * 0.5) * 6;
    } else if (hopCycle < 0.35) {
      // Fall
      const p = (hopCycle - 0.2) / 0.15;
      hopY = -Math.cos(p * Math.PI * 0.5) * 6;
    }
    // 0.35-1.0: resting

    // Tiny squash/stretch on landing
    let scaleX = 1, scaleY = 1;
    if (hopCycle >= 0.33 && hopCycle < 0.42) {
      const sq = (hopCycle - 0.33) / 0.09;
      scaleX = 1 + Math.sin(sq * Math.PI) * 0.12;
      scaleY = 1 - Math.sin(sq * Math.PI) * 0.08;
    }

    // Slight tilt during hop
    const tilt = hopCycle < 0.35 ? Math.sin(hopCycle * Math.PI * 3) * 4 : 0;

    pData.el.style.left = (centerX - pSz * 0.5) + 'px';
    pData.el.style.top = (baseY + hopY) + 'px';
    pData.el.style.transform = 'rotate(' + tilt + 'deg) scale(' + scaleX + ',' + scaleY + ')';
  }
}

// ================================================================
// Mushroom glow animation — pulsing bioluminescence
// ================================================================
function animateMushrooms(t) {
  for (let i = 0; i < mushDecor.length; i++) {
    const m = mushDecor[i];
    // Slow organic pulse — each mushroom slightly different
    const pulse = Math.sin(t * 1.2 + m.phase) * 0.5 + 0.5; // 0 to 1
    const brightness = 0.85 + pulse * 0.35;
    const glowIntensity = 0.15 + pulse * 0.2;
    const glowSpread = Math.round(m.sz * 0.5 + pulse * m.sz * 0.3);

    if (m.cap) {
      m.cap.style.filter = 'brightness(' + brightness + ')';
      m.cap.style.boxShadow =
        '0 0 ' + glowSpread + 'px hsla(' + m.hue + ',60%,55%,' + glowIntensity + '),' +
        '0 0 ' + (glowSpread * 2) + 'px hsla(' + m.hue + ',50%,45%,' + (glowIntensity * 0.4) + ')';
    }
  }
}

// ================================================================
// Pixie animation — chaotic random movement with dust trail
// ================================================================
function animatePixie(t) {
  if (!pixieEl || !container) return;

  const cw = container.clientWidth;
  const ch = container.clientHeight;
  const cx = cw * 0.5;
  const cy = ch * 0.42;

  // Gentle figure-8 orbit
  const angle = t * 0.4;
  const radiusX = Math.min(cw * 0.25, 250);
  const radiusY = 35;

  // Smooth noise layers — gentle, organic drift (no fast twitching)
  const n1x = (smoothNoise(t, 0.35) - 0.5) * 70;   // slow wide wander
  const n1y = (smoothNoise(t + 50, 0.4) - 0.5) * 50;
  const n2x = (smoothNoise(t, 1.1) - 0.5) * 25;    // medium drift
  const n2y = (smoothNoise(t + 100, 1.0) - 0.5) * 20;

  // Rare, gentle direction shifts (not sharp darts)
  const drift = Math.sin(t * 2.3) > 0.85 ? Math.sin(t * 4.1) * 20 : 0;
  const driftY = Math.cos(t * 1.9) > 0.88 ? Math.cos(t * 3.7) * 15 : 0;

  const px = cx + Math.cos(angle) * radiusX + Math.sin(angle * 0.5) * radiusX * 0.2 + n1x + n2x + drift;
  const py = cy + Math.sin(angle * 1.3) * radiusY + n1y + n2y + driftY;

  // Clamp to container bounds
  const clampedX = Math.max(10, Math.min(cw - 20, px));
  const clampedY = Math.max(10, Math.min(ch - 20, py));

  pixieEl.style.left = (clampedX - 6) + 'px';
  pixieEl.style.top = (clampedY - 6) + 'px';

  // Gentle breathing glow — no harsh flickering
  const breath = 0.7 + Math.sin(t * 1.8) * 0.15 + Math.sin(t * 3.1) * 0.08;
  pixieEl.style.opacity = String(Math.max(0.5, Math.min(0.95, breath)));

  // Smooth glow size variation
  const glowSize = 10 + Math.sin(t * 1.5) * 3;
  pixieEl.style.boxShadow =
    '0 0 ' + glowSize + 'px #88ffcc,' +
    '0 0 ' + (glowSize * 2) + 'px #44dd99,' +
    '0 0 ' + (glowSize * 3.5) + 'px rgba(50,220,150,.3)';

  // Trail — follows smoothly with time offset
  const trailT = t - 0.5;
  const trailAngle = trailT * 0.4;
  const tn1x = (smoothNoise(trailT, 0.35) - 0.5) * 70;
  const tn1y = (smoothNoise(trailT + 50, 0.4) - 0.5) * 50;
  const tn2x = (smoothNoise(trailT, 1.1) - 0.5) * 25;
  const tn2y = (smoothNoise(trailT + 100, 1.0) - 0.5) * 20;
  const tx = cx + Math.cos(trailAngle) * radiusX + Math.sin(trailAngle * 0.5) * radiusX * 0.2 + tn1x + tn2x;
  const ty = cy + Math.sin(trailAngle * 1.3) * radiusY + tn1y + tn2y;
  const ctX = Math.max(10, Math.min(cw - 15, tx));
  const ctY = Math.max(10, Math.min(ch - 15, ty));
  pixieTrailEl.style.left = (ctX - 3) + 'px';
  pixieTrailEl.style.top = (ctY - 3) + 'px';
  pixieTrailEl.style.opacity = String(0.25 + Math.sin(t * 1.5 - 0.5) * 0.1);

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
      if (!dustParticles[i].active) { idx = i; break; }
    }
    if (idx < 0) {
      // Reuse oldest (lowest life)
      let minLife = Infinity;
      for (let i = 0; i < DUST_MAX; i++) {
        if (dustParticles[i].life < minLife) { minLife = dustParticles[i].life; idx = i; }
      }
    }
    if (idx < 0) return;

    const p = dustParticles[idx];
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

function updateDust(dt) {
  for (let i = 0; i < DUST_MAX; i++) {
    const p = dustParticles[i];
    if (!p.active) continue;

    p.life -= dt;
    if (p.life <= 0) {
      p.active = false;
      dustEls[i].style.opacity = '0';
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

    const el = dustEls[i];
    el.style.left = (p.x - p.size * 0.5) + 'px';
    el.style.top = (p.y - p.size * 0.5) + 'px';
    el.style.width = (p.size * lifeRatio) + 'px';
    el.style.height = (p.size * lifeRatio) + 'px';
    el.style.opacity = String(opacity);
    el.style.boxShadow = '0 0 ' + Math.round(p.size * lifeRatio * 2) + 'px rgba(100,255,200,' + (opacity * 0.5) + ')';
  }
}

// ================================================================
// Query — is the intro still controlling the camera?
// ================================================================
export function introActive() {
  return phase !== 'DONE' && phase !== 'TITLE';
}

export function introDone() {
  return phase === 'DONE';
}
