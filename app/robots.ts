import { MetadataRoute } from 'next'

// Tambahkan baris ini
export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/public/',
        },
        sitemap: 'https://getvysera.com/sitemap.xml',
    }
}