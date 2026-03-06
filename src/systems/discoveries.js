// ================================================================
// Discovery Moments — First Encounter Rewards
// ================================================================
// Tracks first-time encounters with creature types, fairy rings,
// crystal chains, and ponds. Displays brief atmospheric text.
// Phase 2: Dual narrative (child / adult perspective).

const discovered = {
  deer: false,
  puffling: false,
  jelly: false,
  moth: false,
  fairyRing: false,
  crystalChain: false,
  pond: false
};

// Dual-narrative labels: child (wonder) / adult (archive)
let perspective = 'child'; // 'child' | 'adult'

const labels = {
  deer:         { child: 'A Glowing Deer!',         adult: 'Biological Metronome Detected' },
  puffling:     { child: 'A Little Puffling!',       adult: 'Micro-Fauna Cluster Identified' },
  jelly:        { child: 'A Floating Jelly!',        adult: 'Bioluminescent Drifter Catalogued' },
  moth:         { child: 'A Moon Moth!',             adult: 'Orbital Pollinator Registered' },
  fairyRing:    { child: 'A Circle of Mushrooms!',   adult: 'Mycelial Relay Node Mapped' },
  crystalChain: { child: 'The Crystals Are Singing!', adult: 'Resonance Cascade Initiated' },
  pond:         { child: 'A Hidden Pond!',           adult: 'Aquatic Biosensor Basin Located' }
};

// Per-orb narrative text — shown when each orb is collected
const orbLabels = {
  child: [
    'The First Little Sun-Seed!',
    'The Forest Remembers You',
    'Roots of Radiance',
    'The Light Grows Stronger',
    'All the Sun-Seeds Are Home!'
  ],
  adult: [
    'Zone 1 Recalibrated',
    'Chronophage Regression: 40%',
    'Deep Root Network Restored',
    'Temporal Coherence: 80%',
    'SYNCHRONIZATION INDEX: 5/5'
  ]
};

let discoveryEl = null;
let fadeTimer = 0;
let fadeText = '';

export function initDiscoveries() {
  discoveryEl = document.createElement('div');
  discoveryEl.id = 'discovery-text';
  discoveryEl.style.cssText =
    'position:fixed;top:28%;left:50%;transform:translateX(-50%);' +
    'font-family:Georgia,serif;font-size:22px;color:#ccffee;' +
    'text-shadow:0 0 12px #44ffaa,0 0 30px #228866;' +
    'pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;' +
    'letter-spacing:3px;text-transform:uppercase;';
  document.body.appendChild(discoveryEl);
}

