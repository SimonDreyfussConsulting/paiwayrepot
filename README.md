# PathAIway - Digital Intelligence Media Platform

**Where Marketing Meets Automation Meets Intelligence**

PathAIway is a comprehensive digital intelligence media platform built with React, featuring interactive assessments, comprehensive case studies, and newsletter-driven content strategy.

## 🚀 Live Demo

- **Production Site**: https://pathaiway.com
- **All Pages Working**: Latest, PathAI Labs, Automation, Intelligence, Case Studies

## ✨ Features

### 🏠 **Complete Website Structure**
- **Homepage**: Media platform with newsletter focus and social proof
- **Latest**: Article grid with comprehensive case studies and search
- **PathAI Labs**: Innovation showcase with experimental tools and ratings
- **Automation**: Automation solutions, blueprints, and workflows
- **Intelligence**: AI services, analytics capabilities, and data insights
- **Case Studies**: Success stories with search, filtering, and detailed metrics

### 🎯 **Interactive Elements**
- **PathAI Score™ Assessment**: 9-question interactive tool with personalized results
- **Newsletter Signups**: Multiple capture points throughout the site
- **Search & Filter**: Advanced filtering for case studies and articles
- **Mobile Responsive**: Optimized for all devices and screen sizes

### 📊 **Content Highlights**
- **$10M Revenue Case Study**: Energy giant's agentic automation success
- **$50M Cost Savings**: Automotive retailer's enterprise transformation
- **806% Growth**: 6click's HubSpot integration success story
- **205% ROI**: Multinational conglomerate's marketing automation

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Vercel (with routing configuration)

## 📦 Project Structure

```
pathaiway/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Article.jsx      # Article display component
│   │   ├── CaseStudies.jsx  # Case studies grid
│   │   ├── ContentSections.jsx # Content category sections
│   │   ├── NewsletterSignup.jsx # Newsletter forms
│   │   └── PathAIScore.jsx  # Interactive assessment tool
│   ├── data/
│   │   └── articles.js      # Article data with case studies
│   ├── pages/
│   │   ├── HomePage.jsx     # Main homepage component
│   │   ├── Latest.jsx       # Latest articles page
│   │   ├── PathAILabs.jsx   # Innovation showcase
│   │   ├── Automation.jsx   # Automation solutions
│   │   ├── Intelligence.jsx # AI services page
│   │   └── CaseStudies.jsx  # Case studies page
│   ├── App.jsx              # Main app with routing
│   └── main.jsx             # App entry point
├── dist/                    # Production build files
├── vercel.json              # Vercel routing configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SimonDreyfussConsulting/paiwayrepot.git
   cd paiwayrepot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Import repository to Vercel
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

2. **Automatic Deployment**
   - Push to main branch triggers deployment
   - `vercel.json` handles React Router routing
   - Custom domain configuration supported

### Other Platforms

- **Netlify**: Upload `dist/` folder with `_redirects` file
- **Traditional Hosting**: Upload contents of `dist/` folder
- **GitHub Pages**: Use `gh-pages` branch deployment

## 🔧 Configuration

### Routing Configuration
The `vercel.json` file ensures all React Router routes work properly:

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

### Environment Variables
No environment variables required for basic functionality. For CMS integration:

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

## 📈 Performance

- **Lighthouse Score**: 95+ Performance
- **Bundle Size**: 382KB JS (109KB gzipped)
- **CSS Size**: 118KB (18KB gzipped)
- **Load Time**: <2s on 3G

## 🎨 Design System

### Colors
- **Primary Blue**: #0066cc (PathAI branding)
- **Secondary Orange**: #ff6600 (CTA elements)
- **Success Green**: #10b981 (Automation theme)
- **Purple**: #8b5cf6 (Labs/Innovation)
- **Red**: #ef4444 (Case studies)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Regular, readable line height
- **UI Elements**: Medium weight

## 🔮 Future Enhancements

### Phase 1: Content Management
- [ ] Sanity CMS integration
- [ ] Dynamic article publishing
- [ ] Content scheduling

### Phase 2: User Engagement
- [ ] Email automation (ConvertKit/Mailchimp)
- [ ] User accounts and preferences
- [ ] Comment system

### Phase 3: Analytics & Optimization
- [ ] Google Analytics 4
- [ ] A/B testing framework
- [ ] Conversion optimization

## 📞 Support

For questions or support:
- **Email**: simon@pathaiway.com
- **Website**: https://pathaiway.com
- **Repository**: https://github.com/SimonDreyfussConsulting/paiwayrepot

## 📄 License

This project is proprietary software owned by Simon Dreyfuss Consulting.

---

**Built with ❤️ by the PathAIway Team**
