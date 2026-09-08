import { describe, it, expect } from 'vitest';
import {
  isPositiveNumber,
  isNonNegativeNumber,
  parseSafeNumber,
  validateSourdoughInputs,
} from './validation';

describe('Validation Engine', () => {
  it('correctly identifies positive numbers and rejects invalid ones', () => {
    expect(isPositiveNumber(10)).toBe(true);
    expect(isPositiveNumber(0.1)).toBe(true);
    expect(isPositiveNumber(0)).toBe(false);
    expect(isPositiveNumber(-5)).toBe(false);
    expect(isPositiveNumber(NaN)).toBe(false);
    expect(isPositiveNumber(Infinity)).toBe(false);
    expect(isPositiveNumber('10')).toBe(false);
  });

  it('correctly identifies non-negative numbers', () => {
    expect(isNonNegativeNumber(0)).toBe(true);
    expect(isNonNegativeNumber(100)).toBe(true);
    expect(isNonNegativeNumber(-1)).toBe(false);
  });

  it('safely parses raw numbers with fallback', () => {
    expect(parseSafeNumber(500, 0)).toBe(500);
    expect(parseSafeNumber(' 350 ', 0)).toBe(350);
    expect(parseSafeNumber('', 100)).toBe(100);
    expect(parseSafeNumber('invalid', 200)).toBe(200);
    expect(parseSafeNumber(null, 50)).toBe(50);
  });

  it('validates sourdough inputs and flags invalid inputs', () => {
    const valid = validateSourdoughInputs({
      flourGrams: 500,
      waterGrams: 350,
      starterGrams: 100,
      starterHydrationPercent: 100,
      saltValue: 10,
    });
    expect(valid.isValid).toBe(true);

    const invalid = validateSourdoughInputs({
      flourGrams: 0,
      waterGrams: -10,
      starterGrams: 100,
      starterHydrationPercent: 200, // exceeds 150
      saltValue: -2,
    });
    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.flourGrams).toBeDefined();
    expect(invalid.errors.waterGrams).toBeDefined();
    expect(invalid.errors.starterHydrationPercent).toBeDefined();
    expect(invalid.errors.saltValue).toBeDefined();
  });
});
