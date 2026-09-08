import { describe, it, expect } from 'vitest';
import { calculateBakersPercentages, IngredientRow } from './bakers-percentage';

describe("Baker's Percentage & Dual-Scaling Engine", () => {
  const sampleRecipe: IngredientRow[] = [
    { id: '1', name: 'Bread Flour', weightGrams: 1000, isFlour: true },
    { id: '2', name: 'Water', weightGrams: 700 },
    { id: '3', name: 'Salt', weightGrams: 20 },
    { id: '4', name: 'Instant Yeast', weightGrams: 5 },
  ];

  it('correctly calculates base baker percentages (100% flour, 70% water, 2% salt, 0.5% yeast)', () => {
    const result = calculateBakersPercentages(sampleRecipe, 'none');

    expect(result.totalFlourGrams).toBe(1000);
    expect(result.totalBatchWeightGrams).toBe(1725);
    expect(result.scalingMultiplier).toBe(1.0);

    const flour = result.ingredients.find((i) => i.name === 'Bread Flour')!;
    const water = result.ingredients.find((i) => i.name === 'Water')!;
    const salt = result.ingredients.find((i) => i.name === 'Salt')!;
    const yeast = result.ingredients.find((i) => i.name === 'Instant Yeast')!;

    expect(flour.bakersPercent).toBe(100);
    expect(water.bakersPercent).toBe(70);
    expect(salt.bakersPercent).toBe(2);
    expect(yeast.bakersPercent).toBe(0.5);
  });

  it('correctly scales by target flour weight (Flour-Based Scaling)', () => {
    // Scale to 2000g flour (2x multiplier)
    const result = calculateBakersPercentages(sampleRecipe, 'flour', 2000);

    expect(result.scalingMultiplier).toBe(2.0);
    expect(result.totalFlourGrams).toBe(2000);
    expect(result.totalBatchWeightGrams).toBe(3450);

    const water = result.ingredients.find((i) => i.name === 'Water')!;
    const salt = result.ingredients.find((i) => i.name === 'Salt')!;

    expect(water.scaledWeightGrams).toBe(1400);
    expect(salt.scaledWeightGrams).toBe(40);
    // Baker's percentage remains constant after scaling
    expect(water.bakersPercent).toBe(70);
    expect(salt.bakersPercent).toBe(2);
  });

  it('correctly scales by target total batch weight (Total Batch Scaling)', () => {
    // Current total = 1725g. Target total = 3450g (2x multiplier)
    const result = calculateBakersPercentages(sampleRecipe, 'batch', 3450);

    expect(result.scalingMultiplier).toBe(2.0);
    expect(result.totalBatchWeightGrams).toBe(3450);

    const flour = result.ingredients.find((i) => i.name === 'Bread Flour')!;
    expect(flour.scaledWeightGrams).toBe(2000);
  });
});
