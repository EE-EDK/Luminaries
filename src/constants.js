// ================================================================
// CONSTANTS — 1.0 unit = 1.0 meter
// ================================================================

// Physics
export const GRAVITY = 15;
export const MOVE_SPEED = 6;
export const SPRINT_MULT = 1.8;
export const JUMP_IMPULSE = 8;
export const GROUND_DRAG = 0.85;
export const AIR_DRAG = 0.98;
export const MOUSE_SENS = 0.003;

// World
export const WORLD_R = 90;
export const EYE_H = 1.7;

// Entity counts — all entities use visibility culling + distance-based LOD
export const TREE_N = 500;         // Template instanced (10 templates × InstancedMesh)
export const MUSH_N = 250;         // visibility-culled beyond 50m (3x)
export const CRYSTAL_N = 18;
export const JELLY_N = 35;         // visibility-culled beyond 55m (+75%)
export const PUFF_N = 40;         // visibility-culled beyond 40m (+43%)
export const DEER_N = 12;         // visibility-culled beyond 60m
export const MOTH_N = 35;         // visibility-culled beyond 45m (+75%)
export const LUMINID_N = 5;         // towering stilted giants
export const GRASS_PATCHES = 1200; // GPU vertex shader, zero CPU cost
export const FERN_N = 160;         // visibility-culled beyond 40m (3x)
export const FLOWER_N = 140;       // visibility-culled beyond 40m (3x)
export const REED_N = 40;          // visibility-culled beyond 40m
export const ROCK_N = 350;         // SDF instanced procedural rocks
export const BOULDER_N = 50;       // large SDF instanced boulders
export const PEBBLE_N = 250;       // tiny scattered stones (InstancedMesh)

// SDF Rock Generation
export const ROCK_SHAPES = 6;                     // unique SDF rock templates
export const ROCK_LOD_DISTS = [0, 625, 2500];     // squared distances for LOD switching
export const ROCK_LOD_RES = [16, 8, -1];          // marching cubes res (-1 = impostor)
export const ROCK_VIEW_DIST2 = 3600;              // 60m squared — cull beyond this
export const ROCK_SDF_CUTS_MIN = 10;
export const ROCK_SDF_CUTS_MAX = 18;
export const ROCK_GROUND_SINK = 0.35;             // sink 35% of height into ground
export const WISP_N = 6;
export const DANDELION_N = 25;
export const FAIRY_RING_N = 8;
export const BUBBLE_N = 40;
export const STARMOTE_N = 50;
export const POND_N = 10;
export const THORNBLOOM_N = 30;
export const HELIXVINE_N = 30;
export const SNAPTHORN_N = 24;
export const SPIRALFROND_N = 45;
export const CORPSEBLOOM_N = 24;
export const ORBBUSH_N = 36;
export const LANTERNPOD_N = 36;
export const VEILMOSS_N = 45;
export const GROUND_GLOW_N = 25;

// Sky
export const SKY_STARS = 600;
export const SKY_GALAXY_N = 3;
export const SKY_NEBULA_N = 5;
export const SKY_CONSTELLATION_N = 8;
export const SKY_ANOMALY_N = 6;
export const SKY_R = 280;

// Fairy ring / bubble
export const FAIRY_RING_R = 2.5;
export const FAIRY_BOUNCE = 6;
export const BUBBLE_POP_R = 1.5;

// Quest
export const ORB_N = 5;
export const ORB_TOUCH_R = 2.5;
export const ORB_SENSE_R = 12;
export const OBELISK_H = 30;
export const OBELISK_RISE_SPEED = 8;

// Dimming (Phase 2) — sector-based bioGlow suppression
// The world splits into 5 angular sectors (pizza slices) from the obelisk.
// Each sector has one orb. Collecting it restores the entire sector.
// "The 35% baseline was measured on night 47. Before that, it was lower."
//    — Unsigned note found taped to monitoring station B
export const DIMMING_FACTOR = 0.18;     // bioGlow multiplier in unrestored sectors (near-greyscale)
export const DIMMING_WAVE_SPEED = 30;   // Restoration wave expansion speed (m/s) — fast radial bloom

// Light budget: 1 hemi + 2 dir + 1 player + 3 crystal proximity + 1 orb = 8 max
export const MAX_CRYSTAL_LIGHTS = 3;

// Creature Attunement (Phase 2)
export const ATTUNE_RATE = 0.15;       // attunement gain per second while matching
export const ATTUNE_DECAY = 0.05;      // attunement loss per second when not matching
export const ATTUNE_JUMP_R2 = 225;     // squared distance: must co-jump within 15m

