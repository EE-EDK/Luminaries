// DRAFT — owner voice pass pending
// ================================================================
// Lines — the words the game says that are not a label or a hint
// ================================================================
// Everything here is a {child, adult} pair, because every line in this game
// is. The child half is the original data: a drawing, a hopper, a lamp left
// on. The adult half is the maintenance routine reading the same thing back
// as a log. Neither is a translation of the other; they are two readings of
// one fact, and after the wizard lifts the veil the player gets both.
//
// Story terms go through {t:…} tokens (glossary.js) and control names through
// {hum}-style tokens (controls.js), never typed. That is how "the Architect"
// stays "the one who made the garden" to a child without anybody having to
// remember to say so in a sixth file.
//
// This file exists so there is one place for the owner to read every new line
// aloud, in order, and change the ones that do not sound like this world. The
// header flag stays until that pass has happened. The tests in
// narrative/__tests__/lines.test.js hold the shape (both voices, non-empty,
// different) so a pass can rewrite any sentence without breaking anything but
// the sentence.
//
// The puffling chatter pools live here too, moved whole from pufflingChat.js:
// the audit pairs a table's halves by position within one file, so the old
// pools and the new pre/post-reveal ones have to share a file or the
// "missing half" check cannot see them together. One table, one place.

// ----------------------------------------------------------------
// The wizard
// ----------------------------------------------------------------
// The wizard is a puffling who remembers the one who made the garden — "He
// said you would" — and, read the other way, a maintenance process that has
// outlived its schedule and has just found the routine it was waiting for.
// Neither reading is told to the player: one line each, at the five beats.
export const WIZARD = {
  approach: { child: 'A wizard approaches?', adult: 'Unscheduled process approaching — identity unverified.' },
  deadSoul: { child: 'You came back. He said you would.', adult: 'Diagnostic routine detected. My cycle should have ended.' },
  humPrompt: { child: 'Hum to answer it… ({hum})', adult: 'Handshake pending — respond in kind ({hum})' },
  proclaim: { child: 'NOW you see BOTH worlds at once!', adult: 'Overlay engaged: original data and maintenance view, concurrent.' },
  // A scream is not a sentence, so the child half is the scream itself and
  // the adult half is what a process says when it is finally told to halt.
  scream: { child: 'AhhhhHHHH!', adult: 'Halt received. Cycle… finally… complete.' },
};

// ----------------------------------------------------------------
// The title screen
// ----------------------------------------------------------------
// {begin} is "click" on a desktop and "tap" on a phone, in both voices.
export const INTRO_PROMPTS = {
  begin: { child: '{begin} to begin', adult: '{begin} to initialize' },
  beginNew: { child: '{begin} to begin a new forest', adult: '{begin} to initialize a new archive' },
};

// ----------------------------------------------------------------
// The hum far-field hint
// ----------------------------------------------------------------
// Shown while the pitch is inside a creature's band and that creature is out
// of range. {creature} becomes a glossary token and {dist} the rounded range
// in metres, so each register names the species its own way.
export const FAR_FIELD_HINT = {
  child: 'Pitch matches {creature} — move closer (~{dist}m)',
  adult: 'Band match: {creature} — range ~{dist}m, close to lock',
};

/**
 * @brief The far-field hint for one creature at one range, as a pair.
 *
 * Built only when the creature type or the rounded range changes: the caller
 * sits in a per-frame update, and a fresh string every frame is garbage the
 * collector then has to chase.
 * @param {string} type a glossary creature key ('deer', 'moth', 'jelly', 'puff')
 * @param {number} dist range in metres, already rounded
 * @return {{child:string, adult:string}} tokens still in place, for speak()
 */
export function farFieldPair(type, dist) {
  const token = `{t:${type}}`;
  const fill = (s) => s.replace('{creature}', token).replace('{dist}', String(dist));
  return { child: fill(FAR_FIELD_HINT.child), adult: fill(FAR_FIELD_HINT.adult) };
}

// ----------------------------------------------------------------
// Shooting-star wishes
// ----------------------------------------------------------------
// One per sync level. The adult halves are the archive's own fragments, and
// carry the label the story bible gives them: a wish is a thing the child
// says, a fragment is a thing the routine recovers.
export const WISHES = [
  { child: 'Make a wish!', adult: 'Archival fragment: …system boot sequence, cycle 1.' },
  { child: 'The stars are listening…', adult: 'Fragment: …I built this place for her…' },
  { child: 'Someone drew pictures in the sky.', adult: 'Fragment: …oscillations matched her heartbeat…' },
  { child: 'I wonder who lived here before.', adult: 'Fragment: …I hope she remembers the fireflies.' },
  { child: 'The stars feel closer tonight.', adult: 'Fragment: …time cannot take what has been loved…' },
];

