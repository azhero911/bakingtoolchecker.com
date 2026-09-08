/**
 * Standardized unit conversions for BakingToolCalculators.
 * High-precision constants ensure round-trip accuracy.
 */

export const GRAMS_PER_OUNCE = 28.349523125;
export const CM_PER_INCH = 2.54;
export const CM3_PER_IN3 = 16.387064;
export const ML_PER_US_CUP = 236.5882365;
export const IN3_PER_US_CUP = 14.4375;

// Weight: Grams <-> Ounces
export function gramsToOunces(grams: number): number {
  return grams / GRAMS_PER_OUNCE;
}

export function ouncesToGrams(ounces: number): number {
  return ounces * GRAMS_PER_OUNCE;
}

// Length: Inches <-> Centimeters
export function inchesToCm(inches: number): number {
  return inches * CM_PER_INCH;
}

export function cmToInches(cm: number): number {
  return cm / CM_PER_INCH;
}

// Volume: Cubic Inches <-> Cubic Centimeters
export function cubicInchesToCubicCm(in3: number): number {
  return in3 * CM3_PER_IN3;
}

export function cubicCmToCubicInches(cm3: number): number {
  return cm3 / CM3_PER_IN3;
}

// Volume: Cups <-> Milliliters
export function cupsToMl(cups: number): number {
  return cups * ML_PER_US_CUP;
}

export function mlToCups(ml: number): number {
  return ml / ML_PER_US_CUP;
}

// Volume: Cups <-> Cubic Inches
export function cupsToCubicInches(cups: number): number {
  return cups * IN3_PER_US_CUP;
}

export function cubicInchesToCups(in3: number): number {
  return in3 / IN3_PER_US_CUP;
}
