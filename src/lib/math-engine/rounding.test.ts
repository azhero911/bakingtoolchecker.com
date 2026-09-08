import { describe, it, expect } from 'vitest';
import { roundTo, formatPercentage, formatWeight, formatFactor } from './rounding';

describe('Rounding & Display Formatting Engine', () => {
  it('correctly rounds decimals without floating point artifacts', () => {
    expect(roundTo(72.7272727, 1)).toBe(72.7);
    expect(roundTo(72.755, 2)).toBe(72.76);
    expect(roundTo(0.4296, 2)).toBe(0.43);
  });

  it('formats percentages cleanly', () => {
    expect(formatPercentage(72.7272727, 1)).toBe('72.7%');
    expect(formatPercentage(100, 1)).toBe('100.0%');
    expect(formatPercentage(NaN)).toBe('0.0%');
    expect(formatPercentage(Infinity)).toBe('0.0%');
  });

  it('formats weights with correct unit tags', () => {
    expect(formatWeight(550, 1, 'g')).toBe('550.0g');
    expect(formatWeight(17.637, 2, 'oz')).toBe('17.64oz');
    expect(formatWeight(NaN)).toBe('0g');
  });

  it('formats scale factors cleanly with multiplier symbol', () => {
    expect(formatFactor(0.4296)).toBe('0.43×');
    expect(formatFactor(1.27)).toBe('1.27×');
    expect(formatFactor(0)).toBe('1.00×');
  });
});
