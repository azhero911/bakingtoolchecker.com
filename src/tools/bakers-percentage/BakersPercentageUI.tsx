'use client';

import React, { useState, useMemo } from 'react';
import {
  calculateBakersPercentages,
  IngredientRow,
} from '@/lib/math-engine/bakers-percentage';
import { formatPercentage, formatWeight, formatFactor } from '@/lib/math-engine/rounding';
import ModeSelector from '@/components/calculator/ModeSelector';
import FormInput from '@/components/calculator/FormInput';
import { Plus, Trash2, Copy, Check, RotateCcw } from 'lucide-react';

const INITIAL_INGREDIENTS: IngredientRow[] = [
  { id: 'flour-1', name: 'Bread Flour', weightGrams: 1000, isFlour: true },
  { id: 'water-1', name: 'Water', weightGrams: 700 },
  { id: 'salt-1', name: 'Fine Sea Salt', weightGrams: 20 },
  { id: 'yeast-1', name: 'Instant Dry Yeast', weightGrams: 5 },
];

export default function BakersPercentageUI() {
  const [ingredients, setIngredients] = useState<IngredientRow[]>(INITIAL_INGREDIENTS);
  const [scaleMode, setScaleMode] = useState<'none' | 'flour' | 'batch'>('none');
  const [targetFlourWeight, setTargetFlourWeight] = useState<number>(1000);
  const [targetBatchWeight, setTargetBatchWeight] = useState<number>(1725);
  const [copied, setCopied] = useState(false);

  const targetValue = scaleMode === 'flour' ? targetFlourWeight : targetBatchWeight;

  const results = useMemo(() => {
    return calculateBakersPercentages(ingredients, scaleMode, targetValue);
  }, [ingredients, scaleMode, targetValue]);

  const handleUpdateWeight = (id: string, newWeight: number) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, weightGrams: Math.max(0, newWeight) } : item))
    );
  };

  const handleUpdateName = (id: string, newName: string) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  const handleAddIngredient = () => {
    if (ingredients.length >= 20) return;
    const newId = `ing-${Date.now()}`;
    setIngredients((prev) => [
      ...prev,
      { id: newId, name: `Ingredient ${prev.length + 1}`, weightGrams: 50 },
    ]);
  };

  const handleRemoveIngredient = (id: string) => {
    if (ingredients.length <= 1) return;
    setIngredients((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setIngredients(INITIAL_INGREDIENTS);
    setScaleMode('none');
    setTargetFlourWeight(1000);
    setTargetBatchWeight(1725);
  };

  const copyRecipe = () => {
    const lines = results.ingredients.map(
      (item) =>
        `- ${item.name}: ${formatWeight(item.scaledWeightGrams)} (${formatPercentage(item.bakersPercent)})`
    );
    const text = `Baker's Scaled Recipe:\n${lines.join('\n')}\nTotal Batch Weight: ${formatWeight(
      results.totalBatchWeightGrams
    )} (Multiplier: ${formatFactor(results.scalingMultiplier)})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* 2-Column Workstation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Ingredients Table & Scaling Controls (7 Columns) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-bakery-border p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-bakery-border pb-4">
            <div>
              <h2 className="text-lg font-bold text-bakery-dark">Recipe Formulation</h2>
              <p className="text-xs text-bakery-muted">
                Flour is always the 100% baseline. All ingredient percentages derive from total flour.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAddIngredient}
              disabled={ingredients.length >= 20}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white text-xs font-bold transition-colors shadow-sm disabled:opacity-50"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Ingredient
            </button>
          </div>

          {/* Scaling Mode Selector */}
          <div className="space-y-3 bg-stone-50/70 p-4 rounded-xl border border-stone-200">
            <ModeSelector<'none' | 'flour' | 'batch'>
              id="scaling-mode-label"
              label="Scaling Method"
              selected={scaleMode}
              onChange={(mode) => setScaleMode(mode)}
              options={[
                { value: 'none', label: 'Base Recipe' },
                { value: 'flour', label: 'Scale by Flour' },
                { value: 'batch', label: 'Scale by Total Batch' },
              ]}
            />

            {scaleMode === 'flour' && (
              <FormInput
                id="target-flour"
                label="Target Flour Weight"
                unit="g"
                value={targetFlourWeight}
                onChange={(val) => setTargetFlourWeight(val)}
                helpText="Scale all ingredients proportional to this desired flour amount."
              />
            )}

            {scaleMode === 'batch' && (
              <FormInput
                id="target-batch"
                label="Target Total Batch Weight"
                unit="g"
                value={targetBatchWeight}
                onChange={(val) => setTargetBatchWeight(val)}
                helpText="Scale all ingredients so their combined total equals this target weight."
              />
            )}
          </div>

          {/* Ingredient Rows List (Matching user screenshot style) */}
          <div className="space-y-3">
            {results.ingredients.map((item, idx) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl border border-stone-200 bg-white hover:border-bakery-border transition-colors gap-3"
              >
                <div className="flex-1 min-w-[140px]">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleUpdateName(item.id, e.target.value)}
                    className="w-full text-sm font-bold text-bakery-dark bg-transparent border-b border-transparent focus:border-bakery-accent focus:outline-none"
                    placeholder="Ingredient name"
                  />
                  <span className="text-xs text-bakery-subtle block mt-0.5">
                    Baker's: <strong className="text-bakery-dark">{formatPercentage(item.bakersPercent)}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="w-28">
                    <input
                      type="number"
                      inputMode="decimal"
                      value={item.weightGrams === 0 ? '' : item.weightGrams}
                      onChange={(e) => handleUpdateWeight(item.id, parseFloat(e.target.value) || 0)}
                      className="w-full text-right px-3 py-1.5 text-sm font-bold border border-stone-200 rounded-lg focus:ring-2 focus:ring-bakery-accent focus:outline-none"
                      placeholder="0"
                    />
                  </div>
                  <span className="text-xs font-bold text-bakery-muted w-5">g</span>

                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(item.id)}
                    disabled={ingredients.length <= 1}
                    aria-label={`Remove ${item.name}`}
                    className="p-1.5 text-stone-400 hover:text-red-500 disabled:opacity-20 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Results & Summary Card (5 Columns) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-bakery-border p-6 shadow-sm lg:sticky lg:top-24">
          <div className="border-b border-bakery-border pb-3 mb-5">
            <h2 className="text-lg font-bold text-bakery-dark">Batch Summary</h2>
            <p className="text-xs text-bakery-muted">
              Live totals and scaled quantities for production.
            </p>
          </div>

          {/* Prominent Stat Boxes */}
          <div className="grid grid-cols-2 gap-3 mb-6" aria-live="polite" aria-atomic="true">
            <div className="bg-bakery-highlight border border-amber-200/80 rounded-xl p-4 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-bakery-highlightText block">
                Total Batch Weight
              </span>
              <div className="text-3xl sm:text-4xl font-black text-bakery-highlightText mt-1">
                {formatWeight(results.totalBatchWeightGrams, 0)}
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium mt-1 block">
                All Ingredients Combined
              </span>
            </div>

            <div className="bg-bakery-highlight border border-amber-200/80 rounded-xl p-4 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-bakery-highlightText block">
                Scale Factor
              </span>
              <div className="text-3xl sm:text-4xl font-black text-bakery-highlightText mt-1">
                {formatFactor(results.scalingMultiplier)}
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium mt-1 block">
                Relative to Original
              </span>
            </div>
          </div>

          {/* Breakdown Rows */}
          <div className="space-y-2 text-sm text-bakery-dark border-t border-b border-stone-100 py-4 mb-6">
            <div className="flex justify-between font-medium">
              <span className="text-bakery-muted">Total Flour Baseline:</span>
              <span className="font-bold">{formatWeight(results.totalFlourGrams)}</span>
            </div>

            <div className="flex justify-between font-medium">
              <span className="text-bakery-muted">Total Ingredient Count:</span>
              <span className="font-bold">{results.ingredients.length} items</span>
            </div>

            <div className="pt-2 text-xs text-bakery-subtle">
              {scaleMode !== 'none' && (
                <p>
                  Scaled from original recipe of {formatWeight(ingredients.reduce((a, b) => a + b.weightGrams, 0))} using{' '}
                  <strong>{scaleMode === 'flour' ? 'Flour-Based' : 'Batch-Based'}</strong> multiplier.
                </p>
              )}
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
              {copied ? 'Recipe Copied!' : 'Copy Scaled Recipe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
