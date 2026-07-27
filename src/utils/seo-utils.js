/**
 * seo-utils.js
 * =============
 * Centralized SEO utilities for Gauswarn India
 * 
 * Provides slug generation, product URL helpers, and schema builders
 * used across the frontend and build scripts.
 */

const SITE_URL = "https://gauswarn.com";

/**
 * Product slug mapping.
 * Maps database product_id → SEO-friendly slug.
 * This is the SINGLE SOURCE OF TRUTH for product URLs across the entire app.
 * 
 * IMPORTANT: When new products are added, add their slug here.
 * The slug must be lowercase, hyphenated, and include the weight for uniqueness.
 */
const PRODUCT_SLUG_MAP = {
  1: "a2-bilona-ghee-500ml",
  2: "a2-bilona-ghee-1000ml",
  3: "a2-bilona-ghee-5kg",
  4: "a2-bilona-ghee-15kg",
  5: "a2-bilona-ghee-250ml",
};

/**
 * Generate a URL-safe slug from product weight string.
 * Fallback when product_id is not in PRODUCT_SLUG_MAP.
 * 
 * @param {string} weight - e.g. "500 ml", "15 Kg", "1 Litre"
 * @returns {string} - e.g. "a2-bilona-ghee-500ml"
 */
function generateSlugFromWeight(weight) {
  if (!weight) return "a2-bilona-ghee";

  const normalized = weight
    .toLowerCase()
    .replace(/\s+/g, "")          // remove spaces: "500 ml" → "500ml"
    .replace(/litre|liter|l$/i, "ml") // normalize litre → ml
    .replace(/[^a-z0-9]/g, "");   // remove special chars

  // Convert litre values to ml
  let slug = normalized;
  if (weight.toLowerCase().includes("litre") || weight.toLowerCase().includes("liter")) {
    const numVal = parseFloat(weight);
    if (!isNaN(numVal)) {
      slug = `${numVal * 1000}ml`;
    }
  }

  return `a2-bilona-ghee-${slug}`;
}

/**
 * Get the slug for a product.
 * Uses the hardcoded map first, falls back to weight-based generation.
 * 
 * @param {Object} product - Product object with product_id and product_weight
 * @returns {string} SEO-friendly slug
 */
function getProductSlug(product) {
  if (!product) return "a2-bilona-ghee";

  const id = parseInt(product.product_id, 10);
  if (PRODUCT_SLUG_MAP[id]) {
    return PRODUCT_SLUG_MAP[id];
  }

  return generateSlugFromWeight(product.product_weight);
}

/**
 * Get the full canonical URL for a product.
 * 
 * @param {Object} product - Product object
 * @returns {string} Full canonical URL e.g. "https://gauswarn.com/products/a2-bilona-ghee-500ml"
 */
function getProductCanonicalUrl(product) {
  return `${SITE_URL}/products/${getProductSlug(product)}/`;
}

/**
 * Find a product by its slug from a list of products.
 * 
 * @param {Array} products - Array of product objects
 * @param {string} slug - The URL slug to match
 * @returns {Object|null} Matching product or null
 */
function findProductBySlug(products, slug) {
  if (!slug || !products || products.length === 0) return null;

  // First try exact match from slug map
  for (const [id, mappedSlug] of Object.entries(PRODUCT_SLUG_MAP)) {
    if (mappedSlug === slug) {
      const product = products.find((p) => String(p.product_id) === String(id));
      if (product) return product;
    }
  }

  // Fallback: try matching by generated slug from weight
  return products.find((p) => getProductSlug(p) === slug) || null;
}

/**
 * Find a product index by slug from a list of products.
 * 
 * @param {Array} products - Array of product objects
 * @param {string} slug - The URL slug to match
 * @returns {number} Index of matching product or -1
 */
function findProductIndexBySlug(products, slug) {
  if (!slug || !products || products.length === 0) return -1;

  // First try exact match from slug map
  for (const [id, mappedSlug] of Object.entries(PRODUCT_SLUG_MAP)) {
    if (mappedSlug === slug) {
      const idx = products.findIndex((p) => String(p.product_id) === String(id));
      if (idx !== -1) return idx;
    }
  }

  // Fallback: try matching by generated slug from weight
  return products.findIndex((p) => getProductSlug(p) === slug);
}

