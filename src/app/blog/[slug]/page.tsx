import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BLOG_POSTS, getBlogPost } from '@/config/blog.config';
import { ChevronLeft, Clock, Calendar, ArrowRight, Calculator } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/config/site';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-bakery-muted hover:text-bakery-accent transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-bakery-subtle mb-3">
          <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 font-bold uppercase tracking-wider text-[11px]">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bakery-dark tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm mb-8 bg-amber-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="800px"
          />
        </div>
      </header>

      <div className="space-y-6 text-base sm:text-lg text-bakery-dark leading-relaxed font-sans pb-12 border-b border-bakery-border">
        {post.contentHtml.map((paragraph, idx) => (
          <p key={idx} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 bg-amber-50/70 rounded-2xl border border-amber-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-bakery-accent uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" /> Interactive Tool
          </div>
          <h3 className="text-xl font-bold text-bakery-dark">
            Calculate with {post.relatedToolName}
          </h3>
          <p className="text-base text-bakery-muted mt-1">
            Apply these formulas with our free, in-browser calculator.
          </p>
        </div>
        <Link
          href={`/tools/${post.relatedToolSlug}`}
          className="px-6 py-3 rounded-xl bg-bakery-accent hover:bg-bakery-accentHover text-white font-bold text-base shadow-sm transition-all flex items-center gap-2 whitespace-nowrap"
        >
          <span>Open Calculator</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
