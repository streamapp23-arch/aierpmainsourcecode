import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// CONFIGURATION
const SITE_URL = 'https://www.aierppartners.com';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const STATIC_ROUTES = [
    '/',
    '/business-process-consulting',
    '/implementation-upgrades',
    '/managed-services',
    '/integration-services',
    '/enterprise-mobility',
    '/erp-ai',
    '/oracle',
    '/open-erp',
    '/custom-application-development',
    '/ai-integration-services',
    '/ai-applications',
    '/contact',
    '/industries',
    '/manufacturing',
    '/retail',
    '/healthcare',
    '/logistics',
    '/oil-gas',
    '/about',
    '/blog',
    '/roi-calculator'
];

const generateSitemap = async () => {
    let blogRoutes = [];

    try {
        if (supabaseUrl && supabaseKey) {
            const { data: posts, error } = await supabase
                .from('posts')
                .select('slug, updated_at, created_at');

            if (error) throw error;

            if (posts) {
                blogRoutes = posts.map(post => ({
                    url: `/blogs/${post.slug}`,
                    lastmod: post.updated_at || post.created_at,
                    changefreq: 'weekly',
                    priority: '0.7'
                }));
            }
        }
    } catch (error) {
        console.warn('⚠️ Could not fetch blog posts for sitemap:', error.message);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_ROUTES.map(route => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
${blogRoutes.map(route => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${new Date(route.lastmod).toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const publicDir = path.join(__dirname, 'public');

    // Ensure public directory exists
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log(`✅ Sitemap generated successfully with ${STATIC_ROUTES.length} static pages and ${blogRoutes.length} blog posts!`);
};

generateSitemap();
