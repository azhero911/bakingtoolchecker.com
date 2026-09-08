import { describe, it, expect } from 'vitest';
import {
  gramsToOunces,
  ouncesToGrams,
  inchesToCm,
  cmToInches,
  cubicInchesToCubicCm,
  cubicCmToCubicInches,
  cupsToMl,
  mlToCups,
  cupsToCubicInches,
  cubicInchesToCups,
} from './units';

describe('Units Conversion Engine', () => {
  it('converts grams to ounces and back with round-trip precision', () => {
    const originalGrams = 500;
    const ounces = gramsToOunces(originalGrams);
    expect(ounces).toBeCloseTo(17.637, 3);
    const roundTripGrams = ouncesToGrams(ounces);
    expect(roundTripGrams).toBeCloseTo(originalGrams, 6);
  });

  it('converts inches to centimeters and back with round-trip precision', () => {
    const originalInches = 9;
    const cm = inchesToCm(originalInches);
    expect(cm).toBeCloseTo(22.86, 2);
    const roundTripInches = cmToInches(cm);
    expect(roundTripInches).toBeCloseTo(originalInches, 6);
  });

  it('converts cubic inches to cubic centimeters and back', () => {
    const originalIn3 = 234; // 9x13x2 pan
    const cm3 = cubicInchesToCubicCm(originalIn3);
    expect(cm3).toBeCloseTo(3834.57, 1);
    const roundTrip = cubicCmToCubicInches(cm3);
    expect(roundTrip).toBeCloseTo(originalIn3, 6);
  });

  it('converts US cups to milliliters and back', () => {
    const cups = 10;
    const ml = cupsToMl(cups);
    expect(ml).toBeCloseTo(2365.88, 1);
    const roundTripCups = mlToCups(ml);
    expect(roundTripCups).toBeCloseTo(cups, 6);
  });

  it('converts US cups to cubic inches and back', () => {
    const cups = 10;
    const in3 = cupsToCubicInches(cups);
    expect(in3).toBeCloseTo(144.375, 3);
    const roundTripCups = cubicInchesToCups(in3);
    expect(roundTripCups).toBeCloseTo(cups, 6);
  });
});
