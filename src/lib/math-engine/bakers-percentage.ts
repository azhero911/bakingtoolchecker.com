/**
 * Baker's Percentage & Dual-Scaling Engine.
 * Supports:
 * 1. Deriving Baker's Percentages from raw ingredient weights.
 * 2. Flour-Based Scaling (scale proportional to target flour).
 * 3. Total Batch Weight Scaling (scale proportional to target dough batch).
 */

export interface IngredientRow {
  id: string;
  name: string;
  weightGrams: number;
  isFlour?: boolean;
}

export interface ScaledIngredientRow extends IngredientRow {
  bakersPercent: number;
  scaledWeightGrams: number;
}

export interface BakersPercentageResult {
  totalFlourGrams: number;
  totalBatchWeightGrams: number;
  scalingMultiplier: number;
  ingredients: ScaledIngredientRow[];
}

export function calculateBakersPercentages(
  ingredients: IngredientRow[],
  scalingMode: 'none' | 'flour' | 'batch' = 'none',
  targetValue: number = 0
): BakersPercentageResult {
  // 1. Calculate total flour baseline
  const flourRows = ingredients.filter((i) => i.isFlour || i.name.toLowerCase().includes('flour'));
  const totalFlour = flourRows.reduce((sum, i) => sum + Math.max(0, i.weightGrams), 0);

  const currentTotalWeight = ingredients.reduce((sum, i) => sum + Math.max(0, i.weightGrams), 0);

  // 2. Determine scaling multiplier
  let multiplier = 1.0;

  if (scalingMode === 'flour' && totalFlour > 0 && targetValue > 0) {
    multiplier = targetValue / totalFlour;
  } else if (scalingMode === 'batch' && currentTotalWeight > 0 && targetValue > 0) {
    multiplier = targetValue / currentTotalWeight;
  }

  // 3. Scale ingredients and compute Baker's %
  const scaledIngredients: ScaledIngredientRow[] = ingredients.map((item) => {
    const safeWeight = Math.max(0, item.weightGrams);
    const bakersPercent = totalFlour > 0 ? (safeWeight / totalFlour) * 100 : 0;
    const scaledWeightGrams = safeWeight * multiplier;

    return {
      ...item,
      bakersPercent,
      scaledWeightGrams,
    };
  });

  const scaledTotalFlour = totalFlour * multiplier;
  const scaledTotalBatch = currentTotalWeight * multiplier;

  return {
    totalFlourGrams: scaledTotalFlour,
    totalBatchWeightGrams: scaledTotalBatch,
    scalingMultiplier: multiplier,
    ingredients: scaledIngredients,
  };
}
