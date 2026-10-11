/**
 * The narrative audit's extractor, against fixtures.
 *
 * This exists because the audit was wrong three times in a row and each time
 * the headline number moved: 98 single-voice lines, then 96, then 66. A
 * reporting tool whose numbers change when you look at it twice is not a
 * measurement, so each of those three bugs is now a fixture.
 */
import { describe, it, expect } from 'vitest';
import { extractFromSource, pairRows, termsIn, hardcodedIn } from '../narrative-audit.mjs';

const extract = (src) => {
  const { rows, counts } = extractFromSource(src);
  return { rows, counts, paired: pairRows(rows), singles: rows.filter((r) => r.single) };
};

describe('keyed tables', () => {
  const src = `
const CREATURE_NAMES = {
  child: {
    jelly: 'jellyfish',
    deer: 'deer',
    moth: 'moon moth',
  },
  adult: {
    jelly: 'bioluminescent drifter',
    deer: 'biological metronome',
    moth: 'orbital pollinator',
  },
};
`;
  it('keeps short words on the child side', () => {
    // BUG 1: 'deer' and 'moon moth' were filtered out for being short or
    // single-token, so the child side came up three entries short.
    const { counts } = extract(src);
    expect(counts.child).toBe(3);
    expect(counts.adult).toBe(3);
  });

  it('pairs by key, not by position', () => {
    const { paired } = extract(src);
    expect(paired).toHaveLength(3);
    const deer = paired.find((r) => r.table.endsWith('.deer'));
    expect(deer.child).toBe('deer');
    expect(deer.adult).toBe('biological metronome');
  });

  it('reports no missing halves when there are none', () => {
    const { paired } = extract(src);
    expect(paired.filter((r) => !r.child || !r.adult)).toHaveLength(0);
  });
});

describe('registers split across two constants', () => {
  const src = `
const IDLE_HINTS_CHILD = [
  ['the first cryptic child line goes here', 'the second child line here'],
];
const IDLE_HINTS_ADULT = [
  ['Lattice log: five dormant ignitions; each demands a borrowed voice', 'Fairy-ring sectors: brief g attenuation; exploit for mobility'],
];
const UNRELATED = 5;
`;
  it('treats _CHILD and _ADULT constants as one table', () => {
    // BUG 2: these were counted as single-voice, which overstated the
    // single-voice headline by nearly half.
    const { counts, singles } = extract(src);
    expect(counts.child).toBe(2);
    expect(counts.adult).toBe(2);
    expect(singles).toHaveLength(0);
  });

  it('keeps adult technical prose that reads like CSS', () => {
    // BUG 3: a colon plus a semicolon was treated as an inline style, so two
    // real adult lines vanished and invented two missing halves.
    const { paired } = extract(src);
    expect(paired).toHaveLength(2);
    expect(paired.map((r) => r.adult).join(' ')).toContain('Lattice log');
    expect(paired.map((r) => r.adult).join(' ')).toContain('Fairy-ring sectors');
  });

  it('ends the register at the next constant', () => {
    const { counts } = extract(src);
    expect(counts.child + counts.adult).toBe(4);
  });
});

describe('parallel arrays', () => {
  const src = `
const WISH_TEXTS = {
  child: [
    'a wish the child voice makes',
    'another wish in the child voice',
  ],
  adult: [
    'Fragment: a wish in the archival voice',
    'Fragment: another archival wish line',
  ],
};
`;
  it('pairs arrays by position, which is what the arrays mean', () => {
    const { paired } = extract(src);
    expect(paired).toHaveLength(2);
    expect(paired[0].child).toContain('a wish the child');
    expect(paired[0].adult).toContain('archival voice');
  });

  it('reports a genuinely unequal pair as a missing half', () => {
    const uneven = `
const MESSAGES = {
  child: [
    'the first child message here',
    'the second child message here',
    'a third child message with no partner',
  ],
  adult: [
    'The first adult message here',
    'The second adult message here',
  ],
};
`;
    const { paired } = extract(uneven);
    const missing = paired.filter((r) => !r.child || !r.adult);
    expect(missing).toHaveLength(1);
    expect(missing[0].child).toContain('no partner');
    expect(missing[0].adult).toBe(null);
  });
});

describe('single-voice text', () => {
  const src = `
const NARRATION = [
  'Once, this forest sang.',
  'Every root hummed with light.',
];
`;
  it('reports a voiceless array as single-voice', () => {
    const { singles, counts } = extract(src);
    expect(singles).toHaveLength(2);
    expect(counts.child).toBe(0);
    expect(counts.adult).toBe(0);
  });
});

