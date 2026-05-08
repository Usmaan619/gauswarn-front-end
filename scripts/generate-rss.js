const RSS = require("rss");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_URL = "https://api.gauswarn.com/admin/blogs";
const SITE_URL = "https://gauswarn.com";

async function generateRSS() {
  try {
    console.log("Fetching blogs from API...");
    const response = await axios.get(API_URL, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });

    const blogs = response.data.blogs || [];
    console.log(`Found ${blogs.length} blogs.`);

    const feed = new RSS({
      title: "Gauswarn India - A2 Ghee & Wellness Blog",
      description:
        "Read expert articles on A2 ghee benefits, ayurveda, digestion, and healthy living by Gauswarn India.",
      feed_url: `${SITE_URL}/rss.xml`,
      site_url: SITE_URL,
      image_url: `${SITE_URL}/favicon-512x512.png`,
      managingEditor: "info@gauswarn.com (Gauswarn India)",
      webMaster: "info@gauswarn.com (Gauswarn India)",
      copyright: `${new Date().getFullYear()} Gauswarn India`,
      language: "en-in",
      pubDate: new Date(),
      ttl: "60",
    });

    blogs.forEach((blog) => {
      // Remove HTML tags for RSS description if any
      const cleanContent = (blog.content || "")
        .replace(/<[^>]*>?/gm, "")
        .replace(/\r\n|\n|\r/gm, " ")
        .trim();

      const blogUrl = `${SITE_URL}/blog/${blog.slug || blog.id}/`;

      feed.item({
        title: blog.title,
        description: cleanContent.substring(0, 300) + "...",
        url: blogUrl,
        guid: blogUrl,
        categories: [blog.category?.name || blog.category || "Ghee & Wellness"],
        author: "info@gauswarn.com (Gauswarn India)",
        date: blog.created_at || new Date(),
      });
    });

    let xml = feed.xml({ indent: true });

    // Add styling for browsers
    const stylesheetLine =
      '<?xml-stylesheet title="XSL Style Sheet" type="text/xsl" href="/rss.xsl"?>\n';
    xml = xml.replace(
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<?xml version="1.0" encoding="UTF-8"?>\n' + stylesheetLine,
    );

    const filePath = path.join(__dirname, "../public/rss.xml");
    fs.writeFileSync(filePath, xml);
    console.log("Successfully updated public/rss.xml");
  } catch (error) {
    console.error("Error generating RSS feed:", error.message);
    process.exit(1);
  }
}

generateRSS();
