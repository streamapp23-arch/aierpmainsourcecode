# Deployment Guide - Fixing SPA Routing Issues

## Problem
When deploying a React SPA (Single Page Application) with client-side routing, direct navigation to routes like `/roi-calculator` or `/ai-applications` returns a 404 error because the server doesn't know about these client-side routes.

## Solution
This project now includes configuration files for multiple hosting platforms to ensure all routes redirect to `index.html`, allowing React Router to handle the routing.

## Configuration Files Created

### 1. **Netlify** - `public/_redirects`
```
/*    /index.html   200
```

### 2. **Vercel** - `public/vercel.json`
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. **Apache Server** - `public/.htaccess`
Handles URL rewriting for Apache-based hosting.

## How to Deploy

### Build the Project
```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

### Deploy to Different Platforms

#### **Netlify**
1. Drag and drop the `dist` folder to Netlify
2. Or connect your Git repository
3. The `_redirects` file will automatically be used

#### **Vercel**
1. Run `vercel` command or connect your Git repository
2. The `vercel.json` file will automatically be used

#### **Apache/cPanel/Traditional Hosting**
1. Upload all files from the `dist` folder to your server
2. The `.htaccess` file will handle the routing

#### **GitHub Pages**
For GitHub Pages, you need a different approach:
1. Add a `404.html` file that's a copy of `index.html`
2. Or use HashRouter instead of BrowserRouter

## Testing Locally

After building, you can test the production build locally:

```bash
npm run preview
```

Then try accessing different routes directly:
- http://localhost:4173/
- http://localhost:4173/roi-calculator
- http://localhost:4173/ai-applications

All routes should work correctly!

## Routes Available
- `/` - Home page
- `/roi-calculator` - ROI Calculator
- `/ai-applications` - AI Applications
- `/ai-integration-services` - AI Integration Services
- `/business-process-consulting` - Business Process Consulting
- `/implementation-upgrades` - Implementation & Upgrades
- `/managed-services` - Managed Services
- `/integration-services` - Integration Services
- `/enterprise-mobility` - Enterprise Mobility
- `/erp-ai` - ERP AI
- `/oracle` - Oracle
- `/open-erp` - Open ERP
- `/custom-application-development` - Custom Application Development
- `/contact` - Contact
- `/industries` - Industries
- `/manufacturing` - Manufacturing
- `/retail` - Retail
- `/healthcare` - Healthcare
- `/logistics` - Logistics
- `/oil-gas` - Oil & Gas
- `/about` - About
- `/blog` - Blog

## Troubleshooting

If routes still don't work after deployment:

1. **Check if the config file was copied**: Ensure `_redirects`, `vercel.json`, or `.htaccess` is in your `dist` folder after building
2. **Clear browser cache**: Hard refresh with Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Check hosting platform documentation**: Some platforms may require additional configuration
4. **Use HashRouter as fallback**: If all else fails, switch from BrowserRouter to HashRouter in `App.tsx` (URLs will have `#` in them)
