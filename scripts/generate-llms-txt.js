/**
 * generate-llms-txt.js
 * --------------------
 * Generates public/llms.txt to help AI crawlers and LLMs 
 * understand the site structure and content.
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

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
  content += `> Gauswarn India is a trusted brand offering 100% pure, traditional bilona-made A2 Gir Cow Ghee, sourced from grass-fed indigenous Gir cows and prepared using Ayurvedic methods.\n\n`;
  
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

  // 3. Fetch Products
  try {
    const prodRes = await axios.get(PRODUCT_API_URL, { headers: { "ngrok-skip-browser-warning": "true" } });
    const products = prodRes.data.products || [];
    content += `\n## Products\n\n`;
    products.forEach((prod) => {
      content += `- [${prod.product_weight} A2 Ghee](${SITE_URL}/products/?v=${prod.product_id})\n`;
    });
  } catch (err) {
    console.warn("⚠️ Could not fetch products for llms.txt");
  }

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
