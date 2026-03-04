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

// Camera sweep parameters
const SWEEP_START_Y = 120;
const SWEEP_DURATION = 8.0;
const NARRATION_PER_CARD = 3.5; // seconds per text pair
const NARRATION_FADE = 0.6;     // fade in/out duration

// ================================================================
// Init — create DOM structure (called at startup)
// ================================================================
export function initIntro(completeFn) {
  onComplete = completeFn;

  // Container for all intro elements
  container = document.createElement('div');
  container.id = 'intro-cinematic';
  container.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;z-index:300;pointer-events:auto;';

  // Dark grey backdrop — visible immediately, covers the 3D scene
  blackScreen = document.createElement('div');
  blackScreen.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;background:#222;opacity:1;' +
    'transition:opacity 1.2s ease;';
  container.appendChild(blackScreen);

  // Title — single line, responsive size
  titleEl = document.createElement('div');
  titleEl.style.cssText =
    'position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:Georgia,serif;font-size:clamp(28px,5vw,48px);color:#aaffdd;letter-spacing:8px;' +
    'text-shadow:0 0 18px rgba(100,255,200,.5),0 0 36px rgba(50,200,150,.25),' +
    '0 0 60px rgba(50,200,150,.15);' +
    'text-align:center;opacity:1;transition:opacity 1s ease;white-space:nowrap;';
  titleEl.textContent = 'L U M I N A R I E S';
  container.appendChild(titleEl);

  titleSubEl = document.createElement('div');
  titleSubEl.style.cssText =
    'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:\'Courier New\',monospace;font-size:12px;color:#66ccaa;letter-spacing:2px;' +
    'text-align:center;opacity:0.6;transition:opacity 1s ease;';
  titleSubEl.textContent = 'click to begin';
  container.appendChild(titleSubEl);

  // Pixie sprite — small green glowing orb
  pixieEl = document.createElement('div');
  pixieEl.style.cssText =
    'position:absolute;width:10px;height:10px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,#aaffdd 0%,#44cc88 40%,transparent 70%);' +
    'box-shadow:0 0 8px #66ffaa,0 0 16px #33cc88,0 0 24px rgba(50,200,130,.3);' +
    'opacity:0.8;transition:opacity 1s ease;';
  container.appendChild(pixieEl);

  // Pixie trail — smaller, fainter, follows with delay
  pixieTrailEl = document.createElement('div');
  pixieTrailEl.style.cssText =
    'position:absolute;width:6px;height:6px;border-radius:50%;pointer-events:none;' +
    'background:radial-gradient(circle,#88eebb 0%,#33aa77 50%,transparent 70%);' +
    'box-shadow:0 0 6px #44cc88,0 0 12px rgba(50,200,130,.2);' +
    'opacity:0.4;transition:opacity 1s ease;';
  container.appendChild(pixieTrailEl);

  // Fantasy text layer (upper center, serif, luminous)
  fantasyEl = document.createElement('div');
  fantasyEl.style.cssText =
    'position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:Georgia,serif;font-size:24px;color:#ccffee;letter-spacing:3px;' +
    'text-shadow:0 0 14px rgba(100,255,200,.6),0 0 30px rgba(50,200,150,.3);' +
    'text-align:center;max-width:600px;line-height:1.6;opacity:0;' +
    'transition:opacity 0.6s ease;pointer-events:none;';
  container.appendChild(fantasyEl);

  // Terminal text layer (lower center, monospace, green)
  terminalEl = document.createElement('div');
  terminalEl.style.cssText =
    'position:absolute;top:62%;left:50%;transform:translate(-50%,-50%);' +
    'font-family:\'Courier New\',monospace;font-size:13px;color:#88aa66;letter-spacing:1px;' +
    'text-shadow:0 0 6px rgba(100,180,60,.4),0 0 15px rgba(60,120,30,.2);' +
    'text-align:center;max-width:650px;line-height:1.4;opacity:0;' +
    'transition:opacity 0.6s ease;pointer-events:none;';
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

  // Fade title + pixie out, black screen goes fully black for narration
  titleEl.style.opacity = '0';
  titleSubEl.style.opacity = '0';
  pixieEl.style.opacity = '0';
  pixieTrailEl.style.opacity = '0';
  blackScreen.style.background = '#000';

  // Allow input system through during cinematic
  container.style.pointerEvents = 'none';

  // Also register the click handler removal
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
    animatePixie(titleTime);
    return;
  }

  phaseTimer += dt;

  switch (phase) {
    case 'FADE_OUT': {
      // Wait for fade to complete (1.2s transition + 0.3s buffer)
      if (phaseTimer > 1.5) {
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

      // Fade logic for fantasy text
      if (cardTime < NARRATION_FADE) {
        fantasyEl.style.opacity = String(cardTime / NARRATION_FADE);
      } else if (cardTime > NARRATION_PER_CARD - NARRATION_FADE) {
        fantasyEl.style.opacity = String((NARRATION_PER_CARD - cardTime) / NARRATION_FADE);
      } else {
        fantasyEl.style.opacity = '1';
      }
      fantasyEl.textContent = card.fantasy;

      // Terminal typing effect
      const typingDelay = 0.3; // start typing after fantasy fades in
      const charsPerSec = 40;
      if (cardTime > typingDelay) {
        const elapsed = cardTime - typingDelay;
        narrationCharIndex = Math.min(
          Math.floor(elapsed * charsPerSec),
          card.terminal.length
        );
      }
      terminalEl.textContent = card.terminal.substring(0, narrationCharIndex);

      // Terminal fade matches fantasy
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
      // Hold "Attune..." for 3 seconds, then complete
      // Keep camera at ground level with slow rotation
      camera.position.set(0, EYE_H, 0);
      camera.rotation.order = 'YXZ';
      camera.rotation.x = 0;
      camera.rotation.y += dt * 0.06;

      if (phaseTimer > 3.0) {
        // Fade out attune text
        attuneEl.style.opacity = '0';
      }

      if (phaseTimer > 4.2) {
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
// Pixie animation — orbits around the title text
// ================================================================
function animatePixie(t) {
  if (!pixieEl || !container) return;

  const cx = container.clientWidth * 0.5;
  const cy = container.clientHeight * 0.42; // match titleEl top:42%
  const radiusX = Math.min(container.clientWidth * 0.28, 280);
  const radiusY = 30;

  // Main pixie — elliptical orbit with wobble
  const angle = t * 0.8;
  const wobbleX = Math.sin(t * 2.3) * 8;
  const wobbleY = Math.cos(t * 1.7) * 5;
  const px = cx + Math.cos(angle) * radiusX + wobbleX;
  const py = cy + Math.sin(angle * 1.1) * radiusY + wobbleY;
  pixieEl.style.left = px - 5 + 'px';
  pixieEl.style.top = py - 5 + 'px';
  pixieEl.style.opacity = String(0.7 + Math.sin(t * 3) * 0.3);

  // Trail — follows with time offset (~0.3s behind)
  const trailAngle = (t - 0.3) * 0.8;
  const trailWobbleX = Math.sin((t - 0.3) * 2.3) * 8;
  const trailWobbleY = Math.cos((t - 0.3) * 1.7) * 5;
  const tx = cx + Math.cos(trailAngle) * radiusX + trailWobbleX;
  const ty = cy + Math.sin(trailAngle * 1.1) * radiusY + trailWobbleY;
  pixieTrailEl.style.left = tx - 3 + 'px';
  pixieTrailEl.style.top = ty - 3 + 'px';
  pixieTrailEl.style.opacity = String(0.25 + Math.sin(t * 3 - 0.5) * 0.15);
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
