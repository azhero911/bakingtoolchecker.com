import { MetadataRoute } from 'next';
import { TOOLS_REGISTRY } from '@/config/tools.config';
import { getAbsoluteUrl } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Core Homepage
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. Authoritative Clean Tool Routes from Registry (No query parameters)
  const toolRoutes: MetadataRoute.Sitemap = TOOLS_REGISTRY.map((tool) => ({
    url: getAbsoluteUrl(tool.canonicalPath),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...toolRoutes];
}
