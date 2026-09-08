/**
 * Baking Pan Size & Geometric Capacity Converter Engine.
 * Supports Round, Square, Rectangular, and Bundt Presets.
 */

import { IN3_PER_US_CUP } from './units';

export type PanShape = 'round' | 'square' | 'rectangle' | 'bundt';
export type BundtCapacityPreset = '6-cup' | '10-cup' | '12-cup';

export interface PanConfig {
  shape: PanShape;
  unit: 'in' | 'cm';
  // Geometric dimensions (for round, square, rectangle)
  dimension1?: number; // diameter (round), side (square), length (rectangle)
  dimension2?: number; // width (rectangle)
  depth?: number;      // pan wall height
  // Bundt preset
  bundtPreset?: BundtCapacityPreset;
}

export interface PanCalculationResult {
  volumeIn3: number;
  areaSqIn: number | null; // null for Bundt
  depthInches: number | null;
}

export interface PanConversionComparison {
  original: PanCalculationResult;
  target: PanCalculationResult;
  volumeScalingFactor: number;
  panDepthDifferenceInches: number | null;
  thermalGuidance: string;
}

const BUNDT_CAPACITIES_IN3: Record<BundtCapacityPreset, number> = {
  '6-cup': 6 * IN3_PER_US_CUP,   // ~86.6 in³
  '10-cup': 10 * IN3_PER_US_CUP, // ~144.4 in³
  '12-cup': 12 * IN3_PER_US_CUP, // ~173.25 in³
};

export function calculatePanMetrics(pan: PanConfig): PanCalculationResult {
  const isMetric = pan.unit === 'cm';
  // Convert inputs to inches internally for consistent math
  const toInches = (val?: number) => {
    if (!val || val <= 0) return 0;
    return isMetric ? val / 2.54 : val;
  };

  if (pan.shape === 'bundt') {
    const preset = pan.bundtPreset || '10-cup';
    const volumeIn3 = BUNDT_CAPACITIES_IN3[preset] || BUNDT_CAPACITIES_IN3['10-cup'];
    return {
      volumeIn3,
      areaSqIn: null, // Omit surface area for complex fluted Bundt shapes
      depthInches: null,
    };
  }

  const depth = toInches(pan.depth);
  let areaSqIn = 0;

  if (pan.shape === 'round') {
    const diameter = toInches(pan.dimension1);
    const radius = diameter / 2;
    areaSqIn = Math.PI * radius * radius;
  } else if (pan.shape === 'square') {
    const side = toInches(pan.dimension1);
    areaSqIn = side * side;
  } else if (pan.shape === 'rectangle') {
    const length = toInches(pan.dimension1);
    const width = toInches(pan.dimension2);
    areaSqIn = length * width;
  }

  const volumeIn3 = areaSqIn * depth;

  return {
    volumeIn3,
    areaSqIn,
    depthInches: depth,
  };
}

export function comparePans(original: PanConfig, target: PanConfig): PanConversionComparison {
  const origMetrics = calculatePanMetrics(original);
  const targetMetrics = calculatePanMetrics(target);

  const volumeScalingFactor =
    origMetrics.volumeIn3 > 0 ? targetMetrics.volumeIn3 / origMetrics.volumeIn3 : 1.0;

  let depthDiff: number | null = null;
  if (origMetrics.depthInches !== null && targetMetrics.depthInches !== null) {
    depthDiff = targetMetrics.depthInches - origMetrics.depthInches;
  }

  let thermalGuidance =
    'The scaling factor is based on the geometric capacity of the two pans. Use a cake tester or skewer to monitor doneness.';

  if (depthDiff !== null) {
    if (depthDiff > 0.4) {
      thermalGuidance =
        'The target pan is noticeably deeper. A deeper cake batter requires extra time for heat to penetrate the center. Begin checking for doneness according to visual cues (browning, gentle spring-back) and use a tester before removing.';
    } else if (depthDiff < -0.4) {
      thermalGuidance =
        'The target pan is shallower with more surface exposure. A shallower cake layer bakes significantly faster. Begin checking for doneness 10–15 minutes earlier than the original recipe suggests.';
    }
  }

  return {
    original: origMetrics,
    target: targetMetrics,
    volumeScalingFactor,
    panDepthDifferenceInches: depthDiff,
    thermalGuidance,
  };
}
