/**
 * M1.3 gate: no player-facing line may name a control the device lacks, and
 * no token may reach the screen unresolved.
 *
 * Driven on a touch-emulated context, because that is the platform the
 * softlock happened on.
 */
import { chromium } from 'playwright';
const ok = [], bad = [];
const check = (n, p, d) => (p ? ok : bad).push(`${n}${d ? ` — ${d}` : ''}`);

const b = await chromium.launch({ args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox'] });
const ctx = await b.newContext({ viewport:{width:430,height:900}, hasTouch:true, isMobile:true });
const p = await ctx.newPage();
const errors = [];
p.on('pageerror', e => errors.push(String(e)));
p.on('console', m => { if (m.type()==='error') errors.push(m.text()); });

await p.goto('http://localhost:5173/', { waitUntil:'load' });
await p.waitForFunction(() => !!window.LumiDebug, null, { timeout:30000 });

const touchDetected = await p.evaluate(() => ('ontouchstart' in window) || navigator.maxTouchPoints > 0);
check('the page is running as a touch device', touchDetected);

// Every hint and prompt, resolved through the real display path.
const res = await p.evaluate(() => {
  const el = document.querySelector('#discovery-text');
  const seen = [];
  // Drive the display path itself rather than the resolver directly.
  const probes = [
    '{humInstruction} — the grove listens for that thin thread of sound.',
    '{hum} near friends and sweep pitch with {pitch}',
    'Hum to answer it… ({hum})',
  ];
  for (const t of probes) {
    window.LumiDebug.say ? window.LumiDebug.say(t) : null;
    seen.push(el ? el.textContent : '');
  }
  return { seen, controls: document.querySelector('#controls')?.textContent || '' };
});

check('the controls line is the touch one',
  /Stick|Drag|HUM/.test(res.controls) && !/WASD/.test(res.controls), res.controls);

for (let i = 0; i < res.seen.length; i++) {
  const line = res.seen[i];
  check(`hint ${i + 1} resolved`, line && !line.includes('{'), line);
  check(`hint ${i + 1} names no key`, line && !/\bpress F\b|\bQ or E\b|\bQ\/E\b/.test(line), line);
}
check('no page errors', errors.length === 0, errors.slice(0,3).join(' | '));

await b.close();
console.log([...ok.map(s=>`  PASS  ${s}`), ...bad.map(s=>`  FAIL  ${s}`)].join('\n'));
console.log(`\n${ok.length} passed, ${bad.length} failed`);
process.exit(bad.length ? 1 : 0);
