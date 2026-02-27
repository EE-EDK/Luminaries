// ================================================================
// Discovery Moments — First Encounter Rewards
// ================================================================
// Tracks first-time encounters with creature types, fairy rings,
// crystal chains, and ponds. Displays brief atmospheric text.

const discovered = {
  deer: false,
  puffling: false,
  jelly: false,
  moth: false,
  fairyRing: false,
  crystalChain: false,
  pond: false
};

const labels = {
  deer: 'Spirit Deer',
  puffling: 'Puffling',
  jelly: 'Luminous Jelly',
  moth: 'Moon Moth',
  fairyRing: 'Fairy Ring',
  crystalChain: 'Crystal Resonance',
  pond: 'Moonlit Pond'
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
  fadeText = labels[key];
  fadeTimer = 3.0;
  if (discoveryEl) {
    discoveryEl.textContent = fadeText;
    discoveryEl.style.opacity = '1';
  }
}

export function checkDiscoveries(playerPos, deers, puffs, jellies, moths, fairyRings, ponds, crystalChainCount) {
  const px = playerPos.x, pz = playerPos.z;

  // Creature proximity checks (within 12m)
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

export function updateDiscoveryUI(dt) {
  if (fadeTimer > 0) {
    fadeTimer -= dt;
    if (fadeTimer <= 0.6 && discoveryEl) {
      discoveryEl.style.opacity = '0';
    }
  }
}
