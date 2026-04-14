import { MOUSE_SENS, MOVE_SPEED, SPRINT_MULT } from '../constants.js';
import { renderer } from './renderer.js';

// ================================================================
// PHASE 1.5 — Input
// ================================================================

export const keys = {};
export let yaw = 0;
export let pitch = 0;
export let mouseDown = false;
export let started = false;
export let joyX = 0;
export let joyY = 0;
export let joyOn = false;
export let touchJump = false;
export let touchSprint = false;
export let rightMouseDown = false;
export let mouseY = 0;
export let screenH = window.innerHeight;
export let touchHum = false;
export let touchHumY = 0.5; // normalized 0–1 (0=top/high pitch, 1=bottom/low pitch)

let joyTid = null;
let lookTid = null;
let lx = 0;
let ly = 0;

let goCallback = null;

export function setGoCallback(fn) {
  goCallback = fn;
}

export function setStarted(val) {
  started = val;
}

export function setYaw(val) { yaw = val; }
export function setPitch(val) { pitch = val; }
export function setTouchJump(val) { touchJump = val; }

function triggerGo() {
  if (!started && goCallback) goCallback();
}

// Keyboard
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if ('Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD'.split(' ').indexOf(e.code) >= 0) e.preventDefault();
  triggerGo();
});
window.addEventListener('keyup', (e) => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; mouseDown = false; rightMouseDown = false; });
window.addEventListener('resize', () => { screenH = window.innerHeight; });

// Mouse — left-click = camera look, right-click = spirit hum
renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
renderer.domElement.addEventListener('mousedown', (e) => {
  if (e.button === 2) { rightMouseDown = true; triggerGo(); }
  else { mouseDown = true; triggerGo(); }
});
window.addEventListener('mouseup', (e) => {
  if (e.button === 2) rightMouseDown = false;
  else mouseDown = false;
});
window.addEventListener('mousemove', (e) => {
  mouseY = e.clientY;
  if (!mouseDown) return;
  yaw -= e.movementX * MOUSE_SENS;
  pitch -= e.movementY * MOUSE_SENS;
  pitch = Math.max(-1, Math.min(1, pitch));
});

// --- Mobile detection & joystick ---
export const mobile = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

const jzEl = document.getElementById('joy-zone');
const jkEl = document.getElementById('joy-knob');
const bjEl = document.getElementById('btn-jump');
const bsEl = document.getElementById('btn-sprint');

if (mobile) {
  jzEl.style.display = 'block';
  bjEl.style.display = 'block';
  if (bsEl) bsEl.style.display = 'block';
  document.getElementById('controls').textContent = 'Stick: Move · Drag right: Look · JUMP · SPRINT · HUM';
}

function updJoy(cx, cy) {
  const r = jzEl.getBoundingClientRect();
  let dx = cx - (r.left + r.width / 2);
  let dy = cy - (r.top + r.height / 2);
  const d = Math.sqrt(dx * dx + dy * dy);
  const maxR = 52;
  if (d > maxR) { dx = dx / d * maxR; dy = dy / d * maxR; }
  joyX = dx / maxR;
  joyY = dy / maxR;
  jkEl.style.left = (40 + dx) + 'px';
  jkEl.style.top = (40 + dy) + 'px';
}

jzEl.addEventListener('touchstart', (e) => {
  e.preventDefault(); e.stopPropagation(); triggerGo();
  const t = e.changedTouches[0]; joyTid = t.identifier; joyOn = true; updJoy(t.clientX, t.clientY);
}, { passive: false });

jzEl.addEventListener('touchmove', (e) => {
  e.preventDefault(); e.stopPropagation();
  for (let i = 0; i < e.changedTouches.length; i++) {
    if (e.changedTouches[i].identifier === joyTid)
      updJoy(e.changedTouches[i].clientX, e.changedTouches[i].clientY);
  }
}, { passive: false });

jzEl.addEventListener('touchend', (e) => {
  e.preventDefault(); e.stopPropagation();
  for (let i = 0; i < e.changedTouches.length; i++) {
    if (e.changedTouches[i].identifier === joyTid) {
      joyTid = null; joyOn = false; joyX = 0; joyY = 0;
      jkEl.style.left = '40px'; jkEl.style.top = '40px';
    }
  }
}, { passive: false });
jzEl.addEventListener('touchcancel', (e) => {
  e.preventDefault(); e.stopPropagation();
  for (let i = 0; i < e.changedTouches.length; i++) {
    if (e.changedTouches[i].identifier === joyTid) {
      joyTid = null; joyOn = false; joyX = 0; joyY = 0;
      jkEl.style.left = '40px'; jkEl.style.top = '40px';
    }
  }
}, { passive: false });

