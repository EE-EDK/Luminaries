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
  // Glowing tree — realistic trunk with roots below and canopy above
  // Sits behind the title as a silhouette with bioluminescent glow
  // ================================================================
  treeEl = document.createElement('div');
  treeEl.style.cssText =
    'position:absolute;top:15%;left:50%;transform:translateX(-50%);pointer-events:none;' +
    'width:clamp(200px,30vw,360px);height:70%;opacity:0;';

  // Helper: build an SVG tree for realistic organic shapes
  const treeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  treeSvg.setAttribute('viewBox', '0 0 360 600');
  treeSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  treeSvg.style.cssText = 'width:100%;height:100%;overflow:visible;';

  // SVG defs — glow filter and gradients
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  // Trunk bark gradient
  const trunkGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  trunkGrad.setAttribute('id', 'trunkGrad');
  trunkGrad.setAttribute('x1', '0'); trunkGrad.setAttribute('y1', '0');
  trunkGrad.setAttribute('x2', '1'); trunkGrad.setAttribute('y2', '0');
  trunkGrad.innerHTML =
    '<stop offset="0%" stop-color="#1a0e08"/>' +
    '<stop offset="20%" stop-color="#2d1a10"/>' +
    '<stop offset="40%" stop-color="#3a2218"/>' +
    '<stop offset="55%" stop-color="#2d1a10"/>' +
    '<stop offset="70%" stop-color="#3a2218"/>' +
    '<stop offset="85%" stop-color="#2d1a10"/>' +
    '<stop offset="100%" stop-color="#1a0e08"/>';
  defs.appendChild(trunkGrad);

  // Canopy glow gradient
  const canopyGrad = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
  canopyGrad.setAttribute('id', 'canopyGrad');
  canopyGrad.innerHTML =
    '<stop offset="0%" stop-color="rgba(80,255,180,.15)"/>' +
    '<stop offset="40%" stop-color="rgba(50,200,130,.08)"/>' +
    '<stop offset="70%" stop-color="rgba(30,150,100,.04)"/>' +
    '<stop offset="100%" stop-color="transparent"/>';
  defs.appendChild(canopyGrad);

  // Glow filter for bioluminescence
  const glowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  glowFilter.setAttribute('id', 'treeGlow');
  glowFilter.setAttribute('x', '-50%'); glowFilter.setAttribute('y', '-50%');
  glowFilter.setAttribute('width', '200%'); glowFilter.setAttribute('height', '200%');
  glowFilter.innerHTML =
    '<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>' +
    '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>';
  defs.appendChild(glowFilter);

  treeSvg.appendChild(defs);

  // Canopy glow — large soft ellipse behind branches
  const canopyBg = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  canopyBg.setAttribute('cx', '180'); canopyBg.setAttribute('cy', '120');
  canopyBg.setAttribute('rx', '160'); canopyBg.setAttribute('ry', '110');
  canopyBg.setAttribute('fill', 'url(#canopyGrad)');
  canopyBg.setAttribute('class', 'canopy-glow');
  treeSvg.appendChild(canopyBg);

  // Canopy branches — organic curves spreading from trunk top
  const branchPaths = [
    // Major branches — thick, sweeping arcs
    'M180,240 C170,200 120,170 80,130 Q60,110 50,80',
    'M180,240 C190,200 240,170 280,130 Q300,110 310,80',
    'M180,240 C175,210 140,190 110,160 Q85,140 70,110',
    'M180,240 C185,210 220,190 250,160 Q275,140 290,110',
    // Mid branches
    'M180,250 C168,225 130,210 100,190 Q80,175 65,150',
    'M180,250 C192,225 230,210 260,190 Q280,175 295,150',
    // Upper reaching branches
    'M180,235 C178,205 160,180 140,140 Q125,110 115,70',
    'M180,235 C182,205 200,180 220,140 Q235,110 245,70',
    // Central crown
    'M180,230 C177,195 165,160 155,110 Q148,80 150,50',
    'M180,230 C183,195 195,160 205,110 Q212,80 210,50',
  ];
  for (let b = 0; b < branchPaths.length; b++) {
    const branch = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    branch.setAttribute('d', branchPaths[b]);
    branch.setAttribute('stroke', '#2d1a10');
    branch.setAttribute('stroke-width', b < 4 ? '4' : b < 6 ? '3' : '2');
    branch.setAttribute('fill', 'none');
    branch.setAttribute('stroke-linecap', 'round');
    branch.setAttribute('opacity', '0.7');
    treeSvg.appendChild(branch);
  }

  // Canopy leaf clusters — glowing ellipses at branch tips
  const leafClusters = [
    { cx: 50, cy: 75, rx: 35, ry: 25 },
    { cx: 310, cy: 75, rx: 35, ry: 25 },
    { cx: 70, cy: 105, rx: 30, ry: 22 },
    { cx: 290, cy: 105, rx: 30, ry: 22 },
    { cx: 65, cy: 145, rx: 28, ry: 20 },
    { cx: 295, cy: 145, rx: 28, ry: 20 },
    { cx: 115, cy: 65, rx: 32, ry: 24 },
    { cx: 245, cy: 65, rx: 32, ry: 24 },
    { cx: 150, cy: 45, rx: 28, ry: 22 },
    { cx: 210, cy: 45, rx: 28, ry: 22 },
    { cx: 180, cy: 35, rx: 25, ry: 20 },
    // Fill gaps in canopy
    { cx: 100, cy: 85, rx: 25, ry: 18 },
    { cx: 260, cy: 85, rx: 25, ry: 18 },
    { cx: 140, cy: 90, rx: 22, ry: 18 },
    { cx: 220, cy: 90, rx: 22, ry: 18 },
    { cx: 180, cy: 70, rx: 30, ry: 22 },
  ];
  for (let l = 0; l < leafClusters.length; l++) {
    const lc = leafClusters[l];
    const leaf = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    leaf.setAttribute('cx', String(lc.cx));
    leaf.setAttribute('cy', String(lc.cy));
    leaf.setAttribute('rx', String(lc.rx));
    leaf.setAttribute('ry', String(lc.ry));
    leaf.setAttribute('fill', 'rgba(20,60,35,.6)');
    leaf.setAttribute('filter', 'url(#treeGlow)');
    leaf.setAttribute('class', 'leaf-cluster');
    treeSvg.appendChild(leaf);
    // Inner glow center for each cluster
    const glowDot = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    glowDot.setAttribute('cx', String(lc.cx));
    glowDot.setAttribute('cy', String(lc.cy));
    glowDot.setAttribute('rx', String(Math.round(lc.rx * 0.5)));
    glowDot.setAttribute('ry', String(Math.round(lc.ry * 0.5)));
    glowDot.setAttribute('fill', 'rgba(60,220,130,.12)');
    glowDot.setAttribute('class', 'leaf-inner');
    treeSvg.appendChild(glowDot);
  }

  // Main trunk — thick tapered path
  const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  trunk.setAttribute('d',
    'M165,240 L160,320 C158,360 154,400 150,440 ' +
    'C148,460 146,480 144,500 L148,500 ' +
    'C152,480 155,460 157,440 C160,400 163,360 164,320 L168,260 ' +
    'L192,260 L196,320 C197,360 200,400 203,440 ' +
    'C205,460 208,480 212,500 L216,500 ' +
    'C212,480 208,460 206,440 C202,400 198,360 196,320 L195,240 Z'
  );
  trunk.setAttribute('fill', 'url(#trunkGrad)');
  trunk.setAttribute('opacity', '0.85');
  treeSvg.appendChild(trunk);

  // Bark texture lines on trunk
  const barkLines = [
    'M170,260 C169,300 167,350 166,400',
    'M175,250 C174,290 172,340 170,420',
    'M185,250 C186,290 188,340 190,420',
    'M190,260 C191,300 193,350 194,400',
  ];
  for (let bl = 0; bl < barkLines.length; bl++) {
    const bark = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    bark.setAttribute('d', barkLines[bl]);
    bark.setAttribute('stroke', '#1a0e06');
    bark.setAttribute('stroke-width', '0.8');
    bark.setAttribute('fill', 'none');
    bark.setAttribute('opacity', '0.4');
    treeSvg.appendChild(bark);
  }

  // Root system — spreading from trunk base
  const rootPaths = [
    // Major roots — thick, curving outward
    'M150,500 C140,510 110,520 70,530 Q40,535 20,540',
    'M216,500 C226,510 250,520 290,530 Q320,535 340,540',
    // Medium roots
    'M148,498 C138,512 115,525 85,535 Q60,542 40,548',
    'M214,498 C224,512 245,525 275,535 Q300,542 320,548',
    // Smaller roots
    'M152,502 C145,515 128,530 105,540 Q90,546 75,550',
    'M208,502 C215,515 232,530 255,540 Q270,546 285,550',
    // Thin tendrils
    'M155,504 C150,518 140,535 125,545 Q115,550 105,555',
    'M205,504 C210,518 220,535 235,545 Q245,550 255,555',
    // Central downward root
    'M170,500 C172,520 175,540 178,560',
    'M190,500 C188,520 185,540 182,560',
  ];
  for (let r = 0; r < rootPaths.length; r++) {
    const root = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    root.setAttribute('d', rootPaths[r]);
    root.setAttribute('stroke', r < 2 ? '#2d1a10' : r < 4 ? '#261510' : '#1f100c');
    root.setAttribute('stroke-width', r < 2 ? '5' : r < 4 ? '3.5' : r < 6 ? '2.5' : r < 8 ? '1.5' : '2');
    root.setAttribute('fill', 'none');
    root.setAttribute('stroke-linecap', 'round');
    root.setAttribute('opacity', r < 4 ? '0.7' : '0.5');
    treeSvg.appendChild(root);
  }

  // Bioluminescent veins on roots — faint glowing lines
  const glowVeins = [
    'M150,500 C138,512 112,524 78,532',
    'M216,500 C228,512 248,524 282,532',
    'M170,500 C172,518 174,536 177,555',
    'M190,500 C188,518 186,536 183,555',
  ];
  for (let v = 0; v < glowVeins.length; v++) {
    const vein = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    vein.setAttribute('d', glowVeins[v]);
    vein.setAttribute('stroke', 'rgba(80,220,140,.25)');
    vein.setAttribute('stroke-width', '1.5');
    vein.setAttribute('fill', 'none');
    vein.setAttribute('filter', 'url(#treeGlow)');
    vein.setAttribute('class', 'root-vein');
    treeSvg.appendChild(vein);
  }

  // Trunk bioluminescent patches — faint glowing areas on bark
  const trunkGlows = [
    { cx: 178, cy: 300, rx: 6, ry: 12 },
    { cx: 182, cy: 360, rx: 5, ry: 10 },
    { cx: 176, cy: 420, rx: 4, ry: 8 },
    { cx: 184, cy: 460, rx: 5, ry: 9 },
  ];
  for (let tg = 0; tg < trunkGlows.length; tg++) {
    const g = trunkGlows[tg];
    const glow = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    glow.setAttribute('cx', String(g.cx));
    glow.setAttribute('cy', String(g.cy));
    glow.setAttribute('rx', String(g.rx));
    glow.setAttribute('ry', String(g.ry));
    glow.setAttribute('fill', 'rgba(60,200,120,.1)');
    glow.setAttribute('filter', 'url(#treeGlow)');
    glow.setAttribute('class', 'trunk-glow');
    treeSvg.appendChild(glow);
  }

  treeEl.appendChild(treeSvg);
  container.appendChild(treeEl);

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
    animateTitleGlow(titleTime);
    animateTree(titleTime);
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
// Tree animation — pulsing bioluminescence on canopy and roots
// ================================================================
function animateTree(t) {
  if (!treeEl) return;
  const svg = treeEl.querySelector('svg');
  if (!svg) return;

  // Pulse canopy glow
  const canopyGlow = svg.querySelector('.canopy-glow');
  if (canopyGlow) {
    const cPulse = Math.sin(t * 0.6) * 0.5 + 0.5;
    canopyGlow.setAttribute('opacity', String(0.6 + cPulse * 0.4));
    canopyGlow.setAttribute('ry', String(110 + cPulse * 8));
  }

  // Pulse leaf cluster inner glows
  const leafInners = svg.querySelectorAll('.leaf-inner');
  for (let i = 0; i < leafInners.length; i++) {
    const phase = i * 0.7;
    const pulse = Math.sin(t * 0.9 + phase) * 0.5 + 0.5;
    leafInners[i].setAttribute('fill', 'rgba(60,220,130,' + (0.08 + pulse * 0.12) + ')');
  }

  // Pulse root veins
  const veins = svg.querySelectorAll('.root-vein');
  for (let i = 0; i < veins.length; i++) {
    const phase = i * 1.2;
    const pulse = Math.sin(t * 0.7 + phase) * 0.5 + 0.5;
    veins[i].setAttribute('stroke', 'rgba(80,220,140,' + (0.15 + pulse * 0.2) + ')');
  }

  // Pulse trunk bioluminescent patches
  const trunkGlows = svg.querySelectorAll('.trunk-glow');
  for (let i = 0; i < trunkGlows.length; i++) {
    const phase = i * 1.5 + 2.0;
    const pulse = Math.sin(t * 0.8 + phase) * 0.5 + 0.5;
    trunkGlows[i].setAttribute('fill', 'rgba(60,200,120,' + (0.06 + pulse * 0.1) + ')');
  }
}

