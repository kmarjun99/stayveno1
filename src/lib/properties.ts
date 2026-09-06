import { getCollection, type CollectionEntry } from 'astro:content';

export type Property = CollectionEntry<'properties'>;
export type Destination = CollectionEntry<'destinations'>;

export async function getProperties(): Promise<Property[]> {
  const all = await getCollection('properties');
  return all.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return a.data.pricePerWeek - b.data.pricePerWeek;
  });
}

export async function getFeaturedProperties(limit = 6): Promise<Property[]> {
  const all = await getProperties();
  const featured = all.filter((p) => p.data.featured);
  return (featured.length >= limit ? featured : all).slice(0, limit);
}

export async function getPropertiesByCountry(
  countrySlug: string
): Promise<Property[]> {
  const all = await getProperties();
  return all.filter((p) => p.data.countrySlug === countrySlug);
}

export async function getRelatedProperties(
  property: Property,
  limit = 3
): Promise<Property[]> {
  const all = await getProperties();
  const sameCity = all.filter(
    (p) => p.id !== property.id && p.data.city === property.data.city
  );
  const sameCountry = all.filter(
    (p) =>
      p.id !== property.id &&
      p.data.countrySlug === property.data.countrySlug &&
      p.data.city !== property.data.city
  );
  return [...sameCity, ...sameCountry].slice(0, limit);
}

export async function getDestinations(): Promise<Destination[]> {
  const all = await getCollection('destinations');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getCityOptions(): Promise<
  { city: string; country: string; countrySlug: string }[]
> {
  const all = await getProperties();
  const seen = new Map<string, { city: string; country: string; countrySlug: string }>();
  for (const p of all) {
    if (!seen.has(p.data.city)) {
      seen.set(p.data.city, {
        city: p.data.city,
        country: p.data.country,
        countrySlug: p.data.countrySlug,
      });
    }
  }
  return [...seen.values()].sort((a, b) => a.city.localeCompare(b.city));
}

export async function getUniversityOptions(): Promise<string[]> {
  const all = await getProperties();
  const set = new Set<string>();
  for (const p of all) {
    set.add(p.data.nearestUniversity);
    p.data.otherUniversities.forEach((u) => set.add(u));
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

export async function getRoomTypeOptions(): Promise<string[]> {
  const all = await getProperties();
  const set = new Set<string>();
  for (const p of all) set.add(p.data.roomType);
  return [...set];
}

export async function getPriceBounds(): Promise<{ min: number; max: number }> {
  const all = await getProperties();
  const prices = all.map((p) => p.data.pricePerWeek);
  return {
    min: Math.floor(Math.min(...prices) / 10) * 10,
    max: Math.ceil(Math.max(...prices) / 10) * 10,
  };
}
