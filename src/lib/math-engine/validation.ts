/**
 * Business input validation rules for BakingToolCalculators.
 * Prevents NaN, Infinity, negative values, and unrealistic extremes.
 */

export const MAX_SAFE_WEIGHT_GRAMS = 100000; // 100kg
export const MIN_STARTER_HYDRATION = 50;
export const MAX_STARTER_HYDRATION = 150;
export const MAX_INGREDIENT_ROWS = 20;

export function isValidNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value);
}

export function isPositiveNumber(value: unknown): value is number {
  return isValidNumber(value) && value > 0;
}

export function isNonNegativeNumber(value: unknown): value is number {
  return isValidNumber(value) && value >= 0;
}

export function parseSafeNumber(raw: unknown, fallback: number = 0): number {
  if (typeof raw === 'number') {
    return Number.isFinite(raw) ? raw : fallback;
  }
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    if (trimmed === '') return fallback;
    const parsed = Number(trimmed);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateSourdoughInputs(inputs: {
  flourGrams: number;
  waterGrams: number;
  starterGrams: number;
  starterHydrationPercent: number;
  saltValue: number;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!isPositiveNumber(inputs.flourGrams)) {
    errors.flourGrams = 'Flour weight must be greater than 0g.';
  } else if (inputs.flourGrams > MAX_SAFE_WEIGHT_GRAMS) {
    errors.flourGrams = `Flour weight cannot exceed ${MAX_SAFE_WEIGHT_GRAMS}g.`;
  }

  if (!isNonNegativeNumber(inputs.waterGrams)) {
    errors.waterGrams = 'Water weight cannot be negative.';
  } else if (inputs.waterGrams > MAX_SAFE_WEIGHT_GRAMS) {
    errors.waterGrams = `Water weight cannot exceed ${MAX_SAFE_WEIGHT_GRAMS}g.`;
  }

  if (!isNonNegativeNumber(inputs.starterGrams)) {
    errors.starterGrams = 'Starter weight cannot be negative.';
  } else if (inputs.starterGrams > MAX_SAFE_WEIGHT_GRAMS) {
    errors.starterGrams = `Starter weight cannot exceed ${MAX_SAFE_WEIGHT_GRAMS}g.`;
  }

  if (
    !isValidNumber(inputs.starterHydrationPercent) ||
    inputs.starterHydrationPercent < MIN_STARTER_HYDRATION ||
    inputs.starterHydrationPercent > MAX_STARTER_HYDRATION
  ) {
    errors.starterHydrationPercent = `Starter hydration must be between ${MIN_STARTER_HYDRATION}% and ${MAX_STARTER_HYDRATION}%.`;
  }

  if (!isNonNegativeNumber(inputs.saltValue)) {
    errors.saltValue = 'Salt cannot be negative.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
