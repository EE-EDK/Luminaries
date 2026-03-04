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
let matrixCanvas = null; // canvas for matrix/digital background effect
let matrixCtx = null;
let ambientGlowEl = null; // screen-wide glow that follows pixie
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
  // Matrix / digital background — barely perceptible, cold, unsettling
  // Represents the adult "Chronobiological Archive" layer
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
  // Decorative glowing mushrooms — 3D miniatures of in-game mushrooms
  // Colors: cap #8833ee, glow #cc77ff, stem #2a1140
  // Structure: hemispherical cap, collar ring, gills, stem, volva bulb,
  //            white dots, dew drops, mycelium threads, ground glow
  // ================================================================
  const mushPositions = [
    { x: '7%',  y: '62%', scale: 1.1,  delay: 0,    lean: -4 },
    { x: '15%', y: '70%', scale: 0.55, delay: 0.5,  lean: 6 },
    { x: '22%', y: '64%', scale: 0.8,  delay: 0.2,  lean: -2 },
    { x: '78%', y: '63%', scale: 0.9,  delay: 0.15, lean: 3 },
    { x: '85%', y: '71%', scale: 0.5,  delay: 0.6,  lean: -5 },
    { x: '93%', y: '65%', scale: 0.75, delay: 0.3,  lean: 2 },
  ];
  for (let i = 0; i < mushPositions.length; i++) {
    const mp = mushPositions[i];
    const s = mp.scale;
    const mush = document.createElement('div');
    mush.style.cssText =
      'position:absolute;pointer-events:none;' +
      'left:' + mp.x + ';top:' + mp.y + ';' +
      'transform:translate(-50%,-100%) rotate(' + mp.lean + 'deg);' +
      'opacity:0;filter:drop-shadow(0 0 ' + Math.round(12 * s) + 'px rgba(136,51,238,.5))' +
      ' drop-shadow(0 0 ' + Math.round(25 * s) + 'px rgba(204,119,255,.25));';

    // Mushroom cap — hemispherical dome shape
    const capW = Math.round(48 * s);
    const capH = Math.round(28 * s);
    const cap = document.createElement('div');
    cap.style.cssText =
      'position:relative;width:' + capW + 'px;height:' + capH + 'px;' +
      'background:radial-gradient(ellipse at 45% 85%,' +
        '#aa55ff 0%,#8833ee 25%,#6622bb 50%,#441188 75%,#220055 100%);' +
      'border-radius:50% 50% 12% 12%;margin:0 auto;overflow:hidden;';
    mush.appendChild(cap);

    // Specular highlight on cap top
    const spec = document.createElement('div');
    spec.style.cssText =
      'position:absolute;top:8%;left:28%;width:44%;height:50%;' +
      'background:radial-gradient(ellipse at 50% 30%,' +
        'rgba(220,180,255,.45) 0%,rgba(170,100,255,.15) 40%,transparent 70%);' +
      'border-radius:50%;';
    cap.appendChild(spec);

    // Gill structure under cap — radial lines fanning from center
    const gillW = Math.round(capW * 0.8);
    const gillH = Math.round(capH * 0.3);
    const gills = document.createElement('div');
    gills.style.cssText =
      'position:absolute;bottom:0;left:50%;transform:translateX(-50%);' +
      'width:' + gillW + 'px;height:' + gillH + 'px;' +
      'background:repeating-conic-gradient(from 0deg at 50% 0%,' +
        'rgba(102,34,170,.5) 0deg,transparent 4deg,transparent 8deg);' +
      'border-radius:0 0 50% 50%;opacity:0.6;' +
      'mask-image:radial-gradient(ellipse at 50% 0%,black 40%,transparent 100%);' +
      '-webkit-mask-image:radial-gradient(ellipse at 50% 0%,black 40%,transparent 100%);';
    cap.appendChild(gills);

    // White dots on cap (like amanita spots)
    const dotCount = 2 + Math.round(s * 3);
    for (let d = 0; d < dotCount; d++) {
      const dot = document.createElement('div');
      const dotSz = Math.round(2.5 * s + 1.5);
      const dx = 18 + (d * 55 / dotCount) + Math.sin(d * 3.7 + i) * 12;
      const dy = 10 + Math.cos(d * 2.3 + i) * 22;
      dot.style.cssText =
        'position:absolute;width:' + dotSz + 'px;height:' + Math.round(dotSz * 0.7) + 'px;' +
        'border-radius:50%;background:rgba(255,255,255,.85);' +
        'box-shadow:0 0 ' + Math.round(dotSz) + 'px rgba(255,255,255,.4);' +
        'top:' + dy + '%;left:' + dx + '%;';
      cap.appendChild(dot);
    }

    // Collar ring where cap meets stem
    const collarW = Math.round(16 * s);
    const collar = document.createElement('div');
    collar.style.cssText =
      'width:' + collarW + 'px;height:' + Math.round(3 * s + 1) + 'px;margin:-1px auto 0;' +
      'background:linear-gradient(to bottom,#7744cc,#5522aa);' +
      'border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.3);';
    mush.appendChild(collar);

    // Stem — tapered cylinder with dimension
    const stemW = Math.round(10 * s);
    const stemH = Math.round(22 * s);
    const stem = document.createElement('div');
    stem.style.cssText =
      'position:relative;width:' + stemW + 'px;height:' + stemH + 'px;margin:0 auto;' +
      'background:linear-gradient(to right,' +
        '#1a0a30 0%,#2a1140 25%,#3a1855 50%,#2a1140 75%,#1a0a30 100%);' +
      'border-radius:2px 2px 4px 4px;' +
      'box-shadow:inset -2px 0 3px rgba(0,0,0,.3),inset 1px 0 2px rgba(100,50,180,.2);';
    mush.appendChild(stem);

    // Volva bulb at stem base
    const volvaW = Math.round(14 * s);
    const volvaH = Math.round(8 * s);
    const volva = document.createElement('div');
    volva.style.cssText =
      'width:' + volvaW + 'px;height:' + volvaH + 'px;margin:-2px auto 0;' +
      'background:radial-gradient(ellipse at 50% 30%,#3a1855,#2a1140,#1a0a30);' +
      'border-radius:50%;';
    mush.appendChild(volva);

    // Mycelium threads radiating from base
    for (let m = 0; m < 3; m++) {
      const thread = document.createElement('div');
      const tw = Math.round(18 * s + m * 6 * s);
      const angle = -30 + m * 30;
      thread.style.cssText =
        'position:absolute;bottom:' + Math.round(-2 * s) + 'px;' +
        'left:50%;transform:translateX(-50%) rotate(' + angle + 'deg);' +
        'width:' + tw + 'px;height:1px;' +
        'background:linear-gradient(to right,transparent,' +
          'rgba(68,34,170,.35) 30%,rgba(68,34,170,.35) 70%,transparent);';
      mush.appendChild(thread);
    }

    // Ground glow pool
    const glowPool = document.createElement('div');
    const poolW = Math.round(capW * 1.6);
    glowPool.style.cssText =
      'width:' + poolW + 'px;height:' + Math.round(poolW * 0.3) + 'px;' +
      'background:radial-gradient(ellipse,' +
        'rgba(136,51,238,.2) 0%,rgba(204,119,255,.08) 40%,transparent 70%);' +
      'margin:' + Math.round(-4 * s) + 'px auto 0;';
    mush.appendChild(glowPool);

    container.appendChild(mush);
    mushDecor.push({ el: mush, cap: cap, delay: mp.delay, phase: Math.random() * 6.28, s: s, capW: capW });
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
  // Two puffling elements — 3D miniatures as dots of each I
  // Colors: body #ffddcc, glow #ffaa88, eyes #222, cheeks #ff8899,
  //         belly #fff0e0, tail white, ears pink inside
  // Structure: round body, head, belly patch, ears, eyes w/ highlights,
  //            nose, cheeks, tiny feet w/ toe beans, fluffy tail, sparkles
  // ================================================================
  pufflingEls = [];
  for (let pi = 0; pi < 2; pi++) {
    const puff = document.createElement('div');
    // Total puffling height ~28px, width ~22px
    const w = 22, h = 28;
    puff.style.cssText =
      'position:absolute;pointer-events:none;opacity:0;transition:opacity 1.5s ease;' +
      'filter:drop-shadow(0 0 6px rgba(255,170,136,.6)) drop-shadow(0 0 14px rgba(255,170,136,.3));';

    let html = '<div style="position:relative;width:' + w + 'px;height:' + h + 'px;">';

    // Body — large round shape (lower portion)
    html += '<div style="position:absolute;left:1px;top:10px;width:20px;height:18px;border-radius:50%;' +
      'background:radial-gradient(ellipse at 40% 35%,#fff5e8 0%,#ffddcc 30%,#eebb99 65%,#cc9966 100%);' +
      'box-shadow:0 0 8px rgba(255,170,136,.4);"></div>';

    // Belly patch — lighter cream oval on front
    html += '<div style="position:absolute;left:5px;top:13px;width:12px;height:12px;border-radius:50%;' +
      'background:radial-gradient(ellipse,#fff5e8 0%,rgba(255,240,224,.5) 60%,transparent 100%);"></div>';

    // Head — slightly smaller sphere overlapping body top
    html += '<div style="position:absolute;left:3px;top:2px;width:16px;height:14px;border-radius:50%;' +
      'background:radial-gradient(ellipse at 42% 38%,#fff8f0 0%,#ffddcc 35%,#eebb99 70%,#cc9966 100%);' +
      'box-shadow:0 0 6px rgba(255,170,136,.3);"></div>';

    // Ears — two pointed ovals with pink insides
    html += '<div style="position:absolute;left:2px;top:-1px;width:5px;height:8px;' +
      'background:linear-gradient(to bottom,#eebb99,#ddaa88);' +
      'border-radius:50% 50% 30% 30%;transform:rotate(-12deg);"></div>';
    html += '<div style="position:absolute;left:3px;top:0px;width:3px;height:5px;' +
      'background:linear-gradient(to bottom,#ff8899,#ee7788);' +
      'border-radius:50% 50% 30% 30%;transform:rotate(-12deg);"></div>';
    html += '<div style="position:absolute;left:15px;top:-1px;width:5px;height:8px;' +
      'background:linear-gradient(to bottom,#eebb99,#ddaa88);' +
      'border-radius:50% 50% 30% 30%;transform:rotate(12deg);"></div>';
    html += '<div style="position:absolute;left:16px;top:0px;width:3px;height:5px;' +
      'background:linear-gradient(to bottom,#ff8899,#ee7788);' +
      'border-radius:50% 50% 30% 30%;transform:rotate(12deg);"></div>';

    // Eyes — dark with white catch-lights
    html += '<div style="position:absolute;left:6px;top:6px;width:3.5px;height:4px;border-radius:50%;' +
      'background:radial-gradient(circle at 40% 35%,#444,#222,#111);"></div>';
    html += '<div style="position:absolute;left:12px;top:6px;width:3.5px;height:4px;border-radius:50%;' +
      'background:radial-gradient(circle at 40% 35%,#444,#222,#111);"></div>';
    // Eye highlights
    html += '<div style="position:absolute;left:6.5px;top:6px;width:1.5px;height:1.5px;border-radius:50%;' +
      'background:white;"></div>';
    html += '<div style="position:absolute;left:12.5px;top:6px;width:1.5px;height:1.5px;border-radius:50%;' +
      'background:white;"></div>';

    // Cheeks — pink blush circles
    html += '<div style="position:absolute;left:3px;top:9px;width:4px;height:3px;border-radius:50%;' +
      'background:radial-gradient(ellipse,rgba(255,136,153,.6),transparent);"></div>';
    html += '<div style="position:absolute;left:15px;top:9px;width:4px;height:3px;border-radius:50%;' +
      'background:radial-gradient(ellipse,rgba(255,136,153,.6),transparent);"></div>';

    // Nose
    html += '<div style="position:absolute;left:10px;top:9.5px;width:2px;height:1.5px;border-radius:50%;' +
      'background:#553333;"></div>';

    // Feet — rounded with toe bean suggestion
    html += '<div style="position:absolute;left:4px;top:25px;width:5px;height:3px;' +
      'background:radial-gradient(ellipse at 50% 30%,#eebb99,#cc9966);' +
      'border-radius:50% 50% 40% 40%;"></div>';
    html += '<div style="position:absolute;left:13px;top:25px;width:5px;height:3px;' +
      'background:radial-gradient(ellipse at 50% 30%,#eebb99,#cc9966);' +
      'border-radius:50% 50% 40% 40%;"></div>';
    // Toe beans
    html += '<div style="position:absolute;left:5px;top:26px;width:1.5px;height:1px;border-radius:50%;' +
      'background:rgba(255,170,170,.6);"></div>';
    html += '<div style="position:absolute;left:7px;top:26px;width:1.5px;height:1px;border-radius:50%;' +
      'background:rgba(255,170,170,.6);"></div>';
    html += '<div style="position:absolute;left:14px;top:26px;width:1.5px;height:1px;border-radius:50%;' +
      'background:rgba(255,170,170,.6);"></div>';
    html += '<div style="position:absolute;left:16px;top:26px;width:1.5px;height:1px;border-radius:50%;' +
      'background:rgba(255,170,170,.6);"></div>';

    // Tail pom — bright white fluffy ball at back
    html += '<div style="position:absolute;left:0px;top:16px;width:5px;height:5px;border-radius:50%;' +
      'background:radial-gradient(circle at 45% 40%,white,#eeddcc);' +
      'box-shadow:0 0 4px rgba(255,170,136,.5);"></div>';

    html += '</div>';
    puff.innerHTML = html;
    container.appendChild(puff);
    pufflingEls.push({ el: puff, hopOffset: pi * 0.45, w: w, h: h });
  }

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
      if (ambientGlowEl) ambientGlowEl.style.opacity = '1';
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
  if (ambientGlowEl) ambientGlowEl.style.opacity = '0';
  if (matrixCanvas) matrixCanvas.style.opacity = '0';
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
    renderMatrix(titleTime, dt);
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
      // Each card: [dark gap 0.8s] [fade in 1.2s] [hold] [fade out 1.2s]
      // Total card time = NARRATION_PER_CARD (7s)
      const DARK_GAP = 0.8; // darkness between cards
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

        // Terminal typing effect
        const typingDelay = 0.5;
        const charsPerSec = 25;
        if (visTime > typingDelay) {
          const elapsed = visTime - typingDelay;
          narrationCharIndex = Math.min(
            Math.floor(elapsed * charsPerSec),
            card.terminal.length
          );
        }
        terminalEl.textContent = card.terminal.substring(0, narrationCharIndex);

        // Terminal fade matches fantasy with slight delay
        if (visTime < NARRATION_FADE + typingDelay) {
          terminalEl.style.opacity = String(Math.min(1, (visTime - typingDelay * 0.5) / NARRATION_FADE));
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
// Puffling animation — two 3D pufflings as the dots of both I's
// ================================================================
function animatePufflings(t) {
  if (!pufflingEls.length || !titleEl) return;

  const iCols = titleEl.querySelectorAll('[data-i-col]');
  if (iCols.length < 2) return;

  for (let pi = 0; pi < 2; pi++) {
    const pData = pufflingEls[pi];
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
// Mushroom glow animation — emissive cap pulse like in-game
// ================================================================
function animateMushrooms(t) {
  for (let i = 0; i < mushDecor.length; i++) {
    const m = mushDecor[i];
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
  if (!pixieEl || !container) return;

  const cw = container.clientWidth;
  const ch = container.clientHeight;
  const cx = cw * 0.5;
  const cy = ch * 0.48;

  // Smooth Lissajous arc position
  const pos = pixiePos(t);
  const px = cx + pos.nx * cw;
  const py = cy + pos.ny * ch;

  // Clamp to container with padding
  const clampedX = Math.max(20, Math.min(cw - 30, px));
  const clampedY = Math.max(20, Math.min(ch - 30, py));

  pixieEl.style.left = (clampedX - 9) + 'px';
  pixieEl.style.top = (clampedY - 9) + 'px';

  // Breathing glow — smooth intensity cycles
  const breath = 0.75 + Math.sin(t * 1.3) * 0.15 + Math.sin(t * 2.7) * 0.06;
  pixieEl.style.opacity = String(Math.max(0.6, Math.min(1, breath)));

  // Dynamic glow size — pulses gently
  const glowBase = 15 + Math.sin(t * 1.1) * 4;
  pixieEl.style.boxShadow =
    '0 0 ' + glowBase + 'px #aaffdd,' +
    '0 0 ' + (glowBase * 2) + 'px #66eebb,' +
    '0 0 ' + (glowBase * 4) + 'px rgba(80,240,170,.35),' +
    '0 0 ' + (glowBase * 8) + 'px rgba(50,220,150,.15),' +
    '0 0 ' + (glowBase * 14) + 'px rgba(50,200,130,.06)';

  // Trail — follows on the same arc with time offset
  const trailPos = pixiePos(t - 0.6);
  const trailX = Math.max(20, Math.min(cw - 25, cx + trailPos.nx * cw));
  const trailY = Math.max(20, Math.min(ch - 25, cy + trailPos.ny * ch));
  pixieTrailEl.style.left = (trailX - 5) + 'px';
  pixieTrailEl.style.top = (trailY - 5) + 'px';
  pixieTrailEl.style.opacity = String(0.3 + Math.sin(t * 1.3 - 0.5) * 0.1);

  // Ambient glow follows pixie — huge soft radial wash
  if (ambientGlowEl) {
    ambientGlowEl.style.left = (clampedX - 200) + 'px';
    ambientGlowEl.style.top = (clampedY - 200) + 'px';
    ambientGlowEl.style.opacity = String(0.5 + Math.sin(t * 0.9) * 0.3);
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
// Matrix / digital background — cold, broken archive effect
// Fades in every few seconds, barely perceptible
// ================================================================
const _matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/:;!?$%&#@|\\'.split('');
let _matrixColumns = [];
let _matrixPhase = 0; // cycles 0→1 for fade in/out

function renderMatrix(t, dt) {
  if (!matrixCanvas || !matrixCtx) return;

  const cw = matrixCanvas.clientWidth;
  const ch = matrixCanvas.clientHeight;
  if (cw === 0 || ch === 0) return;

  // Resize canvas to match container
  if (matrixCanvas.width !== cw || matrixCanvas.height !== ch) {
    matrixCanvas.width = cw;
    matrixCanvas.height = ch;
    // Reinitialize columns
    const colW = 14;
    const cols = Math.ceil(cw / colW);
    _matrixColumns = [];
    for (let c = 0; c < cols; c++) {
      _matrixColumns.push({
        x: c * colW,
        y: Math.random() * ch,
        speed: 30 + Math.random() * 80,
        chars: []
      });
    }
  }

  // Cycle: 6s period — fade in over 1.5s, hold 1s, fade out over 1.5s, dark 2s
  const cycle = t % 6.0;
  let alpha = 0;
  if (cycle < 1.5) {
    alpha = (cycle / 1.5) * 0.12; // fade in to max 0.12
  } else if (cycle < 2.5) {
    alpha = 0.12; // hold
  } else if (cycle < 4.0) {
    alpha = ((4.0 - cycle) / 1.5) * 0.12; // fade out
  }
  // 4.0-6.0: darkness (alpha stays 0)

  matrixCanvas.style.opacity = String(alpha);
  if (alpha < 0.001) return;

  const ctx = matrixCtx;
  // Dim previous frame — creates trail effect
  ctx.fillStyle = 'rgba(0,0,0,0.15)';
  ctx.fillRect(0, 0, cw, ch);

  ctx.font = '12px monospace';

  for (let c = 0; c < _matrixColumns.length; c++) {
    const col = _matrixColumns[c];
    col.y += col.speed * dt;
    if (col.y > ch + 40) {
      col.y = -20 - Math.random() * 100;
      col.speed = 30 + Math.random() * 80;
    }

    // Draw a few chars in this column trailing down
    const trailLen = 4 + Math.floor(Math.random() * 6);
    for (let r = 0; r < trailLen; r++) {
      const ry = col.y - r * 14;
      if (ry < -14 || ry > ch + 14) continue;
      const brightness = 1 - r / trailLen;
      const g = Math.floor(120 + brightness * 135);
      ctx.fillStyle = 'rgba(0,' + g + ',40,' + (brightness * 0.7) + ')';
      const ch2 = _matrixChars[Math.floor(Math.random() * _matrixChars.length)];
      ctx.fillText(ch2, col.x, ry);
    }
  }

  // Occasional horizontal scan line
  if (Math.random() < 0.03) {
    const sy = Math.random() * ch;
    ctx.fillStyle = 'rgba(0,180,60,0.08)';
    ctx.fillRect(0, sy, cw, 1);
  }

  // Rare glitch block
  if (Math.random() < 0.01) {
    const gx = Math.random() * cw;
    const gy = Math.random() * ch;
    const gw = 20 + Math.random() * 60;
    const gh = 5 + Math.random() * 15;
    ctx.fillStyle = 'rgba(0,150,50,0.06)';
    ctx.fillRect(gx, gy, gw, gh);
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
