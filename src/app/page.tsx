import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TOOLS_REGISTRY } from '@/config/tools.config';
import {
  Wheat,
  CakeSlice,
  Scale,
  ArrowRight,
  ArrowDown,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

function getToolIcon(slug: string) {
  switch (slug) {
    case 'sourdough-hydration-calculator':
      return <Wheat className="w-5 h-5 text-bakery-accent" />;
    case 'bakers-percentage-calculator':
      return <Scale className="w-5 h-5 text-bakery-accent" />;
    case 'baking-pan-converter':
      return <CakeSlice className="w-5 h-5 text-bakery-accent" />;
    default:
      return <Scale className="w-5 h-5 text-bakery-accent" />;
  }
}

export default function HomePage() {
  const breadTools = TOOLS_REGISTRY.filter((t) => t.category === 'bread');
  const pastryTools = TOOLS_REGISTRY.filter((t) => t.category === 'pastry');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* HERO SECTION (Compact 2-Column) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16 pb-4">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-bakery-accent" />
            <span>100% In-Browser • No Sign-Up Required</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bakery-dark tracking-tight leading-tight">
            Baking Calculators for{' '}
            <span className="text-bakery-accent">Better Baking</span>
          </h1>

          <p className="text-base sm:text-lg text-bakery-muted mt-3.5 leading-relaxed max-w-xl">
            Accurate, easy-to-use calculators for sourdough hydration, baker’s percentages, and baking pan conversions. Built for home hobbyists and professional artisan bakers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#calculators"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white font-bold text-sm shadow-sm hover:shadow transition-all group"
            >
              <span>Explore Calculators</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* 3 Benefit Highlights */}
          <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 mt-7 text-sm sm:text-base font-semibold text-bakery-muted">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-bakery-accent" /> Works instantly
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-bakery-accent" /> Free to use &amp; no sign-up
            </span>
            <span className="flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-bakery-accent" /> Standardized formulas
            </span>
          </div>
        </div>

        {/* Right Column: Compact Baking Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm bg-amber-50/40">
            <Image
              src="/images/hero-bread.webp"
              alt="Artisan sourdough loaf with jar of starter and flour"
              width={640}
              height={480}
              className="w-full h-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-100 shadow-xs flex items-center justify-between">
              <span className="text-xs font-bold text-bakery-dark">Better Baking Starts with Better Math</span>
              <span className="text-[11px] font-bold text-bakery-accent uppercase tracking-wide">Accurate Math</span>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATORS SECTION (Matching Reference Card Design) */}
      <div id="calculators" className="scroll-mt-24 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 border-b border-bakery-border pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-bakery-dark tracking-tight">
              Featured Baking Calculators
            </h2>
            <p className="text-base text-bakery-muted mt-1">
              Precision kitchen tools for bread hobbyists, pastry chefs, and home bakers.
            </p>
          </div>
          <span className="text-xs font-bold text-bakery-accent bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full self-start sm:self-auto">
            3 Active Calculators
          </span>
        </div>

        {/* 3-Column Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Sourdough Hydration */}
          <Link
            id="bread"
            href="/tools/sourdough-hydration-calculator"
            className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs hover:border-bakery-accent/50 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              {/* Card Photo Thumbnail */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-stone-100 bg-stone-100">
                <Image
                  src="/images/card-sourdough.webp"
                  alt="Artisan sourdough loaf and bubbly starter"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Icon + Title Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-bakery-accent shrink-0 group-hover:bg-bakery-accent group-hover:text-white transition-colors">
                  <Wheat className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors leading-tight">
                  Sourdough Hydration
                </h3>
              </div>

              {/* Description */}
              <p className="text-base text-bakery-muted leading-relaxed mb-6">
                Calculate true sourdough hydration, starter split contribution, and prefermented flour ratios accurately.
              </p>
            </div>

            {/* Bottom Solid Pill Button CTA */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bakery-accent group-hover:bg-bakery-accentHover text-white font-bold text-sm shadow-xs transition-colors">
                <span>Calculate Hydration</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card 2: Baker's Percentage */}
          <Link
            id="scale"
            href="/tools/bakers-percentage-calculator"
            className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs hover:border-bakery-accent/50 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              {/* Card Photo Thumbnail */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-stone-100 bg-stone-100">
                <Image
                  src="/images/card-bakers-scale.webp"
                  alt="Baker percentage recipe notebook and digital scale"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Icon + Title Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-bakery-accent shrink-0 group-hover:bg-bakery-accent group-hover:text-white transition-colors">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors leading-tight">
                  Baker's Percentage
                </h3>
              </div>

              {/* Description */}
              <p className="text-base text-bakery-muted leading-relaxed mb-6">
                Universal recipe scaling tool with flour as the 100% baseline. Scale by flour weight or desired total batch weight.
              </p>
            </div>

            {/* Bottom Solid Pill Button CTA */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bakery-accent group-hover:bg-bakery-accentHover text-white font-bold text-sm shadow-xs transition-colors">
                <span>Scale Recipe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card 3: Baking Pan Converter */}
          <Link
            id="pastry"
            href="/tools/baking-pan-converter"
            className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs hover:border-bakery-accent/50 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              {/* Card Photo Thumbnail */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-stone-100 bg-stone-100">
                <Image
                  src="/images/card-pan-converter.webp"
                  alt="Freshly baked cake slice and assorted baking pans"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Icon + Title Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-bakery-accent shrink-0 group-hover:bg-bakery-accent group-hover:text-white transition-colors">
                  <CakeSlice className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors leading-tight">
                  Pan Size Converter
                </h3>
              </div>

              {/* Description */}
              <p className="text-base text-bakery-muted leading-relaxed mb-6">
                Convert recipe quantities between round, square, rectangular, and Bundt pans based on geometric volume capacity.
              </p>
            </div>

            {/* Bottom Solid Pill Button CTA */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bakery-accent group-hover:bg-bakery-accentHover text-white font-bold text-sm shadow-xs transition-colors">
                <span>Convert Pan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* WHY PRECISION BAKING MATH? */}
      <section className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-8 mb-14 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-bakery-dark tracking-tight mb-2">
          Why Precision Baking Math Matters
        </h2>
        <p className="text-base text-bakery-muted mb-6">
          Baking is culinary chemistry. Consistency and predictability depend on precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-bakery-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bakery-accent inline-block"></span>
              Weight gives you consistency
            </h3>
            <p className="text-base text-bakery-muted leading-relaxed">
              Measuring ingredients by weight makes recipes easier to reproduce because volume measurements can vary with ingredient density and measuring technique.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-bakery-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bakery-accent inline-block"></span>
              Starter contributes flour &amp; water
            </h3>
            <p className="text-base text-bakery-muted leading-relaxed">
              When calculating sourdough hydration, the flour and water contained in the starter should be included in the calculation to determine the dough’s true hydration.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-bakery-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bakery-accent inline-block"></span>
              Baker’s percentages scale easily
            </h3>
            <p className="text-base text-bakery-muted leading-relaxed">
              Using total flour as the 100% reference baseline makes it simple to compare ratios, adjust hydration, and scale formulas for any batch size without recalculating proportions.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (3 Simple Steps) */}
      <section className="mb-8">
        <div className="text-center max-w-lg mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-bakery-dark tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-bakery-muted mt-1.5">
            Three simple steps to calculate and scale any recipe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-amber-50/60 rounded-xl border border-amber-100 p-6 text-center">
            <div className="w-8 h-8 rounded-full bg-bakery-accent text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h3 className="text-base font-bold text-bakery-dark mb-1.5">Choose a calculator</h3>
            <p className="text-base text-bakery-muted leading-relaxed">
              Select sourdough hydration, universal recipe scaling, or baking pan conversions.
            </p>
          </div>

          <div className="bg-amber-50/60 rounded-xl border border-amber-100 p-6 text-center">
            <div className="w-8 h-8 rounded-full bg-bakery-accent text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h3 className="text-base font-bold text-bakery-dark mb-1.5">Enter measurements</h3>
            <p className="text-base text-bakery-muted leading-relaxed">
              Input flour weight, hydration target, ingredient percentages, or pan dimensions.
            </p>
          </div>

          <div className="bg-amber-50/60 rounded-xl border border-amber-100 p-6 text-center">
            <div className="w-8 h-8 rounded-full bg-bakery-accent text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h3 className="text-base font-bold text-bakery-dark mb-1.5">Get instant results</h3>
            <p className="text-base text-bakery-muted leading-relaxed">
              View exact ingredient weights, volume ratios, and thermal baking guidance immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
