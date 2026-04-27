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
    fantasyLines: [
      'Once, this forest sang.'
    ],
    terminalLines: [
      '// BIOSENSOR ARRAY v4.2',
      '// Historical luminance baseline detected'
    ]
  },
  {
    fantasyLines: [
      'Every root hummed with light.',
      'Every canopy blazed.',
      'Then the glow began to dim.',
      'The songs grew quiet.',
      'Five anchors of light remain,',
      'buried beneath the dark.'
    ],
    terminalLines: [
      '// Bioluminescent network coverage: 100%',
      '// Symbiotic frequency: NOMINAL',
      '// WARNING: Sector luminance decay — 73% loss over 2,400 cycles',
      '// 5 restoration nodes offline — Awaiting frequency carrier activation'
    ]
  },
  {
    fantasyLines: [
      'The creatures still remember',
      'the old harmony.',
      'Listen to them.',
      'Move with them.',
      'Carry their voice to the light.'
    ],
    terminalLines: [
      '// Native fauna vocalizations contain encoded frequency patterns',
      '// PROTOCOL: Attune to carrier organisms',
      '// Transport frequency',
      '// Restore nodes'
    ]
  }
];

function formatFantasyLine(line) {
  return line.replace(/\bglow\b/gi, '<span style="color:#ffd6ff;text-shadow:0 0 8px rgba(255,120,220,.95),0 0 20px rgba(255,80,200,.7)">glow</span>');
}

// Must match the per-character loop in NARRATION (used to size each card after typing ends)
function charTypingInterval(text, ci, baseCharsPerSec) {
  let interval = 1.0 / baseCharsPerSec;
  const prevChar = ci > 0 ? text[ci - 1] : '';
  if (prevChar === '.' || prevChar === ':' || prevChar === '\u2014') {
    interval += 0.12;
  } else if (prevChar === ',' || prevChar === ';') {
    interval += 0.06;
  } else if (prevChar === ' ') {
    interval += 0.025;
  }
  return interval;
}

function estimateTypingDuration(text, baseCharsPerSec) {
  let t = 0;
  for (let ci = 0; ci < text.length; ci++) t += charTypingInterval(text, ci, baseCharsPerSec);
  return t;
}

