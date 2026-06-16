# SEO & CONTENT PROTECTION — DEVELOPER INSTRUCTIONS

**Project:** An Idea Tech website
**Audience:** Developer building this site (Deepak / Pratheek / external dev)
**Purpose:** Protect SEO, NAP consistency, local search ranking, and content integrity during development and deployment.
**Last updated:** May 2026

---

## READ THIS BEFORE WRITING ANY CODE

This document is not optional. It is the SEO contract for the AIT website. Every rule in here exists because we have specifically tested or audited what works for SME software businesses in Mangaluru / Karnataka. Breaking these rules will directly cost us local search visibility, organic traffic, and lead flow.

Treat this document like you would treat a database schema — reference it before changing anything, and confirm with Aneesh before deviating.

---

## 0. CRITICAL — REFERENCE BUILD vs PRODUCTION BUILD

**The HTML file `ait-website-v3.html` is a single-file SPA reference build, not the production website.**

This file contains all 25 pages stitched together into one HTML document with JavaScript-driven page switching. It exists for content review and editorial sign-off — **not for deployment.**

### What this means for you (the developer):

1. **Each page in the reference build MUST become its own URL in production.** The reference file currently has 25 `<h1>` tags in one document because all 25 pages live in one file. In production, each page must be a distinct URL with exactly one `<h1>`.

2. **The page IDs in the reference file (e.g., `id="page-services"`) map directly to URL slugs in production.** Use the URL list in Section 5 of this document. Do not invent new URL structures.

3. **The single-file SPA navigation (using `data-page` attributes and JavaScript page switching) is for the mockup only.** The production build must use real, server-rendered or static-rendered pages — one HTML document per URL.

4. **Each production page must independently include:**
   - Its own unique `<title>`
   - Its own unique `<meta name="description">` (use the descriptions from Section 4)
   - Its own `<link rel="canonical">` pointing to itself
   - LocalBusiness schema (same on every page — see Section 3)
   - Service schema where applicable (Section 3.3)
   - BreadcrumbList schema for sub-pages (Section 3.4)
   - Open Graph + Twitter Card meta tags (per-page, not just sitewide)

5. **Treat the reference HTML as content + structure source-of-truth, not as a template to deploy as-is.** Copy content into your production framework (Statamic, WordPress, Astro, Next.js, whatever you use). Re-implement the navigation as proper inter-page links. Re-implement the booking deep-link (`data-scroll="book"`) as URL anchor (`/contact#book`).

6. **The build is intentionally mockup-style.** It uses utilitarian styling because the design layer is being applied separately by Akhilesh after content lock. Do not deploy the reference styling to production. Use Akhilesh's design system.

If any of this is unclear, ask Aneesh before proceeding. Deploying the reference file directly to production would be the single worst SEO outcome possible — and it would invalidate every other rule in this document.

---

## 1. THE NAP RULE — NAME, ADDRESS, PHONE

### 1.1. The exact NAP we use

These three fields **must** appear identically across every place they're shown — footer, contact page, schema markup, social profiles, GBP, anywhere.

**Name:** `An Idea Tech`
**Phone:** `+91 73490 49009` (display) / `+917349049009` (tel: link, no spaces)
**Email (primary):** `solutions@anideatech.com`

**Full address (use exactly this format):**

```
WrkWrk, Top Floor
Citadel Mindspace, 2A, Yeyyadi Rd
Kadri Hills, Yeyyadi
Mangaluru, Karnataka 575008
India
```

### 1.2. Email domain — important note for developer

The website uses `@anideatech.com` for **all four customer-facing email addresses**:

- `solutions@anideatech.com` — new project enquiries (will be sales-team managed soon)
- `support@anideatech.com` — existing clients & hosting (will be staff-managed in 3–5 months)
- `products@anideatech.com` — domains and hosting purchases
- `recruitments@anideatech.com` — careers and hiring

