# SQ Interactive — Changelog



---

## Session 7 — Lab World SEO Pass (Phase E) + Schema Additions

### Lab World — Full SEO Pass (6 sub-pages)

#### All 6 sub-pages — changes applied:
- **Titles** upgraded to keyword-rich format: `[Topic] Research Pakistan — [Descriptor] | SQ Interactive`
- **Descriptions** upgraded with Pakistan/Lahore geo context and research focus
- **Robots** added: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **Geo tags** added: `geo.region=PK-PB`, `geo.placename=Lahore, Pakistan`, `geo.position`, `ICBM`
- **hreflang** `en` added to all sub-pages
- **OG tags** upgraded with keyword titles and descriptions
- **Twitter card** meta tags added to all sub-pages
- **BreadcrumbList** JSON-LD schema added (3-level: Home > Lab > Page) — no Service schema (Lab = thought leadership, not commercial)
- **Cinematic `sq-service-hero`** replacing old `sq-breadcrumb` + `sq-page-hero` on all 6 sub-pages
- **`analytics.js`** deferred script added to all 6 sub-pages
- **`language.js`** added to all 6 sub-pages
- **Dead `nav.js`** references removed from all 6 sub-pages

#### Hero images assigned per sub-page:
- `ai-research/` → `images/ai/ai int 3.png`
- `3d-tech/` → `images/vr and 360/interior 2.png`
- `ar-vr-innovation/` → `images/vr and 360/NeuroSpace VR Preview.png`
- `no-code-platforms/` → `images/ui ux and web/it 2.png`
- `web-performance/` → `images/ui ux and web/it.png`
- `design-systems/` → `images/ui ux and web/uiux 1.png`

#### Titles applied:
- `ai-research/` → `AI Research Lab Pakistan — LLMs & Machine Learning | SQ Interactive`
- `3d-tech/` → `3D Technology Research Pakistan — Advanced 3D & Rendering | SQ Interactive`
- `ar-vr-innovation/` → `AR/VR Innovation Lab Pakistan — Immersive R&D | SQ Interactive`
- `no-code-platforms/` → `No-Code Platform Research Pakistan — Low-Code Development | SQ Interactive`
- `web-performance/` → `Web Performance Research Pakistan — Core Web Vitals & Speed | SQ Interactive`
- `design-systems/` → `Design Systems Research Pakistan — Component Libraries | SQ Interactive`

### Schema Additions

#### `index.html` (Homepage)
- Added `WebSite` JSON-LD schema with `SearchAction` (sitelinks search box signal)

#### `how-we-work/index.html`
- Added `HowTo` JSON-LD schema with all 5 process steps: Discovery & Strategy, Design & Planning, Development & Iteration, Testing & Refinement, Launch & Support

#### `about/index.html`
- Added `Person` JSON-LD schema for Shazaib Qaiser (Founder & Lead, Lahore, Pakistan)

---

## Session 8 — Image Alt Audit + Width/Height + Visual Quality Audit

### Image Alt Tags — All Main Pages
- `index.html` — hub card images given descriptive alt text (Digital, AI, Immersive, Lab worlds)
- `work/index.html` — all 19 portfolio card images given descriptive alt text
- `services/index.html` — all 26 service card images given descriptive alt text
- Nav logo mark (`no-background.png`) — correctly `alt=""` + `aria-hidden="true"` across all pages (decorative)
- Hero logo panel (`no-background.png`) — correctly `alt=""` + `aria-hidden="true"` (decorative)
- Founder photo (`about/index.html`) — already had correct alt text: `Shazaib Qaiser, Founder of SQ Interactive`

### Width & Height Attributes — All Main Pages
- `index.html` — hub card images: `width="400" height="300"`, hero logo panel: `width="400" height="400"`
- `about/index.html` — hero logo panel: `width="400" height="400"`, founder photo: `width="160" height="160"`
- `work/index.html` — all portfolio card images: `width="800" height="500"`, hero logo panel: `width="400" height="400"`
- `services/index.html` — all service card images: `width="800" height="500"`, hero logo panel: `width="400" height="400"`
- `how-we-work/index.html` — hero logo panel: `width="400" height="400"`

