// Quick Reference: SEO Import and Usage Pattern for All Pages
// Copy this pattern to add SEO to remaining pages

// 1. Add import at top of file (after other imports):
import SEO from "@/components/SEO";

// 2. Add SEO component after opening <div> and before <Header />:
/*
<SEO
  title="[Page Title from seoConfig.ts]"
  description="[Description from seoConfig.ts]"
  keywords="[Keywords from seoConfig.ts]"
/>
*/

// PAGES COMPLETED (4/24):
// ✅ Index.tsx
// ✅ Contact.tsx
// ✅ About.tsx
// ✅ Retail.tsx

// PAGES REMAINING (20/24):
// Manufacturing.tsx, Healthcare.tsx, Logistics.tsx, OilGas.tsx
// ERPAI.tsx, Oracle.tsx, OpenERP.tsx, SAP.tsx (if exists)
// IntegrationServices.tsx, ImplementationUpgrades.tsx, ManagedServices.tsx
// EnterpriseMobility.tsx, CustomApplicationDevelopment.tsx
// BusinessProcessConsulting.tsx, AIApplications.tsx, AIIntegrationServices.tsx
// Industries.tsx, ROICalculatorPage.tsx, Blog.tsx, NotFound.tsx

// MOBILE OPTIMIZATION PATTERNS:
// Hero sections: pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24
// Headings: text-3xl sm:text-4xl md:text-5xl lg:text-7xl
// Text: text-base sm:text-lg md:text-xl
// Buttons: w-full sm:w-auto min-h-[48px]
// Grids: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
// Spacing: py-12 sm:py-16 md:py-24