describe('what it refuses to count', () => {
  it('ignores styles, selectors, paths and template fragments', () => {
    const src = `
const el = document.createElement('div');
el.style.cssText = 'position:absolute;top:10px;left:50%;color:#fff';
el.id = 'discovery-text';
const label = \`\${primary} / \${secondary}\`;
fetch('./data/strings.json');
`;
    const { rows } = extract(src);
    expect(rows).toHaveLength(0);
  });

  it('does not mistake a code identifier for a line of dialogue', () => {
    const { rows } = extract("const k = 'MESSAGES_CARRYING';\nconst n = 'abc';\n");
    expect(rows).toHaveLength(0);
  });
});


// ---------------------------------------------------------------------------
// Bug 4: a brace inside a player-facing string was counted as structure.
// ---------------------------------------------------------------------------
// The depth counter read every { and } on the line, including the ones inside
// quotes. It stayed harmless while the only braces in player text were
// balanced control tokens; glossary tokens made it bite, and the failure was
// not an error but a believable number — four tokenised lines in
// quest/config.js came back as seven single-voice rows, and pufflingChat grew
// fourteen missing halves that were not there.
describe('braces inside a string are text, not nesting', () => {
  const FIXTURE = `
export const ORB_NARRATIVE = {
  child: [
    'The First Little {t:orb}!',
    'The Forest Remembers You',
    'All the {t:orbs} Are Home!'
  ],
  adult: [
    'Zone 1 Recalibrated',
    '{t:dimming} Regression: 40%',
    '{t:progress|upper}: 5/5'
  ]
};
`;

  it('keeps the voice block open across a tokenised line', () => {
    const { rows } = extractFromSource(FIXTURE, 'fixture.js', '');
    expect(rows.filter((r) => r.half === 'child')).toHaveLength(3);
    expect(rows.filter((r) => r.half === 'adult')).toHaveLength(3);
    expect(rows.filter((r) => r.single)).toHaveLength(0);
  });

  it('pairs all three rows and reports no missing half', () => {
    const paired = pairRows(extractFromSource(FIXTURE, 'fixture.js', '').rows);
    expect(paired).toHaveLength(3);
    expect(paired.filter((r) => !r.child || !r.adult)).toEqual([]);
    expect(paired[2].child).toBe('All the {t:orbs} Are Home!');
    expect(paired[2].adult).toBe('{t:progress|upper}: 5/5');
  });

  it('still closes the block on a real bracket', () => {
    const { rows } = extractFromSource(FIXTURE + "const AFTER = ['plain words here'];\n", 'fixture.js', '');
    expect(rows.filter((r) => r.single).map((r) => r.single)).toEqual(['plain words here']);
  });
});

// ---------------------------------------------------------------------------
// The raw-word count must not count the fix as the problem.
// ---------------------------------------------------------------------------
describe('term counting', () => {
  it('counts a story word typed out in prose', () => {
    expect(termsIn('the obelisk hums')).toContain('obelisk');
  });

  it('does not count the key inside a glossary token', () => {
    // {t:obelisk} is a line naming the obelisk *through* the glossary. Counting
    // it made the headline number rise as lines were converted, which rewards
    // the bug and punishes the fix.
    expect(termsIn('the {t:obelisk} hums')).toEqual([]);
    expect(termsIn('five {t:orbs|lower} wait')).toEqual([]);
  });

  it('catches a named glossary form typed out by hand', () => {
    expect(hardcodedIn('The Obelisk Is Whole!')).toEqual(['Obelisk']);
    expect(hardcodedIn('The First Little Sun-Seed!')).toEqual(['Sun-Seed']);
    expect(hardcodedIn('{t:dimming} Regression: 40%')).toEqual([]);
    // This is the case that needs the token stripped: the enforced form
    // "Obelisk" is a substring of the token that replaces it, so a check that
    // read the raw line would flag every line that had been fixed.
    expect(hardcodedIn('The {t:obelisk} Is Whole!')).toEqual([]);
  });

  it('leaves the poetic synonyms alone', () => {
    // "needle", "tower" and "coals" are the cryptic tier's own words, not
    // glossary forms. A check that failed on those is a check that gets
    // switched off.
    expect(hardcodedIn('What fell from the gray needle as five sleeping coals?')).toEqual([]);
  });
});
