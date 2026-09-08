import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_NAME } from '@/config/site';
import { ChefHat, Wheat, Scale, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Methodology',
  description: 'Learn about the mission and mathematical methodology behind BakingToolCalculators.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
          <ChefHat className="w-3.5 h-3.5 text-bakery-accent" />
          <span>Our Story &amp; Standards</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bakery-dark tracking-tight">
          About {SITE_NAME}
        </h1>
        <p className="text-base sm:text-lg text-bakery-muted mt-2 leading-relaxed">
          Precision kitchen mathematics engineered for home hobbyists, sourdough enthusiasts, and professional bakers.
        </p>
      </div>

      <div className="space-y-10 text-base text-bakery-dark leading-relaxed bg-white rounded-2xl border border-bakery-border p-6 sm:p-10 shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-bakery-dark flex items-center gap-2">
            <Wheat className="w-6 h-6 text-bakery-accent" />
            The Artisan Baker's Problem
          </h2>
          <p className="text-bakery-muted">
            Baking is an exact science where a small variance in water or flour completely transforms dough extensibility, fermentation rate, and final crumb openness. Yet, most online calculators overlook critical factors: they ignore the water contained in sourdough starters, force imprecise cup measurements, or rely on slow, ad-choked web pages.
          </p>
          <p className="text-bakery-muted">
            We built {SITE_NAME} with a single purpose: provide lightning-fast, zero-friction, mathematically honest baking tools that execute instantly in your browser without requiring accounts or logins.
          </p>
        </section>

        <section className="space-y-4 border-t border-stone-100 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-bakery-dark flex items-center gap-2">
            <Scale className="w-6 h-6 text-bakery-accent" />
            Our Mathematical Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
              <h3 className="font-bold text-base text-bakery-dark mb-1">True Hydration Split</h3>
              <p className="text-sm text-bakery-muted">
                Our algorithms separate sourdough starters into exact flour and water masses based on starter hydration before computing total hydration.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
              <h3 className="font-bold text-base text-bakery-dark mb-1">100% Flour Baseline</h3>
              <p className="text-sm text-bakery-muted">
                Strict adherence to the professional Baker's Math convention where the total flour weight serves as the immutable reference denominator.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3 border-t border-stone-100 pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-bakery-dark flex items-center gap-2">
            <Award className="w-6 h-6 text-bakery-accent" />
            Privacy &amp; Quality Commitment
          </h2>
          <p className="text-bakery-muted">
            All calculations occur on your local device. We believe essential kitchen tools should be reliable, respectful of privacy, and always accessible when your hands are covered in flour.
          </p>
          <div className="pt-4">
            <Link
              href="/#calculators"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white font-bold text-base shadow-sm transition-all"
            >
              <span>Explore Our Calculators</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
