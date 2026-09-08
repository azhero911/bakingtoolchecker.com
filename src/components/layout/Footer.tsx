import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME } from '@/config/site';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-12 mt-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Tagline (5 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${SITE_NAME} Logo`}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-tight">
                  Baking
                </span>
                <span className="font-extrabold text-xl text-white tracking-tight leading-tight">
                  Calculators
                </span>
              </div>
            </Link>

            <p className="text-base text-slate-300 leading-relaxed max-w-sm">
              Free, private in-browser recipe calculators with precision density and baker’s math. Convert and scale formulas between Metric, US Customary, and Imperial systems with confidence.
            </p>

            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400/90 pt-1">
              <Sparkles className="w-4 h-4 text-bakery-accent" />
              <span>100% In-Browser Client Math</span>
            </div>
          </div>

          {/* Col 2: Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Tools
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/tools/sourdough-hydration-calculator"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Sourdough Hydration
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/bakers-percentage-calculator"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Baker's Percentage
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/baking-pan-converter"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Pan Size Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/#calculators"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  All Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Formulas & Math (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Formulas
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/tools/sourdough-hydration-calculator"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  True Starter Split
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/bakers-percentage-calculator"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  100% Flour Baseline
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/baking-pan-converter"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Geometric Pan Volume
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/bakers-percentage-calculator"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Dual Recipe Scaling
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Help & Trust (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Help
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/#why-precision-baking-math"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Why Baking Math
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/sourdough-hydration-calculator"
                  className="text-slate-300 hover:text-white hover:underline transition-colors"
                >
                  Baking FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Privacy (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <span className="text-slate-300 block">
                  Privacy Policy
                </span>
                <span className="text-xs text-slate-400 block mt-1 leading-snug">
                  Calculations run locally in your browser. We don't upload calculator inputs to a server.
                </span>
              </li>
              <li className="pt-2">
                <span className="text-slate-300 block">
                  Terms of Use
                </span>
                <span className="text-xs text-slate-400 block mt-1 leading-snug">
                  Free to use. No account or sign-up required.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Free, private, client-side baking math for bakers.
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            v1.0 — In-Browser Precision Baking Math
          </p>
        </div>
      </div>
    </footer>
  );
}