There is also an `@anideatech.in` domain (e.g., `aneeshpv@anideatech.in`) used internally by Aneesh for Zoho apps and personal correspondence. **Do not "fix" this apparent inconsistency.** The `.in` domain is intentional — it serves Zoho-tied internal infrastructure and is kept separate from public-facing customer emails. The `.com` domain is the canonical public domain.

**Rule:** Anywhere on the website, always use `@anideatech.com`. Never replace it with `@anideatech.in`. The `.in` domain should not appear on the public website at all.

### 1.3. NAP rules

- **Never** abbreviate "Mangaluru" to "Mlr" or "Mangalore" anywhere on the site. The official name is Mangaluru — it matches our GBP listing.
- **Never** drop "Top Floor" from the address. Google specifically expects this phrase to appear on the website to match GBP.
- **Never** drop "Yeyyadi" — this is the neighborhood signal Google uses for local relevance.
- **Always** wrap the phone number in `<a href="tel:+917349049009">` for mobile click-to-call.
- The phone display format includes spaces (`+91 73490 49009`); the tel: link does not.

### 1.4. Operating hours

```
Monday – Saturday: 10:00 AM – 7:00 PM IST
Sunday: Closed
```

These hours **must match GBP exactly**. If GBP changes, the website hours change the same day. If the website changes, GBP changes the same day. They are never allowed to diverge.

---

## 2. CONTENT THAT MUST STAY AS HTML TEXT (NEVER CONVERT TO IMAGES)

A common mistake: developers convert headlines, hero text, or stylized content into images for visual control. This destroys SEO. Search engines read text. They cannot read text inside images reliably.

### 2.1. Never convert these to images:

- **Any H1, H2, H3, H4, H5, H6 heading** — always render as HTML.
- **Hero headlines** on every page (homepage, services, about, contact, careers, etc.).
- **Page titles** (`<title>` tags).
- **Meta descriptions**.
- **Service prices** (₹15K, ₹2L, etc.).
- **Service descriptions** in tile grids on Services index.
- **NAP information** anywhere it appears.
- **Footer text** including the studio philosophy line.
- **Email addresses, phone numbers, addresses**.
- **Working hours**.
- **The Method essay body** — every paragraph must be HTML text.
- **Insights essay titles, summaries, and bodies**.
- **Schema markup** (JSON-LD must be in HTML `<head>`, never in an image).
- **Any link, button, or CTA text**.

### 2.2. Acceptable to use as images:

- Decorative graphics, illustrations, patterns, dividers.
- Photos of the team, office, work samples.
- Logos (with `alt` text always included).
- Icons (with `aria-label` or alt text).
- Charts, graphs, infographics — **but** the key data points/captions must also exist as HTML text below or beside the image.

### 2.3. If converting decorative text to image is unavoidable:

- Always include `alt=""` text describing exactly what the image says.
- Add the same text below the image in regular HTML (can be visually styled small or as caption).
- Never replace H1 / H2 / H3 with images even if a designer requests it.

---

## 3. SCHEMA MARKUP — DO NOT REMOVE OR ALTER

The HTML `<head>` contains structured data in JSON-LD format. This is non-negotiable for local SEO.

### 3.1. Schema currently included:

- **LocalBusiness schema** (full NAP, hours, services, area served, founder, contact points).
- **Organization schema** (legal name, GST/tax ID).

### 3.2. Schema rules:

- **Never delete** the `<script type="application/ld+json">` blocks in `<head>`.
- **Never edit** the schema fields without updating GBP simultaneously.
- **Always include** the LocalBusiness schema on **every page** of the site (not just homepage).
- When deploying with a CMS (WordPress, Statamic, etc.), inject schema via the theme's header file — **never** rely on a plugin alone, because plugins update or break.
- If you add a new service page, **add Service schema** to that page in the format shown below.

