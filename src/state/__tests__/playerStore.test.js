import { describe, it, expect, beforeEach } from 'vitest';
import * as ps from '../playerStore.js';

beforeEach(() => {
  ps.reset();
});

describe('playerStore', () => {
  it('contract: reset zeros feather timer, sprint, idle', () => {
    ps.setFeatherFallTimer(10);
    ps.setSprinting(true);
    ps.setPlayerIdleTime(99);
    ps.reset();
    expect(ps.featherFallTimer).toBe(0);
    expect(ps.sprinting).toBe(false);
    expect(ps.playerIdleTime).toBe(0);
  });

  it('decayFeatherFall reduces timer by dt', () => {
    ps.setFeatherFallTimer(5);
    ps.decayFeatherFall(2);
    expect(ps.featherFallTimer).toBe(3);
  });

  it('decayFeatherFall allows timer below zero when dt dominates', () => {
    ps.setFeatherFallTimer(0.5);
    ps.decayFeatherFall(99);
    expect(ps.featherFallTimer).toBeLessThan(0);
  });

  it('setSprinting toggles boolean', () => {
    ps.setSprinting(true);
    expect(ps.sprinting).toBe(true);
    ps.setSprinting(false);
    expect(ps.sprinting).toBe(false);
  });

  it('setPlayerIdleTime stores exact value', () => {
    ps.setPlayerIdleTime(12.34);
    expect(ps.playerIdleTime).toBe(12.34);
  });

  it('setFeatherFallTimer accepts zero', () => {
    ps.setFeatherFallTimer(0);
    expect(ps.featherFallTimer).toBe(0);
  });

  it('sequential decay steps are cumulative', () => {
    ps.setFeatherFallTimer(10);
    ps.decayFeatherFall(3);
    ps.decayFeatherFall(3);
    expect(ps.featherFallTimer).toBe(4);
  });

  it('idle time persists until reset', () => {
    ps.setPlayerIdleTime(1);
    ps.setSprinting(true);
    expect(ps.playerIdleTime).toBe(1);
  });

  it('sprinting independent of feather timer', () => {
    ps.setSprinting(true);
    ps.setFeatherFallTimer(8);
    expect(ps.sprinting).toBe(true);
    expect(ps.featherFallTimer).toBe(8);
  });

  it('large dt decay drives feather timer strongly negative', () => {
    ps.setFeatherFallTimer(1);
    ps.decayFeatherFall(1000);
    expect(ps.featherFallTimer).toBeLessThan(-900);
  });
});
