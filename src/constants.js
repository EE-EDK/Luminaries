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

// Entity counts
export const TREE_N = 60;
export const MUSH_N = 45;
export const CRYSTAL_N = 10;
export const JELLY_N = 6;
export const PUFF_N = 8;
export const DEER_N = 4;
export const MOTH_N = 5;
export const GRASS_PATCHES = 110;
export const FERN_N = 35;
export const FLOWER_N = 30;
export const REED_N = 25;
export const ROCK_N = 60;
export const WISP_N = 3;
export const DANDELION_N = 20;
export const FAIRY_RING_N = 5;
export const BUBBLE_N = 30;
export const STARMOTE_N = 40;
export const POND_N = 6;

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
export const OBELISK_RISE_SPEED = 4;

// Light budget: 1 hemisphere + 1 directional + 1 playerLight + 5 crystal proximity = 8 max
export const MAX_CRYSTAL_LIGHTS = 5;

// Deer AI
export const DEER_FLEE_R = 8;
export const DEER_FLEE_SPEED_MULT = 2.2;

// Color palette
export const C = {
  sky: 0x081018, fog: 0x060c14, ground: 0x1a4028,
  bark: 0x3a2818, leaf: 0x1a4820, leafGlow: 0x44ffaa,
  mushCap: 0x8833ee, mushGlow: 0xcc77ff, mushStem: 0x2a1140,
  crystal: 0x33ffdd, crystalCore: 0x88ffee,
  firefly: 0xeeff66, fireflyB: 0x66ffdd, spore: 0xbbff99,
  ambient: 0x223355, moon: 0xbbccee,
  // Creature palette
  jellyBell: 0x7788ff, jellyGlow: 0xaaccff, jellyTent: 0x6677cc,
  puffBody: 0xffddcc, puffGlow: 0xffaa88, puffEye: 0x222222, puffCheek: 0xff8899,
  deerBody: 0xaaeeff, deerGlow: 0x88ddff, deerAntler: 0xccffee, deerEye: 0x113344,
  mothWing: 0xaaff99, mothGlow: 0xccffaa, mothBody: 0x556633, mothSpot: 0xffffff,
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
  moatBlue: 0x3388cc, rainbow: [0xff3333, 0xff8833, 0xffee33, 0x33ff66, 0x3388ff, 0x8833ff],
  // New entity palette
  wispCore: 0xaaeeff, wispGlow: 0xddeeff, wispTrail: 0x88ccff,
  dandStem: 0x446633, dandHead: 0xffffee, dandSeed: 0xfff8dd, dandSeedGlow: 0xffffff,
  fairyMush: 0xcc88ff, fairyGlow: 0xddaaff, fairyRing: 0xaa66ee,
  bubbleIris: 0xaaddff, bubbleShine: 0xffffff, bubblePop: 0xccffee,
  starMote: 0xffeedd, starGlow: 0xffffcc,
  pondWater: 0x2266aa, pondGlow: 0x3388cc, lilyPad: 0x228844, lilyFlower: 0xff88cc, lilyGlow: 0xffaadd,
  echoBloom: 0xaaffcc, echoWave: 0x88ffbb,
  // Rock palette
  rockBase: 0x2a2a32, rockMoss: 0x1a4422, rockLight: 0x3a3a45,
  // Sky palette
  skyDeep: 0x030610, skyNeb1: 0x220833, skyNeb2: 0x081833, skyNeb3: 0x1a0828,
  skyNeb4: 0x0a1a22, skyNeb5: 0x180a28,
  skyStarBright: 0xffffff, skyStarDim: 0x8899bb, skyStarWarm: 0xffddaa, skyStarCool: 0xaaccff,
  skyGalaxy: 0x665588, skyAnomaly: [0xff4488, 0x44ffcc, 0xffaa22, 0x8844ff, 0x22ddff, 0xff6644],
  skyConstLine: 0x334466
};
