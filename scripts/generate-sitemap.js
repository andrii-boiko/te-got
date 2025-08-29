const fs = require('fs');
const path = require('path');

// Extract card slugs from the TypeScript file
function extractCardSlugs() {
  const cardsPath = path.join(__dirname, '../data/cards.ts');
  const content = fs.readFileSync(cardsPath, 'utf8');
  
  // Extract all slug values using regex
  const slugMatches = content.match(/slug: "([^"]+)"/g);
  if (!slugMatches) {
    throw new Error('No slugs found in cards.ts');
  }
  
  return slugMatches.map(match => match.replace('slug: "', '').replace('"', ''));
}

// Base URL for your site (update this to your GitHub Pages URL)
const BASE_URL = process.env.SITE_URL || 'https://andriiboiko.github.io/tegot';

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  const cardSlugs = extractCardSlugs();
  
  console.log(`Found ${cardSlugs.length} cards`);
  
  // Static pages
  const staticPages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/en',
      changefreq: 'weekly', 
      priority: '0.9'
    },
    {
      url: '/ua',
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];

  // Dynamic card pages
  const cardPages = [];
  
  // Add individual card pages (/card/[slug])
  cardSlugs.forEach(slug => {
    cardPages.push({
      url: `/card/${slug}`,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Add localized card pages
  cardSlugs.forEach(slug => {
    cardPages.push({
      url: `/en/${slug}`,
      changefreq: 'monthly', 
      priority: '0.7'
    });
    cardPages.push({
      url: `/ua/${slug}`,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });

  // Combine all pages
  const allPages = [...staticPages, ...cardPages];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, '../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  
  const cardSlugs = extractCardSlugs();
  const totalUrls = cardSlugs.length * 3 + 3; // (cards * 3 routes) + 3 static pages
  
  console.log(`✅ Sitemap generated with ${totalUrls} URLs at ${sitemapPath}`);
}

// Run if called directly
if (require.main === module) {
  writeSitemap();
}

module.exports = { generateSitemap, writeSitemap };