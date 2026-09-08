# SQ Interactive — Website

**Live:** https://www.sqinteractive.com  
**Stack:** Static HTML · GitHub Pages  
**Analytics:** GA4 `G-GYP19H93BR`  
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

---

## SEO Status

Every indexable page must have:
- `<meta name="robots" content="index, follow, ...">`
- `<link rel="canonical" href="...">`
- `<meta name="geo.region" content="PK-PB">` + related geo tags
- `<meta name="description">` (unique per page)
- OG tags (`og:title`, `og:description`, `og:url`, `og:image`)

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
