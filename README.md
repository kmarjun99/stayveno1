# Stay Veno

Marketing + lead-generation site for **Stay Veno** — a student accommodation
booking service connecting international students with verified housing in the
UK, Germany, Ireland and Canada.

Built with **Astro 5** + **Tailwind CSS v4**. Static output, zero client
framework — only a few small vanilla scripts for the nav, filters, chat widget
and forms.

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to ./dist
npm run preview    # preview the production build
npm run check      # type-check .astro / .ts
```

## Project structure

```
src/
  config.ts            # site-wide settings — EDIT THIS FIRST (see below)
  content.config.ts    # content collection schemas
  content/
    destinations/*.md  # one file per country
    properties/*.md     # one file per listing
  data/                # FAQs, testimonials, team, process steps, reassurance copy
  components/           # UI building blocks
  layouts/BaseLayout.astro   # <head>, SEO, JSON-LD, header/footer/widgets
  lib/                 # formatting, content queries, schema.org helpers
  pages/               # routes
public/
  favicon.svg, robots.txt, images/  # static assets
```

## Before you launch — replace the placeholders

1. **`src/config.ts`** — WhatsApp number, email, phone, social links, stats.
2. **Forms** — set `formEndpoint` and `newsletterEndpoint` in `src/config.ts` to
   a form backend (Formspree, Basin, Web3Forms, etc.). While empty, forms run in
   "demo mode": they validate and redirect to `/thank-you` without sending.
3. **Imagery** — every image renders through `PlaceholderImage.astro`. If a real
   photo URL/path is given it renders that `<img>`, with an on-brand illustration
   kept as a hidden sibling that is revealed automatically if the photo fails to
   load (`onerror`). Any value starting with `/` or `http` is treated as a photo.
   - **Destinations** already use landmark photos from Unsplash's CDN
     (`heroImage` / `heroImageAlt` / `heroImageCredit` in
     `src/content/destinations/*.md`): Big Ben (UK), Brandenburg Gate (DE),
     Cobh / Co. Cork (IE), CN Tower / Toronto (CA). Swap the URLs, or download
     licensed copies into `public/images/destinations/` and point `heroImage`
     there. Unsplash doesn't legally require attribution; the small "Photo via
     Unsplash" credit on each country hero can be edited/removed via
     `heroImageCredit`.
   - **Homepage hero** uses a cover photo set in `src/config.ts`
     (`homeHeroImage` / `homeHeroImageAlt`) with the same illustration fallback.
   - **Properties** use curated interior photos from Unsplash's CDN, assigned
     deterministically per listing in `src/lib/roomPhotos.ts` (hero + bedroom +
     living + kitchen + bathroom for the detail gallery). To pin real photos to a
     listing, set its `images:` array in the markdown file — the first entry
     becomes the card + gallery hero and any real path/URL there overrides the
     curated set. Edit the pools in `roomPhotos.ts` to change the shared library.
   - The inline `onerror` handler is blocked by a strict `script-src` CSP; if you
     add one, allow it or replace the handler with a small script.
4. **Video tours** — `videoTourUrl` in each property file currently points at a
   sample clip. Swap for the real YouTube/Vimeo walkthrough URL.
5. **OG image** — `public/images/og-default.svg` should be replaced with a
   1200×630 PNG for best social-preview support.
6. **Legal** — `/privacy` and `/terms` contain template wording; have them
   reviewed.
7. **`astro.config.mjs`** — `site` is set to `https://stayveno.com`; update if the
   domain changes (drives canonicals + sitemap).

## Content

- **Add a property:** create `src/content/properties/<slug>.md` following an
  existing file. The filename becomes the URL (`/properties/<slug>`).
- **Add a destination city:** edit the relevant `src/content/destinations/*.md`
  `cities:` list.
- **FAQs** live in `src/data/faqs.ts` and feed both the `/faq` page (with
  `FAQPage` structured data) and the on-page teasers.

## SEO

- Per-page `<title>`, meta description, canonical, Open Graph + Twitter tags via
  `BaseLayout`.
- JSON-LD: `Organization` + `WebSite` (site-wide), plus `BreadcrumbList`,
  `FAQPage`, `HowTo`, `ItemList` and `Apartment`/`Offer` where relevant.
- `@astrojs/sitemap` generates `/sitemap-index.xml`; `public/robots.txt` points
  to it.

## Deploy

Any static host. The build output in `dist/` is plain HTML/CSS/JS.

- **Netlify / Vercel / Cloudflare Pages:** build command `npm run build`, publish
  directory `dist`.
