// Mobile Optimization Script
// This script applies mobile-first responsive patterns to pages

const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/Users/Santhosh/Desktop/intel-erp-flow-main/src/pages';

const replacements = [
    // Hero section padding
    { from: 'pt-32 pb-24 px-4', to: 'pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4' },

    // Badge/pill padding and text
    {
        from: 'px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold mb-8',
        to: 'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 sm:mb-8'
    },

    // H1 headings
    {
        from: 'text-5xl md:text-7xl font-bold text-white tracking-tight mb-8',
        to: 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 sm:mb-8'
    },

    // Hero paragraph
    {
        from: 'text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed',
        to: 'text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0'
    },

    // Button container
    {
        from: 'flex flex-col sm:flex-row gap-6 justify-center',
        to: 'flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0'
    },

    // Primary button
    {
        from: 'px-10 h-16 text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105"',
        to: 'px-8 sm:px-10 h-14 sm:h-16 text-base sm:text-xl shadow-xl shadow-cyan-900/50 rounded-full transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]"'
    },

    // Section padding
    { from: 'py-24 px-4', to: 'py-12 sm:py-16 md:py-24 px-4' },

    // Section headings
    {
        from: 'text-4xl md:text-5xl font-bold text-slate-900 mb-6',
        to: 'text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 sm:px-0'
    },

    // Section subheadings
    { from: 'text-xl text-slate-600', to: 'text-base sm:text-lg md:text-xl text-slate-600 px-4 sm:px-0' },

    // Grid layouts
    { from: 'grid md:grid-cols-2 gap-8', to: 'grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8' },
    { from: 'grid md:grid-cols-3 gap-8', to: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8' },
    { from: 'grid md:grid-cols-4 gap-8', to: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8' },

    // Margins
    { from: 'mb-16"', to: 'mb-12 sm:mb-16"' },
];

const filesToProcess = [
    'Logistics.tsx',
    'OilGas.tsx',
    'ERPAI.tsx',
    'Oracle.tsx',
    'OpenERP.tsx',
    'SAP.tsx',
    'IntegrationServices.tsx',
    'ImplementationUpgrades.tsx',
    'ManagedServices.tsx',
    'EnterpriseMobility.tsx',
    'CustomApplicationDevelopment.tsx',
    'BusinessProcessConsulting.tsx',
    'AIApplications.tsx',
    'AIIntegrationServices.tsx',
    'Blog.tsx',
    'ROICalculatorPage.tsx'
];

console.log('Mobile Optimization Script - Ready to process', filesToProcess.length, 'files');
console.log('This is a reference script showing the transformation patterns');
