import React from 'react';
import { Metadata } from 'next';
import { SITE_NAME } from '@/config/site';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use and disclaimer for recipe calculators.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
          <FileText className="w-3.5 h-3.5 text-bakery-accent" />
          <span>Legal Terms &amp; Disclaimer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bakery-dark tracking-tight">
          Terms of Use
        </h1>
        <p className="text-base text-bakery-muted mt-2">
          Last updated: September 8, 2026
        </p>
      </div>

      <div className="space-y-8 text-base text-bakery-dark leading-relaxed bg-white rounded-2xl border border-bakery-border p-6 sm:p-10 shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-bakery-dark">
            1. Free Kitchen Mathematical Tools
          </h2>
          <p className="text-bakery-muted">
            {SITE_NAME} provides baking calculators, unit converters, and educational content free of charge for personal hobby and professional culinary use.
          </p>
        </section>

        <section className="space-y-3 border-t border-stone-100 pt-6">
          <h2 className="text-xl font-bold text-bakery-dark">
            2. Mathematical Accuracy &amp; Culinary Disclaimer
          </h2>
          <p className="text-bakery-muted">
            While all formulas are verified against established culinary literature and tested with high precision, baking outcomes depend on environmental factors including ambient temperature, humidity, flour protein content, and oven calibration. Tools are provided on an &quot;as-is&quot; basis without guarantees of baking results.
          </p>
        </section>

        <section className="space-y-3 border-t border-stone-100 pt-6">
          <h2 className="text-xl font-bold text-bakery-dark">
            3. Intellectual Property
          </h2>
          <p className="text-bakery-muted">
            The design, text, branding, and original calculation code of {SITE_NAME} are protected by copyright. Standard mathematical baking formulas (baker&apos;s percentages, geometric volume) are universal mathematical principles.
          </p>
        </section>
      </div>
    </div>
  );
}
