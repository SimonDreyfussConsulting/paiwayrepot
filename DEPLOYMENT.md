# PathAIway Deployment Guide

This guide walks through deploying PathAIway to production using Vercel and configuring the domain.

## 🚀 Quick Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] Vercel account set up
- [ ] Domain configured (pathaiway.com)
- [ ] DNS settings updated
- [ ] SSL certificate active
- [ ] Analytics integrated
- [ ] Email capture configured

## 📋 Prerequisites

### Required Accounts
1. **GitHub Account** - For code repository
2. **Vercel Account** - For hosting (free tier available)
3. **Namecheap Account** - For domain management
4. **Cloudflare Account** - For DNS and CDN (optional but recommended)

### Domain Information
- **Domain**: pathaiway.com
- **Registrar**: Namecheap
- **DNS**: Cloudflare (recommended)

## 🔧 Step-by-Step Deployment

### 1. Prepare Repository

```bash
# Initialize git repository (if not already done)
cd pathaiway
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial PathAIway website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/pathaiway.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd pathaiway
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: pathaiway
# - Directory: ./
# - Override settings? No
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub repository
4. Select `pathaiway` repository
5. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### 3. Configure Custom Domain

#### In Vercel Dashboard
1. Go to project settings
2. Navigate to "Domains"
3. Add custom domain: `pathaiway.com`
4. Add www redirect: `www.pathaiway.com` → `pathaiway.com`

#### DNS Configuration (Cloudflare)
1. **A Record**: `@` → Vercel IP (provided by Vercel)
2. **CNAME Record**: `www` → `pathaiway.com`
3. **CNAME Record**: `_vercel` → Vercel verification (if required)

#### DNS Configuration (Namecheap)
If using Namecheap DNS directly:
1. **A Record**: `@` → Vercel IP
2. **CNAME Record**: `www` → `pathaiway.com`

### 4. SSL Certificate
- Vercel automatically provisions SSL certificates
- Certificate should be active within 24 hours
- Verify HTTPS is working: `https://pathaiway.com`

## 🔧 Environment Configuration

### Environment Variables (if needed)
```bash
# In Vercel dashboard, go to Settings > Environment Variables
# Add any required variables:

# Analytics
VITE_PLAUSIBLE_DOMAIN=pathaiway.com

# Email Integration
VITE_CONVERTKIT_API_KEY=your_api_key

# Form Handling
VITE_FORM_ENDPOINT=your_form_endpoint
```

### Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

## 📊 Analytics Setup

### Plausible Analytics (Recommended)
1. **Sign up** at [plausible.io](https://plausible.io)
2. **Add domain**: pathaiway.com
3. **Add script** to `index.html`:
```html
<script defer data-domain="pathaiway.com" src="https://plausible.io/js/script.js"></script>
```

### Google Analytics (Alternative)
1. **Create GA4 property**
2. **Add tracking code** to `index.html`
3. **Configure goals** for PathAI Score completions

## 📧 Email Integration

### ConvertKit Setup
1. **Create ConvertKit account**
2. **Create forms** for:
   - PathAI Score results
   - Newsletter signup
   - Consultation requests
3. **Update form endpoints** in components

### Email Capture Points
- PathAI Score completion
- Service package inquiries
- Case study downloads
- Newsletter subscription

## 📅 Booking Integration

### Calendly Setup
1. **Create Calendly account**
2. **Set up event types**:
   - PathAI Score consultation (30 min)
   - Strategy call (60 min)
   - Discovery session (45 min)
3. **Update booking links** in components

## 🔍 SEO Configuration

### Meta Tags Verification
Ensure these are in `index.html`:
```html
<title>PathAIway - Where Marketing Meets Automation Meets Intelligence</title>
<meta name="description" content="PathAIway combines 15 years of digital marketing expertise with cutting-edge automation and AI intelligence. Transform your business at the intersection of marketing, automation, and intelligence." />
<meta name="keywords" content="digital marketing, automation, AI intelligence, marketing consultancy, business transformation" />

<!-- Open Graph -->
<meta property="og:title" content="PathAIway - Digital Transformation Consultancy" />
<meta property="og:description" content="Where Marketing Meets Automation Meets Intelligence" />
<meta property="og:image" content="https://pathaiway.com/og-image.jpg" />
<meta property="og:url" content="https://pathaiway.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PathAIway - Digital Transformation Consultancy" />
<meta name="twitter:description" content="Where Marketing Meets Automation Meets Intelligence" />
<meta name="twitter:image" content="https://pathaiway.com/twitter-image.jpg" />
```

### Sitemap Generation
Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pathaiway.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://pathaiway.com/#methodology</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pathaiway.com/#services</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pathaiway.com/#pathways</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://pathaiway.com/#case-studies</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 🚀 Performance Optimization

### Vercel Configuration
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Image Optimization
- Use WebP format for images
- Implement lazy loading
- Optimize image sizes for different breakpoints

## 🔒 Security Headers

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

## 📱 Testing Checklist

### Pre-Launch Testing
- [ ] **Desktop browsers**: Chrome, Firefox, Safari, Edge
- [ ] **Mobile devices**: iOS Safari, Android Chrome
- [ ] **PathAI Score assessment**: Complete flow works
- [ ] **Form submissions**: All CTAs functional
- [ ] **Page speed**: Lighthouse score >90
- [ ] **Accessibility**: WCAG compliance
- [ ] **SEO**: Meta tags and structure

### Post-Launch Monitoring
- [ ] **Analytics tracking**: Events firing correctly
- [ ] **Error monitoring**: No console errors
- [ ] **Performance**: Core Web Vitals green
- [ ] **Uptime monitoring**: 99.9% availability
- [ ] **SSL certificate**: Valid and auto-renewing

## 🎯 Launch Strategy

### Soft Launch (Week 1)
1. **Deploy to production**
2. **Test all functionality**
3. **Share with close contacts**
4. **Gather initial feedback**

### Public Launch (Week 2)
1. **Announce on LinkedIn**
2. **Email existing network**
3. **Update business cards/signatures**
4. **Submit to directories**

### Growth Phase (Ongoing)
1. **Content marketing**
2. **SEO optimization**
3. **Paid advertising**
4. **Partnership outreach**

## 🆘 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Domain Not Resolving
1. Check DNS propagation: `dig pathaiway.com`
2. Verify Vercel domain configuration
3. Wait up to 48 hours for full propagation

#### SSL Certificate Issues
1. Verify domain ownership in Vercel
2. Check DNS records are correct
3. Contact Vercel support if needed

### Support Resources
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)

## 📞 Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Verify site loads correctly
- [ ] Test PathAI Score assessment
- [ ] Check all links and CTAs
- [ ] Confirm analytics tracking

### Week 1
- [ ] Monitor performance metrics
- [ ] Check for any errors or issues
- [ ] Gather user feedback
- [ ] Optimize based on real usage

### Month 1
- [ ] Review analytics data
- [ ] A/B test key elements
- [ ] Optimize conversion rates
- [ ] Plan content updates

---

**🎉 Congratulations! PathAIway is now live and ready to transform businesses through the power of integrated digital transformation.**
