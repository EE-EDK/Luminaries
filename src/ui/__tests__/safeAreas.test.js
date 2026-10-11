/**
 * Safe areas: nothing the player must see or touch may sit under a camera
 * cut-out, a rounded corner or a home indicator.
 *
 * A node test cannot paint a notch, so this holds the two things it can read:
 * the page asks for the whole screen (viewport-fit=cover — without it iOS
 * letterboxes the page and every env() inset is zero, which makes the rest
 * of this decorative), and every corner-pinned element says its distance from
 * the edge through env(safe-area-inset-*). The browser gate
 * (scripts/measure/mobile.mjs) emulates real insets and measures the rectangles.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../../..');
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');
const EDGE_PX = /(?<![-\w])(top|right|bottom|left)\s*:\s*([1-9]\d*(?:\.\d+)?)px/g;

/** The `#id{...}` rule text in index.html's style block. */
function rule(id) {
  const m = html.match(new RegExp(`#${id}\\{([^}]*)\\}`));
  return m ? m[1] : null;
}

// Every screen-pinned element index.html declares. A new one belongs here; the
// floor below stops the list from quietly emptying.
const PINNED = ['hud', 'controls', 'joy-zone', 'btn-jump', 'btn-sprint',
  'hum-slider', 'hum-farfield-hint', 'hum-jelly-bar', 'orb-hud'];

describe('index.html', () => {
  it('asks for the whole screen, or the insets below are all zero', () => {
    const meta = html.match(/<meta name="viewport" content="([^"]*)"/);
    expect(meta, 'viewport meta').toBeTruthy();
    expect(meta[1]).toMatch(/viewport-fit=cover/);
  });

  it('declares every pinned element', () => {
    for (const id of PINNED) expect(rule(id), `#${id}`).toBeTruthy();
    expect(PINNED.length).toBeGreaterThanOrEqual(9);
  });

  it('measures every pinned element\'s offset from the edge through env()', () => {
    for (const id of PINNED) {
      const body = rule(id);
      const raw = [...body.matchAll(EDGE_PX)].map((m) => `${m[1]}:${m[2]}px`);
      expect(raw, `#${id} has an edge offset that ignores the safe area`).toEqual([]);
      const edges = [...body.matchAll(/(?<![-\w])(top|right|bottom|left)\s*:\s*calc\(/g)];
      expect(edges.length, `#${id} pins to no edge`).toBeGreaterThan(0);
      for (const e of body.matchAll(/(top|right|bottom|left):calc\([^)]*env\(safe-area-inset-(\w+)/g)) {
        expect(e[2], `#${id} ${e[1]} uses the inset of another edge`).toBe(e[1]);
      }
    }
  });
});

describe('script-built fixed elements', () => {
  const walk = (dir) => readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    if (n === '__tests__' || n === 'node_modules') return [];
    return statSync(p).isDirectory() ? walk(p) : (n.endsWith('.js') ? [p] : []);
  });
  const files = walk(join(ROOT, 'src'));

  it('reads a believable number of files, so the scan below is not vacuous', () => {
    expect(files.length).toBeGreaterThan(100);
  });

  it('puts no raw pixel offset from an edge on a position:fixed element', () => {
    const offenders = [];
    for (const f of files) {
      const src = readFileSync(f, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
      if (!/position\s*:\s*fixed/.test(src)) continue;
      for (const m of src.matchAll(EDGE_PX)) offenders.push(`${relative(ROOT, f)}: ${m[1]}:${m[2]}px`);
    }
    expect(offenders, 'use safeInset(edge, px) from utils/dom.js').toEqual([]);
  });

  it('finds the elements it is meant to police', () => {
    const fixed = files.filter((f) => /position\s*:\s*fixed/.test(readFileSync(f, 'utf8')));
    const names = fixed.map((f) => relative(ROOT, f));
    expect(names).toContain('src/ui/settingsPanel.js');
    expect(names).toContain('src/debug/devSkipPanel.js');
    expect(names).toContain('src/ui/soundCaptions.js');
    expect(names).toContain('src/ui/orientationPrompt.js');
  });
});
