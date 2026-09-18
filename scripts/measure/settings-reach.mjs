/**
 * M1.2 gate: do the settings reach the things they claim to control, and do
 * they survive a reload?
 *
 * A settings panel that writes to storage but never reaches a consumer looks
 * identical to a working one from the outside, which is the failure this
 * checks for: each assertion reads the CONSUMER, not the stored value.
 */
import { chromium } from 'playwright';
const ok = [], bad = [];
const check = (n, p, d) => (p ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({ args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox'] });
const p = await (await b.newContext({ viewport:{width:1024,height:640} })).newPage();
const errors = [];
p.on('pageerror', e => errors.push(String(e)));
p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

await p.goto('http://localhost:5173/', { waitUntil:'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout:30000 });

const gear = await p.$('#settings-handle');
check('the gear is on screen', !!gear);
check('the orb count clears the gear and the hamburger',
  await p.evaluate(() => document.querySelector('#orb-hud')?.style.right === '118px'),
  await p.evaluate(() => document.querySelector('#orb-hud')?.style.right));

// Open it and count the controls the player actually gets.
if (gear) await gear.click({ force:true, timeout:10000 });
const controls = await p.evaluate(() => {
  const panel = document.querySelector('#settings-panel');
  if (!panel) return null;
  return {
    visible: panel.style.display === 'block',
    sliders: panel.querySelectorAll('input[type=range]').length,
    buttons: panel.querySelectorAll('button').length,
  };
});
check('the panel opens', !!controls?.visible);
check('every slider setting has a slider', controls?.sliders === 4, `sliders=${controls?.sliders}`);
check('the toggles and actions are there', controls?.buttons >= 6, `buttons=${controls?.buttons}`);

// Write through the real API, then read the CONSUMERS.
await p.evaluate(async () => {
  const m = await import('/src/state/settingsState.js');
  m.setSetting('lookSensitivity', 2.5);
  m.setSetting('invertY', true);
  m.setSetting('reducedMotion', true);
  m.setSetting('textSize', 1.35);
  m.setSetting('qualityFloor', 1);
  m.setSetting('masterVolume', 0.9);
});
// Read through LumiDebug, which lives in the SAME module instance as main.js.
// A dynamic import() here can resolve to a second copy of the module under
// Vite's dev graph, and a second copy has its own module-scope variables --
// which looks exactly like a setting that never reached its consumer.
const applied = await p.evaluate(() => {
  const a = window.LumiDebug.settings().applied;
  return { ...a, sens: a.lookSensitivity, invert: a.invertY, reduced: a.reducedMotion,
    floor: a.qualityFloor, cssScale: a.textScale,
    hudPx: getComputedStyle(document.querySelector('#hud')).fontSize };
});
check('look sensitivity reached input.js', applied.sens === 2.5, `sens=${applied.sens}`);
check('invert Y reached input.js', applied.invert === true);
check('reduced motion reached player.js', applied.reduced === true);
check('the quality floor reached the scaler', applied.floor === 1, `floor=${applied.floor}`);
check('the text scale reached the CSS variable', applied.cssScale === '1.35', `var=${applied.cssScale}`);
check('the HUD actually got bigger', parseFloat(applied.hudPx) > 12, `hud=${applied.hudPx}`);

// Reload: the consumers must come back up already holding the stored values.
await p.reload({ waitUntil:'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout:30000 });
const after = await p.evaluate(() => {
  const s = window.LumiDebug.settings();
  return { stored: s.stored, sens: s.applied.lookSensitivity, reduced: s.applied.reducedMotion,
    floor: s.applied.qualityFloor, cssScale: s.applied.textScale };
});
check('settings survive a reload', after.stored.lookSensitivity === 2.5 && after.stored.textSize === 1.35,
  JSON.stringify({ sens: after.stored.lookSensitivity, text: after.stored.textSize }));
check('consumers boot already holding the stored values',
  after.sens === 2.5 && after.reduced === true && after.floor === 1 && after.cssScale === '1.35',
  JSON.stringify(after));
check('no page errors', errors.length === 0, errors.slice(0,3).join(' | '));

await b.close();
console.log([...ok.map(s=>`  PASS  ${s}`), ...bad.map(s=>`  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);
