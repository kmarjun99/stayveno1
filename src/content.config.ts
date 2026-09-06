import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const destinations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/destinations' }),
  schema: z.object({
    country: z.string(),
    slug: z.enum(['uk', 'germany', 'ireland', 'canada']),
    flag: z.string(),
    currency: z.string(),
    currencyCode: z.string(),
    fromPricePerWeek: z.number(),
    order: z.number().default(99),
    heroImage: z.string(),
    heroImageAlt: z.string().optional(),
    heroImageCredit: z.string().optional(),
    summary: z.string(),
    intro: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    highlights: z.array(z.string()).default([]),
    arrivalNotes: z
      .array(z.object({ title: z.string(), body: z.string() }))
      .default([]),
    cities: z
      .array(
        z.object({
          name: z.string(),
          universities: z.array(z.string()).default([]),
          fromPricePerWeek: z.number().optional(),
          blurb: z.string().optional(),
        })
      )
      .default([]),
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

const roomTypes = [
  'Studio',
  'En-suite',
  'Shared apartment',
  'Private room',
  '1-bed apartment',
] as const;

const properties = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/properties' }),
  schema: z.object({
    name: z.string(),
    city: z.string(),
    countrySlug: z.enum(['uk', 'germany', 'ireland', 'canada']),
    country: z.string(),
    neighbourhood: z.string().optional(),
    address: z.string(),
    currency: z.string(),
    pricePerWeek: z.number(),
    billsIncluded: z.boolean().default(true),
    roomType: z.enum(roomTypes),
    bedrooms: z.number().default(1),
    bathrooms: z.number().default(1),
    maxOccupancy: z.number().default(1),
    sizeSqm: z.number().optional(),
    distanceToCampusMins: z.number(),
    distanceMode: z.enum(['walk', 'cycle', 'transit']).default('walk'),
    nearestUniversity: z.string(),
    otherUniversities: z.array(z.string()).default([]),
    availableFrom: z.string(),
    tenancyWeeksOptions: z.array(z.number()).default([44, 51]),
    images: z.array(z.string()).min(1),
    videoTourUrl: z.string(),
    virtualTourUrl: z.string().optional(),
    amenities: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    provider: z.string(),
    rating: z.number().optional(),
    reviewsCount: z.number().optional(),
    featured: z.boolean().default(false),
    verifiedOn: z.string(),
  }),
});

export const collections = { destinations, properties };
export { roomTypes };
