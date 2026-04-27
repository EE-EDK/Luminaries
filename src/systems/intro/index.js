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

import { EYE_H } from '../../constants.js';
import { buildTree, buildMushrooms, buildPufflings } from './elements.js';
import { initEffects, animateTitle, cleanupEffects } from './effects.js';

// ================================================================
// Narration pairs — fantasy layer + terminal layer
// ================================================================
const NARRATION = [
  {
    fantasy: 'The Archive woke before you did.',
    terminal: '// BOOT LOG v5.1 — Observer handshake accepted // Luminance memory stream online'
  },
  {
    fantasy: 'Once, every root carried dawn. Then a quiet fracture spread through the canopy. Five anchors still burn beneath the dark, waiting for a living frequency to find them.',
    terminal: '// Network integrity degraded: 73% // Anchor nodes online: 0/5 // Recovery path: restore field resonance via fauna-linked carrier'
  },
  {
    fantasy: 'The creatures remember what the trees forgot. Match their rhythm. Carry their chorus. Return their signal to the sleeping gold.',
    terminal: '// Fauna channels contain synchronized key frequencies // Protocol: attune -> carry -> uplink -> rekindle'
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
let matrixCanvas = null; // canvas for matrix/digital background effect
let matrixCtx = null;
let ambientGlowEl = null; // screen-wide glow that follows pixie
let titleGlowEl = null;  // breathing glow halo behind the title
let treeEl = null;       // glowing tree behind title
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
const NARRATION_PER_CARD = 14.0; // seconds per text pair — slow and dramatic
const NARRATION_FADE = 2.0;      // fade in/out duration

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
  // Digital tunnel — perspective corridor into the Archive
  // ================================================================
  matrixCanvas = document.createElement('canvas');
  matrixCanvas.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:none;' +
    'mix-blend-mode:screen;';
  container.appendChild(matrixCanvas);
  matrixCtx = matrixCanvas.getContext('2d');

  // Ambient glow — large soft radial that follows pixie position
  ambientGlowEl = document.createElement('div');
  ambientGlowEl.style.cssText =
    'position:absolute;width:400px;height:400px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,rgba(80,255,180,.06) 0%,rgba(50,220,150,.03) 30%,transparent 65%);' +
    'opacity:0;transition:opacity 2s ease;';
  container.appendChild(ambientGlowEl);

  // ================================================================
  // Glowing tree — built by elements.js
  // ================================================================
  treeEl = buildTree();
  container.appendChild(treeEl);

  // ================================================================
  // Decorative mushrooms — built by elements.js
  // ================================================================
  mushDecor = buildMushrooms(container);

  // ================================================================
  // Title glow halo — multi-layer breathing glow behind the title
  // ================================================================
  titleGlowEl = document.createElement('div');
  titleGlowEl.style.cssText =
    'position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);' +
    'width:clamp(400px,70vw,800px);height:clamp(80px,12vh,160px);border-radius:50%;' +
    'pointer-events:none;opacity:0;' +
    'background:radial-gradient(ellipse,' +
      'rgba(100,255,200,.12) 0%,' +
      'rgba(60,220,160,.06) 30%,' +
      'rgba(40,180,130,.03) 55%,' +
      'transparent 80%);';
  container.appendChild(titleGlowEl);

  // ================================================================
  // Title — clean serif with subtle glow
  // ================================================================
  titleEl = document.createElement('div');
  titleEl.style.cssText =
    'position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:Georgia,"Times New Roman",serif;font-size:clamp(28px,4.8vw,52px);' +
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
  // Two puffling elements — built by elements.js
  // ================================================================
  pufflingEls = buildPufflings(container);

  titleSubEl = document.createElement('div');
  titleSubEl.style.cssText =
    'position:absolute;top:51%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:\'Courier New\',monospace;font-size:12px;color:#66ccaa;letter-spacing:2px;' +
    'text-align:center;opacity:0;transition:opacity 1s ease;';
  titleSubEl.textContent = 'click to begin';
  container.appendChild(titleSubEl);

  // ================================================================
  // Pixie sprite — big luminous orb with screen-wide glow wash
  // ================================================================
  pixieEl = document.createElement('div');
  pixieEl.style.cssText =
    'position:absolute;width:18px;height:18px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,#eeffff 0%,#ccffee 15%,#66ddaa 35%,#33aa77 55%,transparent 75%);' +
    'box-shadow:0 0 15px #aaffdd,0 0 30px #66eebb,0 0 60px rgba(80,240,170,.4),' +
    '0 0 120px rgba(50,220,150,.2),0 0 200px rgba(50,200,130,.08);' +
    'opacity:0.9;transition:opacity 1s ease;';
  container.appendChild(pixieEl);

  // Pixie trail — medium glow that follows
  pixieTrailEl = document.createElement('div');
  pixieTrailEl.style.cssText =
    'position:absolute;width:10px;height:10px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,#aaeedd 0%,#44bb88 40%,transparent 70%);' +
    'box-shadow:0 0 10px #55cc99,0 0 25px rgba(60,210,140,.3),0 0 50px rgba(50,200,130,.12);' +
    'opacity:0.5;transition:opacity 1s ease;';
  container.appendChild(pixieTrailEl);

  // ================================================================
  // Pixie dust particle pool — pre-create DOM elements
  // ================================================================
  dustEls = [];
  dustParticles = [];
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

  // ================================================================
  // Hand DOM refs to effects module
  // ================================================================
  initEffects({
    pixieEl, pixieTrailEl, ambientGlowEl, titleEl, titleGlowEl,
    treeEl, mushDecor, pufflingEls, matrixCanvas, matrixCtx,
    container, dustEls, dustParticles
  });

  // Fade in title + decorations after a short delay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      titleEl.style.transition = 'opacity 2.5s ease';
      titleEl.style.opacity = '1';
      if (titleGlowEl) { titleGlowEl.style.transition = 'opacity 3s ease'; titleGlowEl.style.opacity = '1'; }
      titleSubEl.style.transition = 'opacity 2s ease 1s';
      titleSubEl.style.opacity = '0.6';
      for (let i = 0; i < pufflingEls.length; i++) pufflingEls[i].el.style.opacity = '1';
      if (ambientGlowEl) ambientGlowEl.style.opacity = '1';
      if (treeEl) { treeEl.style.transition = 'opacity 3.5s ease 0.3s'; treeEl.style.opacity = '0.8'; }
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
  if (titleGlowEl) titleGlowEl.style.opacity = '0';
  titleSubEl.style.opacity = '0';
  pixieEl.style.opacity = '0';
  pixieTrailEl.style.opacity = '0';
  for (let i = 0; i < pufflingEls.length; i++) pufflingEls[i].el.style.opacity = '0';
  for (let i = 0; i < mushDecor.length; i++) mushDecor[i].el.style.opacity = '0';
  if (treeEl) treeEl.style.opacity = '0';
  if (ambientGlowEl) ambientGlowEl.style.opacity = '0';
  if (matrixCanvas) matrixCanvas.style.opacity = '0';
  // Hide dust particles
  cleanupEffects();
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
// Update — called each frame from animate loop
// ================================================================
export function updateIntro(dt, camera) {
  if (phase === 'DONE') return;

  // Pixie animation during TITLE phase
  if (phase === 'TITLE') {
    titleTime += dt;
    animateTitle(titleTime, dt);
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
      // Each card: [dark gap 1.5s] [fade in 2.0s] [hold] [fade out 2.0s]
      // Total card time = NARRATION_PER_CARD (14s)
      const DARK_GAP = 1.5; // darkness between cards
      const cardTime = phaseTimer % NARRATION_PER_CARD;
      const cardIndex = Math.floor(phaseTimer / NARRATION_PER_CARD);

      if (cardIndex >= NARRATION.length) {
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

      // Effective time within the visible portion (after dark gap)
      const visTime = cardTime - DARK_GAP;
      const visDuration = NARRATION_PER_CARD - DARK_GAP;

      if (visTime < 0) {
        // In the dark gap — both texts invisible
        fantasyEl.style.opacity = '0';
        terminalEl.style.opacity = '0';
      } else {
        // Fantasy text — fade in, hold, fade out
        if (visTime < NARRATION_FADE) {
          fantasyEl.style.opacity = String(visTime / NARRATION_FADE);
        } else if (visTime > visDuration - NARRATION_FADE) {
          fantasyEl.style.opacity = String((visDuration - visTime) / NARRATION_FADE);
        } else {
          fantasyEl.style.opacity = '1';
        }
        fantasyEl.textContent = card.fantasy;

        // Terminal typing effect — slow, natural human typing cadence
        const typingDelay = 0.8;
        const baseCharsPerSec = 10; // slower base rate (~100ms per character)
        if (visTime > typingDelay) {
          const elapsed = visTime - typingDelay;
          // Simulate natural typing: bursts and pauses
          // Characters come in groups with tiny pauses between words
          let charCount = 0;
          let cumTime = 0;
          const text = card.terminal;
          for (let ci = 0; ci < text.length; ci++) {
            // Base interval per character
            let interval = 1.0 / baseCharsPerSec;
            // Longer pause after punctuation (period, comma, colon, dash)
            const prevChar = ci > 0 ? text[ci - 1] : '';
            if (prevChar === '.' || prevChar === ':' || prevChar === '\u2014') {
              interval += 0.18; // ~180ms pause after punctuation
            } else if (prevChar === ',' || prevChar === ';') {
              interval += 0.1;
            } else if (prevChar === ' ') {
              interval += 0.04; // slight pause between words
            }
            cumTime += interval;
            if (cumTime > elapsed) break;
            charCount = ci + 1;
          }
          narrationCharIndex = Math.min(charCount, text.length);
        }
        terminalEl.textContent = card.terminal.substring(0, narrationCharIndex);

        // Terminal fade matches fantasy with slight delay
        const typingDelay2 = 0.8;
        if (visTime < NARRATION_FADE + typingDelay2) {
          terminalEl.style.opacity = String(Math.min(1, (visTime - typingDelay2 * 0.5) / NARRATION_FADE));
        } else if (visTime > visDuration - NARRATION_FADE) {
          terminalEl.style.opacity = String((visDuration - visTime) / NARRATION_FADE);
        } else {
          terminalEl.style.opacity = '0.8';
        }
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
// Query — is the intro still controlling the camera?
// ================================================================
export function introActive() {
  return phase !== 'DONE' && phase !== 'TITLE';
}

export function introDone() {
  return phase === 'DONE';
}
