# GoDaddy cPanel Deployment Guide

## Step-by-Step Deployment Instructions

### 1. Build Your Application

First, create a fresh production build:

```bash
npm run build
```

This creates a `dist` folder with all your files.

### 2. Verify Your Build Contains These Files

Check that your `dist` folder has:
- ✅ `index.html`
- ✅ `.htaccess` (CRITICAL for routing!)
- ✅ `assets/` folder with JS and CSS files
- ✅ All images and static files

**IMPORTANT**: Make sure `.htaccess` is visible. On Windows, you may need to:
- Open File Explorer
- Click "View" → Check "Hidden items"
- Files starting with `.` should now be visible

### 3. Upload to GoDaddy cPanel

#### Option A: File Manager (Recommended for beginners)

1. **Login to GoDaddy cPanel**
   - Go to your GoDaddy account
   - Navigate to "My Products"
   - Click "cPanel" for your hosting account

2. **Open File Manager**
   - In cPanel, find and click "File Manager"
   - Navigate to `public_html` folder (this is your web root)

3. **Clear Existing Files (if any)**
   - Select all files in `public_html`
   - Click "Delete" (make backup first if needed!)

4. **Upload Your Build**
   - Click "Upload" button
   - Drag and drop ALL files from your `dist` folder
   - **OR** select files manually
   - Wait for upload to complete (100%)

5. **CRITICAL: Verify .htaccess Upload**
   - In File Manager, click "Settings" (top right)
   - Check "Show Hidden Files (dotfiles)"
   - Click "Save"
   - Verify `.htaccess` file is visible in `public_html`

#### Option B: FTP Upload

1. **Get FTP Credentials**
   - In cPanel, find "FTP Accounts"
   - Use your main cPanel username/password
   - Or create a new FTP account

2. **Use FTP Client** (FileZilla recommended)
   - Download FileZilla: https://filezilla-project.org/
   - Connect using your FTP credentials
   - Navigate to `public_html` on remote side
   - Upload ALL files from `dist` folder
   - **Make sure .htaccess is uploaded!**

### 4. Set Correct File Permissions

In cPanel File Manager:
1. Select `.htaccess` file
2. Right-click → "Change Permissions"
3. Set to `644` (or check: Owner Read+Write, Group Read, World Read)
4. Click "Change Permissions"

For `index.html`:
- Permissions should be `644`

For folders:
- Permissions should be `755`

### 5. Test Your Deployment

Visit these URLs (replace `yourdomain.com` with your actual domain):

1. **Home page**: `https://yourdomain.com/`
2. **ROI Calculator**: `https://yourdomain.com/roi-calculator`
3. **AI Applications**: `https://yourdomain.com/ai-applications`
4. **Contact**: `https://yourdomain.com/contact`

**All routes should work!** If you get 404 errors, see troubleshooting below.

## Troubleshooting 404 Errors

### Issue 1: .htaccess File Not Uploaded

**Symptoms**: Home page works, but `/roi-calculator` shows 404

**Solution**:
1. In cPanel File Manager, enable "Show Hidden Files"
2. Check if `.htaccess` exists in `public_html`
3. If missing, upload it manually from your `dist` folder

### Issue 2: .htaccess Not Working

**Symptoms**: Still getting 404 even with .htaccess present

**Solution**:
1. Check file permissions (should be 644)
2. Verify file contents match the template below
3. Contact GoDaddy support to ensure `mod_rewrite` is enabled

### Issue 3: Subdirectory Installation

**Symptoms**: Site is in a subdirectory like `yourdomain.com/myapp/`

**Solution**: Update `.htaccess`:
```apache
RewriteBase /myapp/
# ... rest of the file
RewriteRule ^ /myapp/index.html [L]
```

And update `ErrorDocument`:
```apache
ErrorDocument 404 /myapp/index.html
```

### Issue 4: Cache Issues

**Symptoms**: Old version of site still showing

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Try incognito/private browsing mode
3. Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

### Issue 5: Mixed Content Warnings

**Symptoms**: Site works on HTTP but not HTTPS

**Solution**:
1. In cPanel, enable SSL certificate (Let's Encrypt is free)
2. Add this to `.htaccess` to force HTTPS:

```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Expected File Structure in public_html

```
public_html/
├── .htaccess                    ← MUST be present!
├── index.html
├── favicon.ico
├── robots.txt
├── logo.jpg
├── logo1.jpg
├── placeholder.svg
├── about.txt
├── aierp final logo.png
├── _redirects                   ← Not used by Apache, but harmless
├── vercel.json                  ← Not used by Apache, but harmless
└── assets/
    ├── index-BRmQclpd.js       ← Your app code (937 KB)
    ├── index-BhL7q7qD.css      ← Your styles
    └── [images...]
```

## Quick Checklist

Before contacting support, verify:

- [ ] Built the app with `npm run build`
- [ ] Uploaded ALL files from `dist` folder
- [ ] `.htaccess` file is present in `public_html`
- [ ] `.htaccess` permissions are 644
- [ ] "Show Hidden Files" is enabled in File Manager
- [ ] Cleared browser cache
- [ ] Tested in incognito mode
- [ ] Domain is pointing to correct hosting account

## Still Having Issues?

### Check Apache Error Logs

In cPanel:
1. Go to "Errors" or "Error Log"
2. Look for recent errors
3. Share error messages with support

### Contact GoDaddy Support

If nothing works, contact GoDaddy support and tell them:
> "I'm deploying a React Single Page Application and need mod_rewrite enabled for my .htaccess file to work. Routes other than the home page are showing 404 errors."

## Performance Optimization (Optional)

Once your site is working, consider:

1. **Enable Cloudflare** (free CDN)
2. **Enable GZIP compression** (already in .htaccess)
3. **Set up caching** (already in .htaccess)
4. **Optimize images** before uploading

## Need Help?

Common GoDaddy cPanel locations:
- **File Manager**: cPanel → Files section
- **FTP Accounts**: cPanel → Files section
- **SSL/TLS**: cPanel → Security section
- **Error Logs**: cPanel → Metrics section
