# SQ Interactive Website

> Immersive VR, AI, and 3D Real Estate Experiences

## 🚀 Live Website
**[www.sqinteractive.com](https://www.sqinteractive.com)**

## 📋 Overview
Professional website for SQ Interactive, showcasing VR real estate tours, AI interior design, and immersive 3D experiences. Built with modern web technologies and optimized for performance.

## ✨ Features
- **VR Real Estate Tours** - Immersive property walkthroughs
- **AI Interior Design** - AI-powered design visualization
- **360° Content** - Interactive panoramic tours
- **Interactive Walkthroughs** - WebGL-based property exploration
- **Portfolio Showcase** - Project gallery with filtering
- **Contact Forms** - Lead generation and inquiries
- **PWA Support** - Progressive Web App functionality
- **SEO Optimized** - Search engine friendly

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Feather Icons
- **Analytics**: Google Analytics, Hotjar
- **Hosting**: GitHub Pages
- **Domain**: GoDaddy
- **CDN**: GitHub Pages CDN

## 📁 Project Structure
```
SQ-Website/
├── css/
│   ├── main.css              # Optimized global styles
│   └── steam-bg-fallback.css # Background fallbacks
├── js/
│   ├── main.js              # Core functionality
│   └── analytics.js         # Performance tracking
├── images/                  # Image assets
├── videos/                  # Video content
├── Portfolio/               # Portfolio section
├── SQ-Tours/               # 360° tour demos
├── urdu pages/             # Urdu language pages
├── .github/workflows/      # GitHub Actions
├── index.html              # Homepage
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── about.html              # About page
├── contact.html            # Contact page
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── CNAME                  # Custom domain config
├── site.webmanifest       # PWA manifest
└── sw.js                  # Service worker
```

## 🚀 Deployment

### GitHub Pages Setup
1. **Repository Settings**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / `master`
   - Folder: `/ (root)`

2. **Custom Domain (GoDaddy)**
   - Add CNAME file with: `www.sqinteractive.com`
   - Configure DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     
     Type: A  
     Name: @
     Value: 185.199.109.153
     
     Type: A
     Name: @
     Value: 185.199.110.153
     
     Type: A
     Name: @
     Value: 185.199.111.153
     
     Type: CNAME
     Name: www
     Value: your-username.github.io
     ```

3. **SSL Certificate**
   - Enable "Enforce HTTPS" in GitHub Pages settings
   - Wait 24-48 hours for certificate provisioning

### Automated Deployment
GitHub Actions automatically:
- Minifies HTML, CSS, and JavaScript
- Optimizes images
- Deploys to GitHub Pages
- Updates custom domain

## ⚡ Performance Optimizations

### Implemented Optimizations
- **Lazy Loading** - Images load as needed
- **Code Splitting** - Separate CSS/JS files
- **Minification** - Compressed assets
- **Caching** - Service worker caching
- **CDN** - GitHub Pages CDN
- **Image Optimization** - WebP format support
- **Critical CSS** - Above-fold styling
- **Preloading** - Critical resources

### Performance Metrics
- **Lighthouse Score**: 90+ (Target)
- **Core Web Vitals**: Optimized
- **Page Load Time**: <3 seconds
- **First Contentful Paint**: <1.5 seconds

## 🔧 Development

### Local Development
```bash
# Clone repository
git clone https://github.com/your-username/SQ-Website.git
cd SQ-Website

# Serve locally (Python)
python -m http.server 8000

# Or use Live Server extension in VS Code
```

### File Naming Convention
- Use hyphens for spaces: `vr-real-estate.html`
- Lowercase filenames: `furniture-scanning.html`
- No special characters in URLs

### Adding New Pages
1. Create HTML file with proper naming
2. Update navigation in all pages
3. Add to sitemap.xml
4. Test all links

## 📊 Analytics & Monitoring

### Google Analytics
- **ID**: G-GYP19H93BR
- **Events**: Page views, form submissions, video plays
- **Goals**: Contact form completions

### Hotjar Heatmaps
- **ID**: 6545315
- **Features**: User recordings, heatmaps, feedback

### Performance Monitoring
- Core Web Vitals tracking
- Error monitoring
- User engagement metrics
- Form analytics

## 🔍 SEO Configuration

### Meta Tags
- Title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### Structured Data
- Organization schema
- Local business markup
- Service listings
- Contact information

### Sitemap
- XML sitemap at `/sitemap.xml`
- Updated automatically
- Submitted to Google Search Console

## 📱 PWA Features
- **Manifest**: Complete app configuration
- **Service Worker**: Offline caching
- **Icons**: Multiple sizes for all devices
- **Theme Colors**: Brand consistency
- **Installable**: Add to home screen

## 🛡️ Security
- **HTTPS**: SSL certificate enabled
- **Content Security Policy**: XSS protection
- **Form Validation**: Input sanitization
- **Error Handling**: Graceful degradation

## 📞 Contact & Support
- **Email**: admin@sqinteractive.com
- **Phone**: +92 300 9452153
- **Instagram**: [@SQInteractive](https://www.instagram.com/sqinteractive)
- **LinkedIn**: [SQ Interactive](https://www.linkedin.com/company/sqinteractive)

## 📄 License
© 2025 SQ Interactive. All rights reserved.

---

**Built with ❤️ by SQ Interactive Team**