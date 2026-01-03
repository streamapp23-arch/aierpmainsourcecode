import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Heading Hierarchy Audit Script
 * Checks all pages for proper H1-H6 hierarchy
 */

const pagesDir = path.join(__dirname, 'src', 'pages');

function extractHeadings(content, filename) {
    const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gi;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1].charAt(1));
        const text = match[2]
            .replace(/<[^>]+>/g, '') // Remove HTML tags
            .replace(/\{.*?\}/g, '') // Remove JSX expressions
            .trim();

        headings.push({ level, text, line: content.substring(0, match.index).split('\n').length });
    }

    return headings;
}

function checkHierarchy(headings, filename) {
    const issues = [];

    // Check for H1
    const h1Count = headings.filter(h => h.level === 1).length;
    if (h1Count === 0) {
        issues.push(`❌ No H1 found`);
    } else if (h1Count > 1) {
        issues.push(`⚠️  Multiple H1 tags found (${h1Count})`);
    }

    // Check hierarchy
    let prevLevel = 0;
    headings.forEach((heading, index) => {
        if (heading.level > prevLevel + 1 && prevLevel !== 0) {
            issues.push(`⚠️  Skipped heading level at line ${heading.line}: H${prevLevel} → H${heading.level}`);
        }
        prevLevel = heading.level;
    });

    return issues;
}

async function auditHeadings() {
    console.log('🔍 Starting Heading Hierarchy Audit...\n');
    console.log('='.repeat(80));

    const files = fs.readdirSync(pagesDir)
        .filter(file => file.endsWith('.tsx') && !file.startsWith('admin'));

    let totalIssues = 0;
    const results = [];

    for (const file of files) {
        const filePath = path.join(pagesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const headings = extractHeadings(content, file);
        const issues = checkHierarchy(headings, file);

        results.push({
            file,
            headings,
            issues,
            hasH1: headings.some(h => h.level === 1)
        });

        if (issues.length > 0) {
            totalIssues += issues.length;
        }
    }

    // Print results
    results.forEach(({ file, headings, issues, hasH1 }) => {
        const status = issues.length === 0 ? '✅' : '⚠️ ';
        console.log(`\n${status} ${file}`);
        console.log('-'.repeat(80));

        if (headings.length === 0) {
            console.log('  ⚠️  No headings found');
        } else {
            console.log(`  H1: ${hasH1 ? '✅' : '❌'} | Total Headings: ${headings.length}`);

            // Show hierarchy
            headings.slice(0, 5).forEach(h => {
                const indent = '  '.repeat(h.level);
                console.log(`  ${indent}H${h.level}: ${h.text.substring(0, 60)}${h.text.length > 60 ? '...' : ''}`);
            });

            if (headings.length > 5) {
                console.log(`  ... and ${headings.length - 5} more headings`);
            }
        }

        if (issues.length > 0) {
            console.log('\n  Issues:');
            issues.forEach(issue => console.log(`    ${issue}`));
        }
    });

    // Summary
    console.log('\n' + '='.repeat(80));
    console.log('📊 SUMMARY');
    console.log('='.repeat(80));
    console.log(`Total Pages Audited: ${results.length}`);
    console.log(`Pages with H1: ${results.filter(r => r.hasH1).length}`);
    console.log(`Pages without H1: ${results.filter(r => !r.hasH1).length}`);
    console.log(`Total Issues: ${totalIssues}`);

    if (totalIssues === 0) {
        console.log('\n✅ All pages have proper heading hierarchy!');
    } else {
        console.log(`\n⚠️  ${totalIssues} issues found. Review above for details.`);
    }

    // Save report
    const report = {
        auditDate: new Date().toISOString(),
        totalPages: results.length,
        pagesWithH1: results.filter(r => r.hasH1).length,
        totalIssues,
        results: results.map(r => ({
            file: r.file,
            hasH1: r.hasH1,
            headingCount: r.headings.length,
            issues: r.issues
        }))
    };

    fs.writeFileSync(
        path.join(__dirname, 'heading-audit-report.json'),
        JSON.stringify(report, null, 2)
    );

    console.log('\n📄 Report saved to: heading-audit-report.json\n');
}

auditHeadings().catch(console.error);
