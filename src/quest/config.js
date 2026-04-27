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

// Required carried creature frequency per orb index (0-based).
// Orb 1 stays puff-friendly onboarding. Orb 5 accepts any carried frequency.
export const ORB_CREATURE_SEQUENCE = ['puff', 'jelly', 'deer', 'moth', 'any'];

// Shown by orb count (0–4): mood of what the next sleeper asks for—no species or recipe.
export const ORB_STAGE_HINTS = {
  child: [
    'Borrow a hum so small it almost isn’t yours—the first door likes thieves.',
    'The next spark wants a heartbeat you didn’t make—listen, be still, answer on the beat.',
    'Something shy in the underbrush sets the pace—walk beside it; never march ahead of it.',
    'Silver scribbles the high dark—keep one eye on their spiral while your feet keep moving.',
    'The last coal isn’t picky; bring whatever song still clings to your ribs.'
  ],
  adult: [
    'Next handshake favors a lightweight carrier—sample something teachable before you knock.',
    'Coupling improves under low motion; let an external cadence phase-lock you before transmit.',
    'Correlation rises when your trajectory mirrors a larger, skittish vector—match, don’t chase.',
    'Maintain optical lock on a fast, erratic emitter while your own frame translates—no dropped gaze.',
    'Final ignition accepts any authenticated payload you still hold—no further schema.'
  ]
};

// Dual-narrative labels for discoveries
export const DISCOVERY_LABELS = {
  deer:         { child: 'A Glowing Deer!',         adult: 'Biological Metronome Detected' },
  puffling:     { child: 'A Little Puffling!',       adult: 'Micro-Fauna Cluster Identified' },
  jelly:        { child: 'A Floating Jelly!',        adult: 'Bioluminescent Drifter Catalogued' },
  moth:         { child: 'A Moon Moth!',             adult: 'Orbital Pollinator Registered' },
  fairyRing:    { child: 'A Ring of Mushrooms… the Air Feels Lighter!', adult: 'Closed Mycelial Loop — Liminal g′ Patch Logged' },
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
