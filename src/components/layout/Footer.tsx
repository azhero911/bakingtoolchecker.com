import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_NAME, SITE_TAGLINE } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-bakery-border py-12 mt-16 text-bakery-muted text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-stone-100">
          <div className="space-y-1 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-orange-200/50 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={`${SITE_NAME} Logo`}
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-base text-bakery-dark">{SITE_NAME}</span>
            </div>
            <p className="text-xs text-bakery-subtle leading-relaxed">{SITE_TAGLINE}</p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs font-bold text-bakery-dark">
            <Link href="/" className="hover:text-bakery-accent transition-colors">
              Home
            </Link>
            <Link href="/tools/sourdough-hydration-calculator" className="hover:text-bakery-accent transition-colors">
              Sourdough Hydration
            </Link>
            <Link href="/tools/bakers-percentage-calculator" className="hover:text-bakery-accent transition-colors">
              Baker's Percentage
            </Link>
            <Link href="/tools/baking-pan-converter" className="hover:text-bakery-accent transition-colors">
              Pan Converter
            </Link>
          </div>
        </div>

        {/* Formula & Method Transparency */}
        <div className="py-6 border-b border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-bakery-subtle">
          <div>
            <span className="font-bold text-bakery-dark block mb-1">Standardized Math</span>
            <p>Calculations adhere to artisan baking conventions: flour as 100% baseline, true sourdough starter flour/water splits, and geometric pan capacity.</p>
          </div>
          <div>
            <span className="font-bold text-bakery-dark block mb-1">Precision Guarantee</span>
            <p>Full floating-point precision is preserved across all conversions (grams, ounces, inches, centimeters) before rounding for kitchen display.</p>
          </div>
          <div>
            <span className="font-bold text-bakery-dark block mb-1">Privacy Guarantee</span>
            <p>Calculations run locally in your browser. We don't upload calculator inputs to a server.</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-bakery-subtle">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Free to use. No sign-up required.</p>
          <p>Built for home hobbyists and professional artisan bakers.</p>
        </div>
      </div>
    </footer>
  );
}
