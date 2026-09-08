/**
 * Precision preservation and display formatting for baking calculators.
 * Internal math retains full floating-point precision.
 * Display formatters output clean, predictable human-readable strings.
 */

export function roundTo(value: number, decimals: number = 1): number {
  if (!Number.isFinite(value)) return 0;
  const factor = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function formatPercentage(value: number, decimals: number = 1): string {
  if (!Number.isFinite(value)) return '0.0%';
  return `${roundTo(value, decimals).toFixed(decimals)}%`;
}

export function formatWeight(value: number, decimals: number = 1, unit: string = 'g'): string {
  if (!Number.isFinite(value)) return `0${unit}`;
  return `${roundTo(value, decimals).toFixed(decimals)}${unit}`;
}

export function formatFactor(value: number, decimals: number = 2): string {
  if (!Number.isFinite(value) || value <= 0) return '1.00×';
  return `${roundTo(value, decimals).toFixed(decimals)}×`;
}
