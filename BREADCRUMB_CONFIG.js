/**
 * Breadcrumb Configuration for All Pages
 * Copy these breadcrumb arrays into each page's SEO component
 */

export const breadcrumbConfig = {
    // Solutions
    '/oracle': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'Oracle', url: '/oracle' }
    ],

    '/open-erp': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'Open ERP', url: '/open-erp' }
    ],

    '/custom-application-development': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'Custom Development', url: '/custom-application-development' }
    ],

    '/ai-integration-services': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'AI Integration', url: '/ai-integration-services' }
    ],

    '/ai-applications': [
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/#solutions' },
        { name: 'AI Applications', url: '/ai-applications' }
    ],

    // Services
    '/business-process-consulting': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Business Process Consulting', url: '/business-process-consulting' }
    ],

    '/implementation-upgrades': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Implementation & Upgrades', url: '/implementation-upgrades' }
    ],

    '/managed-services': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Managed Services', url: '/managed-services' }
    ],

    '/integration-services': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Integration Services', url: '/integration-services' }
    ],

    '/enterprise-mobility': [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/#services' },
        { name: 'Enterprise Mobility', url: '/enterprise-mobility' }
    ],

    // Industries
    '/manufacturing': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Manufacturing', url: '/manufacturing' }
    ],

    '/retail': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Retail', url: '/retail' }
    ],

    '/healthcare': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Healthcare', url: '/healthcare' }
    ],

    '/logistics': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Logistics', url: '/logistics' }
    ],

    '/oil-gas': [
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: 'Oil & Gas', url: '/oil-gas' }
    ]
};

/**
 * INSTRUCTIONS FOR ADDING BREADCRUMBS:
 * 
 * 1. Find the SEO component in each page
 * 2. Add the breadcrumbs prop with the corresponding array from above
 * 
 * Example for Oracle.tsx:
 * 
 * <SEO
 *   title="Oracle ERP Solutions"
 *   description="..."
 *   breadcrumbs={[
 *     { name: "Home", url: "/" },
 *     { name: "Solutions", url: "/#solutions" },
 *     { name: "Oracle", url: "/oracle" }
 *   ]}
 *   schema={{...}}
 * />
 */
