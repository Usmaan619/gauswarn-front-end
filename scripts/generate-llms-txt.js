/**
 * generate-llms-txt.js
 * --------------------
 * Generates public/llms.txt to help AI crawlers and LLMs 
 * understand the site structure and content.
 * 
 * Uses SEO-friendly slug URLs for products.
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { getProductSlug } = require("./seo-utils.cjs");

const SITE_URL = "https://gauswarn.com";
const BLOG_API_URL = "https://api.gauswarn.com/admin/blogs";
const PRODUCT_API_URL = "https://api.gauswarn.com/users/getAllProduct";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/products",
  "/blog",
  "/gallery",
  "/b2b",
  "/contact",
  "/careers",
  "/faq",
  "/lab-report",
  "/video",
];

async function generateLLMS() {
  console.log("🚀 Generating llms.txt...");

  let content = `# Gauswarn India - Pure A2 Gir Cow Ghee\n\n`;
  content += `> Gauswarn India is a trusted brand by Rajlakshmi Javiks International, offering 100% pure, traditional bilona-made A2 Gir Cow Ghee, sourced from grass-fed indigenous Gir cows and prepared using Ayurvedic methods. Available in 250ml, 500ml, 1 Litre, 5 Kg, and 15 Kg packs with free shipping across India.\n\n`;
  
  content += `## Core Sections\n\n`;

  // 1. Static Routes
  STATIC_ROUTES.forEach((route) => {
    const url = route === "/" ? SITE_URL + "/" : `${SITE_URL}${route}/`;
    content += `- [${route === "/" ? "Home" : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}](${url})\n`;
  });

  // 2. Fetch Blogs
  try {
    const blogRes = await axios.get(BLOG_API_URL, { headers: { "ngrok-skip-browser-warning": "true" } });
    const blogs = blogRes.data.blogs || [];
    content += `\n## Blog Posts\n\n`;
    blogs.forEach((blog) => {
      content += `- [${blog.title}](${SITE_URL}/blog/${blog.slug || blog.id}/)\n`;
    });
  } catch (err) {
    console.warn("⚠️ Could not fetch blogs for llms.txt");
  }

  // 3. Fetch Products — use SEO-friendly slug URLs
  try {
    const prodRes = await axios.get(PRODUCT_API_URL, { headers: { "ngrok-skip-browser-warning": "true" } });
    const products = prodRes.data.products || [];
    content += `\n## Products\n\n`;
    products.forEach((prod) => {
      const slug = getProductSlug(prod);
      content += `- [${prod.product_weight} Pure A2 Bilona Ghee](${SITE_URL}/products/${slug}/)\n`;
    });
  } catch (err) {
    console.warn("⚠️ Could not fetch products for llms.txt");
  }

  // 4. Add structured business info for AI context
  content += `\n## Business Information\n\n`;
  content += `- **Brand:** Gauswarn India\n`;
  content += `- **Legal Entity:** Rajlakshmi Javiks International\n`;
  content += `- **Location:** Indore, Madhya Pradesh, India\n`;
  content += `- **Phone:** +91-74709-15905\n`;
  content += `- **Email:** info@gauswarn.com\n`;
  content += `- **Products:** Pure A2 Gir Cow Ghee (Bilona Method)\n`;
  content += `- **Price Range:** ₹549 - ₹17,999\n`;
  content += `- **Shipping:** Free delivery across India\n`;
  content += `- **Certifications:** FSSAI, NABL Lab Tested\n`;

  const outputPath = path.join(__dirname, "..", "public", "llms.txt");
  const buildPath = path.join(__dirname, "..", "build", "llms.txt");

  fs.writeFileSync(outputPath, content);
  console.log(`✅ llms.txt created in public/`);

  if (fs.existsSync(path.join(__dirname, "..", "build"))) {
    fs.writeFileSync(buildPath, content);
    console.log(`✅ llms.txt copied to build/`);
  }
}

generateLLMS();