### Broken Image Paths Fixed
- `work/index.html`: `../images/it 2.png` → `../images/ui ux and web/it 2.png` (Visa Management System card)
- `services/index.html`: `../images/vr and 360/sofa.png` → `../images/sofa.png` (3D Technology lab card)
- `services/index.html`: `../images/vr and 360/interior 6.png` → `../images/interior 6.png` (VR Staging card)

### Visual Quality Audit — Structural Findings
- `images/ar.jpeg` used on services AR card — only JPEG in the services grid; flagged for future replacement with a higher-quality PNG
- All other service/portfolio images use PNG format — consistent
- No `Screenshot` filenames used on any main indexable page — all screenshots are in subdirectories only
- `images/data .png` (trailing space in filename) — matches actual file, no fix needed but noted

---

 — Digital World SEO Pass + Analytics Sitewide

### Analytics — Sitewide Implementation
- **`js/analytics.js`** — Rebuilt with Hotjar/ContentSquare (`hjid: 6545315`, `c97b2acc48ee8`) from legacy site, plus GA4 `G-GYP19H93BR`, Web Vitals (LCP/FID/CLS/TTFB), scroll depth (25/50/75/90%), CTA click tracking (`data-cta`), WhatsApp click tracking, form start/submit tracking, video play/complete tracking
- **`index.html`** — analytics.js confirmed ✅
- **`work/index.html`** — analytics.js added ✅
- **`about/index.html`** — analytics.js added ✅
- **`how-we-work/index.html`** — analytics.js added ✅
- **`contact/index.html`** — analytics.js confirmed ✅
- **`digital/index.html`** — analytics.js added, GA4 moved to head ✅
- All 6 digital sub-pages — analytics.js confirmed ✅

### Digital World SEO Pass (Phase B — Digital)

#### `/digital/index.html`
- Fixed duplicate hreflang tag
- Added `BreadcrumbList` JSON-LD schema
- Added `Service` JSON-LD schema
- Improved OG title/description to keyword-rich versions
- Added Twitter card meta tags
- GA4 moved to `<head>`, analytics.js added to scripts

#### `/digital/website-development/index.html`
- **Title:** `Website Development Lahore — Professional Web Design | SQ Interactive`
- **Description:** Keyword-rich, includes PKR 75,000 price signal
- **Keywords:** `website development Lahore`, `web design Lahore`, `professional website Pakistan`
- Added: geo tags, full robots meta, hreflang, improved OG/Twitter
- Added: `BreadcrumbList` schema (Home > Digital > Website Development)
- Added: `Service` schema with PKR 75,000 min price
- Added: `FAQPage` schema (3 Q&As: cost, timeline, outside Lahore)
- analytics.js added

#### `/digital/e-commerce/index.html`
- **Title:** `E-Commerce Development Pakistan — Shopify & Online Stores | SQ Interactive`
- **Description:** Includes PKR 150,000 price signal, JazzCash/EasyPaisa mention
- **Keywords:** `e-commerce development Pakistan`, `Shopify development Lahore`
- Added: geo tags, full robots meta, hreflang, improved OG/Twitter
- Added: `BreadcrumbList` schema (Home > Digital > E-Commerce & Shopify)
- Added: `Service` schema with PKR 150,000 min price
- Added: `FAQPage` schema (3 Q&As: Shopify cost, Pakistani payment gateways, Shopify vs custom)
- analytics.js added

