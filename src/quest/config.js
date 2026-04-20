// ================================================================
// Quest Configuration — Data-Driven Stages
// ================================================================

export const QuestPhases = {
  SEEK: 'SEEK',           // Finding the 5 orbs
  RISING: 'RISING',       // Obelisk rising from the moat
  COMPLETE: 'COMPLETE',   // Obelisk fully risen
  FINALE: 'FINALE',       // Creatures gathering
  TRANSFORM: 'TRANSFORM'  // World-wide bioluminescent bloom
};

export const QUEST_CONFIG = {
  ORBS_REQUIRED: 5,
  OBELISK_RISE_SPEED: 0.8, // From constants, but configurable here
  FINALE_DURATION: 15.0,
  TRANSFORM_DURATION: 10.0,
};

// Dual-narrative labels for discoveries
export const DISCOVERY_LABELS = {
  deer:         { child: 'A Glowing Deer!',         adult: 'Biological Metronome Detected' },
  puffling:     { child: 'A Little Puffling!',       adult: 'Micro-Fauna Cluster Identified' },
  jelly:        { child: 'A Floating Jelly!',        adult: 'Bioluminescent Drifter Catalogued' },
  moth:         { child: 'A Moon Moth!',             adult: 'Orbital Pollinator Registered' },
  fairyRing:    { child: 'A Circle of Mushrooms!',   adult: 'Mycelial Relay Node Mapped' },
  crystalChain: { child: 'The Crystals Are Singing!', adult: 'Resonance Cascade Initiated' },
  pond:         { child: 'A Hidden Pond!',           adult: 'Aquatic Biosensor Basin Located' },
  glyph:        { child: 'A Secret Message!',        adult: 'Encoded Surface Signal Deciphered' }
};

// Per-orb narrative text — shown when each orb is collected
export const ORB_NARRATIVE = {
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
