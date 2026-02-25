// Seeded RNG (LCG)
let _s = 42;

export function sr() {
  _s = (_s * 16807) % 2147483647;
  return (_s & 0x7fffffff) / 0x7fffffff;
}

export function resetSeed(seed) {
  _s = seed || 42;
}
