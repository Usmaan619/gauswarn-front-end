/**
 * generate-sitemap.js
 * -------------------
 * Automatically generates public/sitemap.xml by combining static routes,
 * dynamic blog posts, and SEO-friendly product slug pages from the API.
 * 
 * Run: node scripts/generate-sitemap.js
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { getProductSlug } = require("./seo-utils.cjs");
const HEALTH_BENEFITS = require("./health-benefits-data.cjs");

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

    // 1.5 Add Health Benefits Routes
    console.log("💚 Adding Health Benefits to sitemap...");
    HEALTH_BENEFITS.forEach((benefit) => {
      const url = `${SITE_URL}/health-benefits/${benefit.slug}/`;
      urlEntries.push(`  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });
    console.log(`✅ Added ${HEALTH_BENEFITS.length} health benefit pages to sitemap.`);

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

    // 3. Fetch and Add Product Pages with SEO-friendly slug URLs
    // These are now proper product landing pages with unique slugs.
    // Each product gets its own URL in the sitemap for Merchant Center indexing.
    console.log("🛍️ Fetching products for sitemap...");
    try {
      const prodResponse = await axios.get(PRODUCT_API_URL, {
        headers: { "ngrok-skip-browser-warning": "true" },
      });
      const products = prodResponse.data.products || [];
      products.forEach((product) => {
        const slug = getProductSlug(product);
        const productUrl = `${SITE_URL}/products/${slug}/`;
        
        // Parse product images for image sitemap
        let imageTag = "";
        try {
          const images = JSON.parse(product.product_images || "[]");
          if (images.length > 0) {
            const imgUrl = typeof images[0] === "string" ? images[0] : images[0]?.url || "";
            if (imgUrl) {
              imageTag = `
    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>Gauswarn Pure A2 Bilona Ghee - ${product.product_weight}</image:title>
    </image:image>`;
            }
          }
        } catch (e) {
          // ignore image parse errors
        }

        urlEntries.push(`  <url>
    <loc>${productUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>${imageTag}
  </url>`);
      });
      console.log(`✅ Added ${products.length} product pages to sitemap.`);
    } catch (e) {
      console.warn("⚠️ Could not fetch products for sitemap:", e.message);
    }

    // Compose final XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
