import { getCollection, type CollectionEntry } from 'astro:content';

export const NEWS_LIMIT = 10;
export type NewsEntry = CollectionEntry<'news'>;

/** Newest first, capped at `limit` (default 10). Single source of truth for list + article pages. */
export async function getLatestNews(limit: number = NEWS_LIMIT): Promise<NewsEntry[]> {
  const all = await getCollection('news');
  return all
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, limit);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
