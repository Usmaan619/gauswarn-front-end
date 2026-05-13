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
 * @returns {Object} JSON-LD schema object
 */
function buildProductSchema(product, averageRating = 4.8, totalReviews = 269) {
  if (!product) return null;

  const slug = getProductSlug(product);
  const canonicalUrl = `${SITE_URL}/products/${slug}/`;
  const price = parseFloat(product.product_price) || 0;
  const images = (() => {
    try {
      const parsed = JSON.parse(product.product_images || "[]");
      return parsed.map((img) => (typeof img === "string" ? img : img?.url || img?.src || ""));
    } catch {
      return [];
    }
  })();

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products#${slug}`,
    name: `Pure A2 Bilona Ghee - ${product.product_weight}`,
    description: `${product.product_weight} of 100% pure A2 Gir Cow Ghee made using traditional Bilona method. Lab-tested, chemical-free, from grass-fed indigenous cows. Free delivery across India.`,
    image: images.length > 0 ? images : [`${SITE_URL}/favicon-512x512.png`],
    brand: {
      "@type": "Brand",
      name: "Gauswarn",
    },
    sku: `GAUSWARN-A2-GHEE-${slug.toUpperCase()}`,
    mpn: `GAUSWARN-${slug.toUpperCase()}`,
    category: "Food > Dairy > Ghee",
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      priceCurrency: "INR",
      price: String(price),
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Gauswarn India",
      },
      hasMerchantReturnPolicy: {
        "@id": "https://gauswarn.com/#merchant-return-policy",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(averageRating || 4.8),
      reviewCount: String(totalReviews || 269),
      bestRating: "5",
      worstRating: "1",
    },
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

export {
  SITE_URL,
  PRODUCT_SLUG_MAP,
  generateSlugFromWeight,
  getProductSlug,
  getProductCanonicalUrl,
  findProductBySlug,
  findProductIndexBySlug,
  buildProductSchema,
  buildProductBreadcrumbSchema,
};
