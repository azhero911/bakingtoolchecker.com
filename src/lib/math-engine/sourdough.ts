/**
 * Sourdough Hydration & Starter Calculation Engine.
 * Pure mathematical functions without UI dependencies.
 */

export interface SourdoughInput {
  recipeFlourGrams: number;
  recipeWaterGrams: number;
  starterGrams: number;
  starterHydrationPercent: number; // e.g. 100 for 100%
  saltMode: 'weight' | 'percentage';
  saltValue: number; // grams if mode is 'weight', % if mode is 'percentage'
}

export interface SourdoughResult {
  flourInStarterGrams: number;
  waterInStarterGrams: number;
  totalFlourGrams: number;
  totalWaterGrams: number;
  trueHydrationPercent: number;
  starterWeightPercent: number;     // Inoculation: Starter Weight / Total Flour
  prefermentedFlourPercent: number; // Preferment: Starter Flour / Total Flour
  saltGrams: number;
  saltPercent: number;
  totalDoughWeightGrams: number;
}

export function calculateSourdough(input: SourdoughInput): SourdoughResult {
  const flour = Math.max(0, input.recipeFlourGrams);
  const water = Math.max(0, input.recipeWaterGrams);
  const starter = Math.max(0, input.starterGrams);
  const starterHydration = Math.max(1, input.starterHydrationPercent); // Avoid div by zero

  // Starter flour & water split
  const starterDecimal = starterHydration / 100;
  const flourInStarter = starter / (1 + starterDecimal);
  const waterInStarter = starter - flourInStarter;

  // Total ingredients
  const totalFlour = flour + flourInStarter;
  const totalWater = water + waterInStarter;

  // True hydration
  const trueHydrationPercent = totalFlour > 0 ? (totalWater / totalFlour) * 100 : 0;

  // Salt handling based on explicit mode
  let saltGrams = 0;
  let saltPercent = 0;

  if (input.saltMode === 'percentage') {
    saltPercent = Math.max(0, input.saltValue);
    saltGrams = totalFlour > 0 ? totalFlour * (saltPercent / 100) : 0;
  } else {
    saltGrams = Math.max(0, input.saltValue);
    saltPercent = totalFlour > 0 ? (saltGrams / totalFlour) * 100 : 0;
  }

  // Starter percentages
  const starterWeightPercent = totalFlour > 0 ? (starter / totalFlour) * 100 : 0;
  const prefermentedFlourPercent = totalFlour > 0 ? (flourInStarter / totalFlour) * 100 : 0;

  const totalDoughWeightGrams = totalFlour + totalWater + saltGrams;

  return {
    flourInStarterGrams: flourInStarter,
    waterInStarterGrams: waterInStarter,
    totalFlourGrams: totalFlour,
    totalWaterGrams: totalWater,
    trueHydrationPercent,
    starterWeightPercent,
    prefermentedFlourPercent,
    saltGrams,
    saltPercent,
    totalDoughWeightGrams,
  };
}
