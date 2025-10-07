# PathAIway Deployment Guide

## 🚀 Quick Deployment to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Upload to GitHub**
   ```bash
   # In your local project directory
   git init
   git add .
   git commit -m "Initial PathAIway deployment"
   git remote add origin https://github.com/SimonDreyfussConsulting/paiwayrepot.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub: `SimonDreyfussConsulting/paiwayrepot`
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

3. **Custom Domain Setup**
   - In Vercel dashboard, go to Project Settings
   - Click "Domains"
   - Add `pathaiway.com` and `www.pathaiway.com`
   - Update DNS records in Namecheap:
     - Type: `A`, Host: `@`, Value: `76.76.19.19`
     - Type: `A`, Host: `www`, Value: `76.76.19.19`

### Option 2: Direct Upload to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd pathaiway-github-fixed
   vercel --prod
   ```

## 🌐 Alternative Deployment Options

### Netlify

1. **Drag & Drop**
   - Build project: `npm run build`
   - Drag `dist/` folder to Netlify
   - Add `_redirects` file with: `/* /index.html 200`

2. **Git Integration**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

### Traditional Hosting

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload entire `dist/` folder contents
   - Ensure server supports SPA routing
   - Configure `.htaccess` for Apache:
     ```apache
     RewriteEngine On
     RewriteRule ^(?!.*\.).*$ /index.html [L]
     ```

## 🔧 DNS Configuration

### Namecheap Setup

1. **Login to Namecheap**
   - Go to Domain List
   - Click "Manage" for pathaiway.com

2. **Advanced DNS Settings**
   - Delete existing A records
   - Add new A records:
     - Host: `@`, Value: `76.76.19.19`, TTL: Automatic
     - Host: `www`, Value: `76.76.19.19`, TTL: Automatic

3. **Wait for Propagation**
   - DNS changes take 5-15 minutes
   - Test with: `nslookup pathaiway.com`

## ✅ Post-Deployment Checklist

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] PathAI Score assessment opens
- [ ] Newsletter signups function
- [ ] Case studies page loads
- [ ] Search functionality works
- [ ] Mobile responsive design

### Performance Tests
- [ ] Lighthouse score >90
- [ ] Page load time <3s
- [ ] Images load properly
- [ ] No console errors

### SEO & Analytics
- [ ] Meta tags present
- [ ] Sitemap generated
- [ ] Google Analytics (optional)
- [ ] Search Console setup

## 🐛 Troubleshooting

### Common Issues

**404 Errors on Page Refresh**
- Ensure `vercel.json` is in root directory
- Check routing configuration
- Verify build includes all files

**Styling Issues**
- Confirm Tailwind CSS is building
- Check for missing CSS imports
- Verify production build includes styles

**JavaScript Errors**
- Check browser console
- Verify all dependencies installed
- Ensure React Router setup correct

### Debug Commands

```bash
# Check build output
npm run build
ls -la dist/

# Test locally
npm run preview

# Check routing
curl -I https://pathaiway.com/latest
```

## 📞 Support

If you encounter issues:

1. **Check Build Logs**
   - Vercel: Project → Functions → Build Logs
   - Netlify: Site → Deploys → Build Log

2. **Common Solutions**
   - Clear browser cache
   - Rebuild and redeploy
   - Check DNS propagation

3. **Get Help**
   - Email: simon@pathaiway.com
   - Check repository issues
   - Vercel/Netlify support docs

---

**Your PathAIway website should be live and fully functional! 🎉**
