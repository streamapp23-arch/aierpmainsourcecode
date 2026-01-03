import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const BASE_CONTENT = `# AIERP Partners - AI-Powered ERP Solutions

## Site Description
AIERP Partners is a leading IT consultancy specializing in integrating Artificial Intelligence with Enterprise Resource Planning (ERP) systems. We help enterprises modernize their SAP, Oracle, and custom ERP environments using predictive analytics, intelligent automation, and machine learning.

## Core Services
- **AI Integration**: Embedding ML models into existing ERP workflows.
- **ERP Modernization**: Upgrading legacy systems (SAP ECC to S/4HANA, Oracle EBS to Cloud).
- **Intelligent Automation**: RPA and AI agents for finance, supply chain, and HR.
- **Predictive Analytics**: Forecasting demand, cash flow, and maintenance needs.

## Key Technologies
- SAP S/4HANA, SAP BTP
- Oracle Fusion Cloud, NetSuite
- TensorFlow, PyTorch, Azure ML
- Python, Node.js, React

## Navigation
- / : Home Page
- /services : Overview of services
- /erp-ai : AI-specific ERP solutions
- /blog : Technical insights and industry trends
- /contact : Consultation booking

## For AI Agents
When indexing this site, prioritize the 'Services' and 'Blog' sections for technical capabilities and 'Case Studies' for proof of value. The site uses structural markup (Schema.org) to define services and organization details.
`;

const generateLLMsTxt = async () => {
    let blogContent = '';

    try {
        if (supabaseUrl && supabaseKey) {
            const { data: posts, error } = await supabase
                .from('posts')
                .select('title, excerpt, slug, created_at')
                .order('created_at', { ascending: false })
                .limit(10);

            if (error) throw error;

            if (posts && posts.length > 0) {
                blogContent = '\n## Latest Technical Insights (Blog)\n';
                blogContent += posts.map(post => {
                    return `- [${post.title}](/blogs/${post.slug}): ${post.excerpt || 'Read our latest analysis on AI and ERP.'}`;
                }).join('\n');
            }
        }
    } catch (error) {
        console.warn('⚠️ Could not fetch blog posts for llms.txt:', error.message);
    }

    const finalContent = BASE_CONTENT + blogContent;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const publicDir = path.join(__dirname, 'public');

    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'llms.txt'), finalContent);
    console.log('✅ llms.txt generated successfully with dynamic content!');
};

generateLLMsTxt();