#### `/digital/custom-software/index.html`
- **Title:** `Custom Software Development Lahore — Dashboards & Systems | SQ Interactive`
- **Description:** Includes PKR 200,000 price signal
- **Keywords:** `custom software development Lahore`, `software development company Pakistan`
- Added: geo tags, full robots meta, hreflang, improved OG/Twitter
- Added: `BreadcrumbList` schema (Home > Digital > Custom Software)
- Added: `Service` schema with PKR 200,000 min price
- analytics.js added

#### `/digital/ui-ux-experiences/index.html`
- **Title:** `UI/UX Design Services Pakistan — User Experience Design | SQ Interactive`
- **Description:** Research-driven, prototyping, usability testing, accessibility
- **Keywords:** `UI UX design Pakistan`, `UX design Lahore`, `user interface design Pakistan`
- Added: geo tags, full robots meta, hreflang, improved OG/Twitter
- Added: `BreadcrumbList` schema (Home > Digital > UI/UX Experiences)
- Added: `Service` schema with PKR 75,000 min price
- analytics.js confirmed

#### `/digital/seo-digital-growth/index.html`
- **Title:** `SEO Services Pakistan — Search Engine Optimization Lahore | SQ Interactive`
- **Description:** Includes PKR 50,000 price signal, local SEO mention
- **Keywords:** `SEO services Pakistan`, `SEO company Lahore`, `local SEO Lahore`
- Added: geo tags, full robots meta, hreflang, improved OG/Twitter
- Added: `BreadcrumbList` schema (Home > Digital > SEO & Digital Growth)
- Added: `Service` schema with PKR 50,000 min price
- Added: `FAQPage` schema (3 Q&As: SEO cost, timeline, local SEO Lahore)
- analytics.js confirmed

#### `/digital/automation-integration/index.html`
- **Title:** `Workflow Automation & Integration Services Pakistan | SQ Interactive`
- **Description:** n8n, Zapier, API integrations, PKR 75,000 price signal
- **Keywords:** `workflow automation Pakistan`, `business automation Lahore`, `n8n automation Pakistan`
- Added: geo tags, full robots meta, hreflang, improved OG/Twitter
- Added: `BreadcrumbList` schema (Home > Digital > Automation & Integration)
- Added: `Service` schema with PKR 75,000 min price
- analytics.js confirmed

---

## Session 6 — Immersive World SEO Pass (Phase D)

### Immersive World — Full SEO Pass (10 sub-pages + hub)

#### All 10 sub-pages — changes applied:
- **Titles** upgraded to keyword-rich format: `[Service] Pakistan — [Descriptor] Lahore | SQ Interactive`
- **Descriptions** upgraded with PKR price signals and Pakistan/Lahore geo context
- **Geo tags** added: `geo.region=PK-PB`, `geo.placename=Lahore, Pakistan`, `geo.position`, `ICBM`
- **Robots** upgraded to full string: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **hreflang** `en` added to all sub-pages
- **OG tags** upgraded with keyword titles and PKR descriptions
- **Twitter card** meta tags added to all sub-pages
- **BreadcrumbList** JSON-LD schema added (3-level: Home > Immersive > Page)
- **Service** JSON-LD schema added with PKR min price on all sub-pages
- **FAQPage** schemas added to highest-intent pages: `virtual-reality` (cost, headsets, real estate use), `vr-real-estate` (cost, off-plan sales), `360-tours` (cost, embedding)
- **Cinematic `sq-service-hero`** replacing old `sq-breadcrumb` + `sq-page-hero` on all 10 sub-pages
- **`analytics.js`** deferred script added to all 10 sub-pages
- **Dead `nav.js`** references removed from all 10 sub-pages
- **`language.js`** added to sub-pages that were missing it

