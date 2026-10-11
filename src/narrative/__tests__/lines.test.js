/**
 * The new lines: both voices, every time, and a story that adds up.
 *
 * lines.js is the one file the owner will read aloud and rewrite, so these
 * tests hold the SHAPE of the content rather than the sentences: every pair has
 * both halves, the halves are different, the tokens resolve, and the five
 * fragments are exactly as many as there are orbs. A pass that rewrites a line
 * can change any of its words and break nothing but the sentence.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as LINES from '../lines.js';
import {
  WIZARD, INTRO_PROMPTS, FAR_FIELD_HINT, farFieldPair, WISHES, CONSTELLATION_NAMES,
  FRAGMENTS, FRAGMENT_ASSEMBLY, HOUSE_MEMORIES,
} from '../lines.js';
import { speak } from '../voice.js';
import { TERMS, tokensIn } from '../glossary.js';
import { CONTROLS } from '../controls.js';
import { ORB_N } from '../../constants.js';

/** Every {child, adult} pair lines.js exports, with a name to report it by. */
function everyPair() {
  const out = [];
  const isPair = (v) => v && typeof v === 'object' && typeof v.child === 'string' && typeof v.adult === 'string';
  for (const [name, v] of Object.entries(LINES)) {
    if (isPair(v)) out.push([name, v]);
    else if (Array.isArray(v)) v.forEach((p, i) => { if (isPair(p)) out.push([`${name}[${i}]`, p]); });
    else if (v && typeof v === 'object') {
      for (const [k, p] of Object.entries(v)) if (isPair(p)) out.push([`${name}.${k}`, p]);
    }
  }
  return out;
}

/** The chat pools: objects holding parallel child/adult arrays. */
function chatPools() {
  return Object.entries(LINES)
    .filter(([, v]) => v && Array.isArray(v.child) && Array.isArray(v.adult));
}

describe('lines.js is flagged as a draft', () => {
  it('opens with the owner-pass marker', () => {
    const src = readFileSync(resolve(import.meta.dirname, '../lines.js'), 'utf8');
    expect(src.split('\n')[0]).toBe('// DRAFT — owner voice pass pending');
  });
});

describe('every pair has both voices', () => {
  const pairs = everyPair();

  it('finds a believable number of pairs, so the checks below are not vacuous', () => {
    // 5 wizard + 2 intro + 1 assembly + 5 wishes + 5 names + 5 fragments + 4 houses
    expect(pairs.length).toBeGreaterThanOrEqual(27);
  });

  it('gives each half real text', () => {
    for (const [name, p] of pairs) {
      expect(p.child.trim().length, `${name}.child`).toBeGreaterThan(0);
      expect(p.adult.trim().length, `${name}.adult`).toBeGreaterThan(0);
    }
  });

  it('never gives the same words to both halves', () => {
    for (const [name, p] of pairs) {
      expect(p.child, name).not.toBe(p.adult);
      expect(speak(p.child, 'child', { touch: false }), name)
        .not.toBe(speak(p.adult, 'adult', { touch: false }));
    }
  });

  it('only names glossary terms that exist', () => {
    for (const [name, p] of pairs) {
      for (const half of [p.child, p.adult]) {
        for (const tok of tokensIn(half)) expect(TERMS[tok.key], `${name} {t:${tok.key}}`).toBeDefined();
      }
    }
  });

  it('leaves no token on screen once resolved, on either platform', () => {
    for (const [name, p] of pairs) {
      for (const touch of [false, true]) {
        // FAR_FIELD_HINT carries {creature}/{dist} slots filled by farFieldPair,
        // and is checked below once they are.
        if (name === 'FAR_FIELD_HINT') continue;
        expect(speak(p.child, 'child', { touch }), `${name} child`).not.toMatch(/[{}]/);
        expect(speak(p.adult, 'adult', { touch }), `${name} adult`).not.toMatch(/[{}]/);
      }
    }
  });
});

describe('the wizard speaks in both registers at every beat', () => {
  it('has the five beats', () => {
    expect(Object.keys(WIZARD).sort()).toEqual(['approach', 'deadSoul', 'humPrompt', 'proclaim', 'scream']);
  });

  it('keeps the hum prompt platform-correct in both voices', () => {
    for (const voice of ['child', 'adult']) {
      const desktop = speak(WIZARD.humPrompt[voice], voice, { touch: false });
      const touch = speak(WIZARD.humPrompt[voice], voice, { touch: true });
      expect(desktop, voice).not.toBe(touch);
      expect(touch, voice).toContain('HUM slider');
    }
  });

  it('opens with the approved voice samples', () => {
    expect(WIZARD.deadSoul.child).toBe('You came back. He said you would.');
    expect(WIZARD.deadSoul.adult).toBe('Diagnostic routine detected. My cycle should have ended.');
  });
});

describe('the title prompts', () => {
  it('say tap on a phone and click on a desktop, in both voices', () => {
    for (const key of ['begin', 'beginNew']) {
      for (const voice of ['child', 'adult']) {
        expect(speak(INTRO_PROMPTS[key][voice], voice, { touch: true }), `${key} ${voice}`).toMatch(/^tap to /);
        expect(speak(INTRO_PROMPTS[key][voice], voice, { touch: false }), `${key} ${voice}`).toMatch(/^click to /);
        expect(speak(INTRO_PROMPTS[key][voice], voice, { touch: true }), `${key} ${voice}`).not.toMatch(/click/);
      }
    }
  });

  it('names a begin control on both platforms', () => {
    expect(CONTROLS.begin.touch.child).toBe('tap');
    expect(CONTROLS.begin.desktop.child).toBe('click');
  });
});

