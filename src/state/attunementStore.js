// ================================================================
// Attunement Store — shared reactive state for spirit attunement
// ================================================================
export let attuneFlashTimer = 0;
export let attuneFlashType = null;
export let echoTimer = 0;

export function setAttuneFlash(timer, type) {
  attuneFlashTimer = timer;
  attuneFlashType = type;
}

export function decayAttuneFlash(dt) {
  if (attuneFlashTimer > 0) attuneFlashTimer -= dt;
}

export function setEchoTimer(val) {
  echoTimer = val;
}

export function decayEchoTimer(dt) {
  if (echoTimer > 0) echoTimer -= dt;
}

export const reset = () => {
  attuneFlashTimer = 0;
  attuneFlashType = null;
  echoTimer = 0;
};