// ================================================================
// State
// ================================================================
// Phases: TITLE → FADE_OUT → NARRATION → SWEEP → HANDOFF → DONE
let phase = 'TITLE';
let phaseTimer = 0;
let titleTime = 0; // accumulated time for pixie animation during TITLE
let narrationIndex = 0;
let narrationCharIndex = 0; // for terminal typing effect
/** Seconds elapsed in the current narration card (includes dark gap). */
let narrationCardTime = 0;
/** Invalidate fantasy innerHTML only when this differs from narrationIndex. */
let _narrationFantasyCardIndex = -1;
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
const NARRATION_FADE = 2.0; // fade in/out duration (fantasy + terminal)
/** Delay before terminal typing starts after card becomes visible. */
const NARRATION_TYPING_DELAY = 0.55;
/** Terminal typing speed (shared with estimateTypingDuration). */
const NARRATION_CHARS_PER_SEC = 22;
/** Minimum time after last typed character before card can end (read beat). */
const NARRATION_HOLD_AFTER_TYPING = 1.0;
/** Longer hold for 2nd / 3rd cards (more text — extra time to read). */
const NARRATION_HOLD_AFTER_TYPING_LONG = 4.25;
/** Minimum visible window so fantasy layer can fade in / hold / fade out. */
const NARRATION_MIN_VIS = 2 * NARRATION_FADE + 1.5;

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
    'position:absolute;top:34%;left:50%;transform:translate(-50%,-50%);' +
    'width:min(82vw,860px);' +
    'font-family:Georgia,serif;font-size:clamp(19px,2.45vw,31px);color:#d8fff1;letter-spacing:1.2px;' +
    'text-shadow:0 0 14px rgba(100,255,200,.6),0 0 30px rgba(50,200,150,.3);' +
    'text-align:center;line-height:1.5;opacity:0;' +
    'padding:16px 22px;border-radius:14px;' +
    'background:linear-gradient(180deg,rgba(20,42,36,0.48) 0%,rgba(9,24,20,0.38) 100%);' +
    'border:1px solid rgba(110,255,195,0.2);' +
    'box-shadow:0 8px 28px rgba(0,0,0,0.35), inset 0 0 24px rgba(90,255,200,0.08);' +
    'transition:opacity 1.2s ease;pointer-events:none;';
  container.appendChild(fantasyEl);

  // Terminal text layer (lower center, monospace, green)
  terminalEl = document.createElement('div');
  terminalEl.style.cssText =
    'position:absolute;top:60%;left:50%;transform:translate(-50%,-50%);' +
    'width:min(82vw,860px);' +
    'font-family:\'Courier New\',monospace;font-size:clamp(12px,1.25vw,14px);color:#9ccc85;letter-spacing:.6px;' +
    'text-shadow:0 0 6px rgba(100,180,60,.4),0 0 15px rgba(60,120,30,.2);' +
    'text-align:left;line-height:1.45;opacity:0;' +
    'padding:14px 18px;border-radius:12px;' +
    'background:linear-gradient(180deg,rgba(16,27,12,0.62) 0%,rgba(8,16,6,0.5) 100%);' +
    'border:1px solid rgba(136,204,102,0.24);' +
    'box-shadow:0 8px 22px rgba(0,0,0,0.34), inset 0 0 16px rgba(120,200,90,0.08);' +
    'white-space:pre-wrap;' +
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
        narrationCardTime = 0;
        _narrationFantasyCardIndex = -1;
      }
      break;
    }

    case 'NARRATION': {
      narrationCardTime += dt;

      const DARK_GAP = 1.5;
      const typingDelay = NARRATION_TYPING_DELAY;
      const card = NARRATION[narrationIndex];
      const terminalText = card.terminalLines.join('\n');
      const typingDurationFull = estimateTypingDuration(terminalText, NARRATION_CHARS_PER_SEC);
      const holdAfterTyping = narrationIndex >= 1
        ? NARRATION_HOLD_AFTER_TYPING_LONG
        : NARRATION_HOLD_AFTER_TYPING;
      const visDuration = Math.max(
        NARRATION_MIN_VIS,
        typingDelay + typingDurationFull + holdAfterTyping + NARRATION_FADE
      );
      const totalCardTime = DARK_GAP + visDuration;

      const cardTime = Math.min(narrationCardTime, totalCardTime);
      const visTime = cardTime - DARK_GAP;

      if (visTime < 0) {
        fantasyEl.style.opacity = '0';
        terminalEl.style.opacity = '0';
      } else {
        // Card 0: fixed comfortable split. Cards 2–3: top-anchored fantasy + terminal placed
        // below measured fantasy box so multi-line prose + growing // terminal never overlap.
        if (narrationIndex === 0) {
          fantasyEl.style.top = '34%';
          fantasyEl.style.transform = 'translate(-50%, -50%)';
          terminalEl.style.top = '60%';
          terminalEl.style.bottom = 'auto';
          terminalEl.style.left = '50%';
          terminalEl.style.transform = 'translate(-50%, -50%)';
          terminalEl.style.maxHeight = '';
          terminalEl.style.overflowY = '';
        } else {
          // Top-anchored fantasy — sit slightly lower so tall cards breathe; terminal gaps below from measured bottom.
          fantasyEl.style.top = 'clamp(20px, 6vh, 72px)';
          fantasyEl.style.transform = 'translate(-50%, 0)';
        }
        if (visTime < NARRATION_FADE) {
          fantasyEl.style.opacity = String(visTime / NARRATION_FADE);
        } else if (visTime > visDuration - NARRATION_FADE) {
          fantasyEl.style.opacity = String((visDuration - visTime) / NARRATION_FADE);
        } else {
          fantasyEl.style.opacity = '1';
        }
        if (narrationIndex !== _narrationFantasyCardIndex) {
          _narrationFantasyCardIndex = narrationIndex;
          fantasyEl.innerHTML = card.fantasyLines.map(formatFantasyLine).join('<br>');
        }

        if (visTime > typingDelay) {
          const elapsed = visTime - typingDelay;
          const text = terminalText;
          let charCount = 0;
          let cumTime = 0;
          for (let ci = 0; ci < text.length; ci++) {
            cumTime += charTypingInterval(text, ci, NARRATION_CHARS_PER_SEC);
            if (cumTime > elapsed) break;
            charCount = ci + 1;
          }
          narrationCharIndex = Math.min(charCount, text.length);
        }
        terminalEl.textContent = terminalText.substring(0, narrationCharIndex);

        if (narrationIndex >= 1) {
          const gap = Math.max(32, Math.min(56, window.innerHeight * 0.034));
          const typedBlockExtraDown = 36;
          const bottomPad = Math.max(16, window.innerHeight * 0.04);
          fantasyEl.offsetHeight;
          const fr = fantasyEl.getBoundingClientRect();
          const termTop = fr.bottom + gap + typedBlockExtraDown;
          const maxH = window.innerHeight - termTop - bottomPad;
          terminalEl.style.top = `${termTop}px`;
          terminalEl.style.bottom = 'auto';
          terminalEl.style.left = '50%';
          terminalEl.style.transform = 'translate(-50%, 0)';
          terminalEl.style.maxHeight = `${Math.max(96, maxH)}px`;
          terminalEl.style.overflowY = maxH < 200 ? 'auto' : 'visible';
        }

        const typingDelay2 = typingDelay;
        if (visTime < NARRATION_FADE + typingDelay2) {
          terminalEl.style.opacity = String(Math.min(1, (visTime - typingDelay2 * 0.5) / NARRATION_FADE));
        } else if (visTime > visDuration - NARRATION_FADE) {
          terminalEl.style.opacity = String((visDuration - visTime) / NARRATION_FADE);
        } else {
          terminalEl.style.opacity = '0.8';
        }
      }

      if (narrationCardTime >= totalCardTime) {
        narrationCardTime = 0;
        narrationCharIndex = 0;
        if (narrationIndex + 1 >= NARRATION.length) {
          phase = 'SWEEP';
          phaseTimer = 0;
          sweepProgress = 0;
          fantasyEl.style.opacity = '0';
          terminalEl.style.opacity = '0';
        } else {
          narrationIndex++;
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
