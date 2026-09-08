import React from 'react';
import Link from 'next/link';
import { ToolDefinition, TOOLS_REGISTRY } from '@/config/tools.config';
import StructuredData from './StructuredData';
import {
  ChevronLeft,
  Calculator,
  HelpCircle,
  AlertTriangle,
  BookOpen,
  Info,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ContentSection {
  h1: string;
  explanation: string;
  howItWorks: string;
  formula: {
    title: string;
    latex: string;
  };
  workedExample: {
    title: string;
    body: string;
  };
  assumptions: string[];
  commonMistakes: Array<{ mistake: string; correction: string }>;
  sources: Array<{ name: string; author: string; note: string }>;
}

interface ToolWrapperProps {
  tool: ToolDefinition;
  content: ContentSection;
  children: React.ReactNode;
}

export default function ToolWrapper({ tool, content, children }: ToolWrapperProps) {
  const relatedTools = TOOLS_REGISTRY.filter((t) =>
    tool.relatedToolSlugs.includes(t.slug)
  );

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* 1. Structured Data */}
      <StructuredData tool={tool} />

      {/* 2. Top Header Navigation (Matching user screenshot) */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs font-bold text-bakery-muted hover:text-bakery-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          All Tools
        </Link>
        <span className="text-stone-300">/</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
          {tool.categoryLabel}
        </span>
      </div>

      {/* 3. Page Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-bakery-dark tracking-tight">
          {content.h1}
        </h1>
        <p className="text-base sm:text-lg text-bakery-muted mt-2 max-w-3xl leading-relaxed">
          {content.explanation}
        </p>
      </header>

      {/* 4. THE INTERACTIVE APP (Above the fold) */}
      <section aria-label="Interactive Baking Calculator" className="mb-14">
        {children}
      </section>

      {/* 5. Comprehensive Educational Content (Prevents Thin Content) */}
      <div className="border-t border-bakery-border pt-12 space-y-12">
        {/* How It Works */}
        <section className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-bakery-dark flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-bakery-accent" />
            How This Calculation Works
          </h2>
          <p className="text-base text-bakery-muted leading-relaxed">
            {content.howItWorks}
          </p>
        </section>

        {/* Formula & Worked Example Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mathematical Formula */}
          <section className="bg-white rounded-2xl border border-bakery-border p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-bakery-dark flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5 text-bakery-accent" />
                {content.formula.title}
              </h2>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 font-mono text-xs sm:text-sm text-bakery-dark whitespace-pre-line leading-relaxed">
                {content.formula.latex}
              </div>
            </div>
          </section>

          {/* Worked Example */}
          <section className="bg-white rounded-2xl border border-bakery-border p-6 shadow-sm">
            <h2 className="text-base sm:text-lg font-bold text-bakery-dark flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              {content.workedExample.title}
            </h2>
            <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-xl p-4 text-xs sm:text-sm text-stone-800 whitespace-pre-line leading-relaxed font-sans">
              {content.workedExample.body}
            </div>
          </section>
        </div>

        {/* Calculation Assumptions */}
        <section className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-bakery-dark flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-bakery-accent" />
            Calculation Assumptions
          </h2>
          <ul className="space-y-2 mt-2">
            {content.assumptions.map((item, idx) => (
              <li key={idx} className="text-base text-bakery-muted flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bakery-accent mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-bakery-dark flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            {content.commonMistakes.map((item, idx) => (
              <div key={idx} className="border-l-4 border-amber-400 pl-4 py-1">
                <h3 className="text-base font-bold text-bakery-dark">{item.mistake}</h3>
                <p className="text-base text-bakery-muted mt-1 leading-relaxed">
                  {item.correction}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology & Sources */}
        <section className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-bakery-dark flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-bakery-accent" />
            Methodology & Authoritative Sources
          </h2>
          <p className="text-base text-bakery-muted mb-4">
            Our formulas are verified against standard professional culinary literature and test kitchen standards:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.sources.map((src, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-bold text-base text-bakery-dark block">{src.name}</span>
                <span className="text-xs font-semibold text-bakery-accent block">{src.author}</span>
                <p className="text-sm sm:text-base text-bakery-subtle mt-1.5 leading-relaxed">{src.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visible FAQs */}
        {tool.faqs.length > 0 && (
          <section className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-bakery-dark flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-bakery-accent" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {tool.faqs.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-stone-200 p-4 open:bg-stone-50/50 transition-colors">
                  <summary className="font-bold text-base text-bakery-dark cursor-pointer select-none">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-base text-bakery-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools Internal Links */}
        {relatedTools.length > 0 && (
          <section className="pt-4">
            <h2 className="text-lg font-bold text-bakery-dark mb-4">Related Baking Calculators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/tools/${rel.slug}`}
                  className="p-5 rounded-2xl border border-bakery-border bg-white hover:border-bakery-accent hover:shadow-sm transition-all group flex justify-between items-center"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-bakery-accent block">
                      {rel.categoryLabel}
                    </span>
                    <h3 className="font-bold text-base text-bakery-dark group-hover:text-bakery-accent transition-colors mt-0.5">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-bakery-muted mt-1 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-bakery-accent group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
