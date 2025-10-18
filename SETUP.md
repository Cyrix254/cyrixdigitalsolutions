# Cyrix Digital Solutions - Setup Guide

## 🚀 Quick Start

This is a production-ready React website for Cyrix Digital Solutions built with Vite, React Router, Framer Motion, and Swiper.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 📋 Configuration

### 1. Formspree Integration (Contact Form)

To enable the contact form:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update `src/pages/Contact.tsx` line 29 with your Formspree endpoint:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 2. WhatsApp Integration

The WhatsApp number is already configured in `src/data/site.json`:

```json
{
  "whatsapp": "https://wa.me/254114998416?text=Hi%20Cyrix%20Digital%20Solutions!%20I%20want%20to%20inquire%20about...",
  ...
}
```

Update this with your actual WhatsApp business number.

### 3. Social Media Links

Update all social media links in `src/data/site.json`:

```json
{
  "socials": {
    "linkedin": "https://linkedin.com/in/reagantzisaga",
    "instagram": "https://instagram.com/cyrixdigital",
    "facebook": "https://facebook.com/cyrixdigital",
    "tiktok": "https://tiktok.com/@cyrixdigital"
  }
}
```

### 4. Company Profile PDF

Add your company profile PDF to the `public` folder:

```
public/company-profile.pdf
```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── QuickLinks.tsx   # Quick links section
│   ├── ScrollProgress.tsx
│   └── WhatsAppFloating.tsx
├── data/                # JSON data files
│   ├── site.json        # Company info & settings
│   ├── services.json    # Service offerings
│   ├── portfolio.json   # Portfolio items
│   ├── testimonials.json
│   └── faq.json
├── pages/               # Route pages
│   ├── Home.tsx         # Landing page with slider
│   ├── About.tsx        # About & founder section
│   ├── Services.tsx     # Services with tabs & modals
│   ├── Portfolio.tsx    # Filterable portfolio grid
│   ├── Testimonials.tsx # Client testimonials carousel
│   ├── Contact.tsx      # Contact form
│   ├── FAQ.tsx          # FAQ accordion
│   └── NotFound.tsx     # 404 page
└── App.tsx              # Main app with routing
```

## 🎨 Customization

### Colors

Edit brand colors in `src/index.css`:

```css
:root {
  --royal-blue: 216 84% 31%;      /* Primary color */
  --bright-accent: 198 100% 50%;  /* Accent color */
  --dark-navy: 217 72% 13%;       /* Dark theme */
  ...
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`. Current setup:
- **Inter** - UI and body text
- **Playfair Display** - Headings

To change fonts:
1. Update the Google Fonts link in `index.html`
2. Update font references in `src/index.css` and `tailwind.config.ts`

### Content

Edit JSON files in `src/data/` to update:
- Services and pricing
- Portfolio projects
- Client testimonials
- FAQ questions
- Company information

## 🔧 Features

- ✅ Animated hero slider (6s autoplay)
- ✅ Scroll progress indicator
- ✅ Page transition animations
- ✅ Service modals with details
- ✅ Filterable portfolio grid
- ✅ Testimonials carousel (5s autoplay)
- ✅ Contact form with Formspree
- ✅ WhatsApp floating widget
- ✅ FAQ accordion
- ✅ Fully responsive design
- ✅ SEO optimized with meta tags
- ✅ Accessibility features

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 641px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Environment Variables

If using Formspree or other services requiring API keys, add them as environment variables:

```
VITE_FORMSPREE_ENDPOINT=your_endpoint_here
```

## 📊 Performance

- Lighthouse Score Target: 90+
- Image optimization: Use WebP format
- Lazy loading: Enabled for images
- Code splitting: Per route

## 🎯 SEO Checklist

- ✅ Unique page titles
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Alt text for images
- ✅ Semantic HTML
- ✅ Robots.txt included
- ⚠️ Add sitemap.xml (generate after deployment)

## 📞 Support

For questions or issues:
- Email: hello@cyrixdigital.com
- WhatsApp: +254 114 998 416

---

**Built with ❤️ by Cyrix Digital Solutions**
