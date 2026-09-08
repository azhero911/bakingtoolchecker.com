'use client';

import React, { useState, useMemo } from 'react';
import {
  comparePans,
  PanConfig,
  PanShape,
  BundtCapacityPreset,
} from '@/lib/math-engine/pan-converter';
import { formatFactor, roundTo } from '@/lib/math-engine/rounding';
import FormInput from '@/components/calculator/FormInput';
import ModeSelector from '@/components/calculator/ModeSelector';
import { Copy, Check, RotateCcw, AlertCircle } from 'lucide-react';

export default function PanConverterUI() {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  // Original Pan (Default: 9x13x2" Rectangle)
  const [origShape, setOrigShape] = useState<PanShape>('rectangle');
  const [origDim1, setOrigDim1] = useState<number>(13);
  const [origDim2, setOrigDim2] = useState<number>(9);
  const [origDepth, setOrigDepth] = useState<number>(2);
  const [origBundt, setOrigBundt] = useState<BundtCapacityPreset>('10-cup');

  // Target Pan (Default: 8x2" Round)
  const [targetShape, setTargetShape] = useState<PanShape>('round');
  const [targetDim1, setTargetDim1] = useState<number>(8);
  const [targetDim2, setTargetDim2] = useState<number>(8);
  const [targetDepth, setTargetDepth] = useState<number>(2);
  const [targetBundt, setTargetBundt] = useState<BundtCapacityPreset>('10-cup');

  const [copied, setCopied] = useState(false);

  const origConfig: PanConfig = useMemo(
    () => ({
      shape: origShape,
      unit,
      dimension1: origDim1,
      dimension2: origDim2,
      depth: origDepth,
      bundtPreset: origBundt,
    }),
    [origShape, unit, origDim1, origDim2, origDepth, origBundt]
  );

  const targetConfig: PanConfig = useMemo(
    () => ({
      shape: targetShape,
      unit,
      dimension1: targetDim1,
      dimension2: targetDim2,
      depth: targetDepth,
      bundtPreset: targetBundt,
    }),
    [targetShape, unit, targetDim1, targetDim2, targetDepth, targetBundt]
  );

  const results = useMemo(() => {
    return comparePans(origConfig, targetConfig);
  }, [origConfig, targetConfig]);

  const handleReset = () => {
    setUnit('in');
    setOrigShape('rectangle');
    setOrigDim1(13);
    setOrigDim2(9);
    setOrigDepth(2);
    setTargetShape('round');
    setTargetDim1(8);
    setTargetDepth(2);
  };

  const copyResults = () => {
    const text = `Baking Pan Scaling Guide:
- Original Pan: ${origShape} (${roundTo(results.original.volumeIn3, 1)} in³ estimated capacity)
- Target Pan: ${targetShape} (${roundTo(results.target.volumeIn3, 1)} in³ estimated capacity)
- Volume-Based Scaling Factor: ${formatFactor(results.volumeScalingFactor)}
- Baking Advice: ${results.thermalGuidance}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Top Unit Toggle */}
      <div className="mb-6 flex items-center justify-between">
        <ModeSelector<'in' | 'cm'>
          id="pan-unit-label"
          label="Measurement Units"
          selected={unit}
          onChange={(u) => setUnit(u)}
          options={[
            { value: 'in', label: 'Inches (in)' },
            { value: 'cm', label: 'Centimeters (cm)' },
          ]}
        />
      </div>

      {/* Main 2-Column Workstation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Original & Target Pan Selectors (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          {/* ORIGINAL PAN BOX */}
          <div className="bg-white rounded-2xl border border-bakery-border p-6 shadow-sm space-y-4">
            <div className="border-b border-bakery-border pb-3">
              <h2 className="text-base font-bold text-bakery-dark">1. Original Recipe Pan</h2>
              <p className="text-xs text-bakery-muted">The pan size specified in the original recipe.</p>
            </div>

            <ModeSelector<PanShape>
              id="orig-shape-label"
              label="Original Pan Shape"
              selected={origShape}
              onChange={(s) => setOrigShape(s)}
              options={[
                { value: 'round', label: 'Round' },
                { value: 'square', label: 'Square' },
                { value: 'rectangle', label: 'Rectangle' },
                { value: 'bundt', label: 'Bundt Preset' },
              ]}
            />

            {origShape === 'bundt' ? (
              <ModeSelector<BundtCapacityPreset>
                id="orig-bundt-label"
                label="Standard Bundt Capacity"
                selected={origBundt}
                onChange={(p) => setOrigBundt(p)}
                options={[
                  { value: '6-cup', label: '6-Cup (~1.4L)' },
                  { value: '10-cup', label: '10-Cup Standard (~2.4L)' },
                  { value: '12-cup', label: '12-Cup Large (~2.8L)' },
                ]}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <FormInput
                  id="orig-dim1"
                  label={origShape === 'round' ? 'Diameter' : origShape === 'square' ? 'Side Length' : 'Length'}
                  unit={unit}
                  value={origDim1}
                  onChange={(val) => setOrigDim1(val)}
                />

                {origShape === 'rectangle' && (
                  <FormInput
                    id="orig-dim2"
                    label="Width"
                    unit={unit}
                    value={origDim2}
                    onChange={(val) => setOrigDim2(val)}
                  />
                )}

                <FormInput
                  id="orig-depth"
                  label="Pan Depth"
                  unit={unit}
                  value={origDepth}
                  onChange={(val) => setOrigDepth(val)}
                  helpText="Height of the pan wall."
                />
              </div>
            )}
          </div>

          {/* TARGET PAN BOX */}
          <div className="bg-white rounded-2xl border border-bakery-border p-6 shadow-sm space-y-4">
            <div className="border-b border-bakery-border pb-3">
              <h2 className="text-base font-bold text-bakery-dark">2. Target Pan You Want to Use</h2>
              <p className="text-xs text-bakery-muted">The substitute pan you actually have in your kitchen.</p>
            </div>

            <ModeSelector<PanShape>
              id="target-shape-label"
              label="Target Pan Shape"
              selected={targetShape}
              onChange={(s) => setTargetShape(s)}
              options={[
                { value: 'round', label: 'Round' },
                { value: 'square', label: 'Square' },
                { value: 'rectangle', label: 'Rectangle' },
                { value: 'bundt', label: 'Bundt Preset' },
              ]}
            />

            {targetShape === 'bundt' ? (
              <ModeSelector<BundtCapacityPreset>
                id="target-bundt-label"
                label="Standard Bundt Capacity"
                selected={targetBundt}
                onChange={(p) => setTargetBundt(p)}
                options={[
                  { value: '6-cup', label: '6-Cup (~1.4L)' },
                  { value: '10-cup', label: '10-Cup Standard (~2.4L)' },
                  { value: '12-cup', label: '12-Cup Large (~2.8L)' },
                ]}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <FormInput
                  id="target-dim1"
                  label={targetShape === 'round' ? 'Diameter' : targetShape === 'square' ? 'Side Length' : 'Length'}
                  unit={unit}
                  value={targetDim1}
                  onChange={(val) => setTargetDim1(val)}
                />

                {targetShape === 'rectangle' && (
                  <FormInput
                    id="target-dim2"
                    label="Width"
                    unit={unit}
                    value={targetDim2}
                    onChange={(val) => setTargetDim2(val)}
                  />
                )}

                <FormInput
                  id="target-depth"
                  label="Pan Depth"
                  unit={unit}
                  value={targetDepth}
                  onChange={(val) => setTargetDepth(val)}
                  helpText="Height of the target wall."
                />
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Conversion Summary Card (5 Columns) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-bakery-border p-6 shadow-sm lg:sticky lg:top-24">
          <div className="border-b border-bakery-border pb-3 mb-5">
            <h2 className="text-lg font-bold text-bakery-dark">Conversion Summary</h2>
            <p className="text-xs text-bakery-muted">
              Multiply your recipe ingredients by the volume scaling factor.
            </p>
          </div>

          {/* Prominent Stat Boxes */}
          <div className="grid grid-cols-2 gap-3 mb-6" aria-live="polite" aria-atomic="true">
            <div className="bg-bakery-highlight border border-amber-200/80 rounded-xl p-4 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-bakery-highlightText block">
                Volume Scaling
              </span>
              <div className="text-3xl sm:text-4xl font-black text-bakery-highlightText mt-1">
                {formatFactor(results.volumeScalingFactor)}
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium mt-1 block">
                Multiply Ingredients
              </span>
            </div>

            <div className="bg-bakery-highlight border border-amber-200/80 rounded-xl p-4 text-center">
              <span className="text-xs uppercase tracking-wider font-bold text-bakery-highlightText block">
                Target Capacity
              </span>
              <div className="text-3xl sm:text-4xl font-black text-bakery-highlightText mt-1">
                {roundTo(results.target.volumeIn3, 0)} <span className="text-lg font-bold">in³</span>
              </div>
              <span className="text-[11px] text-amber-800/80 font-medium mt-1 block">
                vs {roundTo(results.original.volumeIn3, 0)} in³ original
              </span>
            </div>
          </div>

          {/* Granular Surface & Depth Comparison */}
          <div className="space-y-2.5 text-sm text-bakery-dark border-t border-b border-stone-100 py-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Pan Footprint / Area:</span>
              <span className="font-bold">
                {results.target.areaSqIn !== null
                  ? `${roundTo(results.target.areaSqIn, 1)} sq in`
                  : 'N/A for Bundt preset'}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-bakery-muted font-medium">Pan Depth Difference:</span>
              <span className="font-bold">
                {results.panDepthDifferenceInches !== null
                  ? `${results.panDepthDifferenceInches > 0 ? '+' : ''}${roundTo(
                      results.panDepthDifferenceInches,
                      1
                    )} in`
                  : 'N/A for Bundt preset'}
              </span>
            </div>
          </div>

          {/* Professional Baking & Thermal Guidance Alert */}
          <div className="mb-6 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-bakery-accent shrink-0 mt-0.5" />
            <p>{results.thermalGuidance}</p>
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
              onClick={copyResults}
              className="flex-1 px-5 py-3 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Pan Scaling'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
