import React from 'react';
import Link from 'next/link';
import { TOOLS_REGISTRY } from '@/config/tools.config';
import { Wheat, Cake, ArrowRight, ShieldCheck, Zap, Scale } from 'lucide-react';

export default function HomePage() {
  const breadTools = TOOLS_REGISTRY.filter((t) => t.category === 'bread');
  const pastryTools = TOOLS_REGISTRY.filter((t) => t.category === 'pastry');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-200 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-bakery-accent" />
          <span>100% Free &amp; In-Browser • No Signups • No Server Uploads</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-bakery-dark tracking-tight leading-tight">
          Baking Calculators &amp; Kitchen Math Tools
        </h1>

        <p className="text-base sm:text-lg text-bakery-muted mt-4 leading-relaxed">
          Free precision calculators for sourdough hydration, baker’s percentages, and baking pan conversions. Built for home hobbyists and professional artisan bakers.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs font-semibold text-bakery-subtle">
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-bakery-accent" /> Instant Live Calculations
          </span>
          <span className="flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-bakery-accent" /> Standardized Baker's Formulas
          </span>
        </div>
      </div>

      {/* CATEGORY 1: Bread & Sourdough Tools */}
      <section id="bread" className="mb-14 scroll-mt-20">
        <div className="flex items-center gap-2.5 mb-6 border-b border-bakery-border pb-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-bakery-accent">
            <Wheat className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-bakery-dark">Bread &amp; Sourdough Calculators</h2>
            <p className="text-xs text-bakery-muted">Artisan formula mathematics, starter contributions, and hydration scaling.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breadTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-2xl border border-bakery-border p-6 shadow-sm hover:border-bakery-accent hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-bakery-accent block mb-1">
                  {tool.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-bakery-muted mt-2 leading-relaxed">
                  {tool.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-bakery-accent">
                <span>Open Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CATEGORY 2: Cakes & Pastry Tools */}
      <section id="pastry" className="mb-14 scroll-mt-20">
        <div className="flex items-center gap-2.5 mb-6 border-b border-bakery-border pb-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-bakery-accent">
            <Cake className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-bakery-dark">Cakes &amp; Pastry Conversions</h2>
            <p className="text-xs text-bakery-muted">Pan volume substitution, scaling factors, and thermal oven guidance.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastryTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-2xl border border-bakery-border p-6 shadow-sm hover:border-bakery-accent hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-bakery-accent block mb-1">
                  {tool.categoryLabel}
                </span>
                <h3 className="text-lg font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-bakery-muted mt-2 leading-relaxed">
                  {tool.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-bakery-accent">
                <span>Open Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
