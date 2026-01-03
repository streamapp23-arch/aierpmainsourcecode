import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Automated Breadcrumb Injection Script
 * Adds breadcrumbs to all pages that don't have them yet
 */

const breadcrumbConfig = {
    'OpenERP.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'Open ERP', url: '/open-erp' }
    ],
    'CustomApplicationDevelopment.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'Custom Development', url: '/custom-application-development' }
    ],
    'AIIntegrationServices.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'AI Integration', url: '/ai-integration-services' }
    ],
    'AIApplications.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'AI Applications', url: '/ai-applications' }
    ],
    'BusinessProcessConsulting.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Business Process Consulting', url: '/business-process-consulting' }
    ],
    'ImplementationUpgrades.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Implementation & Upgrades', url: '/implementation-upgrades' }
    ],
    'ManagedServices.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Managed Services', url: '/managed-services' }
    ],
    'IntegrationServices.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Integration Services', url: '/integration-services' }
    ],
    'EnterpriseMobility.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Enterprise Mobility', url: '/enterprise-mobility' }
    ],
    'Manufacturing.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Manufacturing', url: '/manufacturing' }
    ],
    'Retail.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Retail', url: '/retail' }
    ],
    'Healthcare.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Healthcare', url: '/healthcare' }
    ],
    'Logistics.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Logistics', url: '/logistics' }
    ],
    'OilGas.tsx': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Oil & Gas', url: '/oil-gas' }
    ]
};

function addBreadcrumbs(filePath, breadcrumbs) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Check if breadcrumbs already exist
    if (content.includes('breadcrumbs={')) {
        return { status: 'skip', reason: 'Already has breadcrumbs' };
    }

    // Find the SEO component
    const seoRegex = /(<SEO[\s\S]*?)(schema=\{\{)/;
    const match = content.match(seoRegex);

    if (!match) {
        return { status: 'error', reason: 'SEO component not found' };
    }

    // Generate breadcrumb code
    const breadcrumbCode = `breadcrumbs={${JSON.stringify(breadcrumbs, null, 10).replace(/"([^"]+)":/g, '$1:')}}\n        `;

    // Insert breadcrumbs before schema
    const updated = content.replace(seoRegex, `$1${breadcrumbCode}$2`);

    fs.writeFileSync(filePath, updated);
    return { status: 'success' };
}

async function main() {
    console.log('🔧 Adding breadcrumbs to all pages...\n');
    console.log('='.repeat(80));

    const pagesDir = path.join(__dirname, 'src', 'pages');
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const [filename, breadcrumbs] of Object.entries(breadcrumbConfig)) {
        const filePath = path.join(pagesDir, filename);

        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  ${filename} - File not found`);
            errorCount++;
            continue;
        }

        const result = addBreadcrumbs(filePath, breadcrumbs);

        if (result.status === 'success') {
            console.log(`✅ ${filename} - Breadcrumbs added`);
            successCount++;
        } else if (result.status === 'skip') {
            console.log(`⏭️  ${filename} - ${result.reason}`);
            skipCount++;
        } else {
            console.log(`❌ ${filename} - ${result.reason}`);
            errorCount++;
        }
    }

    console.log('\n' + '='.repeat(80));
    console.log('📊 SUMMARY');
    console.log('='.repeat(80));
    console.log(`✅ Success: ${successCount}`);
    console.log(`⏭️  Skipped: ${skipCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📝 Total: ${Object.keys(breadcrumbConfig).length}`);

    if (successCount > 0) {
        console.log('\n✨ Breadcrumbs successfully added to all pages!');
        console.log('💡 Run "npm run build" to regenerate with breadcrumb schema.');
    }
}

main().catch(console.error);
