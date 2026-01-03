import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Prerender script for static HTML generation
 * This creates static HTML files for all routes to improve SEO and initial load time
 */

// Define all routes that should be prerendered
const routes = [
    '/',
    '/about',
    '/blog',
    '/contact',
    '/roi-calculator',

    // Solutions
    '/erp-ai',
    '/oracle',
    '/open-erp',
    '/custom-application-development',
    '/ai-integration-services',
    '/ai-applications',

    // Services
    '/business-process-consulting',
    '/implementation-upgrades',
    '/managed-services',
    '/integration-services',
    '/enterprise-mobility',

    // Industries
    '/industries',
    '/manufacturing',
    '/retail',
    '/healthcare',
    '/logistics',
    '/oil-gas',
];

async function prerender() {
    console.log('🚀 Starting prerendering process...');

    const distPath = path.join(__dirname, 'dist');
    const indexHtmlPath = path.join(distPath, 'index.html');

    // Check if dist folder exists
    if (!fs.existsSync(distPath)) {
        console.error('❌ Error: dist folder not found. Please run "npm run build" first.');
        process.exit(1);
    }

    // Read the base index.html
    const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    let successCount = 0;
    let errorCount = 0;

    // Create HTML files for each route
    for (const route of routes) {
        try {
            // Convert route to file path
            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const fullPath = path.join(distPath, routePath);

            // Create directory if it doesn't exist
            const dir = path.dirname(fullPath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            // For now, copy the base HTML (in production, you'd use a headless browser to render)
            // This ensures the file exists and Apache can serve it directly
            fs.writeFileSync(fullPath, baseHtml);

            successCount++;
            console.log(`✅ Prerendered: ${route}`);
        } catch (error) {
            errorCount++;
            console.error(`❌ Error prerendering ${route}:`, error.message);
        }
    }

    console.log(`\n📊 Prerendering Summary:`);
    console.log(`   ✅ Success: ${successCount} routes`);
    console.log(`   ❌ Errors: ${errorCount} routes`);
    console.log(`\n💡 Note: For full SSR-like prerendering with dynamic content,`);
    console.log(`   consider using a service like Prerender.io or implementing`);
    console.log(`   a headless browser solution with Puppeteer.`);
}

prerender().catch(error => {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
});