describe('the far-field hint', () => {
  it('names the species its own way in each register, with the range', () => {
    const p = farFieldPair('moth', 17);
    expect(speak(p.child, 'child')).toBe('Pitch matches moon moth — move closer (~17m)');
    expect(speak(p.adult, 'adult')).toContain('orbital pollinator');
    expect(speak(p.adult, 'adult')).toContain('~17m');
  });

  it('leaves no slot unfilled for any of the four bands', () => {
    for (const type of ['deer', 'moth', 'jelly', 'puff']) {
      const p = farFieldPair(type, 25);
      for (const voice of ['child', 'adult']) {
        expect(speak(p[voice], voice), `${type} ${voice}`).not.toMatch(/[{}]/);
      }
    }
  });

  it('is built from the shared hint, not retyped', () => {
    expect(FAR_FIELD_HINT.child).toContain('{creature}');
    expect(FAR_FIELD_HINT.adult).toContain('{dist}');
  });
});

describe('the shooting-star wishes', () => {
  it('has one wish per sync level', () => {
    expect(WISHES).toHaveLength(ORB_N);
  });

  it('gives every adult wish the archive label the story bible gives it', () => {
    for (const w of WISHES) expect(w.adult, w.adult).toMatch(/^(Archival fragment|Fragment): /);
  });
});

describe('the constellation names', () => {
  it('has one name per constellation', () => {
    expect(CONSTELLATION_NAMES).toHaveLength(ORB_N);
  });
});

describe('the fragments', () => {
  it('are exactly as many as there are orbs', () => {
    expect(FRAGMENTS).toHaveLength(ORB_N);
  });

  it('are numbered in order in the archive stamp', () => {
    FRAGMENTS.forEach((f, i) => expect(f.adult, `fragment ${i}`).toContain(`FRAGMENT ${i + 1}/${ORB_N}`));
  });

  it('keep one filer and a clock that only runs forward', () => {
    // The stamps are archival metadata: a fragment dated earlier than the one
    // before it, or filed by someone else, would be a continuity error in a
    // story whose whole subject is that the record was kept faithfully.
    const cycles = FRAGMENTS.map((f) => Number(/cycle (\d+)/.exec(f.adult)[1]));
    const dates = FRAGMENTS.map((f) => /(\d{4}-\d{2}-\d{2})/.exec(f.adult)[1]);
    for (let i = 1; i < FRAGMENTS.length; i++) {
      expect(cycles[i], `cycle ${i}`).toBeGreaterThan(cycles[i - 1]);
      expect(dates[i] > dates[i - 1], `date ${i}`).toBe(true);
    }
    for (const f of FRAGMENTS) expect(f.adult).toContain('filed R.V.');
  });

  it('are joined by a sixth line that names the parent, the daughter and the fireflies', () => {
    const adult = speak(FRAGMENT_ASSEMBLY.adult, 'adult');
    expect(adult).toMatch(/parent/i);
    expect(adult).toMatch(/daughter/i);
    expect(adult).toMatch(/fireflies/i);
    expect(speak(FRAGMENT_ASSEMBLY.child, 'child')).toMatch(/fireflies/i);
  });
});

describe('the house memories', () => {
  it('has several memories, so neighbouring villages do not all say the same thing', () => {
    expect(HOUSE_MEMORIES.length).toBeGreaterThanOrEqual(4);
  });
});

describe('the puffling pools', () => {
  const pools = chatPools();

  it('finds the pools, so the checks are not vacuous', () => {
    expect(pools.map(([n]) => n)).toEqual(expect.arrayContaining([
      'MESSAGES_DIMMED', 'MESSAGES_RESTORED', 'MESSAGES_NEAR_ORB', 'MESSAGES_ATTUNING',
      'MESSAGES_CARRYING', 'MESSAGES_GENERAL', 'MESSAGES_MEMORY_EARLY', 'MESSAGES_MEMORY_LATE',
      'MESSAGES_MEMORY_DONE', 'MESSAGES_MEMORY_DONE_POST', 'MESSAGES_ARCHITECT',
    ]));
  });

  it('has as many adult lines as child lines in every pool', () => {
    // MESSAGES_CARRYING had nine child lines and eight adult ones. Nothing
    // crashed — the picker reads each side's own length — it just meant the
    // ninth puffling line had no archive reading.
    for (const [name, pool] of pools) {
      expect(pool.adult.length, name).toBe(pool.child.length);
    }
    expect(LINES.MESSAGES_CARRYING.child).toHaveLength(9);
  });

  it('gives every line text, and every pair different words', () => {
    for (const [name, pool] of pools) {
      pool.child.forEach((c, i) => {
        expect(c.trim().length, `${name}.child[${i}]`).toBeGreaterThan(0);
        expect(pool.adult[i].trim().length, `${name}.adult[${i}]`).toBeGreaterThan(0);
        expect(speak(c, 'child'), `${name}[${i}]`).not.toBe(speak(pool.adult[i], 'adult'));
      });
    }
  });

  it('leaves no token on screen once resolved', () => {
    for (const [name, pool] of pools) {
      for (const voice of ['child', 'adult']) {
        pool[voice].forEach((line, i) => {
          expect(speak(line, voice), `${name}.${voice}[${i}]`).not.toMatch(/[{}]/);
        });
      }
    }
  });

  it('lets only the post-reveal pools speak of the Architect', () => {
    // The reveal is a surprise. A pool the pufflings can draw from before the
    // wizard must not already know who the Architect was.
    const POST = new Set(['MESSAGES_ARCHITECT', 'MESSAGES_MEMORY_DONE_POST']);
    for (const [name, pool] of pools) {
      const mentions = [...pool.child, ...pool.adult].some((l) => tokensIn(l).some((t) => t.key === 'architect'));
      expect(mentions, name).toBe(POST.has(name));
    }
  });
});
