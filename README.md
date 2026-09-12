# SQ Interactive — Website

**Live:** https://www.sqinteractive.com
**Stack:** Static HTML · GitHub Pages
**Analytics:** GA4 `G-GYP19H93BR` · Hotjar/ContentSquare `hjid: 6545315`
**Owner:** Shazaib Qaiser · admin@sqinteractive.com

---

## Project Structure

```
/                        → Homepage
/services/               → All Services hub
/work/                   → Portfolio & case studies
/about/                  → About SQ Interactive
/how-we-work/            → Process & approach
/contact/                → Contact form
/thank-you.html          → Post-form submission page

/digital/                → Digital world hub
  /website-development/
  /e-commerce/
  /custom-software/
  /ui-ux-experiences/
  /seo-digital-growth/
  /automation-integration/

/ai/                     → AI world hub
  /ai-systems-models/
  /intelligent-automation/
  /ai-interior-design/
  /data-intelligence/
  /ai-integration/
  /ai-content/
  /process-optimization/

/immersive/              → Immersive world hub
  /virtual-reality/
  /augmented-reality/
  /vr-real-estate/
  /360-experiences/
  /360-tours/
  /3d-visualization/
  /vr-staging/
  /interactive-installation/
  /web-immersion/
  /furniture-scanning/

/lab/                    → SQ Lab hub
  /ai-research/
  /3d-tech/
  /ar-vr-innovation/
  /no-code-platforms/
  /web-performance/
  /design-systems/
```

---

## Key Files

| File | Purpose |
|------|---------|
| `sitemap.xml` | Submitted to Google Search Console |
| `robots.txt` | Crawler access rules |
| `SEO-PLAN-V2.md` | Full SEO strategy & keyword plan |
| `CHANGELOG.md` | All changes tracked here |
| `css/tokens.css` | Design tokens (colours, spacing, type) |
| `css/unified-nav.css` | Navigation styles |
| `js/unified-nav.js` | Navigation behaviour |
| `js/main.js` | Scroll reveals, year, general UI |
| `js/language.js` | EN/UR language switching |
| `js/chatbot.js` | Chatbot widget |
| `js/analytics.js` | GA4 + Hotjar + Web Vitals + CTA tracking |

---

## Analytics Stack

Every page loads `js/analytics.js` which includes:

| Tool | ID | Purpose |
|------|----|---------|
| GA4 | `G-GYP19H93BR` | Page views, events, conversions |
| Hotjar / ContentSquare | `hjid: 6545315` | Heatmaps, session recordings |
| ContentSquare tag | `c97b2acc48ee8` | UX analytics |

Tracked events: `cta_click`, `whatsapp_click`, `form_start`, `form_submit`, `scroll_depth` (25/50/75/90%), `video_play`, `LCP`, `FID`, `CLS`, `TTFB`, `page_load_time`.

---

## SEO Status

### Required on every indexable page
- `<meta name="robots" content="index, follow, ...">`
- `<link rel="canonical" href="...">`
- `<link rel="alternate" hreflang="en" href="...">`
- `<meta name="geo.region" content="PK-PB">` + related geo tags
- `<meta name="description">` (unique per page)
- OG tags (`og:title`, `og:description`, `og:url`, `og:image`)
- `<meta name="twitter:card">` + title + description

### Schema required per page type
- All pages: `BreadcrumbList`
- Service sub-pages: `Service` (with `offers.priceCurrency: PKR`)
- High-intent pages: `FAQPage`
- Homepage: `Organization` + `LocalBusiness` + `WebSite`
- Contact: `ContactPage`

### AI World SEO Status (Phase C complete)

| Page | Title ✅ | Desc ✅ | Geo ✅ | Robots ✅ | Canonical ✅ | hreflang ✅ | BreadcrumbList ✅ | Service ✅ | FAQ ✅ | Hero ✅ | analytics.js ✅ |
|------|---------|---------|--------|----------|------------|-----------|-----------------|---------|------|------|------|
| `/ai/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | — | ✅ |
| `/ai/ai-systems-models/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/ai/intelligent-automation/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/ai/ai-interior-design/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| `/ai/data-intelligence/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| `/ai/ai-integration/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| `/ai/ai-content/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| `/ai/process-optimization/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ | ✅ |

### Digital World SEO Status (Phase B complete)

| Page | Title ✅ | Desc ✅ | Geo ✅ | Robots ✅ | Canonical ✅ | hreflang ✅ | BreadcrumbList ✅ | Service ✅ | FAQ ✅ |
|------|---------|---------|--------|----------|------------|-----------|-----------------|---------|------|
| `/digital/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/digital/website-development/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/digital/e-commerce/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/digital/custom-software/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/digital/ui-ux-experiences/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| `/digital/seo-digital-growth/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/digital/automation-integration/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |

See `SEO-PLAN-V2.md` for the full keyword strategy and per-page action items.

---

## Excluded from Index

The following directories are blocked in `robots.txt`:
`/legacy/` · `/Portfolio/` · `/chatbot-package/` · `/v2/` · `/SQ-Tours/` · `/videos/` · `/lang/`

---

## Development Notes

- No build step — pure HTML/CSS/JS
- All CSS uses design tokens from `css/tokens.css`
- Navigation HTML is duplicated across pages (no server-side includes)
- Bilingual support via `js/language.js` + `lang/en/` and `lang/ur/` JSON files
- Videos autoplay muted on hero sections — keep file sizes optimised
- Contact form uses formsubmit.co with AJAX fetch — shows inline thank-you on success
- `thank-you.html` exists as a standalone page (noindex) for direct access
