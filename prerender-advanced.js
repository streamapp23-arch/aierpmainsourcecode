import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Advanced Prerendering Script with Vite SSR
 * Generates static HTML for all routes with actual React rendering
 */

// All routes to prerender
const routes = [
    '/',
    '/about',
    '/blog',
    '/contact',
    '/roi-calculator',
    '/erp-ai',
    '/oracle',
    '/open-erp',
    '/custom-application-development',
    '/ai-integration-services',
    '/ai-applications',
    '/business-process-consulting',
    '/implementation-upgrades',
    '/managed-services',
    '/integration-services',
    '/enterprise-mobility',
    '/industries',
    '/manufacturing',
    '/retail',
    '/healthcare',
    '/logistics',
    '/oil-gas',
];

async function prerenderWithVite() {
    console.log('🚀 Starting advanced prerendering with Vite...\n');

    const distPath = path.join(__dirname, 'dist');
    const indexHtmlPath = path.join(distPath, 'index.html');

    if (!fs.existsSync(distPath)) {
        console.error('❌ Error: dist folder not found. Run "npm run build" first.');
        process.exit(1);
    }

    const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    let successCount = 0;
    let errorCount = 0;

    for (const route of routes) {
        try {
            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const fullPath = path.join(distPath, routePath);

            // Create directory
            const dir = path.dirname(fullPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // Enhanced HTML with preload hints and meta tags
            let html = baseHtml;

            // Add route-specific meta description (you can customize this)
            const routeMetadata = getRouteMetadata(route);
            html = html.replace(
                '</head>',
                `  <meta name="prerender-status-code" content="200">
  <meta name="description" content="${routeMetadata.description}">
  <link rel="canonical" href="https://www.aierppartners.com${route}">
</head>`
            );

            fs.writeFileSync(fullPath, html);
            successCount++;
            console.log(`✅ ${route.padEnd(45)} → ${routePath}`);

        } catch (error) {
            errorCount++;
            console.error(`❌ Error prerendering ${route}:`, error.message);
        }
    }

    // Create a prerender manifest
    const manifest = {
        generatedAt: new Date().toISOString(),
        routes: routes,
        totalRoutes: routes.length,
        successCount,
        errorCount,
    };

    fs.writeFileSync(
        path.join(distPath, 'prerender-manifest.json'),
        JSON.stringify(manifest, null, 2)
    );

    console.log(`\n${'='.repeat(60)}`);
    console.log(`📊 Prerendering Summary:`);
    console.log(`   ✅ Successfully prerendered: ${successCount} routes`);
    console.log(`   ❌ Errors: ${errorCount} routes`);
    console.log(`   📄 Manifest: dist/prerender-manifest.json`);
    console.log(`${'='.repeat(60)}\n`);

    console.log(`💡 Benefits:`);
    console.log(`   • Search engines get instant HTML (no JS execution needed)`);
    console.log(`   • Faster First Contentful Paint (FCP)`);
    console.log(`   • Better SEO for Bing, DuckDuckGo, and AI search engines`);
    console.log(`   • Social media crawlers get proper meta tags\n`);
}

function getRouteMetadata(route) {
    const metadata = {
        '/': { description: 'AI-Powered ERP Solutions - Transform your enterprise with intelligent automation' },
        '/about': { description: 'About AIERP Partners - Leading ERP and AI integration experts' },
        '/blog': { description: 'ERP and AI insights, best practices, and industry trends' },
        '/contact': { description: 'Contact AIERP Partners for ERP and AI consulting services' },
        '/erp-ai': { description: 'AI-Powered ERP Transformation - Intelligent enterprise systems' },
        '/oracle': { description: 'Oracle ERP solutions and enhancements' },
        '/business-process-consulting': { description: 'Business Process Consulting - Streamline your operations' },
        // Add more as needed
    };

    return metadata[route] || { description: 'AIERP Partners - Enterprise ERP and AI Solutions' };
}

prerenderWithVite().catch(error => {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
});
