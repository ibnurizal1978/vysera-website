import { MetadataRoute } from 'next'

export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/public/', '/cdn-cgi/'],
    },
    sitemap: 'https://getvysera.com/sitemap.xml',
  }
}