#### Hero images assigned per sub-page:
- `virtual-reality/` → `images/vr and 360/vr exp.png`
- `augmented-reality/` → `images/vr and 360/NeuroSpace VR Preview.png`
- `vr-real-estate/` → `images/vr and 360/after.png`
- `360-experiences/` → `images/vr and 360/360 3.png`
- `360-tours/` → `images/vr and 360/360 tour.png`
- `3d-visualization/` → `images/vr and 360/interior 2.png`
- `vr-staging/` → `images/vr and 360/interior 3.png`
- `interactive-installation/` → `images/vr and 360/vr training.png`
- `web-immersion/` → `images/vr and 360/vr training.png`
- `furniture-scanning/` → `images/vr and 360/360 tour.png`

#### `/immersive/index.html` (hub) — changes applied:
- GA4 moved to `<head>`
- OG title upgraded to keyword-rich version with Pakistan
- Twitter card meta tags added
- BreadcrumbList + Service JSON-LD schemas added
- `analytics.js` added
- Duplicate GA4 block at bottom removed

---

## Session 6 — Immersive World SEO Pass (Phase D)

### Immersive World — Full SEO Pass (10 sub-pages + hub)

#### All 10 sub-pages — changes applied:
- **Titles** upgraded to keyword-rich format: `[Service] Pakistan — [Descriptor] Lahore | SQ Interactive`
- **Descriptions** upgraded with PKR price signals and Pakistan/Lahore geo context
- **Geo tags** added: `geo.region=PK-PB`, `geo.placename=Lahore, Pakistan`, `geo.position`, `ICBM`
- **Robots** upgraded to full string: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- **hreflang** `en` added to all sub-pages
- **OG tags** upgraded with keyword titles and PKR descriptions
- **Twitter card** meta tags added to all sub-pages
- **BreadcrumbList** JSON-LD schema added (3-level: Home > Immersive > Page)
- **Service** JSON-LD schema added with PKR min price on all sub-pages
- **FAQPage** schemas added to highest-intent pages: `virtual-reality` (cost, headsets, real estate use), `vr-real-estate` (cost, off-plan sales), `360-tours` (cost, embedding)
- **Cinematic `sq-service-hero`** replacing old `sq-breadcrumb` + `sq-page-hero` on all 10 sub-pages
- **`analytics.js`** deferred script added to all 10 sub-pages
- **Dead `nav.js`** references removed from all 10 sub-pages
- **`language.js`** added to sub-pages that were missing it

#### Hero images assigned per sub-page:
- `virtual-reality/` → `images/vr and 360/vr exp.png`
- `augmented-reality/` → `images/vr and 360/NeuroSpace VR Preview.png`
- `vr-real-estate/` → `images/vr and 360/after.png`
- `360-experiences/` → `images/vr and 360/360 3.png`
- `360-tours/` → `images/vr and 360/360 tour.png`
- `3d-visualization/` → `images/vr and 360/interior 2.png`
- `vr-staging/` → `images/vr and 360/interior 3.png`
- `interactive-installation/` → `images/vr and 360/vr training.png`
- `web-immersion/` → `images/vr and 360/vr training.png`
- `furniture-scanning/` → `images/vr and 360/360 tour.png`

#### `/immersive/index.html` (hub) — changes applied:
- GA4 moved to `<head>`
- OG title upgraded to keyword-rich version with Pakistan
- Twitter card meta tags added
- BreadcrumbList + Service JSON-LD schemas added
- `analytics.js` added
- Duplicate GA4 block at bottom removed

---

## Session 5b — Google Search Console Cleanup & SEO Audit

### Search Console Property
- Confirmed correct property: `https://www.sqinteractive.com/`
- Old sitemap entries (`project-sitemap.xml`, `page-sitemap.xml`) removed
- Current sitemap: `/sitemap.xml` — Status: Success, 39 pages discovered, last read Sep 15 2026
- Noted: XML comment says "37 indexable URLs" but sitemap contains 39 — minor housekeeping, not urgent
- Noted: `<lastmod>` values still show `2025-07-01` — to update in a future pass

