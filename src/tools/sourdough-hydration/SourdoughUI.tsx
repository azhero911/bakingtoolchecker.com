'use client';

import React, { useState, useMemo } from 'react';
import { calculateSourdough } from '@/lib/math-engine/sourdough';
import { formatPercentage, formatWeight } from '@/lib/math-engine/rounding';
import FormInput from '@/components/calculator/FormInput';
import ModeSelector from '@/components/calculator/ModeSelector';
import { Copy, Check, RotateCcw, Sparkles } from 'lucide-react';

const INITIAL_STATE = {
  recipeFlourGrams: 500,
  recipeWaterGrams: 350,
  starterGrams: 100,
  starterHydrationPercent: 100,
  saltMode: 'weight' as 'weight' | 'percentage',
  saltValue: 10,
};

export default function SourdoughUI() {
  const [inputs, setInputs] = useState(INITIAL_STATE);
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    return calculateSourdough(inputs);
  }, [inputs]);

  const handleReset = () => {
    setInputs(INITIAL_STATE);
  };

  const applyPreset = (hydrationTarget: number) => {
    // Keeps flour at 500g, starter at 100g (100% hydration = 50g flour, 50g water).
    // Total flour = 550g. Target water = 550 * (hydrationTarget / 100).
    // Added water = Target water - 50g starter water.
    const totalFlour = 550;
    const targetWater = totalFlour * (hydrationTarget / 100);
    const addedWater = Math.max(0, Math.round(targetWater - 50));
    setInputs((prev) => ({
      ...prev,
      recipeFlourGrams: 500,
      recipeWaterGrams: addedWater,
      starterGrams: 100,
      starterHydrationPercent: 100,
    }));
  };

  const copyRecipe = () => {
    const text = `Sourdough Formula:
- True Total Hydration: ${formatPercentage(results.trueHydrationPercent)}
- Total Dough Weight: ${formatWeight(results.totalDoughWeightGrams)}
- Main Recipe Flour: ${formatWeight(inputs.recipeFlourGrams)}
- Added Water: ${formatWeight(inputs.recipeWaterGrams)}
- Sourdough Starter: ${formatWeight(inputs.starterGrams)} (${inputs.starterHydrationPercent}% hydration)
  • Contributed Flour: ${formatWeight(results.flourInStarterGrams)}
  • Contributed Water: ${formatWeight(results.waterInStarterGrams)}
- Starter Inoculation: ${formatPercentage(results.starterWeightPercent)}
- Prefermented Flour: ${formatPercentage(results.prefermentedFlourPercent)}
- Salt: ${formatWeight(results.saltGrams)} (${formatPercentage(results.saltPercent)})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Quick Hydration Target Presets */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-bakery-muted flex items-center gap-1.5 mr-1">
          <Sparkles className="w-3.5 h-3.5 text-bakery-accent" />
          Quick Hydration Presets:
        </span>
        <button
          type="button"
          onClick={() => applyPreset(68)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold border border-bakery-border bg-white hover:bg-bakery-highlight hover:border-bakery-accent text-bakery-dark transition-colors"
        >
          68% (Beginner Friendly)
        </button>
        <button
          type="button"
          onClick={() => applyPreset(75)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold border border-bakery-border bg-white hover:bg-bakery-highlight hover:border-bakery-accent text-bakery-dark transition-colors"
        >
          75% (Open Crumb Standard)
        </button>
        <button
          type="button"
          onClick={() => applyPreset(80)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold border border-bakery-border bg-white hover:bg-bakery-highlight hover:border-bakery-accent text-bakery-dark transition-colors"
        >
          80% (Artisan High Hydration)
        </button>
      </div>

      {/* Main 2-Column Workstation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Input Form Controls (7 Columns on Desktop) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-bakery-border p-6 shadow-sm space-y-5">
          <div className="border-b border-bakery-border pb-3">
            <h2 className="text-lg font-bold text-bakery-dark">Recipe Inputs</h2>
            <p className="text-xs text-bakery-muted">
              Enter ingredient weights. All measurements calculate live in your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              id="recipe-flour"
              label="Main Recipe Flour"
              unit="g"
              value={inputs.recipeFlourGrams}
              onChange={(val) => setInputs((p) => ({ ...p, recipeFlourGrams: val }))}
              helpText="White bread, whole wheat, or rye flour in the dough."
              required
            />

            <FormInput
              id="recipe-water"
              label="Added Water"
              unit="g"
              value={inputs.recipeWaterGrams}
              onChange={(val) => setInputs((p) => ({ ...p, recipeWaterGrams: val }))}
              helpText="Water directly mixed into the flour."
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100">
            <FormInput
              id="starter-weight"
              label="Sourdough Starter / Levain"
              unit="g"
              value={inputs.starterGrams}
              onChange={(val) => setInputs((p) => ({ ...p, starterGrams: val }))}
              helpText="Active ripe starter added to the mix."
            />

            <FormInput
              id="starter-hydration"
              label="Starter Hydration"
              unit="%"
              value={inputs.starterHydrationPercent}
              onChange={(val) => setInputs((p) => ({ ...p, starterHydrationPercent: val }))}
              helpText="Standard 100% means equal parts flour and water."
              min={50}
              max={150}
            />
          </div>

          <div className="pt-2 border-t border-stone-100 space-y-4">
            <ModeSelector<'weight' | 'percentage'>
              id="salt-mode-label"
              label="Salt Input Mode"
              selected={inputs.saltMode}
              onChange={(mode) => setInputs((p) => ({ ...p, saltMode: mode }))}
              options={[
                { value: 'weight', label: 'Weight (Grams)' },
                { value: 'percentage', label: "Baker's %" },
              ]}
            />

            <FormInput
              id="salt-value"
              label={inputs.saltMode === 'weight' ? 'Salt Weight' : "Target Salt Baker's %"}
              unit={inputs.saltMode === 'weight' ? 'g' : '%'}
              value={inputs.saltValue}
              onChange={(val) => setInputs((p) => ({ ...p, saltValue: val }))}
              helpText={
                inputs.saltMode === 'weight'
                  ? 'Total salt weight in grams (typically 2% of flour).'
                  : "Target percentage relative to total flour (standard is 2.0%)."
              }
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Results & Summary Card (5 Columns on Desktop) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-bakery-border p-6 shadow-sm lg:sticky lg:top-24">
          <div className="border-b border-bakery-border pb-3 mb-5">
            <h2 className="text-lg font-bold text-bakery-dark">Dough Summary</h2>
            <p className="text-xs text-bakery-muted">
              Computed true baker's metrics accounting for starter split.
            </p>
          </div>

          {/* Prominent Stat Boxes (Peach Container matching user screenshot) */}
          <div
            className="grid grid-cols-2 gap-3 mb-6"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="bg-bakery-highlight border border-amber-200/80 rounded-xl p-4 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-bakery-highlightText block">
                True Hydration
              </span>
              <div className="text-3xl sm:text-4xl font-black text-bakery-highlightText mt-1">
                {formatPercentage(results.trueHydrationPercent)}
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium mt-1 block">
                Total Water / Total Flour
              </span>
            </div>

            <div className="bg-bakery-highlight border border-amber-200/80 rounded-xl p-4 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-bakery-highlightText block">
                Total Batch Weight
              </span>
              <div className="text-3xl sm:text-4xl font-black text-bakery-highlightText mt-1">
                {formatWeight(results.totalDoughWeightGrams, 0)}
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium mt-1 block">
                Flour + Water + Salt
              </span>
            </div>
          </div>

          {/* Granular Breakdown Rows */}
          <div className="space-y-2.5 text-sm text-bakery-dark border-t border-b border-stone-100 py-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Total Flour:</span>
              <span className="font-bold">
                {formatWeight(results.totalFlourGrams)}{' '}
                <span className="text-xs font-normal text-bakery-subtle">
                  ({inputs.recipeFlourGrams}g + {formatWeight(results.flourInStarterGrams, 1)} starter)
                </span>
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Total Water:</span>
              <span className="font-bold">
                {formatWeight(results.totalWaterGrams)}{' '}
                <span className="text-xs font-normal text-bakery-subtle">
                  ({inputs.recipeWaterGrams}g + {formatWeight(results.waterInStarterGrams, 1)} starter)
                </span>
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Starter Inoculation %:</span>
              <span className="font-bold">
                {formatPercentage(results.starterWeightPercent)}{' '}
                <span className="text-xs font-normal text-bakery-subtle">(Starter / Flour)</span>
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Prefermented Flour %:</span>
              <span className="font-bold text-bakery-accent">
                {formatPercentage(results.prefermentedFlourPercent)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Salt Content:</span>
              <span className="font-bold">
                {formatWeight(results.saltGrams)} ({formatPercentage(results.saltPercent)})
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-3 rounded-xl border border-bakery-border bg-stone-50 hover:bg-stone-100 text-bakery-muted font-bold text-sm flex items-center justify-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>

            <button
              type="button"
              onClick={copyRecipe}
              className="flex-1 px-5 py-3 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Recipe Copied!' : 'Copy Recipe Formula'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
