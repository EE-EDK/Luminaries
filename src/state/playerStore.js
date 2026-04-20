// ================================================================
// Player Store — shared player-specific state (non-transform)
// ================================================================
export let featherFallTimer = 0;
export let sprinting = false;
export let playerIdleTime = 0;

export function setFeatherFallTimer(val) {
  featherFallTimer = val;
}

export function decayFeatherFall(dt) {
  if (featherFallTimer > 0) featherFallTimer -= dt;
}

export function setSprinting(val) {
  sprinting = val;
}

export function setPlayerIdleTime(val) {
  playerIdleTime = val;
}

export const reset = () => {
  featherFallTimer = 0;
  sprinting = false;
  playerIdleTime = 0;
};
