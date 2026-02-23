import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  type?: 'website' | 'article' | 'product' | 'service';
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage,
  keywords = 'kitchen remodeling, bathroom remodeling, Cherry Hill NJ, kitchen cabinets, custom flooring, home renovation, countertops',
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateOrCreateNameMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    const updateOrCreatePropertyMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateNameMeta('description', description);
    updateOrCreateNameMeta('keywords', keywords);
    updateOrCreateNameMeta('author', 'Kitch Design Studio');
    updateOrCreateNameMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateOrCreateNameMeta('googlebot', 'index, follow');
    updateOrCreateNameMeta('bingbot', 'index, follow');

    updateOrCreatePropertyMeta('og:site_name', 'Kitch Designs');
    updateOrCreatePropertyMeta('og:locale', 'en_US');
    updateOrCreatePropertyMeta('og:title', title);
    updateOrCreatePropertyMeta('og:description', description);
    updateOrCreatePropertyMeta('og:type', type);
    updateOrCreatePropertyMeta('og:url', canonicalUrl || window.location.href);

    if (ogImage) {
      updateOrCreatePropertyMeta('og:image', ogImage);
      updateOrCreatePropertyMeta('og:image:width', '1200');
      updateOrCreatePropertyMeta('og:image:height', '630');
      updateOrCreatePropertyMeta('og:image:alt', title);
    }

    updateOrCreateNameMeta('twitter:card', 'summary_large_image');
    updateOrCreateNameMeta('twitter:title', title);
    updateOrCreateNameMeta('twitter:description', description);
    updateOrCreateNameMeta('twitter:site', '@kitchdesigns');
    if (ogImage) {
      updateOrCreateNameMeta('twitter:image', ogImage);
      updateOrCreateNameMeta('twitter:image:alt', title);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = canonicalUrl || window.location.href;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl || window.location.href;
      document.head.appendChild(canonical);
    }
  }, [title, description, canonicalUrl, ogImage, keywords, type]);

  return null;
}
