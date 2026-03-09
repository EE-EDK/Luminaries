// ================================================================
// Intro Elements — Pure DOM construction for intro cinematic
// ================================================================
// Tree SVG, decorative mushrooms, puffling letter dots.
// Each function creates and returns DOM elements with no state.

// ================================================================
// Glowing tree — realistic trunk with roots below and canopy above
// ================================================================
export function buildTree() {
  const treeEl = document.createElement('div');
  treeEl.style.cssText =
    'position:absolute;top:-5%;left:50%;transform:translateX(-50%);pointer-events:none;' +
    'width:clamp(340px,55vw,700px);height:110%;opacity:0;';

  const treeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  treeSvg.setAttribute('viewBox', '0 0 500 1000');
  treeSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  treeSvg.style.cssText = 'width:100%;height:100%;overflow:visible;';

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

  // Trunk bark gradient
  const trunkGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  trunkGrad.setAttribute('id', 'trunkGrad');
  trunkGrad.setAttribute('x1', '0'); trunkGrad.setAttribute('y1', '0');
  trunkGrad.setAttribute('x2', '1'); trunkGrad.setAttribute('y2', '0');
  trunkGrad.innerHTML =
    '<stop offset="0%" stop-color="#1a0e08"/>' +
    '<stop offset="15%" stop-color="#2d1a10"/>' +
    '<stop offset="30%" stop-color="#3a2218"/>' +
    '<stop offset="45%" stop-color="#2d1a10"/>' +
    '<stop offset="55%" stop-color="#3a2218"/>' +
    '<stop offset="70%" stop-color="#2d1a10"/>' +
    '<stop offset="85%" stop-color="#3a2218"/>' +
    '<stop offset="100%" stop-color="#1a0e08"/>';
  defs.appendChild(trunkGrad);

  // Canopy glow gradient
  const canopyGrad = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
  canopyGrad.setAttribute('id', 'canopyGrad');
  canopyGrad.innerHTML =
    '<stop offset="0%" stop-color="rgba(80,255,180,.18)"/>' +
    '<stop offset="30%" stop-color="rgba(50,220,140,.10)"/>' +
    '<stop offset="60%" stop-color="rgba(30,150,100,.05)"/>' +
    '<stop offset="100%" stop-color="transparent"/>';
  defs.appendChild(canopyGrad);

  // Root glow gradient
  const rootGlowGrad = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
  rootGlowGrad.setAttribute('id', 'rootGlowGrad');
  rootGlowGrad.innerHTML =
    '<stop offset="0%" stop-color="rgba(60,200,140,.12)"/>' +
    '<stop offset="60%" stop-color="rgba(40,160,100,.05)"/>' +
    '<stop offset="100%" stop-color="transparent"/>';
  defs.appendChild(rootGlowGrad);

  // Glow filter for bioluminescence
  const glowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  glowFilter.setAttribute('id', 'treeGlow');
  glowFilter.setAttribute('x', '-50%'); glowFilter.setAttribute('y', '-50%');
  glowFilter.setAttribute('width', '200%'); glowFilter.setAttribute('height', '200%');
  glowFilter.innerHTML =
    '<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>' +
    '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>';
  defs.appendChild(glowFilter);

  // Stronger glow for leaf clusters
  const leafGlow = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  leafGlow.setAttribute('id', 'leafGlow');
  leafGlow.setAttribute('x', '-80%'); leafGlow.setAttribute('y', '-80%');
  leafGlow.setAttribute('width', '260%'); leafGlow.setAttribute('height', '260%');
  leafGlow.innerHTML =
    '<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b1"/>' +
    '<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b2"/>' +
    '<feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge>';
  defs.appendChild(leafGlow);

  treeSvg.appendChild(defs);

  // ---- CANOPY LAYER 1: Deep background glow ----
  const canopyBg = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  canopyBg.setAttribute('cx', '250'); canopyBg.setAttribute('cy', '180');
  canopyBg.setAttribute('rx', '230'); canopyBg.setAttribute('ry', '170');
  canopyBg.setAttribute('fill', 'url(#canopyGrad)');
  canopyBg.setAttribute('class', 'canopy-glow');
  treeSvg.appendChild(canopyBg);

  // ---- CANOPY LAYER 2: Back foliage ----
  const backLeafPaths = [
    'M80,190 C70,160 55,140 40,120 C30,100 45,70 80,55 C100,45 130,50 150,70 C140,90 100,110 95,140 Z',
    'M420,190 C430,160 445,140 460,120 C470,100 455,70 420,55 C400,45 370,50 350,70 C360,90 400,110 405,140 Z',
    'M130,120 C110,90 100,60 120,35 C140,15 175,10 200,30 C185,55 155,75 140,100 Z',
    'M370,120 C390,90 400,60 380,35 C360,15 325,10 300,30 C315,55 345,75 360,100 Z',
    'M200,80 C190,50 200,20 230,8 C260,0 285,10 290,40 C270,55 240,60 220,70 Z',
    'M300,80 C310,50 300,20 270,8 C240,0 215,10 210,40 C230,55 260,60 280,70 Z',
  ];
  const backFoliageG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  backFoliageG.setAttribute('class', 'back-foliage');
  backFoliageG.setAttribute('opacity', '0.5');
  for (let i = 0; i < backLeafPaths.length; i++) {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', backLeafPaths[i]);
    p.setAttribute('fill', 'rgba(12,45,25,.7)');
    p.setAttribute('filter', 'url(#leafGlow)');
    backFoliageG.appendChild(p);
  }
  treeSvg.appendChild(backFoliageG);

  // ---- BRANCHES ----
  const branchG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  branchG.setAttribute('class', 'branches');
  const branchPaths = [
    { d: 'M250,400 C240,350 180,300 120,240 Q80,200 50,160', w: 6 },
    { d: 'M250,400 C260,350 320,300 380,240 Q420,200 450,160', w: 6 },
    { d: 'M250,395 C245,355 200,320 155,270 Q115,235 85,190', w: 5 },
    { d: 'M250,395 C255,355 300,320 345,270 Q385,235 415,190', w: 5 },
    { d: 'M250,410 C235,370 175,340 130,300 Q95,275 70,240', w: 4 },
    { d: 'M250,410 C265,370 325,340 370,300 Q405,275 430,240', w: 4 },
    { d: 'M250,390 C248,340 225,280 195,200 Q175,150 160,90', w: 3 },
    { d: 'M250,390 C252,340 275,280 305,200 Q325,150 340,90', w: 3 },
    { d: 'M250,385 C247,320 235,250 220,160 Q210,100 215,40', w: 2.5 },
    { d: 'M250,385 C253,320 265,250 280,160 Q290,100 285,40', w: 2.5 },
    { d: 'M120,240 C105,220 80,195 55,175', w: 1.5 },
    { d: 'M380,240 C395,220 420,195 445,175', w: 1.5 },
    { d: 'M155,270 C135,250 110,230 90,210', w: 1.5 },
    { d: 'M345,270 C365,250 390,230 410,210', w: 1.5 },
    { d: 'M195,200 C175,175 155,145 140,115', w: 1.2 },
    { d: 'M305,200 C325,175 345,145 360,115', w: 1.2 },
  ];
  for (let b = 0; b < branchPaths.length; b++) {
    const branch = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    branch.setAttribute('d', branchPaths[b].d);
    branch.setAttribute('stroke', '#2d1a10');
    branch.setAttribute('stroke-width', String(branchPaths[b].w));
    branch.setAttribute('fill', 'none');
    branch.setAttribute('stroke-linecap', 'round');
    branch.setAttribute('opacity', '0.75');
    branchG.appendChild(branch);
  }
  treeSvg.appendChild(branchG);

  // ---- CANOPY LAYER 3: Front foliage ----
  const frontFoliageG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  frontFoliageG.setAttribute('class', 'front-foliage');
  const leafShapes = [
    { d: 'M35,165 C25,140 30,110 55,85 C65,75 80,65 100,60 C110,70 95,95 90,120 C85,145 65,160 50,170 Z', gx: 65, gy: 110 },
    { d: 'M60,230 C45,205 40,175 55,150 C70,130 95,120 110,135 C105,155 90,180 80,210 C75,225 68,235 60,240 Z', gx: 75, gy: 180 },
    { d: 'M100,95 C85,70 90,40 115,22 C135,10 160,15 170,35 C160,55 140,70 120,85 Z', gx: 130, gy: 55 },
    { d: 'M125,200 C105,175 100,145 120,120 C135,100 158,95 170,115 C165,140 150,170 140,190 Z', gx: 135, gy: 150 },
    { d: 'M465,165 C475,140 470,110 445,85 C435,75 420,65 400,60 C390,70 405,95 410,120 C415,145 435,160 450,170 Z', gx: 435, gy: 110 },
    { d: 'M440,230 C455,205 460,175 445,150 C430,130 405,120 390,135 C395,155 410,180 420,210 C425,225 432,235 440,240 Z', gx: 425, gy: 180 },
    { d: 'M400,95 C415,70 410,40 385,22 C365,10 340,15 330,35 C340,55 360,70 380,85 Z', gx: 370, gy: 55 },
    { d: 'M375,200 C395,175 400,145 380,120 C365,100 342,95 330,115 C335,140 350,170 360,190 Z', gx: 365, gy: 150 },
    { d: 'M200,55 C185,30 195,5 220,0 C245,-5 265,8 268,30 C255,45 235,55 215,55 Z', gx: 230, gy: 25 },
    { d: 'M300,55 C315,30 305,5 280,0 C255,-5 235,8 232,30 C245,45 265,55 285,55 Z', gx: 270, gy: 25 },
    { d: 'M230,85 C220,55 230,25 255,15 C275,8 295,18 300,40 C290,60 270,75 250,80 Z', gx: 260, gy: 50 },
    { d: 'M145,145 C130,120 138,95 160,80 C180,68 200,75 205,95 C195,115 175,135 160,145 Z', gx: 170, gy: 108 },
    { d: 'M355,145 C370,120 362,95 340,80 C320,68 300,75 295,95 C305,115 325,135 340,145 Z', gx: 330, gy: 108 },
    { d: 'M200,130 C190,100 205,70 235,60 C255,53 275,62 278,85 C270,105 245,125 220,130 Z', gx: 240, gy: 90 },
    { d: 'M300,130 C310,100 295,70 265,60 C245,53 225,62 222,85 C230,105 255,125 280,130 Z', gx: 260, gy: 90 },
  ];
  for (let s = 0; s < leafShapes.length; s++) {
    const shape = leafShapes[s];
    const leaf = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    leaf.setAttribute('d', shape.d);
    leaf.setAttribute('fill', 'rgba(15,50,30,.65)');
    leaf.setAttribute('filter', 'url(#leafGlow)');
    leaf.setAttribute('class', 'leaf-cluster');
    frontFoliageG.appendChild(leaf);
    const glowDot = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    glowDot.setAttribute('cx', String(shape.gx));
    glowDot.setAttribute('cy', String(shape.gy));
    glowDot.setAttribute('rx', '14');
    glowDot.setAttribute('ry', '10');
    glowDot.setAttribute('fill', 'rgba(60,220,130,.12)');
    glowDot.setAttribute('class', 'leaf-inner');
    frontFoliageG.appendChild(glowDot);
  }
  treeSvg.appendChild(frontFoliageG);

  // ---- TRUNK ----
  const trunk = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  trunk.setAttribute('d',
    'M225,400 C222,440 218,490 215,540 C212,580 208,610 205,640 ' +
    'L210,640 C214,610 218,580 220,540 C223,490 226,440 228,410 ' +
    'L272,410 C274,440 277,490 280,540 C282,580 286,610 290,640 ' +
    'L295,640 C292,610 288,580 285,540 C282,490 278,440 275,400 Z'
  );
  trunk.setAttribute('fill', 'url(#trunkGrad)');
  trunk.setAttribute('opacity', '0.85');
  treeSvg.appendChild(trunk);

  // Bark texture
  const barkLines = [
    'M235,420 C234,470 232,530 230,590',
    'M242,410 C241,460 239,520 237,600',
    'M258,410 C259,460 261,520 263,600',
    'M265,420 C266,470 268,530 270,590',
    'M250,405 C250,460 250,520 250,600',
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

  // Knots
  const knots = [
    { cx: 240, cy: 470, rx: 6, ry: 4 },
    { cx: 260, cy: 520, rx: 5, ry: 3 },
    { cx: 245, cy: 570, rx: 4, ry: 3 },
  ];
  for (let k = 0; k < knots.length; k++) {
    const kn = knots[k];
    const knot = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    knot.setAttribute('cx', String(kn.cx)); knot.setAttribute('cy', String(kn.cy));
    knot.setAttribute('rx', String(kn.rx)); knot.setAttribute('ry', String(kn.ry));
    knot.setAttribute('fill', '#1a0e06');
    knot.setAttribute('opacity', '0.5');
    treeSvg.appendChild(knot);
  }

  // ---- ROOT SYSTEM ----
  const rootG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  rootG.setAttribute('class', 'roots');
  const rootPaths = [
    { d: 'M210,640 C195,660 155,690 100,720 Q55,745 10,760', w: 7, o: 0.75 },
    { d: 'M290,640 C305,660 345,690 400,720 Q445,745 490,760', w: 7, o: 0.75 },
    { d: 'M208,645 C190,670 145,705 90,740 Q50,760 15,780', w: 5, o: 0.65 },
    { d: 'M292,645 C310,670 355,705 410,740 Q450,760 485,780', w: 5, o: 0.65 },
    { d: 'M215,648 C200,675 165,710 125,745 Q100,765 75,785', w: 4, o: 0.55 },
    { d: 'M285,648 C300,675 335,710 375,745 Q400,765 425,785', w: 4, o: 0.55 },
    { d: 'M220,650 C210,680 185,720 160,760 Q145,780 130,800', w: 2.5, o: 0.45 },
    { d: 'M280,650 C290,680 315,720 340,760 Q355,780 370,800', w: 2.5, o: 0.45 },
    { d: 'M205,642 C185,665 130,700 75,730 Q40,748 5,760', w: 2, o: 0.4 },
    { d: 'M295,642 C315,665 370,700 425,730 Q460,748 495,760', w: 2, o: 0.4 },
    { d: 'M240,640 C242,680 245,730 248,800 Q249,850 250,900', w: 3.5, o: 0.5 },
    { d: 'M260,640 C258,680 255,730 252,800 Q251,850 250,900', w: 3.5, o: 0.5 },
    { d: 'M100,720 C85,735 60,750 35,770', w: 1.2, o: 0.35 },
    { d: 'M400,720 C415,735 440,750 465,770', w: 1.2, o: 0.35 },
    { d: 'M125,745 C110,760 90,780 70,800', w: 1, o: 0.3 },
    { d: 'M375,745 C390,760 410,780 430,800', w: 1, o: 0.3 },
  ];
  for (let r = 0; r < rootPaths.length; r++) {
    const rp = rootPaths[r];
    const root = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    root.setAttribute('d', rp.d);
    root.setAttribute('stroke', r < 4 ? '#2d1a10' : '#1f110c');
    root.setAttribute('stroke-width', String(rp.w));
    root.setAttribute('fill', 'none');
    root.setAttribute('stroke-linecap', 'round');
    root.setAttribute('opacity', String(rp.o));
    rootG.appendChild(root);
  }
  treeSvg.appendChild(rootG);

  // Root glow
  const rootBg = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  rootBg.setAttribute('cx', '250'); rootBg.setAttribute('cy', '700');
  rootBg.setAttribute('rx', '200'); rootBg.setAttribute('ry', '100');
  rootBg.setAttribute('fill', 'url(#rootGlowGrad)');
  rootBg.setAttribute('class', 'root-glow-bg');
  treeSvg.appendChild(rootBg);

  // Bioluminescent veins on roots
  const glowVeins = [
    'M210,640 C192,665 148,698 95,725',
    'M290,640 C308,665 352,698 405,725',
    'M240,640 C242,685 246,740 249,820',
    'M260,640 C258,685 254,740 251,820',
    'M215,648 C198,678 162,715 120,750',
    'M285,648 C302,678 338,715 380,750',
  ];
  for (let v = 0; v < glowVeins.length; v++) {
    const vein = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    vein.setAttribute('d', glowVeins[v]);
    vein.setAttribute('stroke', 'rgba(80,220,140,.25)');
    vein.setAttribute('stroke-width', '2');
    vein.setAttribute('fill', 'none');
    vein.setAttribute('filter', 'url(#treeGlow)');
    vein.setAttribute('class', 'root-vein');
    treeSvg.appendChild(vein);
  }

  // Trunk bioluminescent patches
  const trunkGlowData = [
    { cx: 245, cy: 450, rx: 7, ry: 14 },
    { cx: 255, cy: 510, rx: 6, ry: 12 },
    { cx: 242, cy: 570, rx: 5, ry: 10 },
    { cx: 258, cy: 610, rx: 6, ry: 11 },
    { cx: 250, cy: 480, rx: 4, ry: 8 },
    { cx: 248, cy: 550, rx: 5, ry: 9 },
  ];
  for (let tg = 0; tg < trunkGlowData.length; tg++) {
    const g = trunkGlowData[tg];
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
  return treeEl;
}

// ================================================================
// Decorative mushrooms — 3D miniatures with glow
// ================================================================
export function buildMushrooms(container) {
  const mushDecor = [];
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

    // Cap
    const capW = Math.round(48 * s);
    const capH = Math.round(28 * s);
    const cap = document.createElement('div');
    cap.style.cssText =
      'position:relative;width:' + capW + 'px;height:' + capH + 'px;' +
      'background:radial-gradient(ellipse at 45% 85%,' +
        '#aa55ff 0%,#8833ee 25%,#6622bb 50%,#441188 75%,#220055 100%);' +
      'border-radius:50% 50% 12% 12%;margin:0 auto;overflow:hidden;';
    mush.appendChild(cap);

    // Specular highlight
    const spec = document.createElement('div');
    spec.style.cssText =
      'position:absolute;top:8%;left:28%;width:44%;height:50%;' +
      'background:radial-gradient(ellipse at 50% 30%,' +
        'rgba(220,180,255,.45) 0%,rgba(170,100,255,.15) 40%,transparent 70%);' +
      'border-radius:50%;';
    cap.appendChild(spec);

    // Gills
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

    // White dots
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

    // Collar
    const collarW = Math.round(16 * s);
    const collar = document.createElement('div');
    collar.style.cssText =
      'width:' + collarW + 'px;height:' + Math.round(3 * s + 1) + 'px;margin:-1px auto 0;' +
      'background:linear-gradient(to bottom,#7744cc,#5522aa);' +
      'border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.3);';
    mush.appendChild(collar);

    // Stem
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

    // Volva
    const volvaW = Math.round(14 * s);
    const volvaH = Math.round(8 * s);
    const volva = document.createElement('div');
    volva.style.cssText =
      'width:' + volvaW + 'px;height:' + volvaH + 'px;margin:-2px auto 0;' +
      'background:radial-gradient(ellipse at 50% 30%,#3a1855,#2a1140,#1a0a30);' +
      'border-radius:50%;';
    mush.appendChild(volva);

    // Mycelium threads
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

    // Ground glow
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
  return mushDecor;
}

// ================================================================
// Puffling dots — 3D miniatures as the dots of each I in LUMINARIES
// ================================================================
export function buildPufflings(container) {
  const pufflingEls = [];
  for (let pi = 0; pi < 2; pi++) {
    const puff = document.createElement('div');
    const w = 22, h = 28;
    puff.style.cssText =
      'position:absolute;pointer-events:none;opacity:0;transition:opacity 1.5s ease;' +
      'filter:drop-shadow(0 0 6px rgba(255,170,136,.6)) drop-shadow(0 0 14px rgba(255,170,136,.3));';

    let html = '<div style="position:relative;width:' + w + 'px;height:' + h + 'px;">';

    // Body
    html += '<div style="position:absolute;left:1px;top:10px;width:20px;height:18px;border-radius:50%;' +
      'background:radial-gradient(ellipse at 40% 35%,#fff5e8 0%,#ffddcc 30%,#eebb99 65%,#cc9966 100%);' +
      'box-shadow:0 0 8px rgba(255,170,136,.4);"></div>';

    // Belly
    html += '<div style="position:absolute;left:5px;top:13px;width:12px;height:12px;border-radius:50%;' +
      'background:radial-gradient(ellipse,#fff5e8 0%,rgba(255,240,224,.5) 60%,transparent 100%);"></div>';

    // Head
    html += '<div style="position:absolute;left:3px;top:2px;width:16px;height:14px;border-radius:50%;' +
      'background:radial-gradient(ellipse at 42% 38%,#fff8f0 0%,#ffddcc 35%,#eebb99 70%,#cc9966 100%);' +
      'box-shadow:0 0 6px rgba(255,170,136,.3);"></div>';

    // Ears
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

    // Eyes
    html += '<div style="position:absolute;left:6px;top:6px;width:3.5px;height:4px;border-radius:50%;' +
      'background:radial-gradient(circle at 40% 35%,#444,#222,#111);"></div>';
    html += '<div style="position:absolute;left:12px;top:6px;width:3.5px;height:4px;border-radius:50%;' +
      'background:radial-gradient(circle at 40% 35%,#444,#222,#111);"></div>';
    // Eye highlights
    html += '<div style="position:absolute;left:6.5px;top:6px;width:1.5px;height:1.5px;border-radius:50%;' +
      'background:white;"></div>';
    html += '<div style="position:absolute;left:12.5px;top:6px;width:1.5px;height:1.5px;border-radius:50%;' +
      'background:white;"></div>';

    // Cheeks
    html += '<div style="position:absolute;left:3px;top:9px;width:4px;height:3px;border-radius:50%;' +
      'background:radial-gradient(ellipse,rgba(255,136,153,.6),transparent);"></div>';
    html += '<div style="position:absolute;left:15px;top:9px;width:4px;height:3px;border-radius:50%;' +
      'background:radial-gradient(ellipse,rgba(255,136,153,.6),transparent);"></div>';

    // Nose
    html += '<div style="position:absolute;left:10px;top:9.5px;width:2px;height:1.5px;border-radius:50%;' +
      'background:#553333;"></div>';

    // Feet
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

    // Tail pom
    html += '<div style="position:absolute;left:0px;top:16px;width:5px;height:5px;border-radius:50%;' +
      'background:radial-gradient(circle at 45% 40%,white,#eeddcc);' +
      'box-shadow:0 0 4px rgba(255,170,136,.5);"></div>';

    html += '</div>';
    puff.innerHTML = html;
    container.appendChild(puff);
    pufflingEls.push({ el: puff, hopOffset: pi * 0.45, w: w, h: h });
  }
  return pufflingEls;
}
