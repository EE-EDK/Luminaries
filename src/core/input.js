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
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; mouseDown = false; });

// Mouse
renderer.domElement.addEventListener('mousedown', () => { mouseDown = true; triggerGo(); });
window.addEventListener('mouseup', () => { mouseDown = false; });
window.addEventListener('mousemove', (e) => {
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

if (mobile) {
  jzEl.style.display = 'block';
  bjEl.style.display = 'block';
  document.getElementById('controls').textContent = 'Stick: Move · Drag right: Look · JUMP';
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

bjEl.addEventListener('touchstart', (e) => {
  e.preventDefault(); e.stopPropagation(); triggerGo(); touchJump = true;
}, { passive: false });
bjEl.addEventListener('touchend', (e) => {
  e.preventDefault(); e.stopPropagation(); touchJump = false;
}, { passive: false });

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
  return { x: (fx * cs + fz * sn) * sp, z: (-fx * sn + fz * cs) * sp };
}
