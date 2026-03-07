import { describe, it, expect, beforeEach } from 'vitest';
import { register, get, has, types, reset, EntityType } from '../registry.js';

beforeEach(() => reset());

describe('registry', () => {
  it('stores and retrieves arrays by type', () => {
    const jellies = [{ x: 1, z: 2 }, { x: 3, z: 4 }];
    register(EntityType.JELLIES, jellies);
    expect(get(EntityType.JELLIES)).toBe(jellies);
  });

  it('returns the live array (mutations visible)', () => {
    const arr = [];
    register(EntityType.MUSHROOMS, arr);
    arr.push({ id: 1 });
    expect(get(EntityType.MUSHROOMS)).toHaveLength(1);
  });

  it('returns empty array for unregistered types', () => {
    expect(get('nonexistent')).toEqual([]);
  });

  it('has() checks registration', () => {
    expect(has(EntityType.TREES)).toBe(false);
    register(EntityType.TREES, []);
    expect(has(EntityType.TREES)).toBe(true);
  });

  it('types() lists all registered types', () => {
    register(EntityType.DEER, []);
    register(EntityType.MOTHS, []);
    expect(types()).toContain(EntityType.DEER);
    expect(types()).toContain(EntityType.MOTHS);
    expect(types()).toHaveLength(2);
  });

  it('reset() clears all registrations', () => {
    register(EntityType.ORBS, []);
    register(EntityType.WISPS, []);
    reset();
    expect(types()).toHaveLength(0);
    expect(has(EntityType.ORBS)).toBe(false);
  });

  it('overwrites previous registration for same type', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    register(EntityType.FLOWERS, arr1);
    register(EntityType.FLOWERS, arr2);
    expect(get(EntityType.FLOWERS)).toBe(arr2);
  });
});