### 404 Cleanup
- Identified 10 old V1 URLs returning 404 (e.g. `/furniture-scanning.html`, `/roi-calculator.html`, `/SQ-Tours/index.html`, Urdu variants)
- Decision: **do not recreate** — these are obsolete V1 pages, not missing V2 pages
- All 10 submitted for Temporary Removal via Search Console
- Later count rose to 12 — additional URLs are also old V1 ecosystem, no action needed

### Crawled – Currently Not Indexed (5 pages)
- `/Portfolio/index.html`, `/sitemap.xml`, `/contact.html?service=360-tour`, `/contact.html?service=vr-staging`, `/contact.html?service=interactive-walkthrough`
- All are old V1 URLs except `sitemap.xml` (which is correct to remain)
- Decision: no page changes, no indexing requests

### Page with Redirect (3 URLs)
- `/index.html` → `/` — intentional homepage normalisation
- `/services/` → `/services` — intentional V2 route
- `/` — appeared in redirect category during crawl cycle, no action taken
- Decision: leave all redirects in place

### Canonical Issue (1 URL)
- `/contact-ur.html?service=360-tour` — old V1 Urdu URL, first detected Nov 2025, last crawled Apr 2026
- Confirmed redirecting to homepage rather than returning 404
- Decision: leave alone — old V1 URL, not in V2 sitemap, not harming V2 structure

### Discovered – Currently Not Indexed (37 pages)
- All legitimate V2 pages (e.g. `/about/`, `/ai/`, `/ai/ai-content/`, `/contact/` etc.)
- `Last crawled: N/A` — Google has discovered but not yet crawled them
- Decision: **do not manually request indexing** — sitemap is submitted, pages are legitimate, allow natural crawl cycle

### External Links (3 domains)
- `heavenhotel.com.pk` — legitimate backlink from Heaven Hotel 360° tour placement
- `topinteractiveagencies.com` — 1 link to homepage, origin page not yet identified
- `tracxn.com` — 1 link, origin not yet identified
- No site changes required

### Search Performance
- Milestones reached: 10 clicks (Nov 2025), 15 clicks (Dec 2025), 20 clicks (Jul 2026)
- At time of audit: 22/30 toward next milestone (30 clicks in 28 days)
- Decision: no artificial click-chasing, let organic growth continue

### Overall Status at End of Session 5b
| Area | Status |
|------|--------|
| Technical foundation | 🟢 Good |
| Sitemap | 🟢 39 URLs, successfully read |
| Old V1 404s | 🟢 Temporary removals submitted |
| V2 discovery | 🟢 All V2 pages discovered |
| V2 crawling | 🟡 37 pages discovered, not yet crawled |
| Redirects | 🟢 All intentional |
| Canonical issue | 🟡 1 old V1 URL, leaving for now |
| External links | 🟢 3 known domains |
| Search performance | 🟢 Growing |

---

## Session 5 — AI World Content + Hero Upgrades + Analytics Completion

### AI World — Full Content Pass (matching Digital standard)
- All 6 AI sub-pages upgraded from plain `sq-page-hero` to cinematic `sq-service-hero` with full-bleed background images
- Old `sq-breadcrumb` divs removed from all 6 sub-pages (replaced by cinematic hero pattern)
- Hero images assigned per page:
  - `ai-systems-models/` → `images/ai/ai int 3.png`
  - `intelligent-automation/` → `images/ai/workflows.png`
  - `ai-interior-design/` → `images/ai/ai interior design.png`
  - `data-intelligence/` → `images/AI 2.png`
  - `ai-integration/` → `images/ai/ai int 4.png`
  - `ai-content/` → `images/ai/ai int 2.png`
  - `process-optimization/` → `images/ui ux and web/it 2.png`
- All 6 sub-pages already had: What We Do, Process (4 steps), Related Projects, Related Services, Pricing tiers (3-tier), CTA — confirmed complete