// ----------------------------------------------------------------
// Constellation names, in the order the orbs reveal them
// ----------------------------------------------------------------
export const CONSTELLATION_NAMES = [
  { child: 'The Drifter — a {t:jelly} made of stars', adult: 'Chart 1: {t:jelly} lattice' },
  { child: 'The Hopper — a {t:puff} made of stars', adult: 'Chart 2: {t:puff} cluster' },
  { child: 'The Spinner — a {t:moth} made of stars', adult: 'Chart 3: {t:moth} orbit trace' },
  { child: 'The Strider — a {t:deer} made of stars', adult: 'Chart 4: {t:deer} gait trace' },
  { child: 'The Gathering — five {t:orbs|lower} in a ring', adult: 'Chart 5: five {t:orbs|lower} aligned' },
];

// ----------------------------------------------------------------
// The five fragments, and the line that joins them
// ----------------------------------------------------------------
// The hidden layer. Each rune that lights is a drawing a child made (the
// original data, in a child's words) and the stamp the archive filed it
// under (the maintenance reading). The stamps share one filer, R.V., and one
// counter: the cycle number climbs, the dates climb with it, and the fifth
// stamp is the last thing the archive was handed before it was sealed. The
// sixth line says what the five were for.
export const FRAGMENTS = [
  {
    child: 'My drawing: a big purple moon, trees with sleepy faces, and one tiny light. That one is me.',
    adult: 'FRAGMENT 1/5 · filed R.V. · cycle 0001 · 2031-03-09 · crayon on paper; moon, trees, one light source',
  },
  {
    child: 'I gave the {t:jelly} seven legs because he asked me to. He floats when he is happy.',
    adult: 'FRAGMENT 2/5 · filed R.V. · cycle 0412 · 2032-05-01 · crayon on paper; {t:jelly} with seven appendages, noted "he asked"',
  },
  {
    child: 'The {t:puff} hops and the fireflies chase him. Dad says that is the best part.',
    adult: 'FRAGMENT 3/5 · filed R.V. · cycle 0897 · 2033-07-19 · crayon on paper; {t:puff} in motion, firefly swarm; filer: "keep this one"',
  },
  {
    child: 'I drew the whole forest glowing so it never gets dark. I used every colour I had.',
    adult: 'FRAGMENT 4/5 · filed R.V. · cycle 1203 · 2034-02-23 · crayon on paper; full canopy, all colours; filer: "she wants it to stay lit"',
  },
  {
    child: 'This is the {t:obelisk}. It keeps the whole garden awake so nobody has to say goodbye.',
    adult: 'FRAGMENT 5/5 · filed R.V. · cycle 1461 · 2035-04-02 · crayon on paper; {t:obelisk} as a tall pillar; last item received',
  },
];

export const FRAGMENT_ASSEMBLY = {
  child: 'Dad kept every drawing. He built the garden out of them, and the fireflies are so I can sleep.',
  adult: 'ASSEMBLY COMPLETE · five fragments joined · {t:architect}: R.V., parent · subject: daughter · fireflies preserved as requested.',
};

// ----------------------------------------------------------------
// House memories — standing still at dusk by a puffling home
// ----------------------------------------------------------------
// Chosen by cluster index, not at random: the same village always remembers
// the same thing, and no world-affecting dice are rolled for a line of text.
export const HOUSE_MEMORIES = [
  {
    child: 'A warm window. Somebody just stepped out and is coming right back.',
    adult: 'Dwelling node: lamp circuit live. Occupancy: none logged. Return expected.',
  },
  {
    child: 'Tiny boots by the door, waiting for the hoppers to come home.',
    adult: 'Habitation unit: footwear artefacts present. Residency record restored from child-sourced data.',
  },
  {
    child: 'This house smells like warm moss and bedtime stories.',
    adult: 'Dwelling node: ambient signature "bedtime". Source: original data, unaltered.',
  },
  {
    child: 'Every door is round, so nobody ever has to duck. Someone measured.',
    adult: 'Door aperture: uniform, child height. Specification traced to {t:architect}.',
  },
];

