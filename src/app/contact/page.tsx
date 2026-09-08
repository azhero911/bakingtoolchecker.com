import React from 'react';
import { Metadata } from 'next';
import { SITE_NAME } from '@/config/site';
import { Mail, MessageSquare, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Feedback',
  description: 'Get in touch with the BakingToolCalculators team for suggestions or recipe tool requests.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-bakery-accent" />
          <span>Feedback &amp; Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-bakery-dark tracking-tight">
          Contact &amp; Tool Requests
        </h1>
        <p className="text-base sm:text-lg text-bakery-muted mt-2 leading-relaxed">
          Have an idea for a new baking calculator or feedback on an existing tool? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-bakery-border p-6 sm:p-10 shadow-xs space-y-6">
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-bakery-accent text-white flex items-center justify-center shrink-0 shadow-xs">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-bakery-dark">Direct Email</h3>
            <p className="text-sm text-bakery-muted mt-0.5">
              Send feedback, bug reports, or partnership inquiries to:
            </p>
            <a
              href="mailto:hello@bakingtoolcalculators.com"
              className="text-base font-bold text-bakery-accent hover:underline mt-1 inline-block"
            >
              hello@bakingtoolcalculators.com
            </a>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-stone-700 text-white flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-bakery-dark">Community Feature Requests</h3>
            <p className="text-sm text-bakery-muted mt-0.5">
              We build tools based directly on baker requests (e.g. Desired Dough Temperature, Pizza Hydration). Drop us a line with the formula you need!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