function showDiscovery(key) {
  if (discovered[key]) return;
  discovered[key] = true;
  const labelSet = labels[key];
  fadeText = labelSet[perspective] || labelSet.child;
  fadeTimer = 5.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

export function showOrbDiscovery(orbIndex) {
  const textSet = orbLabels[perspective] || orbLabels.child;
  const text = textSet[orbIndex];
  if (!text) return;
  fadeText = text;
  fadeTimer = 6.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

// Show generic narrative text through the discovery overlay
export function showNarrativeText(text, duration) {
  fadeText = text;
  fadeTimer = duration || 5.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

// Toggle between child and adult narrative perspective
export function togglePerspective() {
  perspective = perspective === 'child' ? 'adult' : 'child';
  return perspective;
}

export function getPerspective() {
  return perspective;
}

export function checkDiscoveries(playerPos, deers, puffs, jellies, moths, fairyRings, ponds, crystalChainCount) {
  const px = playerPos.x, pz = playerPos.z;

  if (!discovered.deer) {
    for (let i = 0; i < deers.length; i++) {
      const dx = deers[i].group.position.x - px, dz = deers[i].group.position.z - pz;
      if (dx * dx + dz * dz < 144) { showDiscovery('deer'); break; }
    }
  }
  if (!discovered.puffling) {
    for (let i = 0; i < puffs.length; i++) {
      const dx = puffs[i].group.position.x - px, dz = puffs[i].group.position.z - pz;
      if (dx * dx + dz * dz < 64) { showDiscovery('puffling'); break; }
    }
  }
  if (!discovered.jelly) {
    for (let i = 0; i < jellies.length; i++) {
      const dx = jellies[i].group.position.x - px, dz = jellies[i].group.position.z - pz;
      if (dx * dx + dz * dz < 100) { showDiscovery('jelly'); break; }
    }
  }
  if (!discovered.moth) {
    for (let i = 0; i < moths.length; i++) {
      const dx = moths[i].group.position.x - px, dz = moths[i].group.position.z - pz;
      if (dx * dx + dz * dz < 64) { showDiscovery('moth'); break; }
    }
  }
  if (!discovered.fairyRing) {
    for (let i = 0; i < fairyRings.length; i++) {
      const dx = fairyRings[i].x - px, dz = fairyRings[i].z - pz;
      if (dx * dx + dz * dz < 16) { showDiscovery('fairyRing'); break; }
    }
  }
  if (!discovered.pond) {
    for (let i = 0; i < ponds.length; i++) {
      const dx = ponds[i].x - px, dz = ponds[i].z - pz;
      if (dx * dx + dz * dz < 25) { showDiscovery('pond'); break; }
    }
  }
  if (!discovered.crystalChain && crystalChainCount >= 3) {
    showDiscovery('crystalChain');
  }
}

// ================================================================
// Orb Listening — subtle feedback when orb detects player frequency
// ================================================================
let orbListenEl = null;
let orbListenTimer = 0;
let orbListenCooldown = 0;
const ORB_LISTEN_MESSAGES_CHILD = [
  'The orb hears you\u2026',
  'It\u2019s listening\u2026',
  'The light stirs\u2026 it knows your voice.',
  'Your hum reaches the gold\u2026',
  'The orb remembers this song.',
];
const ORB_LISTEN_MESSAGES_ADULT = [
  'Frequency lock detected.',
  'Resonance handshake initiated.',
  'Harmonic signature recognized.',
  'Audio bridge established.',
  'Synchronization in range.',
];

export function showOrbListening() {
  if (orbListenCooldown > 0) return;
  if (!orbListenEl) {
    orbListenEl = document.createElement('div');
    orbListenEl.id = 'orb-listen-text';
    orbListenEl.style.cssText =
      'position:fixed;top:55%;left:50%;transform:translateX(-50%);' +
      'font-family:Georgia,serif;font-size:14px;color:#ffeebb;font-style:italic;' +
      'text-shadow:0 0 12px #ddaa44,0 0 20px #886622;' +
      'pointer-events:none;opacity:0;transition:opacity 1.0s;z-index:100;' +
      'letter-spacing:2px;text-align:center;';
    document.body.appendChild(orbListenEl);
  }
  const pool = perspective === 'adult' ? ORB_LISTEN_MESSAGES_ADULT : ORB_LISTEN_MESSAGES_CHILD;
  orbListenEl.textContent = pool[Math.floor(Math.random() * pool.length)];
  orbListenEl.style.opacity = '1';
  orbListenTimer = 3.5;
  orbListenCooldown = 15; // don't spam — 15s between messages
}

// ================================================================
// Orb Rejection Hint — shown when approaching orb without frequency
// ================================================================
let hintEl = null;
let hintTimer = 0;
let orbRejectCount = 0;

export function showOrbRejectHint() {
  if (!hintEl) {
    hintEl = document.createElement('div');
    hintEl.id = 'orb-hint-text';
    hintEl.style.cssText =
      'position:fixed;top:60%;left:50%;transform:translateX(-50%);' +
      'font-family:Georgia,serif;font-size:16px;color:#ffddaa;font-style:italic;' +
      'text-shadow:0 0 10px #cc8844,0 0 25px #885522;' +
      'pointer-events:none;opacity:0;transition:opacity 0.8s;z-index:100;' +
      'letter-spacing:2px;text-align:center;max-width:400px;white-space:pre-line;';
    document.body.appendChild(hintEl);
  }
  orbRejectCount++;
  const hints = orbRejectCount <= 1
    ? { child: "Be still\u2026 listen to the music of the forest.",
        adult: "Frequency mismatch. Environmental audio synchronization required." }
    : { child: "The creatures hum with joy when you jump near them\u2026\nfind their frequency!",
        adult: "Kinetic resonance detected in micro-fauna. Attempt frequency acquisition via jumping." };
  hintEl.textContent = hints[perspective] || hints.child;
  hintEl.style.opacity = '1';
  hintTimer = 5.0;
}

// ================================================================
// Finale Narrative Text — overlay during COMPLETE/TRANSFORM phases
// ================================================================
let finaleEl = null;
let finaleTimer = 0;
let finaleShown = false;
let transformTextShown = false;

export function showFinaleText() {
  if (finaleShown) return;
  finaleShown = true;
  if (!finaleEl) {
    finaleEl = document.createElement('div');
    finaleEl.id = 'finale-text';
    finaleEl.style.cssText =
      'position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);' +
      'font-family:Georgia,serif;font-size:26px;color:#ffffee;' +
      'text-shadow:0 0 20px #ffddaa,0 0 40px #cc8844;' +
      'pointer-events:none;opacity:0;transition:opacity 1.5s;z-index:150;' +
      'letter-spacing:4px;text-align:center;max-width:600px;line-height:1.8;' +
      'white-space:pre-line;';
    document.body.appendChild(finaleEl);
  }
  const text = {
    child: 'All the Sun-Seeds are home.\nThe garden remembers your light.',
    adult: 'SYNCHRONIZATION INDEX: 5/5\nChronophage neutralized. Epoch preserved.'
  };
  finaleEl.textContent = text[perspective] || text.child;
  finaleEl.style.opacity = '1';
  finaleTimer = 8.0;
}

export function showTransformText() {
  if (transformTextShown) return;
  transformTextShown = true;
  if (!finaleEl) return;
  const text = {
    child: 'You did it, little Spark.\nThe garden will remember you.',
    adult: 'Time-lock engaged. The Archive will persist.\nYou have saved what mattered most \u2014 the rhythm.'
  };
  finaleEl.textContent = text[perspective] || text.child;
  finaleEl.style.opacity = '1';
  finaleTimer = 10.0;
}

// ================================================================
// Free Roam Discovery — one-time message after entering free roam
// ================================================================
let freeRoamShown = false;

export function showFreeRoamText() {
  if (freeRoamShown) return;
  freeRoamShown = true;
  const text = {
    child: 'The garden is yours now. Explore forever.',
    adult: 'Epoch preserved. Archive entering maintenance mode\u2026'
  };
  fadeText = text[perspective] || text.child;
  fadeTimer = 8.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

export function updateDiscoveryUI(dt) {
  if (fadeTimer > 0) {
    fadeTimer -= dt;
    if (fadeTimer <= 1.0 && discoveryEl) {
      discoveryEl.style.opacity = '0';
    }
  }
  if (hintTimer > 0) {
    hintTimer -= dt;
    if (hintTimer <= 1.0 && hintEl) {
      hintEl.style.opacity = '0';
    }
  }
  if (finaleTimer > 0) {
    finaleTimer -= dt;
    if (finaleTimer <= 2.0 && finaleEl) {
      finaleEl.style.opacity = '0';
    }
  }
  if (orbListenTimer > 0) {
    orbListenTimer -= dt;
    if (orbListenTimer <= 1.0 && orbListenEl) {
      orbListenEl.style.opacity = '0';
    }
  }
  if (orbListenCooldown > 0) orbListenCooldown -= dt;
}

// ================================================================
// Idle Hints — escalating helpful text after extended inactivity
// ================================================================
let idleHintIndex = 0;

const idleHints = {
  child: [
    'The forest is waiting\u2026 try walking around!',
    'Some creatures only come out when you move\u2026',
    'Jump near the little pufflings \u2014 they love it!',
    'The golden orbs need a special song to wake up\u2026',
    'Have you tried standing still near a jellyfish?',
    'Walk alongside the deer \u2014 match their pace!',
  ],
  adult: [
    'Movement data stagnant. Explore the environment.',
    'Biological signatures require proximity interaction.',
    'Micro-fauna respond to kinetic input. Try jumping.',
    'Orb activation requires frequency synchronization.',
    'Drifter resonance requires rhythmic spatial input.',
    'Cervid attunement requires parallel locomotion.',
  ]
};

export function checkIdleHints(idleTime) {
  // Reset hint progression when player moves
  if (idleTime < 300) { idleHintIndex = 0; return; }
  // Show a hint every 60 seconds after the 5-minute mark
  const timeSinceThreshold = idleTime - 300;
  const expectedHints = Math.floor(timeSinceThreshold / 60) + 1;
  if (expectedHints > idleHintIndex && idleHintIndex < idleHints.child.length) {
    const hints = idleHints[perspective] || idleHints.child;
    showNarrativeText(hints[idleHintIndex], 6.0);
    idleHintIndex++;
  }
}
