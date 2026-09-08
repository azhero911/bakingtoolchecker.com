import React from 'react';
import { Metadata } from 'next';
import { SITE_NAME } from '@/config/site';
import { ShieldCheck, Lock, HardDrive, EyeOff } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to 100% in-browser client-side computation and privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Client-Side Privacy Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bakery-dark tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base text-bakery-muted mt-2">
          Last updated: September 8, 2026
        </p>
      </div>

      <div className="space-y-8 text-base text-bakery-dark leading-relaxed bg-white rounded-2xl border border-bakery-border p-6 sm:p-10 shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-bakery-dark flex items-center gap-2">
            <Lock className="w-5 h-5 text-bakery-accent" />
            1. Zero Server Uploads
          </h2>
          <p className="text-bakery-muted">
            All calculator formulas and recipe scaling on {SITE_NAME} execute entirely in your browser using client-side JavaScript. Your recipes, flour weights, starter ratios, and pan dimensions are never transmitted to our servers or saved to an external database.
          </p>
        </section>

        <section className="space-y-3 border-t border-stone-100 pt-6">
          <h2 className="text-xl font-bold text-bakery-dark flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-bakery-accent" />
            2. Local Browser Storage
          </h2>
          <p className="text-bakery-muted">
            When you adjust ingredient weights or toggle unit preferences (grams, ounces, inches, centimeters), values may be saved to your device&apos;s local storage solely for your kitchen convenience on repeat visits. You can clear this data at any time through your browser settings.
          </p>
        </section>

        <section className="space-y-3 border-t border-stone-100 pt-6">
          <h2 className="text-xl font-bold text-bakery-dark flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-bakery-accent" />
            3. No Account Required
          </h2>
          <p className="text-bakery-muted">
            We do not require user accounts, email registration, or passwords to use any calculator or guide on this site. You have complete anonymity while formulating your recipes.
          </p>
        </section>

        <section className="space-y-3 border-t border-stone-100 pt-6">
          <h2 className="text-xl font-bold text-bakery-dark">
            4. External Links
          </h2>
          <p className="text-bakery-muted">
            Our website may contain links to authoritative culinary sources and community references. We are not responsible for the privacy practices or content of external websites.
          </p>
        </section>
      </div>
    </div>
  );
}