/**
 * Build JSON-LD Product schema for a specific product variant.
 * Compliant with Google Merchant Center requirements.
 * 
 * @param {Object} product - Product object from API
 * @param {number} averageRating - Average review rating
 * @param {number} totalReviews - Total review count
 * @param {Array} reviews - Array of review objects {name, feedback, rating, date}
 * @returns {Object} JSON-LD schema object
 */
function buildProductSchema(product, averageRating = 4.8, totalReviews = 269, reviews = []) {
  if (!product) return null;

  const slug = getProductSlug(product);
  const canonicalUrl = `${SITE_URL}/products/${slug}/`;
  const currentPrice = parseFloat(product.product_price) || 0;
  const originalPrice = parseFloat(product.product_del_price) || 0;
  
  const images = (() => {
    try {
      const parsed = JSON.parse(product.product_images || "[]");
      return parsed.map((img) => (typeof img === "string" ? img : img?.url || img?.src || ""));
    } catch {
      return [];
    }
  })();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${slug}/#product`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/products/${slug}/`
    },
    name: `Pure A2 Bilona Ghee - ${product.product_weight}`,
    description: `${product.product_weight} of 100% pure A2 Gir Cow Ghee made using traditional Vedic Bilona method. Lab-tested, chemical-free, from grass-fed indigenous cows. Rich in Omega-3, CLA, and Vitamins A, D, E, K.`,
    image: images.length > 0 ? images : [`${SITE_URL}/favicon-512x512.png`],
    brand: {
      "@type": "Brand",
      name: "Gauswarn",
      logo: `${SITE_URL}/favicon-512x512.png`
    },
    sku: product.sku || `GAUSWARN-A2-GHEE-${slug.toUpperCase()}`,
    mpn: product.mpn || `GAUSWARN-${slug.toUpperCase()}`,
    category: "Food > Dairy > Ghee",
    material: "Pure A2 Gir Cow Milk",
    keywords: "A2 Cow Ghee, Bilona Ghee, Gir Cow Ghee, Desi Ghee, Vedic Bilona, Gauswarn",
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: String(currentPrice),
      priceValidUntil: "2027-12-31",
      availability: product.stock_status === "out_of_stock" 
        ? "https://schema.org/OutOfStock" 
        : "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Gauswarn India",
        url: SITE_URL
      },
      hasMerchantReturnPolicy: {
        "@id": `${SITE_URL}/#merchant-return-policy`,
      },
      shippingDetails: {
        "@id": `${SITE_URL}/#shipping-details`
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(averageRating || 4.8),
      reviewCount: String(totalReviews || 269),
      bestRating: "5",
      worstRating: "1",
    },
    // Nutrition Information
    nutrition: {
      "@type": "NutritionInformation",
      servingSize: "10g",
      calories: "89.8 Kcal",
      fatContent: "9.98 g",
      saturatedFatContent: "6.21 g",
      cholesterolContent: "22.7 mg",
      proteinContent: "0 g",
      carbohydrateContent: "0 g",
      sodiumContent: "0 mg"
    }
  };

  // Add Sale Price Specification if discount exists
  if (originalPrice > currentPrice) {
    schema.offers.priceSpecification = [
      {
        "@type": "PriceSpecification",
        "price": String(originalPrice),
        "priceCurrency": "INR",
        "valueAddedTaxIncluded": true,
        "priceType": "https://schema.org/ListPrice"
      },
      {
        "@type": "PriceSpecification",
        "price": String(currentPrice),
        "priceCurrency": "INR",
        "valueAddedTaxIncluded": true,
        "priceType": "https://schema.org/SalePrice"
      }
    ];
  }

  // Add individual reviews if provided
  if (reviews && reviews.length > 0) {
    schema.review = reviews.slice(0, 5).map(r => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.name || "Happy Customer"
      },
      "datePublished": r.date || new Date().toISOString().split('T')[0],
      "reviewBody": r.feedback || r.comment || "Excellent quality pure A2 ghee.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(r.rating || 5),
        "bestRating": "5",
        "worstRating": "1"
      }
    }));
  }

  return schema;
}

/**
 * Build JSON-LD FAQ schema.
 * 
 * @param {Array} faqData - Array of {question, answer}
 * @returns {Object} JSON-LD FAQPage schema
 */
