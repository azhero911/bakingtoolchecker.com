/**
 * Production Smoke Test for BakingToolCalculators.
 * Validates registry integrity, math engine precision, and URL normalization.
 */

import { calculateSourdough } from '../src/lib/math-engine/sourdough.ts';
import { calculateBakersPercentages } from '../src/lib/math-engine/bakers-percentage.ts';
import { comparePans } from '../src/lib/math-engine/pan-converter.ts';
import { TOOLS_REGISTRY } from '../src/config/tools.config.ts';
import { SITE_URL, getAbsoluteUrl } from '../src/config/site.ts';

console.log('--- STARTING BAKINGTOOLCALCULATORS SMOKE TEST ---');

let failureCount = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failureCount++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Verify Site URL normalization
assert(!SITE_URL.endsWith('/'), 'SITE_URL must not have trailing slash');
assert(getAbsoluteUrl('/tools/test') === `${SITE_URL}/tools/test`, 'getAbsoluteUrl correctly formats absolute paths');

// 2. Verify Tools Registry
assert(TOOLS_REGISTRY.length === 3, 'Tools registry must have exactly 3 flagship tools');
for (const tool of TOOLS_REGISTRY) {
  assert(Boolean(tool.slug && tool.name && tool.metaTitle && tool.metaDescription), `Tool ${tool.slug} has complete metadata`);
  assert(tool.faqs && tool.faqs.length >= 2, `Tool ${tool.slug} has at least 2 visible FAQs`);
  assert(tool.assumptions && tool.assumptions.length >= 2, `Tool ${tool.slug} has exposed assumptions`);
}

// 3. Sourdough Math Engine Verification
const sourdoughResult = calculateSourdough({
  recipeFlourGrams: 500,
  recipeWaterGrams: 350,
  starterGrams: 100,
  starterHydrationPercent: 100,
  saltMode: 'weight',
  saltValue: 10,
});
assert(Math.abs(sourdoughResult.trueHydrationPercent - 72.727) < 0.01, `Sourdough true hydration is 72.7% (got ${sourdoughResult.trueHydrationPercent.toFixed(2)}%)`);
assert(sourdoughResult.totalFlourGrams === 550, 'Sourdough total flour is 550g');
assert(sourdoughResult.totalWaterGrams === 400, 'Sourdough total water is 400g');

// 4. Baker's Percentage Dual Scaling Verification
const sampleIngredients = [
  { id: '1', name: 'Flour', weightGrams: 1000, isFlour: true },
  { id: '2', name: 'Water', weightGrams: 700 },
  { id: '3', name: 'Salt', weightGrams: 20 },
];
const bakersResult = calculateBakersPercentages(sampleIngredients, 'flour', 2000);
assert(bakersResult.scalingMultiplier === 2.0, 'Baker scaling multiplier is 2.0x for 2000g flour');
assert(bakersResult.totalBatchWeightGrams === 3440, 'Scaled batch total weight is 3440g');

// 5. Pan Converter Verification (9x13x2 to 8x2 round)
const panComparison = comparePans(
  { shape: 'rectangle', unit: 'in', dimension1: 13, dimension2: 9, depth: 2 },
  { shape: 'round', unit: 'in', dimension1: 8, depth: 2 }
);
assert(Math.abs(panComparison.volumeScalingFactor - 0.4296) < 0.01, `Pan scaling factor is ~0.43x (got ${panComparison.volumeScalingFactor.toFixed(3)})`);

if (failureCount > 0) {
  console.error(`\n💥 SMOKE TEST FAILED with ${failureCount} errors.`);
  process.exit(1);
} else {
  console.log('\n🎉 ALL SMOKE TESTS PASSED CLEANLY! Ready for production deployment.\n');
  process.exit(0);
}