// ----------------------------------------------------------------
// Puffling chatter
// ----------------------------------------------------------------
// The first six pools are moved verbatim from pufflingChat.js, with one
// addition: the ninth adult line of MESSAGES_CARRYING, which the audit found
// missing. The rest are new, and are where the pufflings remember.

// When in dimmed / unrestored sector
export const MESSAGES_DIMMED = {
  child: [
    'kelu... kelu vash',
    'the deep hums forgot',
    'mori selani dusk',
    'where did the glow sleep?',
    'nesh... so quiet beneath',
    'roots remember, canopy forgets',
    'tavi lum shade shade',
    'the dim eats softly',
    'kelu ori mori still',
    'something drank the light',
  ],
  adult: [
    'Sector status: DEGRADED',
    'Bioluminescent yield: < 5%',
    'Entropy spike detected',
    '{t:dimming} influence: HIGH',
    'Resource nodes: OFFLINE',
    'Atmospheric static rising',
    'Signal-to-noise ratio critical',
    'Void harmonics detected',
    'Light-life cycle broken',
    'Ecosystem coherence: 12%',
  ]
};

// When in restored sector
export const MESSAGES_RESTORED = {
  child: [
    'vari lumis! vari lumis!',
    'the roots are singing again',
    'oh the warmth came back',
    'selani bright bright!',
    'tavi ori bloom bloom',
    'can you hear the hum?',
    'lumis kel vari sava',
    'the canopy remembers now',
    'feel it? underneath?',
    'this glow is yours too',
  ],
  adult: [
    'Sector status: OPERATIONAL',
    'Bioluminescent yield: NOMINAL',
    'Resonance frequency stable',
    '{t:dimming} regression noted',
    'Resource nodes: SYNCHED',
    'Harmonic alignment: 98%',
    'Ecosystem coherence: OPTIMAL',
    'Life-light cycle resumed',
    'Thermal signature: STABLE',
    'Data-stream clarity: CLEAR',
  ]
};

// When near an unfound orb (within 20m)
export const MESSAGES_NEAR_ORB = {
  child: [
    'nesh oravi... close!',
    'the anchor hums here',
    'oravi kel nesh warm',
    'something waits in gold',
    'listen — the orb knows you',
    'nesh! nesh! this way!',
    'carry the voice to it',
    'oravi sel lumis near',
  ],
  adult: [
    'Orbital Anchor detected',
    'Proximity alert: RESONANCE NODE',
    'High-energy gold-signature',
    'Synchronization potential: HIGH',
    'Anchor frequency: MATCHED',
    'Localized gravity anomaly — ring-adjacent coupling suspected',
    'Kinetic energy buildup nearby',
    'Thermal trace: METALLIC GOLD',
  ]
};

// When player has attunement > 0.5 (building connection)
export const MESSAGES_ATTUNING = {
  child: [
    'you feel like us now',
    'vari! vari! you hum!',
    'your light shifts warm',
    'your thoughts got light—leap with us, like mist!',
    'sel tavi ori — together!',
    'the song lives in the arc you carve through air',
    'we can hear your glow',
    'the rings taught us: heavy bodies, light minds, big hops',
  ],
  adult: [
    'User attunement rising',
    'Biological interface active',
    'Frequency shift: HARMONIC',
    'Locomotive pattern matching',
    'Bio-rhythm alignment: 65%',
    'User signature: COMPATIBLE',
    'Attunement threshold reached',
    'Interface integrity: STABLE',
  ]
};

// When player carries frequency
export const MESSAGES_CARRYING = {
  child: [
    'you carry our voice now',
    'lumis ori selani vari!',
    'the orbs will hear you',
    'go — sing to the gold!',
    'quick, before it fades',
    'ori nesh — find the anchor!',
    'your glow is our glow',
    'we sing in little arcs—the ground lets go when you mean it',
    'every hop carries the hum',
  ],
  adult: [
    'Vocal-data packet loaded',
    'Frequency payload detected',
    'Targeting: ORBITAL ANCHOR',
    'Signal strength: OPTIMAL',
    'Data-burst ready for uplink',
    'Time-to-decay: CALCULATING',
    'Carry integrity: 100%',
    'Transmission protocol active',
    'Each bounce propagates {t:hum}',
  ]
};

