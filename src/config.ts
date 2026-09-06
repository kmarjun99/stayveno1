/**
 * Global site configuration.
 * Swap these placeholders for real values before launch.
 */
export const site = {
  name: 'Stay Veno',
  legalName: 'Stay Veno Ltd',
  domain: 'stayveno.com',
  url: 'https://stayveno.com',
  description:
    'Stay Veno finds international students verified accommodation near their university, with a video walkthrough or virtual tour before you book. Free for students.',
  tagline: "Don't arrive with nowhere to live. And never book blind.",

  // Contact + chat
  whatsapp: {
    // digits only, international format, no "+" or spaces
    number: '447700900123',
    display: '+44 7700 900123',
  },
  email: 'hello@stayveno.com',
  phone: '+44 20 4525 1180',
  phoneHref: 'tel:+442045251180',
  supportHours: '24/7 — a real person, whatever your timezone',
  responseTime: 'within 2 hours',

  // Lead + newsletter form endpoint (e.g. Formspree, Basin, Web3Forms).
  // Leave empty to run in demo mode (forms show success without sending).
  formEndpoint: '',
  newsletterEndpoint: '',

  social: {
    instagram: 'https://instagram.com/stayveno',
    tiktok: 'https://tiktok.com/@stayveno',
    linkedin: 'https://www.linkedin.com/company/stayveno',
    facebook: 'https://facebook.com/stayveno',
    youtube: 'https://youtube.com/@stayveno',
  },

  // Social share / OG fallback image (replace with a 1200x630 PNG).
  ogImage: '/images/og-default.svg',

  // Homepage hero cover photo (Unsplash CDN — swap for your own; drop a file in
  // public/images/ and point here). Falls back to an illustration if it fails.
  homeHeroImage:
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=75',
  homeHeroImageAlt:
    'A bright, modern apartment living room with big windows and a city view',

  stats: {
    studentsHelped: '12,000+',
    cities: '15+',
    partnerProperties: '480+',
    averageRating: '4.8',
  },
} as const;

export type CountrySlug = 'uk' | 'germany' | 'ireland' | 'canada';

export const NAV_LINKS = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Properties', href: '/properties' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
] as const;

export const BUDGET_BANDS = [
  'Under £150 / €130 / C$180 per week',
  '£150–250 / €130–220 / C$180–320 per week',
  '£250–350 / €220–320 / C$320–450 per week',
  '£350–500 / €320–450 / C$450–650 per week',
  'Over £500 / €450 / C$650 per week',
  'Not sure yet — help me work it out',
] as const;
