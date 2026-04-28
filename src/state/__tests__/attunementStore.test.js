import { describe, it, expect, beforeEach } from 'vitest';
import * as a from '../attunementStore.js';

beforeEach(() => {
  a.reset();
});

describe('attunementStore', () => {
  it('contract: reset clears flash, type, echo', () => {
    a.setAttuneFlash(2, 'deer');
    a.setEchoTimer(5);
    a.reset();
    expect(a.attuneFlashTimer).toBe(0);
    expect(a.attuneFlashType).toBe(null);
    expect(a.echoTimer).toBe(0);
  });

  it('setAttuneFlash writes timer and type', () => {
    a.setAttuneFlash(0.5, 'jelly');
    expect(a.attuneFlashTimer).toBe(0.5);
    expect(a.attuneFlashType).toBe('jelly');
  });

  it('decayAttuneFlash subtracts dt', () => {
    a.setAttuneFlash(4, 'moth');
    a.decayAttuneFlash(1.5);
    expect(a.attuneFlashTimer).toBe(2.5);
  });

  it('decayAttuneFlash can undershoot below zero', () => {
    a.setAttuneFlash(0.1, 'puff');
    a.decayAttuneFlash(2);
    expect(a.attuneFlashTimer).toBeLessThan(0);
  });

  it('setEchoTimer standalone', () => {
    a.setEchoTimer(7.7);
    expect(a.echoTimer).toBe(7.7);
  });

  it('decayEchoTimer reduces echo countdown', () => {
    a.setEchoTimer(10);
    a.decayEchoTimer(4);
    expect(a.echoTimer).toBe(6);
  });

  it('attuneFlashType can be null explicitly via reset path', () => {
    a.setAttuneFlash(1, null);
    expect(a.attuneFlashType).toBe(null);
  });

  it('multiple decays stack for echo', () => {
    a.setEchoTimer(5);
    a.decayEchoTimer(2);
    a.decayEchoTimer(2);
    expect(a.echoTimer).toBe(1);
  });

  it('flash decay does not reset type until caller changes it', () => {
    a.setAttuneFlash(10, 'deer');
    a.decayAttuneFlash(3);
    expect(a.attuneFlashType).toBe('deer');
  });

  it('echo decay large dt undershoots below zero', () => {
    a.setEchoTimer(0.2);
    a.decayEchoTimer(50);
    expect(a.echoTimer).toBeLessThan(0);
  });
});
