/**
 * Repository configuration that a change can silently undo.
 *
 * .gitattributes keeps line endings the same on the Windows workstation and on
 * anything else that checks the repo out. The renormalisation itself is a ship
 * step; what this holds is that the rules exist and that the binary types the
 * repo really contains are not subject to eol conversion.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const attrs = readFileSync(resolve(import.meta.dirname, '../../.gitattributes'), 'utf8')
  .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));

describe('.gitattributes', () => {
  it('stores and checks out text with LF everywhere', () => {
    expect(attrs).toContain('* text=auto eol=lf');
  });

  it('marks the image and font types as binary', () => {
    const binary = attrs.filter((l) => /\sbinary$/.test(l)).map((l) => l.split(/\s+/)[0]);
    for (const ext of ['*.png', '*.ico', '*.jpg', '*.woff2']) expect(binary, ext).toContain(ext);
  });

  it('puts the catch-all first, so the specific rules below it win', () => {
    expect(attrs[0]).toBe('* text=auto eol=lf');
  });
});
