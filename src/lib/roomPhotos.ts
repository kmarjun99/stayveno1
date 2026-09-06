/**
 * Curated room / interior photos (Unsplash CDN) used for property listings when
 * a listing doesn't carry its own `images:` URLs. Deterministic per property, so
 * a listing's card photo matches its detail-page gallery.
 *
 * To use your own photos for a listing, set `images:` in its markdown file to
 * real paths or URLs (first entry = card + gallery hero). Anything starting with
 * `/` or `http` is treated as a real image and wins over these.
 */
import { getCollection } from 'astro:content';

const P = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`;

const BEDROOMS = [
  '1522771739844-6a9f6d5f14af',
  '1540518614846-7eded433c457',
  '1595526114035-0d45ed16cfbf',
  '1616594039964-ae9021a400a0',
  '1598928636135-d146006ff4be',
  '1505693416388-ac5ce068fe85',
  '1616627561839-074385245ff6',
  '1618773928121-c32242e63f39',
  '1611967164521-abae8fba4668',
];

const STUDIOS = [
  '1522708323590-d24dbb6b0267',
  '1493809842364-78817add7ffb',
  '1502005229762-cf1b2da7c5d6',
  '1600607687939-ce8a6c25118c',
  '1524758631624-e2822e304c36',
  '1522444195799-478538b28823',
  '1567016432779-094069958ea5',
  '1585412727339-54e4bae3bbf9',
  '1560448204-e02f11c3d0e2',
  '1600210492486-724fe5c67fb0',
];

const COMMON = [
  '1502672260266-1c1ef2d93688',
  '1554995207-c18c203602cb',
  '1567767292278-a4f21aa2d36e',
  '1583847268964-b28dc8f51f92',
  '1616486338812-3dadae4b4ace',
  '1615529182904-14819c35db37',
  '1594026112284-02bb6f3352fe',
  '1533779283484-8ad4940aa3a8',
  '1544457070-4cd773b4d71e',
  '1560185007-cde436f6a4d0',
  '1617806118233-18e1de247200',
  '1631679706909-1844bbd07221',
];

const KITCHENS = [
  '1556909212-d5b604d0c90d',
  '1484154218962-a197022b5858',
  '1600489000022-c2086d79f9d4',
  '1556911220-bff31c812dba',
  '1565183997392-2f6f122e5912',
];

const BATHROOMS = [
  '1584622650111-993a426fbf0a',
  '1620626011761-996317b8d101',
  '1600566752355-35792bedcfea',
  '1552321554-5fefe8c9ef14',
  '1560448075-bb485b067938',
];

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const at = (pool: string[], n: number) =>
  pool[((n % pool.length) + pool.length) % pool.length];

const heroPoolFor = (roomType: string) =>
  roomType === 'Studio' || roomType === '1-bed apartment'
    ? STUDIOS
    : roomType === 'Shared apartment'
      ? COMMON
      : BEDROOMS;

// Assign each listing a hero photo by walking the catalogue in display order and
// round-robining through the relevant pool. Consecutive listings that draw from
// the same pool therefore never get the same hero — no side-by-side duplicates
// on the listings grid — while a listing's hero stays stable across pages.
const HERO = new Map<string, string>();
{
  const ordered = (await getCollection('properties')).sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return a.data.pricePerWeek - b.data.pricePerWeek;
  });
  const cursor = new Map<string[], number>();
  for (const e of ordered) {
    const pool = heroPoolFor(e.data.roomType);
    const n = cursor.get(pool) ?? 0;
    HERO.set(e.id, pool[n % pool.length]);
    cursor.set(pool, n + 1);
  }
}

/** 5 interior photos for a listing: hero, a second room, a common area, kitchen, bathroom. */
export function roomPhotosFor(
  seed: string,
  roomType: string,
  count = 5
): string[] {
  const h = hash(seed);
  const hero = HERO.get(seed) ?? heroPoolFor(roomType)[h % heroPoolFor(roomType).length];
  const altPool = heroPoolFor(roomType) === BEDROOMS ? STUDIOS : BEDROOMS;
  const urls = [
    hero,
    at(altPool, h >> 3),
    at(COMMON, h >> 6),
    at(KITCHENS, h >> 9),
    at(BATHROOMS, h >> 12),
  ].map(P);
  return urls.slice(0, count);
}

const isReal = (s: string) => s.startsWith('/') || s.startsWith('http');

/** Real images from frontmatter if provided, otherwise a curated deterministic set. */
export function resolvePropertyImages(entry: {
  id: string;
  data: { images: string[]; roomType: string };
}): string[] {
  const real = (entry.data.images ?? []).filter(isReal);
  if (real.length) return real;
  return roomPhotosFor(entry.id, entry.data.roomType);
}
