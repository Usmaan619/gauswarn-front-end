/**
 * post-build-seo.js
 * -----------------
 * Generates per-route HTML files from the CRA build/index.html.
 * Each route gets unique <title>, <meta description>, <h1>, and
 * keyword-rich content so that non-JS crawlers (Googlebot, Semrush,
 * Ahrefs) see unique, word-count-rich pages instead of the default SPA shell.
 *
 * Run after `react-scripts build`:
 *   node scripts/post-build-seo.js
 */

const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const INDEX_PATH = path.join(BUILD_DIR, "index.html");

/* ═══════════════════════════════════
   PER-ROUTE SEO DATA
   ═══════════════════════════════════ */
const ROUTES = {
  "/": {
    title: "Buy Pure A2 Gir Cow Ghee Online | Bilona Method Ghee India – Gauswarn",
    description: "Buy pure A2 Gir cow ghee made using traditional bilona method. 100% natural desi ghee with rich taste and health benefits. Order online in India.",
    h1: "Pure A2 Gir Cow Ghee – Traditional Bilona Method | Gauswarn India",
    content: `Gauswarn India offers 100% pure A2 Gir Cow Ghee made using the traditional Vedic Bilona method. Our ghee is handcrafted from the milk of grass-fed indigenous Gir cows, ensuring rich A2 beta-casein protein content. Every batch is lab-tested for purity and free from chemicals, preservatives, and adulterants. Experience the authentic golden color, granular (danedar) texture, and rich nutty aroma that defines real Bilona ghee. Our A2 ghee supports bone health, boosts immunity, improves digestion, enhances brain function, and nourishes skin and hair. Trusted by thousands of Indian families, Gauswarn delivers farm-fresh A2 cow ghee across India with free shipping. Whether for daily cooking, Ayurvedic remedies, or religious rituals, our pure desi ghee is the perfect choice for a healthy lifestyle. Buy genuine A2 Gir cow ghee online at the best price from Gauswarn India.`,
  },
  "/about": {
    title: "About Gauswarn India | Pure A2 Cow Ghee Journey & Process",
    description: "Discover how Gauswarn India prepares 100% pure A2 Cow Ghee using the traditional Bilona method. Learn about our Gaushala, values, and commitment to quality.",
    h1: "About Gauswarn India – Our Journey and Bilona Method",
    content: `Gauswarn India is a family-run enterprise dedicated to reviving the ancient tradition of pure A2 cow ghee making. Founded with a vision to bring authentic, chemical-free Bilona ghee to Indian homes, we source our milk exclusively from indigenous Gir cows raised in our own Gaushala in Indore, Madhya Pradesh. Our cows are grass-fed, free-roaming, and treated with love following Ahimsa principles. The traditional Bilona method involves curdling fresh A2 milk, hand-churning the curd to extract makhan (butter), and slowly heating it over a gentle fire to produce golden, granular ghee. This age-old Vedic process preserves fat-soluble vitamins, CLA, and the natural aroma that makes our ghee exceptional. At Gauswarn, transparency is our core value — every batch is NABL lab-tested and FSSAI compliant. We believe in sustainable farming practices and eco-friendly packaging to protect both your health and the environment.`,
  },
  "/b2b": {
    title: "Wholesale A2 Ghee Supplier India | B2B Bulk Orders – Gauswarn",
    description: "Partner with Gauswarn for wholesale A2 Cow Ghee supply. Bulk orders for restaurants, hotels, retailers and Ayurvedic brands. Premium quality, competitive pricing.",
    h1: "Wholesale A2 Cow Ghee Supplier – B2B Bulk Orders | Gauswarn India",
    content: `Gauswarn India is your trusted wholesale partner for premium A2 Gir Cow Ghee in bulk quantities. We supply lab-tested, FSSAI-certified pure Bilona ghee to restaurants, hotels, caterers, retail chains, Ayurvedic brands, and food manufacturers across India. Our B2B program offers competitive bulk pricing, consistent quality assurance, custom packaging options, and reliable nationwide delivery. Whether you need 5 kg tins, 15 kg drums, or bulk tanker quantities, we can fulfill your requirements with ghee made from the milk of grass-fed Gir cows using the traditional Bilona method. All our wholesale products come with lab test certificates, GST invoices, and dedicated account support. Partner with Gauswarn to offer your customers the finest A2 cow ghee available in India. Contact us today for wholesale pricing and sample orders.`,
  },
  "/blog": {
    title: "A2 Ghee Benefits, Ayurveda & Healthy Living Blog – Gauswarn India",
    description: "Read expert articles on A2 ghee benefits, Bilona method, Ayurvedic wellness, healthy cooking tips, and nutrition guides by Gauswarn India.",
    h1: "A2 Ghee Benefits & Ayurveda Blog | Gauswarn India",
    content: `Welcome to the Gauswarn India blog — your trusted source for expert articles on A2 cow ghee, Ayurvedic wellness, healthy living, and traditional Indian nutrition. Our blog covers topics like the health benefits of A2 ghee for brain, heart, bones, and immunity; the science behind the Bilona method; A2 vs A1 ghee comparison; how to identify pure ghee; A2 ghee for babies and children; cooking tips with desi ghee; and much more. Written by our nutrition experts and Ayurvedic practitioners, each article is research-backed and designed to help you make informed choices for your family's health. Whether you're curious about the difference between A2 and regular ghee, want to know if ghee is good for heart health, or looking for traditional recipes using pure Bilona ghee, our blog has comprehensive guides for every topic. Subscribe to stay updated with the latest in A2 ghee nutrition and Ayurvedic wellness.`,
  },
  "/careers": {
    title: "Careers & Internships at Gauswarn India | Join Our Team",
    description: "Explore career opportunities and internship programs at Gauswarn India. Join our mission to deliver pure A2 Cow Ghee across India.",
    h1: "Careers & Internships at Gauswarn India",
    content: `Join the Gauswarn India team and be part of a mission to bring pure, traditional A2 cow ghee to every Indian home. We offer exciting career opportunities and internship programs across marketing, operations, sales, content creation, and supply chain management. At Gauswarn, you'll work in a dynamic startup environment where innovation meets tradition. Our internship program provides hands-on experience in digital marketing, social media management, e-commerce operations, and product development. We value passion, creativity, and commitment to quality. If you're interested in food technology, sustainable agriculture, Ayurvedic wellness, or D2C brand building, Gauswarn is the perfect place to grow your career. We offer competitive compensation, flexible work culture, and the satisfaction of contributing to India's health and wellness revolution.`,
  },
  "/products": {
    title: "Shop A2 Gir Cow Ghee Online | Best Price Pure Bilona Ghee – Gauswarn",
    description: "Buy premium A2 Gir Cow Ghee online. Available in 250ml, 500ml, and 1 litre. Lab-tested, traditional Bilona method. Free shipping across India.",
    h1: "Shop Pure A2 Gir Cow Ghee Online – Gauswarn India",
    content: `Browse and buy Gauswarn's premium A2 Gir Cow Ghee online. Our pure Bilona ghee is available in multiple sizes — 250ml, 500ml, and 1 litre — perfect for every household need. Each jar contains 100% pure, lab-tested A2 cow ghee made from the milk of grass-fed indigenous Gir cows using the traditional hand-churning Bilona method. Our ghee features a rich golden color, authentic granular (danedar) texture, and distinctive nutty aroma that is the hallmark of genuine Bilona ghee. All products are FSSAI certified, free from chemicals and preservatives, and come with transparent lab test reports. We offer free shipping across India, secure online payment, and a hassle-free shopping experience. Buy the best A2 cow ghee online at competitive prices from Gauswarn India — trusted by 22,000+ families nationwide.`,
  },
  "/gallery": {
    title: "Photo Gallery | Gauswarn India Gaushala & A2 Ghee Making Process",
    description: "View authentic photos of Gauswarn India's Gaushala, Gir cows, traditional Bilona ghee-making process, and pure A2 cow ghee products.",
    h1: "Gauswarn India Photo Gallery – Gaushala & Bilona Ghee Process",
    content: `Explore the Gauswarn India photo gallery showcasing our Gaushala, indigenous Gir cows, traditional Bilona ghee-making process, and finished A2 cow ghee products. See our happy, free-roaming Gir cows grazing on natural pastures, the hand-churning process that transforms fresh A2 milk into golden Bilona ghee, our state-of-the-art packaging facility, and the final products ready for your kitchen. Every image tells the story of purity, tradition, and commitment that defines Gauswarn India. Our gallery provides visual proof of our ethical farming practices, clean production environment, and the authentic quality of our A2 Gir Cow Ghee.`,
  },
  "/contact": {
    title: "Contact Gauswarn India | Customer Support & Enquiries",
    description: "Get in touch with Gauswarn India for orders, queries, or partnerships. Call +91-74709-15905 or email info@gauswarn.com. Located in Indore, Madhya Pradesh.",
    h1: "Contact Gauswarn India – Customer Support & Enquiries",
    content: `Reach out to Gauswarn India for any questions about our A2 Gir Cow Ghee products, order status, wholesale enquiries, or partnership opportunities. Our customer support team is available to assist you with product information, delivery tracking, return and refund queries, and bulk order pricing. You can contact us by phone at +91-74709-15905, email at info@gauswarn.com, or visit our office at 11 Manish Baag, Sapna Sangeeta Road, Indore, Madhya Pradesh 452001. We respond to all queries within 24 hours and are committed to providing the best customer experience. Whether you're a first-time buyer or a returning customer, we're here to help you with your A2 ghee needs.`,
  },
  "/faq": {
    title: "FAQ – A2 Cow Ghee Questions Answered | Gauswarn India",
    description: "Find answers to frequently asked questions about A2 Cow Ghee, Bilona method, health benefits, pricing, and delivery from Gauswarn India.",
    h1: "Frequently Asked Questions About A2 Cow Ghee – Gauswarn India",
    content: `Find comprehensive answers to frequently asked questions about Gauswarn India's A2 Gir Cow Ghee. Learn about what makes A2 ghee different from regular ghee, how the traditional Bilona method preserves nutrients, the health benefits of A2 beta-casein protein, storage and shelf life guidelines, allergy and dietary compatibility, pricing and delivery options, and our quality assurance process. Our FAQ section covers everything from 'What is A2 ghee?' to 'How do I verify the purity of my ghee?' We also address common concerns about lactose intolerance, cholesterol, and ghee in modern diets. If you don't find your answer here, contact our support team at info@gauswarn.com.`,
  },
  "/refund": {
    title: "Refund & Return Policy | Gauswarn India A2 Ghee",
    description: "Read Gauswarn India's refund and return policy for A2 Cow Ghee orders. Learn about eligibility, process, and timelines for refunds and replacements.",
    h1: "Refund & Return Policy – Gauswarn India",
    content: `Gauswarn India is committed to customer satisfaction with every purchase of our A2 Gir Cow Ghee. Our refund and return policy covers damaged products, quality concerns, and delivery issues. If you receive a damaged or defective product, contact us within 48 hours with photographic evidence for a full replacement or refund. All refund requests are processed within 5-7 business days after verification. Please note that returns for change of mind are not accepted for food products as per FSSAI guidelines. For any refund or return queries, email us at info@gauswarn.com or call +91-74709-15905.`,
  },
  "/shipping": {
    title: "Shipping & Delivery Policy | Free Shipping – Gauswarn India",
    description: "Free shipping on all A2 Ghee orders across India. Learn about Gauswarn's delivery timelines, shipping partners, and tracking process.",
    h1: "Shipping & Delivery Policy – Gauswarn India",
    content: `Gauswarn India offers free shipping on all A2 Gir Cow Ghee orders across India. We ship through trusted logistics partners to ensure safe and timely delivery of our premium ghee products. Standard delivery takes 3-7 business days depending on your location. Each order comes with a tracking number sent via SMS and email so you can monitor your shipment in real-time. Our products are packed in bubble wrap and corrugated boxes to prevent damage during transit. We deliver to all pin codes across India including metro cities, tier-2 cities, and rural areas. For urgent orders or bulk shipments, contact us at info@gauswarn.com for express delivery options.`,
  },
  "/privacy": {
    title: "Privacy Policy | Data Protection – Gauswarn India",
    description: "Read Gauswarn India's privacy policy. Learn how we collect, use, and protect your personal data when you shop for A2 Cow Ghee on gauswarn.com.",
    h1: "Privacy Policy – Gauswarn India Data Protection",
    content: `Gauswarn India respects your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, store, and protect your data when you visit gauswarn.com or place orders for our A2 Gir Cow Ghee products. We collect personal information including your name, email address, phone number, delivery address, and payment details to process your orders and improve your shopping experience. We use industry-standard encryption and secure servers to protect your data. We do not sell or share your personal information with third parties except as necessary for order fulfillment. You have the right to access, modify, or delete your personal data at any time by contacting us at info@gauswarn.com.`,
  },
  "/terms": {
    title: "Terms & Conditions | Gauswarn India Online Store",
    description: "Read the terms and conditions governing your use of Gauswarn India's website and A2 Cow Ghee online store. Legal information and user agreements.",
    h1: "Terms & Conditions – Gauswarn India",
    content: `These terms and conditions govern your use of the Gauswarn India website (gauswarn.com), owned and operated by Rajlakshmi Javiks In, located in Indore, Madhya Pradesh, India. By accessing or using our website to browse or purchase A2 Gir Cow Ghee products, you agree to be bound by these terms. The website is published in compliance with the Information Technology Act, 2000 and IT Rules, 2011. All content including text, images, logos, and product descriptions is the intellectual property of Rajlakshmi Javiks In. Users must provide accurate information during registration and checkout, and must not use the platform for any unlawful purposes. These terms are governed by the laws of India, with exclusive jurisdiction in the courts of Indore, Madhya Pradesh.`,
  },
  "/lab-report": {
    title: "Lab Test Reports | A2 Ghee Purity Certificates – Gauswarn India",
    description: "View original NABL-accredited lab test reports verifying the purity of Gauswarn's A2 Gir Cow Ghee. QR-verified certificates for transparency.",
    h1: "Lab Test Reports – A2 Gir Cow Ghee Purity Verification | Gauswarn India",
    content: `Gauswarn India provides complete transparency through original NABL-accredited laboratory test reports for our A2 Gir Cow Ghee. All reports are scannable with QR codes for authenticity verification. Our lab testing covers ghee purity analysis (FSSAI compliance), A2 beta-casein genetic testing through DNA sequencing, moisture content, acid value, and absence of adulterants. The texture quality analysis confirms the characteristic granular (danedar) texture of traditionally prepared Bilona ghee. We test every batch to ensure consistent quality and publish all reports publicly for our customers' confidence. View our latest certificates to see why Gauswarn is India's most transparent A2 ghee brand.`,
  },
  "/video": {
    title: "Video Story | Traditional A2 Ghee Making Process – Gauswarn India",
    description: "Watch how Gauswarn India makes pure A2 Gir Cow Ghee using the traditional Bilona method. Farm to table journey documentary.",
    h1: "Gauswarn India Video Story – Traditional A2 Cow Ghee Making Process",
    content: `Experience the journey of Gauswarn A2 Gir Cow Ghee through our video documentary. Watch how we preserve the ancient tradition of Bilona ghee-making — from our Gaushala where indigenous Gir cows are lovingly cared for, through the traditional hand-churning of curd to extract pure butter, to the slow-heating process that produces golden granular ghee. Our video showcases the authentic Vedic process, ethical animal care, and the quality standards that make Gauswarn India's A2 ghee the purest choice for your family. See the real people, real cows, and real process behind every jar of Gauswarn ghee.`,
  },
};