### 3.3. Service schema template for new service pages:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Service name, e.g. Website Design]",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://anideatech.com/#business"
  },
  "areaServed": [
    {"@type": "City", "name": "Mangaluru"},
    {"@type": "AdministrativeArea", "name": "Karnataka"},
    {"@type": "Country", "name": "India"}
  ],
  "description": "[1-2 sentence description matching the page's subhead]",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "[lowest price, e.g. 80000]",
    "highPrice": "[highest price, e.g. 200000]"
  }
}
```

### 3.4. BreadcrumbList schema (add to all sub-pages):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://anideatech.com/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://anideatech.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Website Design", "item": "https://anideatech.com/services/website-design"}
  ]
}
```

---

## 4. META DESCRIPTIONS — REQUIRED ON EVERY PAGE

Every page must have its own unique `<meta name="description">` tag. **Never** copy the same description across multiple pages.

### 4.1. Length and format

- Length: 150–160 characters.
- Include "Mangaluru" or "Karnataka" if natural.
- Include the page's primary keyword in the first 60 characters.
- Write in active voice, complete sentences, no keyword stuffing.

### 4.2. Page-by-page meta descriptions (use exactly these or developer-edited variants):

**Homepage:**
> An Idea Tech is a Mangaluru-based software company building websites, web applications, MVPs, and growth systems for SME founders across India and beyond.

**How We Work:**
> Four phases. Real deliverables. No vanishing acts. How AIT runs every project — from PRD to maintenance — for SME founders in Mangaluru and beyond.

**Services:**
> Five service tiers from branding to custom platforms. Real prices, real timelines, no upselling. AIT's full service range for Indian SMEs.

**Branding & Design Assets:**
> Logo, brand guidelines, marketing collateral. Designed by AIT's senior in-house designer in Mangaluru. ₹25K–₹1L. 4–8 weeks.

**Landing Pages:**
> A single landing page that turns visitors into WhatsApp leads. ₹30K–₹55K, 1–2 weeks. For founders validating ideas in Karnataka and beyond.

**GBP + Local SEO:**
> Google Business Profile setup, optimization, and local SEO for Mangaluru and Karnataka businesses. Audit ₹2,500. Monthly retainers from ₹6K.

**Website Design:**
> Custom websites with built-in lead capture, CRM integration, and analytics. ₹80K–₹2L. Tier 2 builds for Indian SMEs serious about growth.

**Growth Consulting:**
> For SMEs that have a working business but don't know what to optimize next. Strategy Sprint from ₹35K. Founder-led consulting at AIT Mangaluru.

**Web Applications:**
> Custom platforms for businesses outgrown by websites. Bookings, inventory, dashboards. ₹2.5L–₹12L. Web-first development by AIT Mangaluru.

**MVP Development:**
> Working MVPs in 4–8 weeks. The smallest version that proves the bet. ₹1.5L–₹6.5L. For founders shipping software for the first time.

**Mobile Apps:**
> Cross-platform mobile builds with React Native and Flutter. ₹3L–₹10L. For projects where a mobile-friendly website isn't enough.

**PRD as a Standalone Deliverable:**
> Pay AIT to think with you. Walk out with a written PRD. Build with us later, or build it elsewhere. ₹15K–₹75K. 1–3 weeks.

**Domains & Hosting:**
> Domain registration and managed hosting. Standalone or bundled with AIT projects. Run on dedicated infrastructure with 1-hour ticket response.

**Work:**
> Selected client engagements. 40+ projects since 2016. Long-term relationships built on real maintenance, not just delivery.

**About:**
> AIT is a Mangaluru-based software studio founded in 2016. Small main team. Long-term clients. Built in India, shipped to the world.

**The Method:**
> A long-form essay on how SME software should actually be built — and how AIT has come to work over nine years. 10–12 minutes to read.

**Insights:**
> Long-form essays on SME software, growth, and the studio life. New essays published regularly through 2026. By Aneesh P V and the AIT team.

**Careers:**
> A small studio in Mangaluru hiring slowly and carefully. Sales Lead role open from June 2026. Read what working at AIT actually feels like.

**Contact:**
> Tell us what you're trying to build. We'll tell you if we can help. Free 30-minute call. AIT Mangaluru, Karnataka.