// ================================================================
// Title glow — multi-layer breathing halo behind the title text
// ================================================================
function animateTitleGlow(t) {
  if (!titleGlowEl) return;
  // Slow breathing cycle — 4-second inhale/exhale
  const breath = Math.sin(t * 0.8) * 0.5 + 0.5; // 0→1
  const scale = 1.0 + breath * 0.3;  // 1.0→1.3 size pulse
  const opacity = 0.5 + breath * 0.5; // 0.5→1.0 brightness

  titleGlowEl.style.transform = 'translate(-50%,-50%) scale(' + scale + ')';
  titleGlowEl.style.opacity = String(opacity);

  // Also pulse the title's own drop-shadow filter for inner glow
  if (titleEl) {
    const innerGlow = 12 + breath * 12;
    const outerGlow = 30 + breath * 25;
    titleEl.style.filter =
      'drop-shadow(0 0 ' + innerGlow + 'px rgba(100,255,200,' + (0.35 + breath * 0.25) + '))' +
      ' drop-shadow(0 0 ' + outerGlow + 'px rgba(50,200,150,' + (0.1 + breath * 0.15) + '))';
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
// Digital tunnel — perspective corridor we're traveling through
// Wireframe grid receding to vanishing point with data pulses
// Represents navigating the interior of the Archive
// ================================================================
const TUNNEL_RINGS = 18;    // number of depth rings
const TUNNEL_SIDES = 8;     // octagonal cross-section
const TUNNEL_PULSES_MAX = 6;
let _tunnelPulses = [];     // data pulses traveling down the tunnel

function renderMatrix(t, dt) {
  if (!matrixCanvas || !matrixCtx) return;

  const cw = matrixCanvas.clientWidth;
  const ch = matrixCanvas.clientHeight;
  if (cw === 0 || ch === 0) return;

  if (matrixCanvas.width !== cw || matrixCanvas.height !== ch) {
    matrixCanvas.width = cw;
    matrixCanvas.height = ch;
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

  matrixCanvas.style.opacity = String(alpha);
  if (alpha < 0.001) return;

  const ctx = matrixCtx;
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

// ================================================================
// Query — is the intro still controlling the camera?
// ================================================================
export function introActive() {
  return phase !== 'DONE' && phase !== 'TITLE';
}

export function introDone() {
  return phase === 'DONE';
}
