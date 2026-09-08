import { describe, it, expect } from 'vitest';
import { calculateSourdough } from './sourdough';

describe('Sourdough Math Engine', () => {
  it('accurately computes the master test fixture (500g flour, 350g water, 100g 100% starter, 10g salt)', () => {
    const result = calculateSourdough({
      recipeFlourGrams: 500,
      recipeWaterGrams: 350,
      starterGrams: 100,
      starterHydrationPercent: 100,
      saltMode: 'weight',
      saltValue: 10,
    });

    // 100g of 100% starter = 50g flour + 50g water
    expect(result.flourInStarterGrams).toBeCloseTo(50, 4);
    expect(result.waterInStarterGrams).toBeCloseTo(50, 4);

    // Total flour = 500 + 50 = 550g
    expect(result.totalFlourGrams).toBeCloseTo(550, 4);

    // Total water = 350 + 50 = 400g
    expect(result.totalWaterGrams).toBeCloseTo(400, 4);

    // True hydration = 400 / 550 * 100 = 72.7272...%
    expect(result.trueHydrationPercent).toBeCloseTo(72.727, 2);

    // Starter weight % = 100 / 550 * 100 = 18.1818...%
    expect(result.starterWeightPercent).toBeCloseTo(18.18, 2);

    // Prefermented flour % = 50 / 550 * 100 = 9.0909...%
    expect(result.prefermentedFlourPercent).toBeCloseTo(9.09, 2);

    // Salt % = 10 / 550 * 100 = 1.818...%
    expect(result.saltPercent).toBeCloseTo(1.82, 2);

    // Total dough weight = 550 + 400 + 10 = 960g
    expect(result.totalDoughWeightGrams).toBeCloseTo(960, 4);
  });

  it('handles custom starter hydration (e.g. 80% stiff starter)', () => {
    const result = calculateSourdough({
      recipeFlourGrams: 500,
      recipeWaterGrams: 350,
      starterGrams: 90, // at 80% hydration -> 50g flour, 40g water
      starterHydrationPercent: 80,
      saltMode: 'percentage',
      saltValue: 2.0,
    });

    expect(result.flourInStarterGrams).toBeCloseTo(50, 1);
    expect(result.waterInStarterGrams).toBeCloseTo(40, 1);
    expect(result.totalFlourGrams).toBeCloseTo(550, 1);
    expect(result.totalWaterGrams).toBeCloseTo(390, 1);
    expect(result.trueHydrationPercent).toBeCloseTo(70.91, 2);
    expect(result.saltGrams).toBeCloseTo(11, 1); // 2% of 550g = 11g
  });

  it('handles zero starter gracefully (pure direct dough)', () => {
    const result = calculateSourdough({
      recipeFlourGrams: 500,
      recipeWaterGrams: 350,
      starterGrams: 0,
      starterHydrationPercent: 100,
      saltMode: 'weight',
      saltValue: 10,
    });

    expect(result.totalFlourGrams).toBe(500);
    expect(result.totalWaterGrams).toBe(350);
    expect(result.trueHydrationPercent).toBe(70);
    expect(result.starterWeightPercent).toBe(0);
    expect(result.prefermentedFlourPercent).toBe(0);
  });
});
