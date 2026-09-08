import React from 'react';
import Link from 'next/link';
import { ChefHat, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-bakery-accent mx-auto mb-6">
        <ChefHat className="w-7 h-7" />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider text-bakery-accent">
        404 Error • Page Not Found
      </span>

      <h1 className="text-3xl font-extrabold text-bakery-dark mt-2 mb-3">
        This Recipe Doesn't Exist
      </h1>

      <p className="text-sm text-bakery-muted mb-8 leading-relaxed max-w-md mx-auto">
        The calculator or page you are looking for may have been moved, renamed, or is currently baking.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white text-xs font-bold transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to All Calculators
        </Link>
      </div>
    </div>
  );
}
