import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Single-page site: section anchors (#...) are ignored by search engines
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
