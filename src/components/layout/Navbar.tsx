import React from 'react';
import Link from 'next/link';
import { ChefHat, Wheat, Cake } from 'lucide-react';
import { SITE_NAME } from '@/config/site';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-bakery-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-bakery-accent flex items-center justify-center text-white shadow-sm group-hover:bg-bakery-accentHover transition-colors">
            <ChefHat className="w-5 h-5" />
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-bakery-muted hover:text-bakery-accent hover:bg-bakery-highlight transition-colors"
          >
            <Wheat className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bread &</span> Sourdough
          </Link>

          <Link
            href="/#pastry"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-bakery-muted hover:text-bakery-accent hover:bg-bakery-highlight transition-colors"
          >
            <Cake className="w-3.5 h-3.5" />
            Cakes <span className="hidden sm:inline">& Pastry</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
