import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

/**
 * SEO Component
 * Manages dynamic meta tags and structured data for each page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - SEO keywords
 * @param {string} props.path - Current page path
 * @param {Object} props.structuredData - JSON-LD structured data
 */
function SEO({ 
  title, 
  description, 
  keywords, 
  path = '/',
  structuredData = null 
}) {
  const { i18n } = useTranslation();
  const baseUrl = 'https://jmalufconsultoria.com.br';
  const fullUrl = `${baseUrl}${path}`;
  const currentLang = i18n.language;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:locale', content: currentLang.replace('-', '_') },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;

    // Add structured data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, fullUrl, currentLang, structuredData]);

  return null;
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  path: PropTypes.string,
  structuredData: PropTypes.object,
};

export default SEO;
