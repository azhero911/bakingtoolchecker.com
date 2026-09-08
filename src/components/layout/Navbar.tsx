import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wheat, Cake, BookOpen } from 'lucide-react';
import { SITE_NAME } from '@/config/site';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-bakery-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-xs border border-orange-200/50 group-hover:scale-105 transition-transform flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt={`${SITE_NAME} Logo`}
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-bakery-dark tracking-tight leading-none">
              {SITE_NAME}
            </span>
            <span className="text-[10px] font-bold text-bakery-accent tracking-wider uppercase mt-0.5">
              Precision Baking Math
            </span>
          </div>
        </Link>

        {/* Navigation Categories */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/#bread"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-bakery-muted hover:text-bakery-accent hover:bg-bakery-highlight transition-colors"
          >
            <Wheat className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bread &</span> Sourdough
          </Link>

          <Link
            href="/#pastry"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-bakery-muted hover:text-bakery-accent hover:bg-bakery-highlight transition-colors"
          >
            <Cake className="w-3.5 h-3.5" />
            Cakes <span className="hidden sm:inline">& Pastry</span>
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-bakery-accent bg-orange-50 border border-orange-200/60 hover:bg-orange-100 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guides</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
