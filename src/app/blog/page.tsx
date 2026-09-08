import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BLOG_POSTS } from '@/config/blog.config';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Baking Guides & Bread Science Articles',
  description: 'In-depth, mathematically verified baking guides on sourdough hydration, baker's percentages, and cake pan conversions.',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-900 border border-amber-200 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-bakery-accent" />
          <span>Artisan Baking Guides &amp; Science</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-bakery-dark tracking-tight leading-tight">
          Baking Science &amp; Calculation Guides
        </h1>
        <p className="text-base sm:text-lg text-bakery-muted mt-3.5 leading-relaxed">
          Understand the culinary chemistry and mathematics behind consistent artisan bread, pastry, and cake baking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-xs hover:border-bakery-accent/50 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-stone-100 bg-stone-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="400px"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-bakery-muted font-semibold mb-2.5">
                <span className="text-bakery-accent font-bold uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors leading-snug mb-2.5">
                {post.title}
              </h2>

              <p className="text-base text-bakery-muted leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-50 group-hover:bg-bakery-accent text-bakery-dark group-hover:text-white font-bold text-sm border border-amber-200/80 group-hover:border-transparent transition-all">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