**Privacy / Terms / 404:** Standard meta tags acceptable. No specific keywords needed.

---

## 5. URL STRUCTURE

### 5.1. URL conventions

- All URLs lowercase.
- Words separated by hyphens (`-`), never underscores.
- No trailing slashes.
- No file extensions (no `.html`, no `.php`).
- Use clean, semantic URLs that match the page topic.

### 5.2. Required URL structure

```
https://anideatech.com/
https://anideatech.com/how-we-work
https://anideatech.com/services
https://anideatech.com/services/branding
https://anideatech.com/services/domains-hosting
https://anideatech.com/services/landing-pages
https://anideatech.com/services/gbp-local-seo
https://anideatech.com/services/website-design
https://anideatech.com/services/growth-consulting
https://anideatech.com/services/web-applications
https://anideatech.com/services/mvp-development
https://anideatech.com/services/mobile-apps
https://anideatech.com/services/prd
https://anideatech.com/work
https://anideatech.com/work/suprabha-wellness
https://anideatech.com/work/core-technologies
https://anideatech.com/work/spc-sppuc-puttur
https://anideatech.com/about
https://anideatech.com/the-method
https://anideatech.com/insights
https://anideatech.com/insights/[essay-slug]
https://anideatech.com/careers
https://anideatech.com/contact
https://anideatech.com/privacy
https://anideatech.com/terms
```

### 5.3. URL rules

- **Never** change a URL once it's been live for more than 7 days. If you must change it, set up a **301 redirect** from the old URL to the new one.
- **Never** use query parameters for primary navigation (`?page=services` is wrong).
- Use canonical tags (`<link rel="canonical">`) on every page pointing to itself.

---

## 6. HEADINGS HIERARCHY

Each page has exactly **one H1**. The H1 is the page's primary headline and must include either the brand name, service name, or geographic signal.

### 6.1. H1 rules

- Only one `<h1>` per page.
- The H1 is the page's most important text for SEO.
- Service pages: H1 should describe the service. (Already handled in the v3 build.)
- Do not change H1s without consulting Aneesh.

### 6.2. H2 / H3 hierarchy

