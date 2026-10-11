/**
 * The glossary, and the rule that keeps the surfaces using it.
 *
 * The narrative audit found eleven player-facing lines spelling a story term
 * out by hand — "The First Little Sun-Seed!", "Chronophage Regression: 40%",
 * and on the finale card "The Obelisk Is Whole!", in a word that belongs to
 * neither voice. None of them was wrong on the day it was typed. They drift
 * because there is nothing stopping the twelfth one from being typed
 * differently, and nothing to change when a term is renamed.
 *
 * So two checks have teeth here:
 *   1. every {t:…} token anywhere in src/ resolves to a real term, and
 *   2. no player-facing string in the nine narrative surfaces types a named
 *      term out by hand instead of using its token.
 *
 * The second one reads the surfaces with the audit's own extractor rather than
 * grepping the files, because "obelisk" appears about forty times in this
 * codebase as an identifier and exactly once as something a player read.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  TERMS, TERM_KEYS, ENFORCED_FORMS, term, termPair, resolveTerms, tokensIn,
} from '../glossary.js';
import { CREATURE_NAMES } from '../../quest/config.js';
import { extractFromSource } from '../../../scripts/narrative-audit.mjs';

/** The nine files the audit reads. Kept here so adding a surface fails loudly. */
const SURFACES = [
  'src/quest/config.js',
  'src/systems/discoveries.js',
  'src/world/sky.js',
  'src/systems/intro/index.js',
  'src/systems/pufflingChat.js',
  'src/updates/spiritHumVisuals.js',
  'src/updates/attunementVisuals.js',
  'src/systems/wizardPufflingEvent.js',
  'src/narrative/controls.js',
];

const ROOT = resolve(import.meta.dirname, '../../..');
const read = (rel) => readFileSync(resolve(ROOT, rel), 'utf8');

/** Every player-facing string in the surfaces, with where it came from. */
function playerFacingStrings() {
  const out = [];
  for (const rel of SURFACES) {
    const { rows } = extractFromSource(read(rel), rel, '');
    for (const r of rows) {
      for (const side of ['child', 'adult', 'single']) {
        if (typeof r[side] === 'string' && r[side]) {
          out.push({ rel, line: r.line, side, text: r[side] });
        }
      }
    }
  }
  return out;
}

describe('the table', () => {
  it('gives every term both voices, non-empty', () => {
    for (const key of TERM_KEYS) {
      expect(typeof TERMS[key].child, `${key}.child`).toBe('string');
      expect(typeof TERMS[key].adult, `${key}.adult`).toBe('string');
      expect(TERMS[key].child.length, `${key}.child`).toBeGreaterThan(0);
      expect(TERMS[key].adult.length, `${key}.adult`).toBeGreaterThan(0);
    }
  });

  it('never gives a term the same word in both voices', () => {
    // A term whose two halves are identical is not a term, it is a word, and
    // it does not need to be in here.
    for (const key of TERM_KEYS) {
      expect(TERMS[key].child, key).not.toBe(TERMS[key].adult);
    }
  });

  it('gives no creature term a leading article', () => {
    // "Find a {creature}" plus "a forest friend" shipped as "Find a a forest
    // friend" in the plainest tier of the seek HUD — the tier a stuck player
    // is most likely to be reading. The article belongs to the sentence.
    for (const k of ['jelly', 'deer', 'moth', 'puff', 'carrier']) {
      expect(term(k, 'child'), `${k}.child`).not.toMatch(/^(a|an|the) /i);
      expect(term(k, 'adult'), `${k}.adult`).not.toMatch(/^(a|an|the) /i);
    }
  });

  it('reads the creature names out of the quest config, not a second copy', () => {
    // All five, both voices. Checking three of them let a seeded "silver moth"
    // through: a parity test that covers part of a table proves nothing about
    // the rest of it.
    const MAP = { jelly: 'jelly', deer: 'deer', moth: 'moth', puff: 'puff', carrier: 'any' };
    for (const [key, cfgKey] of Object.entries(MAP)) {
      expect(TERM_KEYS, key).toContain(key);
      expect(term(key, 'child'), `${key}.child`).toBe(CREATURE_NAMES.child[cfgKey]);
      expect(term(key, 'adult'), `${key}.adult`).toBe(CREATURE_NAMES.adult[cfgKey]);
    }
  });
});

