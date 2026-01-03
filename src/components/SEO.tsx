import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
    schema?: Record<string, any>;
    noindex?: boolean;
    breadcrumbs?: BreadcrumbItem[];
}

const SEO = ({
    title,
    description,
    keywords = 'ERP, AI, SAP, Oracle, Enterprise Resource Planning, Artificial Intelligence, Business Intelligence, Digital Transformation',
    ogImage = '/og-image.jpg',
    ogType = 'website',
    canonicalUrl,
    schema,
    noindex = false,
    breadcrumbs
}: SEOProps) => {
    const siteTitle = 'AIERP Partners';
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

    // Construct proper canonical URL
    const baseUrl = 'https://www.aierppartners.com';
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const finalCanonicalUrl = canonicalUrl || `${baseUrl}${currentPath}`;

    // Ensure OG image is absolute URL
    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

    // Generate breadcrumb schema if breadcrumbs provided
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`
        }))
    } : null;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteOgImage} />
            <meta property="og:url" content={finalCanonicalUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={absoluteOgImage} />

            {/* Additional SEO */}
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="AIERP Partners" />

            {/* Canonical URL */}
            <link rel="canonical" href={finalCanonicalUrl} />

            {/* JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Breadcrumb Schema */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