### AI World — Full SEO Pass (Phase C)
- All 7 AI pages (hub + 6 sub-pages): geo tags, full robots string, hreflang, upgraded keyword titles, improved descriptions with PKR price signals, OG/Twitter tags
- BreadcrumbList + Service JSON-LD schemas on all 7 pages
- FAQPage schemas on high-intent pages: `ai-systems-models` (cost, model types, Pakistan coverage) and `intelligent-automation` (cost, tools, WhatsApp/local platforms)
- GA4 moved to `<head>` on all sub-pages
- Dead `nav.js` references removed from all sub-pages

### Analytics — Completion
- `services/index.html` — analytics.js added ✅ (was the only main page missing it)
- Dead `nav.js` reference removed from services page
- All main pages confirmed: `index.html`, `work/`, `about/`, `how-we-work/`, `contact/`, `services/` — analytics.js ✅
- All 7 AI pages confirmed: analytics.js ✅

### Phase C Checklist Update
- [x] AI world sub-pages SEO pass (7 pages) ✅
- [x] AI world cinematic hero + content (6 sub-pages) ✅
- [x] analytics.js on all main + AI pages ✅

---

## Session 3 — Visual Improvements + Contact Form + Service Content

### Contact Form
- Replaced `_next` redirect with AJAX fetch submission
- Inline thank-you state shown on same page after successful submission
- `thank-you.html` created as standalone branded page (noindex)
- Added `.sq-contact-thankyou` CSS with fade-in animation to `contact.css`

### How We Work — Visual Rebuild
- Process steps replaced with 3-column card grid (numbered, icon, tag pill)
- Principles replaced with left-gold-border card grid with icons
- All sections get `data-reveal` scroll animations
- Inline CSS added for `.sq-hww-steps` and `.sq-hww-principles`

### About — Visual Improvements
- Added stats bar: 4 Service Worlds / 26+ Services / Based in Lahore / ∞ Problems Solved
- Added founder section with photo (`my pic .png`), name, role, bio
- Replaced plain capability cards with icon + text side-by-side cards
- All sections get `data-reveal` scroll animations

### Animations (main.js)
- Removed `setTimeout` that was immediately revealing all `[data-reveal]` elements
- Added stagger delay (80ms per sibling) for grid animations

### Digital Service Sub-Pages — Content Added
- `ui-ux-experiences/` — new cinematic hero, What We Do, Design Process (4 steps), Related Projects, Related Services
- `seo-digital-growth/` — new cinematic hero, What We Do, SEO Process (4 steps), Related Projects, Related Services
- `automation-integration/` — new cinematic hero, What We Do, Automation Process (4 steps), Related Projects, Related Services

---

## Session 2 — Service Sub-Pages Content + Testimonial Fix + Thank You Page

### Testimonial Cards Fixed
- Cards now `display: flex; flex-direction: column; min-height: 320px`
- Quote gets `flex: 1`, author gets `margin-top: auto` — always pinned to bottom
- Grid uses `align-items: stretch` for equal height rows

### Digital Sub-Pages — Full Content (website-development pattern)
- `website-development/` — What We Do, Process (4 steps), Related Projects, Related Services, Pricing tiers, CTA
- `e-commerce/` — What We Do, Process (4 steps), Related Projects, Related Services, Pricing tiers, CTA
- `custom-software/` — What We Do, Process (4 steps), Related Projects, Related Services, Pricing tiers, CTA

---

## Session 1 — SEO Foundation (All 10 Top-Level Pages)

### Tags Added to All Pages
- `robots` meta — `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`
- `canonical` — absolute URL per page
- Geo tags — `geo.region=PK-PB`, `geo.placename=Lahore, Pakistan`, `geo.position=31.5204;74.3587`, `ICBM`
- `viewport` meta where missing
- Improved `meta description` on contact page

