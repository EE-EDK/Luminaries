// Seeded RNG (LCG)
// The seed is 42. It has always been 42. The forest grows the same way
// every time, down to the last fern. If you change it, you get a
// different forest. But somehow it feels less... right. As if this
// particular arrangement of trees was the one that was supposed to exist.
let _s = 42;

export function sr() {
  _s = (_s * 16807) % 2147483647;
  return (_s & 0x7fffffff) / 0x7fffffff;
}

export function resetSeed(seed) {
  _s = seed || 42;
}

export function saveSeed() { return _s; }
export function restoreSeed(s) { _s = s; }
