/**
 * generate-sitemap.js
 * -------------------
 * Automatically generates public/sitemap.xml by combining static routes,
 * dynamic blog posts, and dynamic product variants from the API.
 * 
 * Run: node scripts/generate-sitemap.js
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://gauswarn.com";
const BLOG_API_URL = "https://api.gauswarn.com/admin/blogs";
const PRODUCT_API_URL = "https://api.gauswarn.com/users/getAllProduct";

// Static routes with their priority and changefreq
const STATIC_ROUTES = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/products", priority: "0.9", changefreq: "daily" },
  { url: "/blog", priority: "0.8", changefreq: "daily" },
  { url: "/gallery", priority: "0.6", changefreq: "monthly" },
  { url: "/b2b", priority: "0.7", changefreq: "monthly" },
  { url: "/contact", priority: "0.6", changefreq: "monthly" },
  { url: "/careers", priority: "0.5", changefreq: "monthly" },
  { url: "/faq", priority: "0.4", changefreq: "monthly" },
  { url: "/lab-report", priority: "0.4", changefreq: "monthly" },
  { url: "/video", priority: "0.8", changefreq: "monthly", hasVideo: true },
  { url: "/refund", priority: "0.3", changefreq: "yearly" },
  { url: "/shipping", priority: "0.3", changefreq: "yearly" },
  { url: "/privacy", priority: "0.3", changefreq: "yearly" },
  { url: "/terms", priority: "0.3", changefreq: "yearly" },
];

async function generateSitemap() {
  try {
    console.log("🚀 Generating Auto Sitemap...");

    let urlEntries = [];
    const today = new Date().toISOString().split("T")[0];

    // 1. Add Static Routes
    STATIC_ROUTES.forEach((route) => {
      const url = route.url === "/" ? SITE_URL + "/" : `${SITE_URL}${route.url}/`;
      let entry = `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;
      
      if (route.hasVideo && route.url === "/video") {
        entry += `
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/GHzgddV5Jrc/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>Pure A2 Cow Ghee - Gauswarn India</video:title>
      <video:description>Healthy Desi Ghee - Watch the traditional Bilona process of making pure A2 Cow Ghee.</video:description>
      <video:player_loc>https://www.youtube.com/embed/GHzgddV5Jrc</video:player_loc>
    </video:video>`;
      }
      
      entry += `
  </url>`;
      urlEntries.push(entry);
    });

    // 2. Fetch and Add Blog Posts
    console.log("🌐 Fetching blogs for sitemap...");
    try {
      const blogResponse = await axios.get(BLOG_API_URL, {
        headers: { "ngrok-skip-browser-warning": "true" },
      });
      const blogs = blogResponse.data.blogs || [];
      blogs.forEach((blog) => {
        const blogUrl = `${SITE_URL}/blog/${blog.slug || blog.id}/`;
        const lastMod = (blog.updated_at || blog.created_at || today).split("T")[0];
        urlEntries.push(`  <url>
    <loc>${blogUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
      });
      console.log(`✅ Added ${blogs.length} blog posts to sitemap.`);
    } catch (e) {
      console.warn("⚠️ Could not fetch blogs for sitemap:", e.message);
    }

    // 3. (Optional) Fetch and Add Product Variants
    // NOTE: We are excluding these from the sitemap because they are canonicalized 
    // to the main /products/ page in the static HTML. Including them in the sitemap
    // while they are non-canonical causes "Crawled - currently not indexed" errors
    // and sitemap validation failures in Google Search Console.
    // They remain crawlable via internal links on the /products/ page.
    console.log("🛍️ Skipping product variants in sitemap to prevent canonical mismatch...");

    // Compose final XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlEntries.join("\n")}
</urlset>`;

    const publicPath = path.join(__dirname, "..", "public", "sitemap.xml");
    const buildPath = path.join(__dirname, "..", "build", "sitemap.xml");

    fs.writeFileSync(publicPath, sitemapXml);
    console.log(`✨ Successfully updated ${publicPath}`);

    // Also update build folder if it exists
    if (fs.existsSync(path.join(__dirname, "..", "build"))) {
      fs.writeFileSync(buildPath, sitemapXml);
      console.log(`✨ Successfully updated ${buildPath}`);
    }

    console.log("🎉 Sitemap generation complete.");

  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
    process.exit(1);
  }
}

generateSitemap();
