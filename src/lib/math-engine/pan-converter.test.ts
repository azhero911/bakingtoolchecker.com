import { describe, it, expect } from 'vitest';
import { comparePans, calculatePanMetrics } from './pan-converter';

describe('Pan Converter Engine', () => {
  it('accurately computes 9x13x2 rectangle to 8x2 round test fixture (0.43x scaling)', () => {
    const comparison = comparePans(
      {
        shape: 'rectangle',
        unit: 'in',
        dimension1: 13,
        dimension2: 9,
        depth: 2,
      },
      {
        shape: 'round',
        unit: 'in',
        dimension1: 8,
        depth: 2,
      }
    );

    // 9 * 13 * 2 = 234 in³
    expect(comparison.original.volumeIn3).toBeCloseTo(234, 1);
    // PI * 4^2 * 2 ≈ 100.53 in³
    expect(comparison.target.volumeIn3).toBeCloseTo(100.53, 1);

    // Scaling factor = 100.53 / 234 ≈ 0.4296 -> 0.43
    expect(comparison.volumeScalingFactor).toBeCloseTo(0.4296, 3);
    // Equal pan depths -> 0 diff
    expect(comparison.panDepthDifferenceInches).toBeCloseTo(0, 2);
  });

  it('handles square pans accurately', () => {
    const square = calculatePanMetrics({
      shape: 'square',
      unit: 'in',
      dimension1: 8,
      depth: 2,
    });
    // 8 * 8 * 2 = 128 in³
    expect(square.volumeIn3).toBe(128);
    expect(square.areaSqIn).toBe(64);
  });

  it('correctly calculates Bundt presets and omits surface area', () => {
    const bundt = calculatePanMetrics({
      shape: 'bundt',
      unit: 'in',
      bundtPreset: '10-cup',
    });
    // 10 cups * 14.4375 in³/cup = 144.375 in³
    expect(bundt.volumeIn3).toBeCloseTo(144.375, 2);
    expect(bundt.areaSqIn).toBeNull();
  });

  it('provides appropriate thermal guidance when pan is significantly deeper', () => {
    const comparison = comparePans(
      {
        shape: 'round',
        unit: 'in',
        dimension1: 8,
        depth: 1.5,
      },
      {
        shape: 'round',
        unit: 'in',
        dimension1: 8,
        depth: 3.0, // +1.5" deeper
      }
    );

    expect(comparison.panDepthDifferenceInches).toBe(1.5);
    expect(comparison.thermalGuidance).toContain('noticeably deeper');
  });
});
