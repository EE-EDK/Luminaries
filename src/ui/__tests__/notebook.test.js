/**
 * The notebook's words. Every entry the ledger can hold has a name in both
 * voices, and the rows the page draws come out in the voice being read.
 *
 * The labels are a DRAFT awaiting the owner's pass, so what is pinned here is
 * the contract and not the prose: a label exists, it has two halves, a story
 * term in it goes through the glossary, and nothing a player reads is left as a
 * raw {token}.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { NOTEBOOK_LABELS, notebookRows, pageTitle } from '../notebook.js';
import { ALL_ENTRIES, NOTEBOOK_PAGES, resetNotebook, markSeen, pageOf } from '../../state/notebookState.js';
import { tokensIn, TERMS } from '../../narrative/glossary.js';

beforeEach(() => resetNotebook());

describe('labels', () => {
  it('has a label for every entry, and no label for a thing the book does not hold', () => {
    expect(ALL_ENTRIES.length).toBeGreaterThanOrEqual(38);
    for (const k of ALL_ENTRIES) expect(NOTEBOOK_LABELS[k], `no label for ${k}`).toBeTruthy();
    for (const k of Object.keys(NOTEBOOK_LABELS)) expect(ALL_ENTRIES, `orphan label ${k}`).toContain(k);
  });

  it('gives every label both a child half and an adult half', () => {
    for (const k of ALL_ENTRIES) {
      expect(typeof NOTEBOOK_LABELS[k].child, `${k}.child`).toBe('string');
      expect(typeof NOTEBOOK_LABELS[k].adult, `${k}.adult`).toBe('string');
      expect(NOTEBOOK_LABELS[k].child.length, `${k}.child`).toBeGreaterThan(0);
      expect(NOTEBOOK_LABELS[k].adult.length, `${k}.adult`).toBeGreaterThan(0);
    }
  });

  it('names story terms through the glossary and only real terms', () => {
    let tokens = 0;
    for (const k of ALL_ENTRIES) {
      for (const side of ['child', 'adult']) {
        for (const t of tokensIn(NOTEBOOK_LABELS[k][side])) {
          tokens++;
          expect(TERMS[t.key], `${k}.${side} uses {t:${t.key}}`).toBeTruthy();
        }
      }
    }
    expect(tokens, 'the creatures and the obelisk are named by token').toBeGreaterThanOrEqual(6);
  });
});

describe('rows', () => {
  it('has a row per entry on the page, and every page has some', () => {
    let total = 0;
    for (const p of NOTEBOOK_PAGES) {
      const rows = notebookRows(p, { voice: 'child' });
      expect(rows.length, p).toBeGreaterThan(0);
      for (const r of rows) expect(pageOf(r.key)).toBe(p);
      total += rows.length;
    }
    expect(total).toBe(ALL_ENTRIES.length);
  });

  it('shows a placeholder, not the name, for an entry not yet seen', () => {
    const [r] = notebookRows('creature', { voice: 'child' });
    expect(r.seen).toBe(false);
    expect(r.primary).toBe('Not found yet');
  });

  it('shows the name once it is seen, in the voice being read', () => {
    markSeen('creature.puff');
    const child = notebookRows('creature', { voice: 'child' }).find((r) => r.key === 'creature.puff');
    const adult = notebookRows('creature', { voice: 'adult' }).find((r) => r.key === 'creature.puff');
    expect(child.seen).toBe(true);
    expect(child.primary).toBe('Puffling');
    expect(adult.primary).toBe('Micro-fauna');
  });

  it('never leaves a raw token on the page', () => {
    for (const k of ALL_ENTRIES) markSeen(k);
    for (const voice of ['child', 'adult']) {
      for (const p of NOTEBOOK_PAGES) {
        for (const r of notebookRows(p, { voice, truthRevealed: true })) {
          expect(`${r.primary} ${r.secondary || ''}`, `${r.key} (${voice})`).not.toMatch(/[{}]/);
        }
      }
    }
  });

  it('shows both registers once the veil is lifted, and one before', () => {
    markSeen('place.obelisk');
    const before = notebookRows('place', { voice: 'child', truthRevealed: false }).find((r) => r.key === 'place.obelisk');
    const after = notebookRows('place', { voice: 'child', truthRevealed: true }).find((r) => r.key === 'place.obelisk');
    expect(before.secondary).toBeNull();
    expect(before.primary).toBe('Big Crystal');
    expect(after.primary).toBe('Big Crystal');
    expect(after.secondary).toBe('Central Archive Index');
  });

  it('takes an injected ledger, so a page can be drawn for any state', () => {
    const rows = notebookRows('weather', { voice: 'child', seen: (k) => k === 'weather.MISTY' });
    expect(rows.filter((r) => r.seen).map((r) => r.key)).toEqual(['weather.MISTY']);
  });
});

describe('page titles', () => {
  it('titles every page in both voices', () => {
    for (const p of NOTEBOOK_PAGES) {
      expect(pageTitle(p, { voice: 'child' }).length, p).toBeGreaterThan(0);
      expect(pageTitle(p, { voice: 'child' }), p).not.toBe(pageTitle(p, { voice: 'adult' }));
    }
  });
});