- H2s are major sections within a page.
- H3s are sub-sections within H2s.
- Never skip levels (don't go H1 → H3 directly).
- H2s and H3s should also include keyword phrases where natural.

---

## 7. IMAGE OPTIMIZATION

### 7.1. Image requirements

- **All images** must have descriptive `alt` attributes. No `alt=""` for content images. Only decorative images can have empty alt.
- **File naming:** lowercase, hyphens, descriptive. (Good: `mangaluru-software-studio-team.jpg`. Bad: `IMG_2451.jpg`.)
- **Format:** WebP for photos. SVG for logos and icons. PNG only when transparency is needed. **Never** use JPG for logos.
- **Compression:** every image must be compressed before upload. Aim for <200KB for hero images, <100KB for content images, <50KB for thumbnails.
- **Lazy loading:** add `loading="lazy"` to all images below the fold.

### 7.2. Required alt text examples

- AIT logo: `alt="An Idea Tech logo — Software Company in Mangaluru"`
- Aneesh's photo: `alt="Aneesh P V, Founder and CEO of An Idea Tech"`
- Office photo: `alt="AIT office at WrkWrk, Citadel Mindspace, Kadri Hills, Mangaluru"`
- Work sample (Suprabha): `alt="Suprabha Wellness website built by An Idea Tech — Mangaluru wellness practice"`

### 7.3. Required brand assets — must be created and deployed before launch

The reference HTML references several brand assets that don't yet exist as final files. Developer must coordinate with Akhilesh (designer) to produce these:

**Favicon set:**
- `/favicon.ico` (legacy ICO, 16x16 + 32x32 multi-resolution)
- `/favicon-16x16.png`
- `/favicon-32x32.png`
- `/apple-touch-icon.png` (180x180, for iOS home-screen pinning)
- `/android-chrome-192x192.png`
- `/android-chrome-512x512.png`
- `/site.webmanifest` (PWA manifest file)

**Open Graph image:**
- `/assets/og-image.jpg` — 1200x630px, used for social sharing previews on LinkedIn, X/Twitter, WhatsApp, Facebook, etc.
- Should clearly show: "An Idea Tech" wordmark + tagline "A Mangaluru studio that says no a lot."
- Must not contain critical text near edges (some platforms crop)
- File size: under 300KB
- Must use the AIT brand colors (deep navy / cream / muted rust accent)

**Logo files:**
- `/assets/logo.png` — primary logo, full color, transparent background, at least 800px wide
- `/assets/logo.svg` — vector version for crisp display at all sizes
- `/assets/logo-white.svg` — for dark-background usage (footer, etc.)
- `/assets/logo-mark.svg` — symbol-only version for mobile and small contexts

**Theme color:**
- The HTML head includes `<meta name="theme-color" content="#1a2332">` — this matches AIT's deep navy. Confirm with Akhilesh's final design system before launch.

### 7.4. Canonical URL — must be set per page

Every page must include its own canonical link tag in `<head>`:

```html
<link rel="canonical" href="https://anideatech.com/[page-path]">
```

Examples:
- Homepage: `<link rel="canonical" href="https://anideatech.com/">`
- About: `<link rel="canonical" href="https://anideatech.com/about">`
- Website Design service: `<link rel="canonical" href="https://anideatech.com/services/website-design">`

The reference build only includes the homepage canonical (because it's a single-file SPA). The developer must add page-specific canonicals during production deployment.

### 7.5. Per-page Open Graph and Twitter Card meta

Each page must have its own `og:title`, `og:description`, `og:url`, `og:image`, and corresponding Twitter Card meta. The reference build only includes the homepage versions. Use the page-specific meta descriptions from Section 4 of this document as the basis for each page's `og:description`. The `og:title` should match the page's `<title>` tag.

For service pages and individual Insights essays, you may use service-specific or essay-specific OG images if Akhilesh provides them. Otherwise, the default sitewide `og-image.jpg` is acceptable for all pages.

---

## 8. WHAT NOT TO DO — CRITICAL DON'TS

These are mistakes I've seen developers make repeatedly. Avoid them all.

### 8.1. Content don'ts

- **DON'T** rewrite or paraphrase headlines, hero text, or section copy "to sound better." If you think something should change, ask Aneesh first. Every word on the locked content has been chosen deliberately.
- **DON'T** add emojis to hero text, page titles, or service descriptions. We don't use emojis. Period.
- **DON'T** add stock photos of "happy diverse teams" or "cheering professionals." We use real photos of the AIT team and office.
- **DON'T** add testimonials, reviews, or quotes that haven't been cleared with the client. Fake or hypothetical testimonials are a one-strike rule.
- **DON'T** insert the phrase "Powered by AI" anywhere on the site. We don't market AI features we don't have.

### 8.2. SEO don'ts

- **DON'T** keyword-stuff. Repeating "Mangaluru software company" 30 times will get us penalized.
- **DON'T** use meta keyword tags to game rankings. They don't work and can flag spam.
- **DON'T** hide text by making it the same color as the background. Cloaking gets sites de-indexed.
- **DON'T** buy backlinks or use link farms. Use earned, organic backlinks only.
- **DON'T** copy meta descriptions across pages. Each page must have its own.
- **DON'T** redirect from `https://www.anideatech.com` to `https://anideatech.com` (or vice versa) without setting up a proper 301 redirect with the canonical version specified.

### 8.3. Technical don'ts

- **DON'T** use deprecated HTML tags (`<center>`, `<font>`, `<marquee>`).
- **DON'T** use inline styles when a class would work.
- **DON'T** load fonts from unreliable CDNs. Stick with Google Fonts or self-hosted.
- **DON'T** load JavaScript synchronously in the head. Use `defer` or `async`.
- **DON'T** disable browser caching for the entire site. Cache static assets aggressively.
- **DON'T** ship without a sitemap.xml. Generate it automatically and submit to Google Search Console.

### 8.4. Performance don'ts

- **DON'T** load 4MB hero images. Compress to under 200KB.
- **DON'T** load 50 third-party scripts. Use minimal: GA4, Search Console verification, possibly one heatmap tool.
- **DON'T** use Bootstrap or Tailwind via CDN — bundle locally.
- **DON'T** ship without `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

---

## 9. POST-LAUNCH CHECKLIST

Before going live, verify:

- [ ] Sitemap.xml generated and accessible at `/sitemap.xml`
- [ ] Robots.txt deployed at `/robots.txt` (use the version provided)
- [ ] All meta descriptions present and unique on every page
- [ ] LocalBusiness schema validates at https://validator.schema.org
- [ ] Mobile-friendly test passes at https://search.google.com/test/mobile-friendly
- [ ] Page speed test scores ≥85 on mobile and ≥90 on desktop (PageSpeed Insights)
- [ ] All images have alt text
- [ ] All H1s are present and unique
- [ ] tel: links work on mobile
- [ ] mailto: links open the user's email client
- [ ] All forms submit correctly (especially the Contact form and Insights subscribe)
- [ ] 404 page renders correctly when an invalid URL is hit
- [ ] HTTPS is enforced — `http://` redirects to `https://`
- [ ] Both `www.` and non-`www.` resolve to the same canonical URL
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools verified
- [ ] GA4 (or alternative analytics) installed and working
- [ ] GBP listing reviewed for hours, address, phone matching the website exactly

---

## 10. CONTENT FREEZE POLICY

The content currently locked in the v3 HTML reference build is the result of significant work between Aneesh and the writing team. **Do not modify it without explicit approval.**

### 10.1. What you can change without asking:

- Visual styling (CSS, colors, spacing, animation, layout)
- Image placements
- Component organization (HTML structure, as long as semantics stay)
- Adding interactive features (animations, hover states, micro-interactions)
- Performance optimizations
- Bug fixes

### 10.2. What requires Aneesh's approval before changing:

- **Any** copy on the homepage hero
- **Any** service page price, timeline, or scope description
- **Any** stance, position, or value statement
- The Method essay body
- Insights essay titles or descriptions
- The Filter section ("Who we work with / Who we don't")
- The Decision Tree questions and verdicts
- The Careers page culture and role descriptions
- Privacy policy, Terms of service body
- NAP details (Name, Address, Phone, hours, emails)

### 10.3. How to suggest changes:

If you spot something that should change, send Aneesh:
1. The current text
2. Your proposed text
3. Why you think the change is needed

Don't unilaterally edit and push. The writing has been audited multiple times, and breaking word choices we've deliberately made will degrade the site's voice and conversion.

---

## 11. ONGOING SEO MAINTENANCE
\
After launch, the site needs ongoing SEO care. This is part of AMC, but for reference:

- **Monthly:** Check Google Search Console for crawl errors, indexing issues, manual actions.
- **Monthly:** Check page speed scores haven't degraded.
- **Quarterly:** Review and update meta descriptions if pages have evolved.
- **Quarterly:** Add new schema as new services or pages launch.
- **Quarterly:** Check NAP consistency across all listings (GBP, social media, directories).
- **As needed:** Update LocalBusiness schema if hours, address, or services change.
- **As needed:** Add Service schema for any new service pages.

---

## 12. ESCALATION

If anything in this document is unclear, conflicting, or seems wrong for the technical implementation:

**Email:** solutions@anideatech.com (Aneesh)
**WhatsApp:** Direct project group
**Don't:** Make assumptions and push to production.

---

**Final note:** Most agencies will tell you SEO is mysterious. It isn't. SEO is the discipline of making your site honest about what you do, where you do it, and who you serve — in a format search engines can read. Every rule in this document supports that single principle.

Build it well. We'll be here, looking at the same dashboard you are.

— AIT