function buildFAQSchema(faqData) {
  if (!faqData || faqData.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : "Gauswarn A2 Ghee is a premium, lab-tested product made using traditional methods."
      }
    }))
  };
}

/**
 * Build breadcrumb schema for a product page.
 * 
 * @param {Object} product - Product object
 * @returns {Object} JSON-LD BreadcrumbList schema
 */
function buildProductBreadcrumbSchema(product) {
  const slug = getProductSlug(product);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/products/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `A2 Bilona Ghee - ${product?.product_weight || ""}`,
        item: `${SITE_URL}/products/${slug}/`,
      },
    ],
  };
}

/**
 * Build WebSite and Organization Schema
 */
function buildGlobalSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Gauswarn India",
      "url": SITE_URL,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_URL}/products?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Gauswarn India",
      "url": SITE_URL,
      "logo": `${SITE_URL}/favicon-512x512.png`,
      "sameAs": [
        "https://www.facebook.com/gauswarn",
        "https://www.instagram.com/gauswarn",
        "https://www.youtube.com/@gauswarn",
        "https://twitter.com/gauswarn"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-74709-15905",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      "name": "Gauswarn India",
      "image": [
        `${SITE_URL}/favicon-512x512.png`
      ],
      "priceRange": "₹449 - ₹17999",
      "telephone": "+91-74709-15905",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11 Manish Baag, Sapna Sangeeta Road",
        "addressLocality": "Indore",
        "addressRegion": "MP",
        "postalCode": "452001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.7001,
        "longitude": 75.8681
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MerchantReturnPolicy",
      "@id": `${SITE_URL}/#merchant-return-policy`,
      "applicableCountry": "IN",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 7,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn",
      "merchantReturnLink": `${SITE_URL}/refund/`
    },
    {
      "@context": "https://schema.org",
      "@type": "OfferShippingDetails",
      "@id": `${SITE_URL}/#shipping-details`,
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 5,
          "unitCode": "DAY"
        }
      }
    }
  ];
}

/**
 * Build JSON-LD Article/BlogPosting schema.
 * 
 * @param {Object} post - Blog post object
 * @returns {Object} JSON-LD Article schema
 */
function buildArticleSchema(post) {
  if (!post) return null;

  const url = `${SITE_URL}/blog/${post.slug || post.id}/`;
  const image = post.image || post.image_url || `${SITE_URL}/favicon-512x512.png`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": post.title,
    "description": post.meta_description || post.excerpt || post.description || `Read about ${post.title} on Gauswarn India.`,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": "Gauswarn India",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gauswarn India",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon-512x512.png`
      }
    },
    "datePublished": post.created_at || new Date().toISOString(),
    "dateModified": post.updated_at || post.created_at || new Date().toISOString()
  };
}

/**
 * Build JSON-LD VideoObject schema.
 * 
 * @param {Object} video - Video object {name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl}
 * @returns {Object} JSON-LD VideoObject schema
 */
function buildVideoSchema(video) {
  if (!video) return null;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name || "Gauswarn A2 Ghee Process",
    "description": video.description || "Watch how Gauswarn makes pure A2 Gir Cow Bilona Ghee traditionally.",
    "thumbnailUrl": [
      video.thumbnailUrl || video.thumbnail || "https://gauswarn.com/favicon-512x512.png"
    ],
    "uploadDate": video.uploadDate || "2024-01-01T08:00:00+08:00",
    "duration": video.duration || "PT1M30S",
    "contentUrl": video.contentUrl,
    "embedUrl": video.embedUrl || `https://www.youtube.com/embed/${video.youtubeId}`,
    "publisher": {
      "@type": "Organization",
      "name": "Gauswarn India",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/favicon-512x512.png`,
        "width": "512",
        "height": "512"
      }
    }
  };
}

export {
  SITE_URL,
  PRODUCT_SLUG_MAP,
  generateSlugFromWeight,
  getProductSlug,
  getProductCanonicalUrl,
  findProductBySlug,
  findProductIndexBySlug,
  buildProductSchema,
  buildFAQSchema,
  buildArticleSchema,
  buildVideoSchema,
  buildProductBreadcrumbSchema,
  buildGlobalSchema,
};