export const WEATHER_ATTUNE_MODS = {
  CLEAR:           { puff: 1.0, jelly: 1.0, deer: 1.0, moth: 1.0 },
  MISTY:           { puff: 0.8, jelly: 1.2, deer: 1.0, moth: 1.3 },
  LIGHT_RAIN:      { puff: 0.7, jelly: 1.4, deer: 0.8, moth: 0.6 },
  HEAVY_RAIN:      { puff: 0.5, jelly: 0.5, deer: 0.5, moth: 0.5 },
  FOG_BANK:        { puff: 0.6, jelly: 1.3, deer: 0.9, moth: 1.5 },
  LUMINOUS_STORM:  { puff: 0.5, jelly: 0.5, deer: 0.5, moth: 0.5 }
};

// Spirit Hum — two-phase creature unlock (Phase 2)
// Right-click (desktop) or HUM button (mobile) to emit a continuous tone.
// Mouse Y controls pitch. Match a creature's resonance band for 2s to lock.
// Then perform the creature's physical behavior to build attunement.
export const HUM_FREQ_MIN = 80;        // lowest pitch player can hum (Hz)
export const HUM_FREQ_MAX = 700;       // highest pitch player can hum (Hz)
export const HUM_LOCK_TIME = 1.2;      // seconds of sustained pitch match to lock
export const HUM_LOCK_DECAY = 3.0;     // seconds before pitch lock fades after releasing hum
// Creature resonance bands: { center, tol } in Hz — widened for mobile-friendly tuning
export const HUM_BAND_DEER  = { center: 120, tol: 50 };
export const HUM_BAND_MOTH  = { center: 240, tol: 55 };
export const HUM_BAND_JELLY = { center: 390, tol: 60 };
export const HUM_BAND_PUFF  = { center: 550, tol: 65 };

// Player light evolution — color/intensity/range scales with orbs found (0–5)
export const PLAYER_LIGHT_COLORS = [0x668888, 0x88aacc, 0x66ddaa, 0xaaffcc, 0xddffee, 0xffffff];
export const PLAYER_LIGHT_INTENSITY = [0.4, 0.6, 0.8, 1.0, 1.2, 1.5];
export const PLAYER_LIGHT_RANGE = [12, 16, 20, 25, 30, 40];

// Deer AI
export const DEER_FLEE_R = 8;
export const DEER_FLEE_SPEED_MULT = 2.2;