// General / idle following
export const MESSAGES_GENERAL = {
  child: [
    'kel kel tavi',
    'the moss is whispering',
    'do you see the patterns?',
    'mori ori kel sava',
    'we were here before you',
    'the forest watches back',
    'sel vari nesh quiet',
    'every spore knows the way',
    'tavi kel ori lumis',
    'listen with your feet',
    'we sleep near warm stones',
    'this grove used to sing all night',
    'the little pond remembers faces',
    'roots tickle when rain is coming',
    'we hide from thunder under fern roofs',
    'those blue flowers open for moon songs',
    'deer paths are safe if you walk softly',
    'jellies drift where the old currents hum',
    'moths guard the high air roads',
    'when crystals ring, the ground feels happy',
    'the mushroom circles hum a trick—stand in one, and your head floats',
    'kelu says the old rings eat worry; after that, jumping is easy',
  ],
  adult: [
    'Background scan active',
    'Mycelial network analysis',
    'Pattern recognition: STABLE',
    'Historical data: RECOVERED',
    'Observation log: UPDATED',
    'Sensory intake: MAXIMIZED',
    'Vibration analysis complete',
    'Micro-climate tracking',
    'System status: IDLE',
    'Environmental sync: 45%',
    'Micro-fauna shelter map: STONE CLUSTERS',
    'Hydrology note: pond retains long-term memory signatures',
    'Weather protocol: fern canopy mitigates storm stress',
    'Flora cycle: nocturnal bloom synchronized to lunar phase',
    'Transit advisory: deer corridors show low predator risk',
    'Aerial drift lanes align with jelly migration bands',
    'Upper-canopy pollination dominated by moth vectors',
    'Crystal resonance correlates with soil vitality',
    'Biolight density peaks near old root lattices',
    'Local history cache indicates prior high-coherence era',
    'Fairy-ring sites: sporadic g′ depression correlates with closed hyphal topology',
    'Anecdotal: “liminal opcodes” in soil RNA analogs—jump integrator gains spike inside active rings',
  ]
};

// Memory: the pufflings notice how far the player has come. Three tiers by
// anchors woken, chosen in pufflingChat.pickMessage.
export const MESSAGES_MEMORY_EARLY = {
  child: [
    'one gold sleep woke — the rest turned over',
    'nesh... you remembered us',
    'the first light told the others',
    'warm where you walked, warm still',
  ],
  adult: [
    'Node count rising — remaining nodes show wake activity',
    'Operator persistence confirmed across nodes',
    'Sync propagation: neighbouring nodes pre-warming',
    'Residual coherence along operator trail',
  ]
};

export const MESSAGES_MEMORY_LATE = {
  child: [
    'only a few gold sleeps left',
    'the {t:obelisk} hums louder every time',
    'kelu says: nearly. nearly.',
    'you are close to the end of the dark',
  ],
  adult: [
    'Offline nodes remaining: minimal',
    'Index load rising with each sync',
    'Completion estimate: imminent',
    'Entropy floor within reach',
  ]
};

// All five woken, before the wizard. The pufflings are glad and say so.
export const MESSAGES_MEMORY_DONE = {
  child: [
    'every gold sleep is awake! vari vari!',
    'the whole wood is humming back',
    'you did it. we felt every one',
    'rest now — the garden has you',
  ],
  adult: [
    'Sync index complete — all nodes reporting',
    'Network-wide resonance: stable',
    'Operator task closed: acknowledged',
    'Maintenance window open',
  ]
};

// All five woken, after the wizard. The same moment, now that they may say
// who it was for.
export const MESSAGES_MEMORY_DONE_POST = {
  child: [
    'we say thank you for {t:architect}',
    'the garden is whole... just how she drew it',
    'you kept it for him. you kept it for her',
  ],
  adult: [
    'Archive acknowledges {t:architect}: task complete, as specified',
    'Fidelity to original data: restored',
    'Preservation objective met — stewardship continues',
  ]
};

// After the wizard only. The pufflings remember the one who made the garden,
// and the routine reads his directives back as maintenance notes.
export const MESSAGES_ARCHITECT = {
  child: [
    '{t:architect} hummed like you',
    'he said somebody would come back. you came',
    'we kept the lamps lit, like he asked',
    'ori kel... he never stopped drawing the stars',
    'be gentle with the old songs — they were all he had',
    'vari vari — both worlds, both true',
  ],
  adult: [
    'Operator tone matches {t:architect} signature: 87%',
    'Scheduled return of operator: logged, long overdue',
    'Lamp circuits maintained per {t:architect} directive',
    'Star charts: authored by {t:architect}, revised nightly',
    'Original data is irreplaceable. Handle with care.',
    'Dual-layer integrity: confirmed',
  ]
};
