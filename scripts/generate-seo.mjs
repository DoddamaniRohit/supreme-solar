// Generates public/sitemap.xml and public/robots.txt before every build.
// Set SITE_URL (e.g. https://supreme-solar.pages.dev) in your Cloudflare Pages
// environment variables once the production domain is known.
import { mkdirSync, writeFileSync } from 'node:fs';

const siteUrl = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
const paths = ['/', '/products', '/about', '/contact'];
const today = new Date().toISOString().slice(0, 10);

const urls = paths
  .map(
    (p) => `  <url>
    <loc>${siteUrl}${p}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n');

mkdirSync('public', { recursive: true });
writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
);
writeFileSync(
  'public/robots.txt',
  `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
);

if (!process.env.SITE_URL) {
  console.warn('[seo] SITE_URL not set - sitemap uses https://example.com. Set SITE_URL before deploying.');
}