describe('term and termPair', () => {
  it('answer in the voice asked for, child by default', () => {
    expect(term('dimming', 'child')).toBe('Sleepy Dust');
    expect(term('dimming', 'adult')).toBe('Chronophage');
    expect(term('dimming')).toBe('Sleepy Dust');
    expect(termPair('dimming')).toEqual({ child: 'Sleepy Dust', adult: 'Chronophage' });
  });

  it('throw on a key that is not a term', () => {
    // No fallback: a caller asking for a term by name has nothing sensible to
    // show instead, and a typo here is a content bug the suite should catch.
    expect(() => term('bigCrystal')).toThrow(/no term "bigCrystal"/);
    expect(() => termPair('')).toThrow(/no term/);
  });
});

describe('resolveTerms', () => {
  it('substitutes in the voice it is given', () => {
    expect(resolveTerms('The First Little {t:orb}!', 'child')).toBe('The First Little Sun-Seed!');
    expect(resolveTerms('The First Little {t:orb}!', 'adult')).toBe('The First Little resonance anchor!');
  });

  it('honours the case modifiers', () => {
    expect(resolveTerms('{t:progress|upper}: 5/5', 'adult')).toBe('SYNCHRONIZATION INDEX: 5/5');
    expect(resolveTerms('five {t:orbs|lower}', 'child')).toBe('five sun-seeds');
    expect(resolveTerms('{t:orbs}', 'child')).toBe('Sun-Seeds');
  });

  it('leaves an unknown token visible instead of blanking the word', () => {
    // A visible {t:frobnicate} in a screenshot costs nothing. A sentence that
    // quietly lost a noun is the kind of thing that ships.
    expect(resolveTerms('a {t:frobnicate} here', 'child')).toBe('a {t:frobnicate} here');
  });

  it('returns a string with no tokens untouched, and survives a non-string', () => {
    expect(resolveTerms('plain words', 'child')).toBe('plain words');
    for (const bad of [null, undefined, 7, {}]) expect(resolveTerms(bad, 'child')).toBe(bad);
  });

  it('is not confused by a brace that is not a term token', () => {
    expect(resolveTerms('{hum} and {creature}', 'child')).toBe('{hum} and {creature}');
  });
});

describe('tokensIn', () => {
  it('finds every token and its modifier', () => {
    expect(tokensIn('{t:orb} and {t:orbs|lower} and {hum}'))
      .toEqual([{ key: 'orb', mod: null }, { key: 'orbs', mod: 'lower' }]);
  });

  it('starts from the beginning each time it is called', () => {
    // The token regex is module-scoped and global; a stale lastIndex would
    // make the second call on the same string come back empty.
    const s = '{t:orb}';
    expect(tokensIn(s)).toHaveLength(1);
    expect(tokensIn(s)).toHaveLength(1);
  });
});

describe('coverage: every token in the source resolves', () => {
  it('finds no {t:…} naming a term that does not exist', () => {
    const bad = [];
    for (const rel of SURFACES) {
      for (const tok of tokensIn(read(rel))) {
        if (!TERMS[tok.key]) bad.push(`${rel}: {t:${tok.key}}`);
      }
    }
    expect(bad).toEqual([]);
  });
});

describe('coverage: no surface types a named term by hand', () => {
  const strings = playerFacingStrings();

  it('reads a believable number of player-facing strings', () => {
    // If the extractor silently stopped working, every check below would pass
    // against an empty list. The corrected extractor reads 303 player-facing
    // strings across these nine files (measured 2026-10-11); this floor is
    // deliberately well under it and still not zero.
    expect(strings.length).toBeGreaterThan(150);
  });

  // A token is checked away first. `{t:obelisk}` contains the bare word this
  // check refuses, and flagging a line for using the glossary correctly is
  // how a check gets switched off.
  const authored = (text) => text.replace(/\{t:[A-Za-z]+(?:\|(?:lower|upper))?\}/g, '\u0000');
  const rx = (form) => new RegExp(`\\b${form.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

  it('finds no hardcoded named term', () => {
    const found = [];
    for (const s of strings) {
      const bare = authored(s.text);
      for (const e of ENFORCED_FORMS) {
        if (rx(e.form).test(bare)) {
          found.push(`${s.rel}:${s.line} [${s.side}] "${e.form}" (${e.voice}) in: ${s.text.slice(0, 60)}`);
        }
      }
    }
    expect(found).toEqual([]);
  });

  it('still catches a term typed out by hand', () => {
    // The check above passes on an empty list as readily as on a clean tree,
    // so here is the defect it is meant to catch, driven through the same
    // two functions: the finale card as it actually shipped.
    const asShipped = 'The Obelisk Is Whole!';
    const hits = ENFORCED_FORMS.filter((e) => rx(e.form).test(authored(asShipped)));
    expect(hits.map((e) => e.form)).toEqual(['Obelisk']);
    expect(ENFORCED_FORMS.filter((e) => rx(e.form).test(authored('{t:obelisk} is whole')))).toEqual([]);
  });
});
