# 🔧 Production Issues - Troubleshooting Guide

## Issue 1: URLs Not Showing in Production

### Possible Causes:
1. **Environment variables not embedded in build**
2. **Base URL configuration missing**
3. **Assets not loading correctly**

### Solution:

#### Step 1: Verify Environment Variables are Being Used
The `.env` file is only read during **build time**. When you run `npm run build`, Vite replaces all `import.meta.env.VITE_*` with actual values.

**Action Required:**
1. Make sure `.env` file exists in your project root (it does ✅)
2. Rebuild your project with environment variables:
   ```bash
   npm run build
   ```
3. Upload the NEW `dist` folder to GoDaddy

#### Step 2: Check Built Files
After building, check `dist/assets/*.js` files. They should contain your actual Supabase URL, not placeholders.

---

## Issue 2: Admin Login Returns "Invalid Credentials"

### Possible Causes:
1. **User doesn't exist in Supabase Auth**
2. **Wrong email/password**
3. **Supabase redirect URL mismatch**
4. **CORS issues**

### Solutions:

### ✅ Solution 1: Create Admin User in Supabase

You need to create an admin user in Supabase Auth:

1. **Go to Supabase Dashboard:**
   - https://app.supabase.com/project/jhnfpnovnyqeoyjokqrc/auth/users

2. **Click "Add User" or "Invite User"**

3. **Create a new user with:**
   - Email: `your-admin-email@example.com`
   - Password: `YourSecurePassword123!`
   - Auto Confirm User: ✅ (check this box)

4. **Save the user**

5. **Try logging in with these credentials**

### ✅ Solution 2: Verify Supabase Auth Settings

1. **Check Email Confirmation:**
   - Go to: Authentication → Providers → Email
   - Ensure "Confirm email" is disabled OR
   - Make sure the user's email is confirmed

2. **Check Auth Settings:**
   - Go to: Authentication → Settings
   - Verify "Enable email confirmations" setting

### ✅ Solution 3: Test Supabase Connection in Production

Add this temporary debug code to check if Supabase is connected:

**In `src/pages/admin/Login.tsx`, add this before the return statement:**

```typescript
// Temporary debug - remove after testing
useEffect(() => {
    console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
}, []);
```

Then:
1. Rebuild: `npm run build`
2. Upload to production
3. Open browser console on production site
4. Check what URLs are logged

**IMPORTANT:** Remove this debug code after testing!

---

## 🔍 Detailed Debugging Steps

### Step 1: Check Browser Console
1. Open your production site: https://aierpartner.com/admin/login
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Look for errors (red text)
5. Take a screenshot and share any errors you see

### Step 2: Check Network Tab
1. In Developer Tools, go to Network tab
2. Try to login
3. Look for failed requests (red)
4. Click on any failed request to see details
5. Check if Supabase API calls are being made

### Step 3: Verify Build Output
After running `npm run build`, check:
1. `dist/index.html` exists
2. `dist/assets/` folder has JS and CSS files
3. File sizes look reasonable (not 0 bytes)

---

## 🚀 Complete Rebuild & Redeploy Process

Follow these steps exactly:

### 1. Clean Build
```bash
# Delete old build
rm -rf dist

# Or on Windows:
rmdir /s /q dist
```

### 2. Verify .env File
Make sure `.env` contains:
```env
VITE_SUPABASE_URL=https://jhnfpnovnyqeoyjokqrc.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpobmZwbm92bnlxZW95am9rcXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNzY1MjIsImV4cCI6MjA3OTk1MjUyMn0.yoD5SB7JVcaAcl1OzLuiyJtNM7U4esXSTyEsOma9v3E
```

### 3. Build
```bash
npm run build
```

### 4. Verify Build
Check that `dist` folder was created and contains files.

### 5. Upload to GoDaddy
1. Delete ALL files in `public_html` on GoDaddy
2. Upload ALL files from `dist` folder
3. Make sure `.htaccess` is uploaded (create if missing)

### 6. Test
1. Visit https://aierpartner.com
2. Check if homepage loads
3. Try admin login

---

## 📝 .htaccess File for GoDaddy

Make sure this file exists in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# CORS Headers (if needed)
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

---

## 🆘 Quick Fixes

### Fix 1: If Nothing Loads
- Check if `index.html` is in the root of `public_html`
- Verify file permissions (should be 644 for files, 755 for folders)

### Fix 2: If Admin Login Fails
- Create a user in Supabase Auth dashboard
- Use exact email/password you created
- Check browser console for specific error messages

### Fix 3: If Blog Posts Don't Show
- Verify Supabase connection in browser console
- Check if posts exist in Supabase database
- Look for CORS errors in console

---

## 📞 Next Steps

1. **Create admin user in Supabase** (most likely issue)
2. **Rebuild and redeploy**
3. **Check browser console for errors**
4. **Share any error messages you see**

Would you like me to help you create a debug version of the login page to see exactly what's happening?
