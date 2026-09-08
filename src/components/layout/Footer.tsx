import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME } from '@/config/site';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#181109] text-stone-300 pt-16 pb-12 mt-20 border-t-4 border-bakery-accent shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Tagline (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0 border border-orange-400/40">
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
                <span className="font-extrabold text-xl text-bakery-accent tracking-tight leading-tight">
                  Calculators
                </span>
              </div>
            </Link>

            <p className="text-base text-stone-300 leading-relaxed max-w-sm">
              Free, private in-browser recipe calculators with precision density and baker’s math. Convert and scale formulas between Metric, US Customary, and Imperial systems with confidence.
            </p>

            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 pt-1">
              <Sparkles className="w-4 h-4 text-bakery-accent" />
              <span>100% Client-Side In-Browser Math</span>
            </div>
          </div>

          {/* Col 2: Tools (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-stone-800 pb-1">
              Calculators
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/tools/sourdough-hydration-calculator"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Sourdough Hydration
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/bakers-percentage-calculator"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Baker's Percentage
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/baking-pan-converter"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Pan Size Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/#calculators"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Baking Guides & Blog (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-stone-800 pb-1">
              Baking Guides
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/blog/true-sourdough-hydration-guide"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  True Starter Split
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/bakers-percentage-universal-scaling-guide"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Baker's Math 100%
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/baking-pan-size-conversion-guide"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Pan Scaling Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors font-semibold"
                >
                  All Guides &amp; Blog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Trust (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-stone-800 pb-1">
              Company
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/about"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-precision-baking-math"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Why Baking Math
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Privacy (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-wide border-b border-stone-800 pb-1">
              Legal
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <Link
                  href="/privacy"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors block font-semibold"
                >
                  Privacy Policy
                </Link>
                <span className="text-xs text-stone-400 block mt-1 leading-snug">
                  Zero server uploads. Calculations execute locally on your device.
                </span>
              </li>
              <li className="pt-2">
                <Link
                  href="/terms"
                  className="text-stone-300 hover:text-amber-400 hover:underline transition-colors block font-semibold"
                >
                  Terms of Use
                </Link>
                <span className="text-xs text-stone-400 block mt-1 leading-snug">
                  Free to use for personal &amp; commercial baking.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-stone-400">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Free, private, client-side baking math for bakers.
          </p>
          <p className="text-xs sm:text-sm text-stone-500">
            v1.0 — In-Browser Precision Baking Math
          </p>
        </div>
      </div>
    </footer>
  );
}