// Color palette
export const C = {
  sky: 0x081018, fog: 0x060c14, ground: 0x1a4028,
  bark: 0x5a4030, leaf: 0x1a4820, leafGlow: 0x44ffaa,
  mushCap: 0x8833ee, mushGlow: 0xcc77ff, mushStem: 0x2a1140,
  crystal: 0x33ffdd, crystalCore: 0x88ffee,
  firefly: 0xeeff66, fireflyB: 0x66ffdd, spore: 0xbbff99,
  ambient: 0x223355, moon: 0xbbccee, moon2: 0x223355, playerLight: 0x668888,
  // Creature palette
  jellyBell: 0x7788ff, jellyGlow: 0xaaccff, jellyTent: 0x6677cc,
  puffBody: 0xffddcc, puffGlow: 0xffaa88, puffEye: 0x222222, puffCheek: 0xff8899,
  deerBody: 0xaaeeff, deerGlow: 0x88ddff, deerAntler: 0xccffee, deerEye: 0x113344,
  mothWing: 0xaaff99, mothGlow: 0xccffaa, mothBody: 0x556633, mothSpot: 0xffffff,
  luminidBody: 0x223344, luminidGlow: 0x4488ff, luminidCore: 0xffffff,
  // Vegetation palette
  grass1: 0x1a4420, grass2: 0x0d3318, grassTip: 0x33aa55,
  // Grass variety palettes: [base1, base2, mid, tip1, tip2, tip3, clover, cloverBr, emissive]
  grassPurple: [0x1a0a22, 0x24123a, 0x4a2068, 0xaa44ee, 0xcc77ff, 0xff88dd, 0x2a1540, 0x6633aa, 0xaa44ff],
  grassBlue:   [0x0a1422, 0x0d1a35, 0x204565, 0x44aaee, 0x66ddff, 0x88eeff, 0x152a45, 0x3366aa, 0x44aaff],
  grassTeal:   [0x0a1a1a, 0x102a22, 0x206050, 0x44eebb, 0x66ffdd, 0xaaff88, 0x1a4038, 0x33aa88, 0x44ffbb],
  fern: 0x1a5530, fernGlow: 0x33cc66,
  flower: 0xff77cc, flowerGlow: 0xff99dd, flowerStem: 0x1a4420,
  reed: 0x2a5535, reedTip: 0x44bb66,
  // Quest palette
  orbGold: 0xffcc33, orbGlow: 0xffeeaa, orbInner: 0xfff8dd,
  laserPink: 0xff66aa, laserGlow: 0xff88cc,
  obeliskBlack: 0x0a0a12, obeliskPink: 0xff44aa,
  moatBlue: 0x3388cc, moatGlow: 0x1155aa, moatStone: 0x4488cc, rainbow: [0xff3333, 0xff8833, 0xffee33, 0x33ff66, 0x3388ff, 0x8833ff],
  // New entity palette
  wispCore: 0xaaeeff, wispGlow: 0xddeeff, wispTrail: 0x88ccff,
  dandStem: 0x446633, dandHead: 0xffffee, dandSeed: 0xfff8dd, dandSeedGlow: 0xffffff,
  fairyMush: 0xcc88ff, fairyGlow: 0xddaaff, fairyRing: 0xaa66ee,
  bubbleIris: 0xaaddff, bubbleShine: 0xffffff, bubblePop: 0xccffee,
  starMote: 0xffeedd, starGlow: 0xffffcc,
  pondWater: 0x2266aa, pondGlow: 0x3388cc, lilyPad: 0x228844, lilyFlower: 0xff88cc, lilyGlow: 0xffaadd,
  echoBloom: 0xaaffcc, echoWave: 0x88ffbb,
  // Rock palette — varied rock types with realistic lighter greys
  rockBase: 0x9a9aa0, rockLight: 0xaaaaae, rockMoss: 0x1a4422,
  rockEmissive: 0x1a2a1c,
  rockGranite:   [0x9a9aa0, 0xaaaaae, 0x8a8a92, 0xb0b0b8],
  rockSandstone: [0xaa9a80, 0xc0b098, 0x9a8a75, 0xd0c0a8],
  rockLimestone: [0xb0b0a8, 0xc0c0b8, 0x909088, 0xd8d8d0],
  rockSlate:     [0x708090, 0x8090a0, 0x607080, 0x98a8b8],
  rockBasalt:    [0x707078, 0x808088, 0x606068, 0x909098],
  // Sky palette
  skyDeep: 0x030610, skyNeb1: 0x220833, skyNeb2: 0x081833, skyNeb3: 0x1a0828,
  skyNeb4: 0x0a1a22, skyNeb5: 0x180a28,
  skyStarBright: 0xffffff, skyStarDim: 0x8899bb, skyStarWarm: 0xffddaa, skyStarCool: 0xaaccff,
  skyGalaxy: 0x665588, skyAnomaly: [0xff4488, 0x44ffcc, 0xffaa22, 0x8844ff, 0x22ddff, 0xff6644],
  skyConstLine: 0x334466,
  // Fantasy flora palette
  thornOrb: 0xffaa44, thornOrbGlow: 0xffcc66, thornPetal: 0x661133,
  thornSpike: 0x2a1a10, thornStem: 0x1a3320,
  helixStem: 0x1a2840, helixPod: 0x6633ff, helixPodGlow: 0x8855ff,
  helixRing: 0x4422aa, helixNode: 0x5544cc,
  snapBody: 0x22aa66, snapBodyGlow: 0x44ff88,
  snapTip: 0x66ffaa, snapTipGlow: 0x88ffcc, snapFrond: 0x1a6644,
  // Spiral frond palette
  spiralStem: 0x1a3040, spiralFrond: 0x22aa88, spiralGlow: 0x44ffcc, spiralTip: 0x88ffee,
  // Corpse bloom palette
  corpseSpathe: 0x551122, corpseColumn: 0x882244, corpseGlow: 0xcc3355, corpseLeaf: 0x1a3318,
  // Orb bush palette
  orbBushLeaf: 0x224422, orbBushOrb: 0xff88cc, orbBushGlow: 0xffaadd, orbBushStem: 0x1a3828,
  // Lantern pod palette
  lanternStem: 0x2a4422, lanternPod: 0xffdd66, lanternGlow: 0xffee88, lanternHaze: 0xffcc44,
  // Veil moss palette
  veilSupport: 0x3a3a40, veilMoss: 0x44cc88, veilGlow: 0x66ffaa, veilEdge: 0x88ffcc,
  // Ground glow patch colors
  groundGlowColors: [0x33ffdd, 0x44ffaa, 0xcc77ff, 0x44aaee, 0x88ffcc],
  // Deer detail palette
  deerChest: 0xccf0ff, deerNose: 0x224455, deerEyeHighlight: 0xffffff,
  deerInnerEar: 0xddccee, deerNostril: 0x112222, deerHoof: 0x667788,
  deerFetlock: 0xddeeff, deerTailTip: 0xffffff, deerThroat: 0xcceeee,
  deerBelly: 0xddeeee, deerSpot: 0xccffee, deerDew: 0xeeffff, deerDewEmissive: 0xaaddff,
  deerMane: 0xddeeff,
  // Puffling detail palette
  puffBelly: 0xfff0e0, puffBrow: 0x332211, puffMushroom: 0xff4444,
  puffMoss: 0x448822, puffTail: 0xffffff,
  // Jelly detail palette
  jellyOrgan: 0xbbddff, jellySpot: 0xeeffff, jellyTip: 0xddeeff, jellyMucus: 0xddffff,
  // Moth detail palette
  mothFur: 0xeeeedd, mothAbdomen: 0xddddcc, mothSegment: 0xddddbb,
  mothEye: 0x112233, mothEyeEmissive: 0x1a3355, mothAntenna: 0xddcc88,
  mothEdge: 0x664433, mothSpotRing: 0xffee55, mothSpotDark: 0x223344,
  mothLeg: 0xccccbb,
  // Luminid detail palette
  luminidShell: 0x88ccff, luminidShellEmissive: 0x2244aa, luminidHalo: 0x4488ff,
  luminidLeg: 0x223344, luminidLegEmissive: 0x112233,
  // Quest transform palette
  questPink1: 0x662040, questPink1Glow: 0xff3399, questPink1Core: 0xff66cc,
  questPink2: 0x4a1850, questPink2Glow: 0xcc44dd, questPink2Core: 0xee77ff,
  questPink3: 0x551a30, questPink3Glow: 0xff4499, questPink3Core: 0xff88cc,
  questPink4: 0x3a1860, questPink4Glow: 0xaa44ee, questPink4Core: 0xcc77ff,
  questPink5: 0x502040, questPink5Glow: 0xee55bb, questPink5Core: 0xff99dd,
  // Particle palette
  dustBase: 0x88aa77, rainDrop: 0x8899bb,
  // Sky detail palette
  skyWisp1: 0x2244aa, skyWisp2: 0x224466, skyWisp3: 0x442266,
  skyWisp4: 0x553355, skyWisp5: 0x336688, skyWisp6: 0x224455, skyWisp7: 0x3a2266,
  skyClusterGlow: 0x334466, skyZenithCap: 0x030610,
  skyConstJelly: 0x66ccff, skyConstPuff: 0xffaa88, skyConstMoth: 0x88ff66,
  skyConstDeer: 0x66ffcc, skyConstConverge: 0xffdd44,
  // Ground palette
  groundEmissive: 0x1a3820,
  // Wave 0 Audit Additions
  white: 0xffffff, black: 0x000000,
  glitterPurple: 0xaa44ff,
  obeliskChamber: 0x332244, obeliskScratch: 0x1a1a22, obeliskBase: 0x111118,
  obeliskInterior: 0x222233, obeliskRubble: 0x0e0e14, obeliskLight: 0x8866cc,
  transformTrunk: 0x6a4530, transformTrunkGlow: 0xcc8844, transformGroundGlow: 0x5a1a7a,
  skyCloud1: 0x1a3366, skyCloud2: 0x2a1855, skyCloud3: 0x1a4466, skyCloud4: 0x331844,
  skyCloud5: 0x224488, skyCloud6: 0x442244, skyCloud7: 0x183355, skyCloud8: 0x2a3366,
  skyMoonGlow: 0x445566, skyMoonCore: 0x6688aa, skyMoonWarm: 0x887766,
  skyMoonShadow: 0x020408,
  auroraMutedGreen: 0x1a7755, auroraMutedTeal: 0x2a8877, auroraPaleSage: 0x557766,
  auroraMutedPurple: 0x665588, auroraMutedRose: 0x884466, auroraDarkTeal: 0x336655,
  // Day/Night Keyframes
  duskSky: 0x0e1825, duskFog: 0x0c1420, duskMoon: 0xddaa88, duskAmbSky: 0x443355, duskAmbGnd: 0x222818,
  nightSky: 0x050a18, nightFog: 0x081018, nightMoon: 0xbbccee, nightAmbSky: 0x334466, nightAmbGnd: 0x183820,
  deepSky: 0x030610, deepFog: 0x061014, deepMoon: 0x8899bb, deepAmbSky: 0x1a2244, deepAmbGnd: 0x122418,
  dawnSky: 0x122030, dawnFog: 0x0e1828, dawnMoon: 0xccbbaa, dawnAmbSky: 0x332e55, dawnAmbGnd: 0x1c2018,
  mistColor: 0x556677
};