/* ═══════════════════════════════════
   BUILD LOGIC
   ═══════════════════════════════════ */
function run() {
  if (!fs.existsSync(INDEX_PATH)) {
    console.error("❌ build/index.html not found. Run `npm run build` first.");
    process.exit(1);
  }

  const template = fs.readFileSync(INDEX_PATH, "utf-8");
  let modified = 0;

  for (const [route, seo] of Object.entries(ROUTES)) {
    const html = injectSeo(template, seo);

    if (route === "/") {
      // Overwrite the root index.html directly
      fs.writeFileSync(INDEX_PATH, html);
      modified++;
      console.log(`  ✅ / (root index.html)`);
    } else {
      const dir = path.join(BUILD_DIR, route);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
      modified++;
      console.log(`  ✅ ${route}/index.html`);
    }
  }

  console.log(`\n🎉 SEO injection complete — ${modified} pages generated.\n`);
}

/**
 * Replace <title>, <meta description>, and inject an <h1> + content
 * into the <div id="root"> before React hydrates.
 */
function injectSeo(template, seo) {
  let html = template;

  // 1. Replace <title>
  html = html.replace(
    /<title[^>]*>.*?<\/title>/i,
    `<title data-rh="true">${seo.title}</title>`
  );

  // 2. Replace <meta name="description">
  html = html.replace(
    /<meta[^>]*name=["']description["'][^>]*\/?>/i,
    `<meta data-rh="true" name="description" content="${seo.description}" />`
  );

  // 3. Replace og:title
  html = html.replace(
    /<meta[^>]*property=["']og:title["'][^>]*\/?>/i,
    `<meta data-rh="true" property="og:title" content="${seo.title}" />`
  );

  // 4. Replace og:description
  html = html.replace(
    /<meta[^>]*property=["']og:description["'][^>]*\/?>/i,
    `<meta data-rh="true" property="og:description" content="${seo.description}" />`
  );

  // 5. Replace twitter:title
  html = html.replace(
    /<meta[^>]*name=["']twitter:title["'][^>]*\/?>/i,
    `<meta data-rh="true" name="twitter:title" content="${seo.title}" />`
  );

  // 6. Replace twitter:description
  html = html.replace(
    /<meta[^>]*name=["']twitter:description["'][^>]*\/?>/i,
    `<meta data-rh="true" name="twitter:description" content="${seo.description}" />`
  );

  // 7. Inject H1 + SEO content inside <div id="root">
  // The content is visible briefly before React hydrates, then React takes over.
  // We use a style that works with both scenarios.
  const seoBlock = `
    <h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">${seo.h1}</h1>
    <div style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0" role="article">
      <p>${seo.content}</p>
    </div>`;

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${seoBlock}</div>`
  );

  return html;
}

run();