### Pages Updated
| Page | robots | canonical | geo | viewport |
|------|--------|-----------|-----|---------|
| `/` (homepage) | ✅ pre-existing | ✅ pre-existing | ✅ pre-existing | ✅ |
| `/about/` | ✅ added | ✅ added | ✅ added | ✅ added |
| `/work/` | ✅ added | ✅ added | ✅ added | ✅ added |
| `/how-we-work/` | ✅ added | ✅ added | ✅ added | ✅ added |
| `/contact/` | ✅ added | ✅ added | ✅ added | ✅ added |
| `/digital/` | ✅ pre-existing | ✅ pre-existing | ✅ pre-existing | ✅ |
| `/ai/` | ✅ pre-existing | ✅ pre-existing | ✅ pre-existing | ✅ |
| `/immersive/` | ✅ pre-existing | ✅ pre-existing | ✅ pre-existing | ✅ |
| `/lab/` | ✅ pre-existing | ✅ pre-existing | ✅ added | ✅ |
| `/services/` | ✅ pre-existing | ✅ pre-existing | ✅ added | ✅ |

### Files Created
- `README.md` — project overview, structure, SEO requirements, analytics, dev notes
- `CHANGELOG.md` — this file

---

## Roadmap Checklist

- [x] Digital world SEO pass (7 pages)
- [x] Digital world SEO pass (7 pages)
- [x] Digital world cinematic hero + content (6 sub-pages)
- [x] AI world SEO pass (7 pages)
- [x] AI world cinematic hero + content (6 sub-pages)
- [x] Immersive world SEO pass (11 pages)
- [x] Immersive world cinematic hero upgrade (10 sub-pages)
- [x] analytics.js on all main + Digital + AI + Immersive pages
- [x] BreadcrumbList + Service schema across Digital, AI + Immersive service pages
- [x] FAQ schema on selected relevant service pages
- [x] Search Console sitemap submitted and verified
- [x] Old V1 URL cleanup / Search Console 404 review
- [x] Search Console redirects + canonical issues reviewed
- [x] Google discovery of V2 pages confirmed
- [x] README + CHANGELOG updated with completed SEO work
- [x] Lab sub-pages SEO pass (6 pages)
- [x] Add WebSite schema with SearchAction to homepage
- [x] Add HowTo schema to How We Work page
- [x] Add Person schema (Shazaib Qaiser) to About page
- [x] Audit image alt tags across all pages
- [x] Add width and height to all <img> tags
- [x] Full visual/image quality audit across all pages
- [ ] Replace weak, outdated or low-value visuals where needed
- [ ] Check image crops and presentation on mobile + desktop
- [ ] Full mobile UX pass
- [ ] Full desktop UX pass
- [ ] Review navigation/header behavior
- [ ] Review hero spacing, typography and readability
- [ ] Review cards, grids and page spacing
- [ ] Review buttons and CTAs
- [ ] Review forms and contact flow
- [ ] Full conversion/CTA pass
- [ ] Review service → contact journeys
- [ ] Review project → service → contact flow
- [ ] Review WhatsApp/contact CTAs
- [ ] Remove unnecessary conversion friction
- [ ] Verify GA4 events and conversions are firing correctly
- [ ] Verify contact/form tracking
- [ ] Verify CTA/WhatsApp interaction tracking
- [ ] Verify Hotjar / Contentsquare implementation
- [ ] Write first 3 blog articles (see SEO-PLAN-V2.md content strategy)
- [ ] Submit to Clutch.co and GoodFirms.co
- [ ] Create / optimize Google Business Profile
- [ ] Final technical QA across all pages
- [ ] Check internal links and broken links
- [ ] Check canonical URLs
- [ ] Check robots directives
- [ ] Check hreflang
- [ ] Validate structured data
- [ ] Check sitemap against actual V2 pages
- [ ] Check HTTPS / www / non-www normalization
- [ ] Final Google Search Console verification after natural crawling
- [ ] Review legitimate V2 pages remaining unindexed
- [ ] Recheck sitemap discovery
- [ ] Recheck indexing errors
- [ ] Recheck old V1 URL cleanup
