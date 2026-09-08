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

          <div className="flex flex-wrap gap-6 text-xs font-bold text-bakery-dark">
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

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-bakery-subtle">
          <p>© {new Date().getFullYear()} {SITE_NAME}. Free, private, client-side baking math for bakers.</p>
          <p>No account required. All calculations occur locally in your browser.</p>
        </div>
      </div>
    </footer>
  );
}
