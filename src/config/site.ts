/**
 * Central site configuration and canonical URL normalization.
 * Consumes NEXT_PUBLIC_SITE_URL or falls back to localhost.
 */

function normalizeUrl(url: string): string {
  if (!url) return 'http://localhost:3000';
  // Strip trailing slashes to prevent //tools/... duplicates
  return url.replace(/\/+$/, '');
}

export const SITE_URL = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
);

export const SITE_NAME = 'BakingToolCalculators';
export const SITE_TAGLINE = 'Baking Calculators & Kitchen Math Tools for Home & Professional Bakers';
export const SITE_DESCRIPTION = 'Free, private, in-browser baking calculators for sourdough hydration, baker\'s percentages, and baking pan conversions. Accurate recipe math with zero signups.';

export function getAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
