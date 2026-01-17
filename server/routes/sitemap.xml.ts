export default defineEventHandler(() => {
  const baseUrl = 'https://aerokir.space';
  const locales = ['en', 'ua'];

  const staticPages = [
    '',
    '/experience',
    '/projects',
    '/contact',
  ];

  const { projects } = useAppConfig();

  const urls: string[] = [];

  // static pages
  for (const locale of locales) {
    for (const page of staticPages) {
      urls.push(`${baseUrl}/${locale}${page}`);
    }
  }

  // project slugs
  for (const locale of locales) {
    for (const project of projects) {
      urls.push(`${baseUrl}/${locale}/projects/${project.slug}`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`,
  )
  .join('')}
</urlset>`;

  setHeader(event, 'Content-Type', 'application/xml');
  return sitemap;
});
