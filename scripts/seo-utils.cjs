/**
 * seo-utils.cjs
 * ==============
 * CommonJS version of seo-utils for Node.js build scripts.
 * Mirrors src/utils/seo-utils.js — keep both in sync.
 */

const SITE_URL = "https://gauswarn.com";

const PRODUCT_SLUG_MAP = {
  1: "a2-bilona-ghee-500ml",
  2: "a2-bilona-ghee-1000ml",
  3: "a2-bilona-ghee-5kg",
  4: "a2-bilona-ghee-15kg",
  5: "a2-bilona-ghee-250ml",
};

function generateSlugFromWeight(weight) {
  if (!weight) return "a2-bilona-ghee";

  const normalized = weight
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/litre|liter|l$/i, "ml")
    .replace(/[^a-z0-9]/g, "");

  let slug = normalized;
  if (weight.toLowerCase().includes("litre") || weight.toLowerCase().includes("liter")) {
    const numVal = parseFloat(weight);
    if (!isNaN(numVal)) {
      slug = `${numVal * 1000}ml`;
    }
  }

  return `a2-bilona-ghee-${slug}`;
}

function getProductSlug(product) {
  if (!product) return "a2-bilona-ghee";

  const id = parseInt(product.product_id, 10);
  if (PRODUCT_SLUG_MAP[id]) {
    return PRODUCT_SLUG_MAP[id];
  }

  return generateSlugFromWeight(product.product_weight);
}

function getProductCanonicalUrl(product) {
  return `${SITE_URL}/products/${getProductSlug(product)}/`;
}

module.exports = {
  SITE_URL,
  PRODUCT_SLUG_MAP,
  generateSlugFromWeight,
  getProductSlug,
  getProductCanonicalUrl,
};
