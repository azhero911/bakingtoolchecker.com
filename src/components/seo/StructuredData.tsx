import React from 'react';
import { ToolDefinition } from '@/config/tools.config';
import { getAbsoluteUrl } from '@/config/site';

interface StructuredDataProps {
  tool: ToolDefinition;
}

export default function StructuredData({ tool }: StructuredDataProps) {
  const absoluteUrl = getAbsoluteUrl(tool.canonicalPath);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: tool.name,
        url: absoluteUrl,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: tool.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
