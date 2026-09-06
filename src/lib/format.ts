/** Formatting helpers for prices, dates and distances. */

export function pricePerWeek(amount: number, currency: string): string {
  return `${currency}${amount.toLocaleString('en-GB')}`;
}

export function monthYear(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

export function shortDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function distanceLabel(mins: number, mode: 'walk' | 'cycle' | 'transit'): string {
  const verb =
    mode === 'walk' ? 'walk' : mode === 'cycle' ? 'cycle' : 'by transit';
  return `${mins} min ${verb} to campus`;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Convert a YouTube / Vimeo URL to an embeddable URL. */
export function toEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube.com') && u.searchParams.get('v')) {
      return `https://www.youtube-nocookie.com/embed/${u.searchParams.get('v')}`;
    }
    if (u.hostname === 'youtu.be') {
      return `https://www.youtube-nocookie.com/embed${u.pathname}`;
    }
    if (u.hostname.includes('youtube.com') && u.pathname.startsWith('/embed/')) {
      return url.replace('youtube.com', 'youtube-nocookie.com');
    }
    if (u.hostname.includes('vimeo.com') && !u.pathname.startsWith('/video/')) {
      return `https://player.vimeo.com/video${u.pathname}`;
    }
    return url;
  } catch {
    return url;
  }
}
