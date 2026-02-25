let orbHudEl = null;

export function initOverlay() {
  orbHudEl = document.getElementById('orb-hud');
}

export function getOrbHudEl() {
  return orbHudEl;
}

export function showGame() {
  const o = document.getElementById('overlay');
  if (o) { o.style.opacity = '0'; setTimeout(() => { try { o.remove(); } catch (e) {} }, 2500); }
  if (orbHudEl) orbHudEl.style.display = 'block';
}
