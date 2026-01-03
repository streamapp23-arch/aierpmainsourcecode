import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
    console.log('🚀 Starting image optimization...');

    // 1. Optimize Public Logo
    try {
        const logoPath = path.join(__dirname, 'public/logo1.jpg');
        if (fs.existsSync(logoPath)) {
            await sharp(logoPath)
                .resize({ width: 300 })
                .webp({ quality: 85 })
                .toFile(path.join(__dirname, 'public/logo-optimized.webp'));
            console.log('✅ Optimized logo1.jpg -> logo-optimized.webp');
        } else {
            console.warn('⚠️ logo1.jpg not found');
        }
    } catch (e) {
        console.error('❌ Error optimizing logo:', e.message);
    }

    // 2. Optimize Founder Image
    try {
        const founderPath = path.join(__dirname, 'src/assets/founder-jafer-ali.jpg');
        if (fs.existsSync(founderPath)) {
            await sharp(founderPath)
                .resize({ width: 600 })
                .webp({ quality: 80 })
                .toFile(path.join(__dirname, 'src/assets/founder-jafer-ali.webp'));
            console.log('✅ Optimized founder-jafer-ali.jpg -> founder-jafer-ali.webp');
        } else {
            console.warn('⚠️ founder-jafer-ali.jpg not found');
        }
    } catch (e) {
        console.error('❌ Error optimizing founder image:', e.message);
    }

    // 3. Optimize Client Logos
    try {
        const clientsDir = path.join(__dirname, 'src/assets/clients');
        if (fs.existsSync(clientsDir)) {
            const files = fs.readdirSync(clientsDir);

            for (const file of files) {
                if (file.endsWith('.png')) {
                    const name = file.replace(/\.png$/, '');
                    await sharp(path.join(clientsDir, file))
                        .resize({ width: 250, height: 120, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
                        .webp({ quality: 90 })
                        .toFile(path.join(clientsDir, `${name}.webp`));
                    console.log(`✅ Optimized ${file} -> ${name}.webp`);
                }
            }
        }
    } catch (e) {
        console.error('❌ Error optimizing client logos:', e.message);
    }

    console.log('✨ Optimization complete!');
}

optimizeImages();