bjEl.addEventListener('touchstart', (e) => {
  e.preventDefault(); e.stopPropagation(); triggerGo(); touchJump = true;
}, { passive: false });
bjEl.addEventListener('touchend', (e) => {
  e.preventDefault(); e.stopPropagation(); touchJump = false;
}, { passive: false });
bjEl.addEventListener('touchcancel', (e) => {
  e.preventDefault(); e.stopPropagation(); touchJump = false;
}, { passive: false });

if (bsEl) {
  bsEl.addEventListener('touchstart', (e) => {
    e.preventDefault(); e.stopPropagation(); triggerGo(); touchSprint = true;
  }, { passive: false });
  bsEl.addEventListener('touchend', (e) => {
    e.preventDefault(); e.stopPropagation(); touchSprint = false;
  }, { passive: false });
  bsEl.addEventListener('touchcancel', (e) => {
    e.preventDefault(); e.stopPropagation(); touchSprint = false;
  }, { passive: false });
}

// HUM slider (mobile) — vertical frequency slider, touch+drag for pitch
const slEl = document.getElementById('hum-slider');
const thumbEl = document.getElementById('hum-thumb');
const trackEl = document.getElementById('hum-track');
let _humTid = null;

function _updateSliderFromTouch(clientY) {
  const rect = trackEl.getBoundingClientRect();
  // Clamp to track bounds, map to 0 (top=high pitch) → 1 (bottom=low pitch)
  const t = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
  touchHumY = t;
  // Move thumb: bottom offset. t=0 → top of track, t=1 → bottom
  thumbEl.style.bottom = ((1 - t) * (rect.height - 20)) + 'px';
}

if (slEl && mobile) {
  slEl.style.display = 'block';
  slEl.addEventListener('touchstart', (e) => {
    e.preventDefault(); e.stopPropagation(); triggerGo();
    touchHum = true;
    const t = e.changedTouches[0];
    _humTid = t.identifier;
    _updateSliderFromTouch(t.clientY);
    if (thumbEl) thumbEl.style.borderColor = 'rgba(100,255,180,.9)';
  }, { passive: false });
  slEl.addEventListener('touchmove', (e) => {
    e.preventDefault(); e.stopPropagation();
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === _humTid) {
        _updateSliderFromTouch(e.changedTouches[i].clientY);
      }
    }
  }, { passive: false });
  slEl.addEventListener('touchend', (e) => {
    e.preventDefault(); e.stopPropagation();
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === _humTid) {
        _humTid = null; touchHum = false;
        if (thumbEl) thumbEl.style.borderColor = 'rgba(100,255,180,.5)';
      }
    }
  }, { passive: false });
  slEl.addEventListener('touchcancel', (e) => {
    e.preventDefault(); e.stopPropagation();
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === _humTid) {
        _humTid = null; touchHum = false;
        if (thumbEl) thumbEl.style.borderColor = 'rgba(100,255,180,.5)';
      }
    }
  }, { passive: false });
}

// Right-side look
renderer.domElement.addEventListener('touchstart', (e) => {
  e.preventDefault(); triggerGo();
  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.clientX > window.innerWidth * 0.3 && lookTid === null) {
      lookTid = t.identifier; lx = t.clientX; ly = t.clientY;
    }
  }
}, { passive: false });

renderer.domElement.addEventListener('touchmove', (e) => {
  e.preventDefault();
  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.identifier === lookTid) {
      yaw -= (t.clientX - lx) * MOUSE_SENS;
      pitch -= (t.clientY - ly) * MOUSE_SENS;
      pitch = Math.max(-1, Math.min(1, pitch));
      lx = t.clientX; ly = t.clientY;
    }
  }
}, { passive: false });

renderer.domElement.addEventListener('touchend', (e) => {
  for (let i = 0; i < e.changedTouches.length; i++)
    if (e.changedTouches[i].identifier === lookTid) lookTid = null;
}, { passive: false });

renderer.domElement.addEventListener('touchcancel', (e) => {
  for (let i = 0; i < e.changedTouches.length; i++)
    if (e.changedTouches[i].identifier === lookTid) lookTid = null;
}, { passive: false });

const _input = { x: 0, z: 0 };
export function getInput() {
  let fx = 0, fz = 0;
  if (keys['KeyW']) fz -= 1;
  if (keys['KeyS']) fz += 1;
  if (keys['KeyA']) fx -= 1;
  if (keys['KeyD']) fx += 1;
  if (joyOn) { fx += joyX; fz += joyY; }
  const len = Math.sqrt(fx * fx + fz * fz);
  if (len > 1) { fx /= len; fz /= len; }
  const sp = MOVE_SPEED * ((keys['ShiftLeft'] || keys['ShiftRight'] || touchSprint) ? SPRINT_MULT : 1);
  const sn = Math.sin(yaw), cs = Math.cos(yaw);
  _input.x = (fx * cs + fz * sn) * sp;
  _input.z = (-fx * sn + fz * cs) * sp;
  return _input;
}
