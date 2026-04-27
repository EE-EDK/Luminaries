import { on, Events } from '../kernel/eventBus.js';
import { ORB_N } from '../constants.js';
import { getQuestState } from '../quest/questState.js';

const MSG_TYPE = 'puffling-home-theme';

function themeKeyFromOrbCount(n) {
  return n >= ORB_N ? 'COTTAGECORE' : 'BIOLUMINESCENT';
}

function postTheme(iframe, key) {
  try {
    iframe.contentWindow?.postMessage({ type: MSG_TYPE, theme: key }, '*');
  } catch (_) {
    /* cross-origin or not ready */
  }
}

/**
 * Picture-in-picture mushroom home: bioluminescent until all orbs found, then cottagecore.
 * Asset: public/assets/mushroom-house-puffling-home.html
 */
export function initPufflingHomePreview() {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const wrap = document.createElement('div');
  wrap.id = 'puffling-home-preview';
  wrap.title = 'Puffling mushroom home';
  Object.assign(wrap.style, {
    position: 'fixed',
    right: '12px',
    bottom: '96px',
    width: '200px',
    height: '150px',
    zIndex: '95',
    pointerEvents: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 0 2px rgba(100,255,180,.25), 0 8px 24px rgba(0,0,0,.5)',
    opacity: '0.92',
  });

  const iframe = document.createElement('iframe');
  iframe.setAttribute('title', 'Puffling home preview');
  const initialKey = themeKeyFromOrbCount(getQuestState().orbsFound);
  const themeParam = initialKey === 'COTTAGECORE' ? 'cottagecore' : 'bioluminescent';
  iframe.src = `${base}assets/mushroom-house-puffling-home.html?embed=1&theme=${themeParam}`;
  Object.assign(iframe.style, {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block',
  });

  wrap.appendChild(iframe);
  document.body.appendChild(wrap);

  const syncFromQuest = () => postTheme(iframe, themeKeyFromOrbCount(getQuestState().orbsFound));
  iframe.addEventListener('load', syncFromQuest);

  on(Events.ORB_COLLECTED, (d) => {
    postTheme(iframe, themeKeyFromOrbCount(d.orbsFound));
  });
}
