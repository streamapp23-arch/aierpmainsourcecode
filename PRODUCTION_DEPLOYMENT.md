# Production Deployment Guide for aierpartner.com

## ✅ Pre-Deployment Checklist

### 1. Supabase Configuration

#### A. Authentication URL Configuration
1. Go to: https://app.supabase.com/project/dyemfenyszdjtncetadx/auth/url-configuration

2. **Site URL** (Main production URL):
   ```
   https://aierpartner.com
   ```

3. **Redirect URLs** (Add all these):
   ```
   https://aierpartner.com/**
   https://www.aierpartner.com/**
   http://localhost:5173/**
   ```

4. **Additional Redirect URLs for Admin** (if you have admin login):
   ```
   https://aierpartner.com/admin
   https://aierpartner.com/admin/login
   https://www.aierpartner.com/admin
   https://www.aierpartner.com/admin/login
   ```

5. Click **Save**

#### B. Email Templates (Optional but Recommended)
Go to: **Authentication** → **Email Templates**

Update these templates to use your production domain:
- Confirm signup
- Reset password
- Magic link

Replace any `localhost` references with `https://aierpartner.com`

#### C. Storage Bucket CORS (if using Supabase Storage)
If you're using Supabase Storage for images:

1. Go to: **Storage** → **Policies**
2. Ensure your bucket has proper CORS settings
3. Add allowed origins:
   ```
   https://aierpartner.com
   https://www.aierpartner.com
   ```

---

## 🏗️ Build Process

### 1. Verify Environment Variables
Your `.env` file should contain:
```env
VITE_SUPABASE_URL=https://dyemfenyszdjtncetadx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZW1mZW55c3pkanRuY2V0YWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MDE0OTAsImV4cCI6MjA4MzE3NzQ5MH0.aBLoOxKED0RWNY040QqUaGvn39cOREHjb5lrLrzXGkM
```

### 2. Build for Production
Run the build command:
```bash
npm run build
```

This will create a `dist` folder with your production-ready files.

### 3. Test the Build Locally (Optional)
```bash
npm run preview
```

---

## 🚀 Deployment to GoDaddy

### 1. Upload Files
1. Connect to your GoDaddy cPanel File Manager or use FTP
2. Navigate to `public_html` (or your domain's root directory)
3. Upload ALL files from the `dist` folder to `public_html`

### 2. Configure .htaccess for React Router
Create/update `.htaccess` in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

### 3. Verify Deployment
1. Visit: https://aierpartner.com
2. Test the admin login: https://aierpartner.com/admin
3. Test blog functionality: https://aierpartner.com/blog
4. Test all navigation and routing

---

## 🔒 Security Checklist

### 1. Supabase Security
- ✅ Anon key is public (safe to expose in frontend)
- ✅ Service role key should NEVER be in frontend code
- ✅ Row Level Security (RLS) policies are enabled on all tables
- ✅ Only authorized users can access admin functions

### 2. Environment Variables
- ✅ `.env` file is in `.gitignore` (already configured)
- ✅ Never commit sensitive keys to Git
- ✅ Production build embeds env vars at build time

### 3. HTTPS
- ✅ Ensure GoDaddy SSL certificate is active
- ✅ Force HTTPS redirect (add to .htaccess if needed):
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 🧪 Post-Deployment Testing

### Test These Features:
1. ✅ Homepage loads correctly
2. ✅ All navigation links work
3. ✅ Blog page displays posts from Supabase
4. ✅ Individual blog posts load correctly
5. ✅ Admin login works
6. ✅ Admin dashboard accessible (for authorized users)
7. ✅ Newsletter subscription works
8. ✅ Contact form sends emails
9. ✅ All images load correctly
10. ✅ Mobile responsiveness

---

## 🐛 Troubleshooting

### Issue: "No posts found" on blog page
**Solution:** 
- Check Supabase connection
- Verify posts exist in database
- Check browser console for errors

### Issue: 404 errors on page refresh
**Solution:** 
- Verify `.htaccess` file is uploaded
- Check that mod_rewrite is enabled in cPanel

### Issue: Admin login not working
**Solution:**
- Verify redirect URLs in Supabase include `/admin` paths
- Check browser console for CORS errors
- Ensure Site URL is set to `https://aierpartner.com`

### Issue: Images not loading
**Solution:**
- Check image paths in code
- Verify images are uploaded to correct directory
- Check Supabase Storage bucket permissions (if using Supabase Storage)

---

## 📞 Support Resources

- **Supabase Dashboard:** https://app.supabase.com/project/dyemfenyszdjtncetadx
- **Supabase Docs:** https://supabase.com/docs
- **GoDaddy Support:** https://www.godaddy.com/help

---

## 🔄 Future Updates

When you need to update the site:

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Upload new `dist` folder contents to GoDaddy
5. Clear browser cache and test

**Note:** No need to change Supabase settings again unless you add new domains or features.
