# Changelog — SQ Interactive Website

All notable changes to the site are documented here.  
Format: `[Date] — Description`

---

## [2025-07-XX] — SEO Phase A: Canonical + Robots + Geo Tags

### Added
- `robots`, `canonical`, and geo tags to `about/index.html`
- `robots`, `canonical`, and geo tags to `work/index.html`
- `robots`, `canonical`, and geo tags to `how-we-work/index.html`
- `robots`, `canonical`, and geo tags to `contact/index.html`
- `viewport` meta tag to `about/`, `work/`, `how-we-work/`, `contact/` (was missing)
- Improved `meta description` on `contact/` (was generic)
- Geo tags to `lab/index.html` (canonical + robots already present)
- Geo tags to `services/index.html` (canonical + robots already present)

### Already complete (prior work)
- `index.html` (homepage) — full SEO: robots ✅ canonical ✅ geo ✅ OG ✅ Twitter ✅ JSON-LD ✅
- `digital/index.html` — robots ✅ canonical ✅ geo ✅
- `ai/index.html` — robots ✅ canonical ✅ geo ✅
- `immersive/index.html` — robots ✅ canonical ✅ geo ✅
- `services/index.html` — robots ✅ canonical ✅ (geo added this session)
- `lab/index.html` — robots ✅ canonical ✅ (geo added this session)

---

## SEO Phase A — Tag Coverage Status

| Page | robots | canonical | geo | OG | description |
|------|--------|-----------|-----|----|-------------|
| `/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/services/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/digital/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/ai/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/immersive/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/lab/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/work/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/about/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/how-we-work/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/contact/` | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sub-pages (26) | ❌ | ❌ | ❌ | ⚠️ | ⚠️ |

---

## Next Up — SEO Phase B

- [ ] Add `robots` + `canonical` + `geo` to all 26 service sub-pages
- [ ] Add `BreadcrumbList` JSON-LD schema to all sub-pages
- [ ] Add `Service` JSON-LD schema to all service sub-pages
- [ ] Add `WebSite` schema with SearchAction to homepage
- [ ] Add `hreflang` tags to all pages
- [ ] Update title tags on sub-pages to match SEO plan keywords
- [ ] Update/add meta descriptions on sub-pages
- [ ] Create/claim Google Business Profile
