/**
 * The session summary: what happened, in the voice the player chose.
 *
 * Not a score screen. No rating, no percentage, no comparison with a previous
 * run — the forest does not grade anyone. These tests mostly hold that line.
 */
import { describe, it, expect } from 'vitest';
import { formatDuration, summaryLines } from '../sessionSummary.js';

describe('formatDuration', () => {
  it('speaks seconds, minutes and hours rather than a clock', () => {
    expect(formatDuration(1)).toBe('1 second');
    expect(formatDuration(45)).toBe('45 seconds');
    expect(formatDuration(60)).toBe('1 minute');
    expect(formatDuration(90)).toBe('1 minute, 30s');
    expect(formatDuration(600)).toBe('10 minutes');
    expect(formatDuration(3600)).toBe('1 hour');
    expect(formatDuration(3900)).toBe('1h 5m');
  });

  it('never reports a negative or nonsense duration', () => {
    for (const v of [-5, NaN, undefined, null, Infinity]) {
      expect(formatDuration(v), String(v)).toBe('0 seconds');
    }
  });
});

describe('summaryLines', () => {
  const stats = { orbs: 3, discoveries: 7, seconds: 620, restored: false };

  it('gives a heading and three lines in both voices', () => {
    for (const voice of ['child', 'adult']) {
      const l = summaryLines(stats, voice);
      expect(l, voice).toHaveLength(4);
      for (const line of l) expect(line.length, `${voice}: "${line}"`).toBeGreaterThan(0);
    }
  });

  it('says something different in each voice', () => {
    expect(summaryLines(stats, 'child')).not.toEqual(summaryLines(stats, 'adult'));
  });

  it('marks a restored world differently from an abandoned one', () => {
    const done = summaryLines({ ...stats, restored: true }, 'child')[0];
    const left = summaryLines({ ...stats, restored: false }, 'child')[0];
    expect(done).not.toBe(left);
  });

  it('handles an empty run without reading as a failure', () => {
    const l = summaryLines({ orbs: 0, discoveries: 0, seconds: 20 }, 'child');
    const text = l.join(' ').toLowerCase();
    expect(text).not.toMatch(/fail|lost|none of|0 of 5|nothing at all|try again/);
    expect(text).toContain('yet');          // "not yet", not "not at all"
  });

  it('never grades the player', () => {
    for (const voice of ['child', 'adult']) {
      for (const orbs of [0, 3, 5]) {
        const text = summaryLines({ orbs, discoveries: orbs * 2, seconds: 300 }, voice).join(' ');
        expect(text, `${voice}/${orbs}`).not.toMatch(/%|score|rank|rating|better|worse|best|record/i);
      }
    }
  });

  it('reports the counts it was given, orb cap included', () => {
    const l = summaryLines({ orbs: 5, discoveries: 12, seconds: 61 }, 'adult').join(' ');
    expect(l).toContain('5 of 5');
    expect(l).toContain('12');
    expect(l).toContain('1 minute');
  });

  it('treats junk counts as zero rather than printing NaN', () => {
    const l = summaryLines({ orbs: NaN, discoveries: undefined, seconds: NaN }, 'adult').join(' ');
    expect(l).not.toMatch(/NaN|undefined/);
  });

  it('gets the singular right for one thing', () => {
    const l = summaryLines({ orbs: 1, discoveries: 1, seconds: 61 }, 'child').join(' ');
    expect(l).toContain('1 thing learned');
    expect(l).not.toContain('1 things');
  });
});
