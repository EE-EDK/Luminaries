/**
 * The shape of the entry point after the split: main.js is a thin sequencer,
 * and nothing in the boot path imports its way back to a module that is still
 * being evaluated.
 *
 * A circular import in ES modules does not fail loudly. The cycle's late
 * member sees `undefined` for a binding the early member has not finished
 * defining, and the symptom shows up as a ReferenceError minutes into a
 * session, not at build time. madge finds these; this test is the same check
 * with no dependency, run on every suite.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const SRC = resolve(import.meta.dirname, '../..');

function importsOf(file) {
  const text = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  const out = [];
  for (const m of text.matchAll(/^\s*(?:import|export)\s+(?:[^'"`;]*?\s+from\s+)?['"](\.[^'"]+)['"]/gm)) {
    const p = resolve(dirname(file), m[1]);
    out.push(p);
  }
  return out;
}

/** Depth-first from the entry; returns the first import cycle found, as a path of files. */
function findCycle(entry) {
  const state = new Map();           // file -> 1 visiting | 2 done
  const stack = [];
  let found = null;
  (function visit(f) {
    if (found) return;
    state.set(f, 1); stack.push(f);
    for (const d of importsOf(f)) {
      if (!existsSync(d)) throw new Error(`${f} imports ${d}, which does not exist`);
      if (state.get(d) === 1) { found = [...stack.slice(stack.indexOf(d)), d]; return; }
      if (!state.has(d)) visit(d);
      if (found) return;
    }
    stack.pop(); state.set(f, 2);
  })(entry);
  return { cycle: found, visited: state.size };
}

describe('the entry point', () => {
  it('reaches a believable part of the game, so "no cycle" is not "nothing examined"', () => {
    const { visited } = findCycle(resolve(SRC, 'main.js'));
    expect(visited).toBeGreaterThan(120);
  });

  it('has no import cycle anywhere under it', () => {
    const { cycle } = findCycle(resolve(SRC, 'main.js'));
    expect(cycle && cycle.map((f) => f.slice(SRC.length + 1)).join(' -> ')).toBeNull();
  });

  it('is a thin sequencer: it imports the pieces and runs them, nothing more', () => {
    const lines = readFileSync(resolve(SRC, 'main.js'), 'utf8').split('\n');
    expect(lines.length).toBeLessThan(60);
    const imports = importsOf(resolve(SRC, 'main.js')).map((f) => f.slice(SRC.length + 1));
    expect(imports).toEqual(['core/boot.js', 'core/loop.js', 'debug/debugWiring.js']);
  });

  it('is never imported back by the pieces it sequences', () => {
    for (const rel of ['core/boot.js', 'core/loop.js', 'core/director.js', 'debug/debugWiring.js']) {
      const deps = importsOf(resolve(SRC, rel)).map((f) => f.slice(SRC.length + 1));
      expect(deps, rel).not.toContain('main.js');
    }
  });

  it('runs the init in the order it always has: boot, then the debug tools, then the loop', () => {
    const src = readFileSync(resolve(SRC, 'main.js'), 'utf8');
    const at = (s) => src.indexOf(s);
    expect(at('boot();')).toBeGreaterThan(0);
    expect(at('initDebugTools();')).toBeGreaterThan(at('boot();'));
    expect(at('animate();')).toBeGreaterThan(at('initDebugTools();'));
  });
});
