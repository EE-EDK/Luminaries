import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('narrativeState (fresh module per test)', () => {
  let narrative;

  beforeEach(async () => {
    vi.resetModules();
    const bus = await import('../../kernel/eventBus.js');
    bus.reset();
    narrative = await import('../narrativeState.js');
  });

  it('contract: default perspective is child', () => {
    expect(narrative.getPerspective()).toBe('child');
  });

  it('setPerspective updates when value changes', () => {
    narrative.setPerspective('adult');
    expect(narrative.getPerspective()).toBe('adult');
  });

  it('setPerspective is noop when same string', async () => {
    const ev = vi.fn();
    const bus = await import('../../kernel/eventBus.js');
    bus.on(bus.Events.PERSPECTIVE_CHANGED, ev);
    narrative.setPerspective('child');
    expect(ev).not.toHaveBeenCalled();
    bus.off(bus.Events.PERSPECTIVE_CHANGED, ev);
  });

  it('setPerspective emits when switching to adult', async () => {
    const ev = vi.fn();
    const bus = await import('../../kernel/eventBus.js');
    bus.on(bus.Events.PERSPECTIVE_CHANGED, ev);
    narrative.setPerspective('adult');
    expect(ev).toHaveBeenCalledTimes(1);
    expect(ev.mock.calls[0][0]).toMatchObject({ perspective: 'adult' });
    bus.off(bus.Events.PERSPECTIVE_CHANGED, ev);
  });

  it('togglePerspective switches child to adult', () => {
    narrative.togglePerspective();
    expect(narrative.getPerspective()).toBe('adult');
  });

  it('togglePerspective switches adult to child', () => {
    narrative.setPerspective('adult');
    narrative.togglePerspective();
    expect(narrative.getPerspective()).toBe('child');
  });

  it('markDiscovered + isDiscovered roundtrip', () => {
    expect(narrative.isDiscovered('deer')).toBe(false);
    narrative.markDiscovered('deer');
    expect(narrative.isDiscovered('deer')).toBe(true);
  });

  it('unknown discovery key reads falsy', () => {
    expect(narrative.isDiscovered('nonexistent')).toBe(false);
  });

  it('multiple discoveries independent', () => {
    narrative.markDiscovered('deer');
    narrative.markDiscovered('pond');
    expect(narrative.isDiscovered('deer')).toBe(true);
    expect(narrative.isDiscovered('pond')).toBe(true);
    expect(narrative.isDiscovered('moth')).toBe(false);
  });

  it('markDiscovered twice remains true', () => {
    narrative.markDiscovered('jelly');
    narrative.markDiscovered('jelly');
    expect(narrative.isDiscovered('jelly')).toBe(true);
  });
});
