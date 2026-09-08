import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { TOOLS_REGISTRY, getToolBySlug } from '@/config/tools.config';
import { ToolComponentsMap, ToolContentMap } from '@/tools';
import ToolWrapper from '@/components/seo/ToolWrapper';
import { getAbsoluteUrl } from '@/config/site';

interface PageProps {
  params: {
    toolSlug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateStaticParams() {
  return TOOLS_REGISTRY.map((tool) => ({
    toolSlug: tool.slug,
  }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const tool = getToolBySlug(params.toolSlug);
  if (!tool) return {};

  const cleanUrl = getAbsoluteUrl(tool.canonicalPath);
  const hasQueryParams = Object.keys(searchParams || {}).length > 0;

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: cleanUrl,
    },
    robots: hasQueryParams
      ? { index: false, follow: true } // Strict noindex protection for parameterized state URLs
      : { index: true, follow: true },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: cleanUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
  };
}

export default function ToolPage({ params }: PageProps) {
  const tool = getToolBySlug(params.toolSlug);

  // Strict 404: Unknown slugs immediately invoke notFound()
  if (!tool) {
    notFound();
  }

  const ActiveComponent = ToolComponentsMap[tool.componentKey];
  const activeContent = ToolContentMap[tool.slug];

  if (!ActiveComponent || !activeContent) {
    notFound();
  }

  return (
    <ToolWrapper tool={tool} content={activeContent}>
      <ActiveComponent />
    </ToolWrapper>
  );
}
