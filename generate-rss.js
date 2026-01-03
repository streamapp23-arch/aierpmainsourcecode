import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'; // You might need to install dotenv if not present, or just use process.env if loaded

// Load environment variables
dotenv.config();

const SITE_URL = 'https://www.aierppartners.com';
const SITE_TITLE = 'AIERP Partners Blog';
const SITE_DESCRIPTION = 'Insights on AI, ERP, and Digital Transformation';

// Supabase configuration - handling potential missing env vars gracefully for the script
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.warn('⚠️ Supabase credentials not found in env. RSS feed will be static placeholders.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const generateRSS = async () => {
    let posts = [];

    if (supabaseUrl && supabaseKey) {
        const { data } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);
        posts = data || [];
    }

    const feedItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blogs/${post.slug}</link>
      <guid>${SITE_URL}/blogs/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
    </item>
  `).join('');

    const rssRequest = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${feedItems}
  </channel>
</rss>`;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const publicDir = path.join(__dirname, 'public');

    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssRequest);
    console.log('✅ RSS Feed generated successfully!');
};

generateRSS();
