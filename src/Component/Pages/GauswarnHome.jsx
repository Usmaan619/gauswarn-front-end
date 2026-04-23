import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaLeaf, FaFlask, FaAward, FaTruck, FaHeart, FaBrain,
  FaShieldAlt, FaFire, FaStar, FaArrowRight, FaCheck,
  FaWhatsapp,
} from "react-icons/fa";
import { GiHoneypot, GiOlive, GiMilkCarton, GiCow } from "react-icons/gi";

import ownerImg from "../../asset/new-img/onwer/onwer.webp";
import bilonaImg from "../../asset/new-img/bilona-img/bilona.webp";
import productImg from "../../asset/new-img/product-imgs/product1.webp";
import benefitImg from "../../asset/new-img/product-health/Rectangle-14.webp";

import "./GauswarnHome.css";

/* ─── FAQ DATA (shared between section + JSON-LD) ─── */
const FAQ_DATA = [
  {
    q: "What makes Gauswarn A2 Gir Cow Ghee different from regular ghee?",
    a: "Gauswarn uses milk exclusively from indigenous Gir cows that carry the A2 beta-casein gene. Combined with the traditional Bilona churning method, this produces ghee that is richer in CLA, Omega-3, and fat-soluble vitamins compared to commercially processed ghee.",
  },
  {
    q: "What is the Bilona method and why does it matter?",
    a: "The Bilona method is an ancient Vedic process: milk is curd-set, hand-churned to extract butter (makkhan), and then slow-cooked over a wood flame to produce ghee. This preserves natural nutrients, enzymes, and the distinctive golden colour and nutty aroma.",
  },
  {
    q: "Is Gauswarn A2 Ghee safe for people with lactose intolerance?",
    a: "Yes. During the Bilona process, lactose and milk solids are completely removed. Gauswarn ghee contains virtually zero lactose, making it safe for most lactose-sensitive individuals.",
  },
  {
    q: "How should I store Gauswarn ghee and what is the shelf life?",
    a: "Store in a cool, dry place away from direct sunlight. No refrigeration needed. Unopened, it stays fresh for 12 months; once opened, consume within 6 months for best flavour.",
  },
  {
    q: "Do you ship pan-India? How long does delivery take?",
    a: "Yes, we deliver across India. Most orders are dispatched within 24 hours and arrive in 3–6 business days depending on your location.",
  },
  {
    q: "Are your products lab tested and certified?",
    a: "Absolutely. Every batch of Gauswarn ghee is NABL-certified lab tested for purity, fat content, and absence of adulterants. We are also FSSAI licensed and APEDA registered.",
  },
];

/* ─── WHY CHOOSE US DATA ─── */
const WHY_ITEMS = [
  { icon: <FaLeaf />, title: "100% Natural & Pure", desc: "Zero additives, zero preservatives. Just pure A2 Gir Cow Ghee as nature intended." },
  { icon: <FaFlask />, title: "NABL Lab Certified", desc: "Every batch tested at accredited labs. COA available on request." },
  { icon: <GiCow />, title: "Ethical Gir Cow Farming", desc: "Our Gir cows are grass-fed, free-range, and treated with love at our Gaushala." },
  { icon: <FaAward />, title: "FSSAI & APEDA Registered", desc: "Fully compliant with Indian food safety standards, export certified." },
  { icon: <FaTruck />, title: "Pan-India Fast Delivery", desc: "Temperature-safe, eco-friendly packaging. Delivered fresh to your doorstep." },
  { icon: <FaShieldAlt />, title: "No Adulteration Guarantee", desc: "If our ghee ever fails your purity test, we refund 100% — no questions asked." },
];

/* ─── PRODUCTS DATA ─── */
const PRODUCTS = [
  {
    tag: "Bestseller",
    icon: <GiMilkCarton />,
    title: "A2 Gir Cow Bilona Ghee",
    desc: "Hand-churned using the ancient Bilona method. Rich, golden, and bursting with nutrients. Available in 250ml, 500ml, and 1000ml jars.",
    img: productImg,
    alt: "Gauswarn A2 Gir Cow Bilona Ghee jar",
    link: "/products",
  },
  {
    tag: "Cold Pressed",
    icon: <GiOlive />,
    title: "Cold Pressed Oils",
    desc: "Wood-pressed groundnut, sesame, and coconut oils. No heat, no chemicals — maximum nutrition preserved from farm to bottle.",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    alt: "Gauswarn cold pressed oils — groundnut, sesame, coconut",
    link: "/products",
  },
  {
    tag: "Raw & Unfiltered",
    icon: <GiHoneypot />,
    title: "Pure Natural Honey",
    desc: "Sourced from the pristine forests of India. Raw, unfiltered, and never heat-treated. Loaded with enzymes and antioxidants.",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    alt: "Gauswarn natural raw forest honey",
    link: "/products",
  },
];

/* ─── BENEFITS DATA ─── */
const BENEFITS = [
  { icon: "❤️", title: "Supports Heart Health", desc: "Rich in HDL-boosting CLA and Omega-3 fatty acids that reduce bad cholesterol." },
  { icon: "🧠", title: "Boosts Brain Function", desc: "DHA in A2 ghee nourishes brain cells, improving memory and cognitive clarity." },
  { icon: "🔥", title: "Enhances Digestion", desc: "Butyric acid in ghee feeds gut bacteria and heals the intestinal lining naturally." },
  { icon: "💪", title: "Builds Immunity", desc: "Fat-soluble vitamins A, D, E, K work synergistically to strengthen your immune system." },
  { icon: "🦴", title: "Strengthens Bones", desc: "Vitamin K2 and D in A2 ghee improve calcium absorption for stronger bones and joints." },
  { icon: "✨", title: "Glowing Skin & Hair", desc: "Applied topically or consumed daily, ghee hydrates from within and promotes radiance." },
];

/* ─── PROCESS STEPS ─── */
const STEPS = [
  { n: "01", title: "Grass-Fed Gir Cows", desc: "Our Gir cows graze freely on organic pastures at our Gaushala in Gujarat, producing A2 milk naturally." },
  { n: "02", title: "Curd Setting", desc: "Fresh A2 milk is gently heated and set into curd using natural starters — no industrial shortcuts." },
  { n: "03", title: "Bilona Churning", desc: "Curd is churned using the traditional wooden churner (Bilona) to separate golden makkhan (butter)." },
  { n: "04", title: "Slow-Fire Clarification", desc: "Makkhan is slow-cooked over a low flame, releasing pure ghee with the iconic nutty aroma and golden hue." },
];

/* ─── TESTIMONIALS DATA ─── */
const TESTIMONIALS = [
  { initials: "RV", name: "Ramesh Verma", city: "Delhi", stars: 5, text: "I switched from market ghee to Gauswarn 8 months ago. The difference is undeniable — the aroma, the colour, and my digestion have all improved dramatically." },
  { initials: "PS", name: "Priya Sharma", city: "Mumbai", stars: 5, text: "Finally a brand that delivers on its promise. My mother, who is lactose-intolerant, can have this ghee without any issues. Zero compromise on taste." },
  { initials: "AK", name: "Arjun Khanna", city: "Bangalore", stars: 5, text: "I've tried Anveshan, Desi Farms, and others. Gauswarn ghee has the richest flavour and the most transparent sourcing process. Totally worth every rupee." },
];

/* ═══════════════════════════════════════════
   SECTION COMPONENTS
═══════════════════════════════════════════ */

/* ── Hero Section ── */
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="gh-hero" aria-label="Hero">
      <div className="gh-hero-inner">
        <div>
          <div className="gh-hero-badge">
            <FaLeaf /> NABL Certified · FSSAI Approved
          </div>
          <h1>
            India's Purest<br />
            <span>A2 Gir Cow Ghee</span><br />
            Made the Vedic Way
          </h1>
          <p className="gh-hero-sub">
            From our Gaushala to your kitchen — hand-churned using the ancient Bilona method.
            No shortcuts. No adulterants. Just 100% authentic A2 goodness your family deserves.
          </p>
          <div className="gh-hero-ctas">
            <button className="gh-btn-primary" onClick={() => navigate("/products")} aria-label="Shop A2 Gir Cow Ghee">
              Shop Now <FaArrowRight />
            </button>
            <button className="gh-btn-secondary" onClick={() => navigate("/about")} aria-label="Learn about Gauswarn">
              Our Story
            </button>
          </div>
          <div className="gh-hero-trust">
            {["22,000+ Happy Families", "35,000+ kg Produced", "100% Lab Tested"].map((t) => (
              <div className="gh-trust-chip" key={t}><FaCheck style={{ color: "#c9a227" }} /> {t}</div>
            ))}
          </div>
        </div>
        <div className="gh-hero-img-wrap">
          <img
            src={productImg}
            alt="Gauswarn A2 Gir Cow Bilona Ghee — pure golden ghee jar"
            width="480" height="480"
            loading="eager"
            fetchPriority="high"
          />
          <div className="gh-hero-float-card">
            <strong>22,000+</strong>
            <span>Happy Families</span>
          </div>
          <div className="gh-hero-float-card2">
            <strong>⭐ 4.9 / 5</strong>
            <span>1,200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About Section ── */
function AboutSection() {
  return (
    <section className="gh-section gh-about" aria-label="About Gauswarn">
      <div className="gh-container gh-about-grid">
        <div className="gh-about-img-stack">
          <img
            src={ownerImg}
            alt="Gauswarn founder at the Gaushala with Gir cows"
            className="gh-about-img-main"
            width="520" height="480"
            loading="lazy"
          />
          <div className="gh-about-img-badge">
            <strong>2019</strong>
            <span>Founded with purpose</span>
          </div>
        </div>
        <div className="gh-about-body">
          <span className="gh-label">Our Story</span>
          <h2 className="gh-title">Born from a Gaushala,<br />Built on Trust</h2>
          <div className="gh-divider" />
          <p>
            Gauswarn began with a single question: <em>"Why can't every Indian family access ghee the way our grandparents made it?"</em> Growing up watching mass-market brands dilute this sacred food, our founder set out to preserve the Bilona tradition — the only method that truly honours the cow, the milk, and the consumer.
          </p>
          <p>
            Today, from our ethically run Gaushala in Gujarat, we produce small-batch A2 Gir Cow Ghee using the same 5,000-year-old process — slow, pure, and uncompromising. Every jar carries our founder's personal promise: if it isn't good enough for his own family, it won't be good enough for yours.
          </p>
          <div className="gh-about-highlights">
            {[
              { icon: "🐄", title: "Indigenous Gir Cows", sub: "A2 beta-casein milk only" },
              { icon: "🏺", title: "Bilona Method", sub: "Hand-churned, slow-cooked" },
              { icon: "🔬", title: "Lab Verified", sub: "NABL certified every batch" },
            ].map((h) => (
              <div className="gh-hl-item" key={h.title}>
                <span className="gh-hl-icon">{h.icon}</span>
                <div className="gh-hl-text">
                  <strong>{h.title}</strong>
                  <span>{h.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="gh-btn-primary" aria-label="Read the full Gauswarn story">
            Read Our Full Story <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose Us ── */
function WhyChooseUs() {
  return (
    <section className="gh-section gh-why" aria-label="Why Choose Gauswarn">
      <div className="gh-container">
        <div className="gh-center">
          <span className="gh-label">The Gauswarn Difference</span>
          <h2 className="gh-title">Why Thousands Choose<br />Gauswarn Over Others</h2>
          <div className="gh-divider" style={{ margin: "0 auto 24px" }} />
          <p className="gh-subtitle">
            In a market full of imitation, we stand apart through transparency, tradition, and a relentless commitment to quality you can taste.
          </p>
        </div>
        <div className="gh-why-grid">
          {WHY_ITEMS.map((item) => (
            <article className="gh-why-card" key={item.title}>
              <div className="gh-why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Products Section ── */
function ProductsSection() {
  return (
    <section className="gh-section gh-products" aria-label="Gauswarn Products">
      <div className="gh-container">
        <div className="gh-center">
          <span className="gh-label">Our Products</span>
          <h2 className="gh-title" style={{ color: "#fff" }}>
            Pure. Natural. Farm-to-Table.
          </h2>
          <div className="gh-divider" style={{ margin: "0 auto 24px" }} />
          <p className="gh-subtitle" style={{ color: "rgba(255,255,255,0.7)" }}>
            Every product is crafted with the same commitment to purity — no chemicals, no shortcuts, just nature's best.
          </p>
        </div>
        <div className="gh-products-grid">
          {PRODUCTS.map((p) => (
            <article className="gh-prod-card" key={p.title}>
              <img
                src={p.img}
                alt={p.alt}
                className="gh-prod-img"
                width="400" height="240"
                loading="lazy"
              />
              <div className="gh-prod-body">
                <span className="gh-prod-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to={p.link} className="gh-prod-link" aria-label={`Shop ${p.title}`}>
                  Shop Now <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Benefits Section ── */
function BenefitsSection() {
  return (
    <section className="gh-section gh-benefits" aria-label="Health Benefits of A2 Ghee">
      <div className="gh-container gh-benefits-grid">
        <div>
          <span className="gh-label">Health Benefits</span>
          <h2 className="gh-title">Why A2 Gir Cow Ghee<br />Is a Superfood</h2>
          <div className="gh-divider" />
          <p className="gh-subtitle">
            Unlike regular ghee, A2 Gir Cow Ghee processed via the Bilona method retains its full nutritional profile — making it one of the most potent whole foods in Ayurveda.
          </p>
          <div className="gh-benefits-list">
            {BENEFITS.map((b) => (
              <div className="gh-benefit-item" key={b.title}>
                <span className="gh-benefit-icon">{b.icon}</span>
                <div className="gh-benefit-text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={benefitImg}
            alt="A2 Gir Cow Ghee health benefits — brain, heart, digestion, immunity"
            className="gh-benefits-img"
            width="540" height="600"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Process Section ── */
function ProcessSection() {
  return (
    <section className="gh-section gh-process" aria-label="Bilona Method Process">
      <div className="gh-container">
        <div className="gh-center">
          <span className="gh-label">How We Make It</span>
          <h2 className="gh-title">The Sacred Bilona Method —<br />Step by Step</h2>
          <div className="gh-divider" style={{ margin: "0 auto 24px" }} />
          <p className="gh-subtitle">
            The Bilona method takes 3× longer and costs more than industrial ghee-making. We do it anyway — because your family's health is worth every extra hour.
          </p>
        </div>
        <div className="gh-process-steps">
          {STEPS.map((s) => (
            <article className="gh-step" key={s.n}>
              <div className="gh-step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <img
            src={bilonaImg}
            alt="Traditional Bilona churning process at Gauswarn Gaushala"
            style={{ borderRadius: 16, maxWidth: "100%", width: 700, boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}
            width="700" height="380"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials Section ── */
function TestimonialsSection() {
  return (
    <section className="gh-section gh-testimonials" aria-label="Customer Testimonials">
      <div className="gh-container">
        <div className="gh-center">
          <span className="gh-label">What Customers Say</span>
          <h2 className="gh-title">Real People. Real Results.</h2>
          <div className="gh-divider" style={{ margin: "0 auto 0" }} />
        </div>
        <div className="gh-testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <article className="gh-testi-card" key={t.name}>
              <div className="gh-testi-stars">{"★".repeat(t.stars)}</div>
              <p className="gh-testi-text">"{t.text}"</p>
              <div className="gh-testi-author">
                <div className="gh-testi-avatar">{t.initials}</div>
                <div className="gh-testi-name">
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="gh-section gh-faq" aria-label="Frequently Asked Questions">
      <div className="gh-container">
        <div className="gh-center">
          <span className="gh-label">Got Questions?</span>
          <h2 className="gh-title">Frequently Asked Questions</h2>
          <div className="gh-divider" style={{ margin: "0 auto 0" }} />
        </div>
        <div className="gh-faq-list" role="list">
          {FAQ_DATA.map((item, i) => (
            <div className="gh-faq-item" key={i} role="listitem">
              <button
                className={`gh-faq-q${open === i ? " open" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <span className={`gh-faq-icon${open === i ? " open" : ""}`}>+</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`gh-faq-a${open === i ? " open" : ""}`}
                role="region"
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="gh-cta" aria-label="Call to Action">
      <div className="gh-container">
        <h2>Make the Switch to Pure A2 Ghee Today</h2>
        <p>
          Join 22,000+ Indian families who have upgraded to authentic, farm-fresh Gauswarn A2 Gir Cow Ghee.
          Your gut, your brain, and your taste buds will thank you.
        </p>
        <div className="gh-cta-btns">
          <button className="gh-btn-primary" onClick={() => navigate("/products")} aria-label="Shop Gauswarn products">
            Shop All Products <FaArrowRight />
          </button>
          <a
            href="https://wa.me/917470915905?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Gauswarn%20A2%20Ghee"
            className="gh-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Gauswarn on WhatsApp"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
        <div className="gh-cta-trust">
          {["Free Delivery on ₹999+", "Easy 7-Day Returns", "100% Purity Guarantee", "COD Available"].map((t) => (
            <span className="gh-cta-trust-item" key={t}><FaCheck /> {t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   JSON-LD SCHEMAS
═══════════════════════════════════════════ */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Gauswarn A2 Gir Cow Bilona Ghee",
  description:
    "100% pure A2 Gir Cow Ghee made using the traditional Bilona method. NABL lab tested, FSSAI certified. No preservatives, no adulterants.",
  brand: { "@type": "Brand", name: "Gauswarn India" },
  offers: {
    "@type": "Offer",
    url: "https://gauswarn.com/products",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
  },
};

/* ═══════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════ */
export default function GauswarnHome() {
  return (
    <>
      {/* ── SEO / Meta ── */}
      <Helmet>
        <title>Buy Pure A2 Gir Cow Bilona Ghee Online | Gauswarn India</title>
        <meta
          name="description"
          content="Buy 100% pure A2 Gir Cow Bilona Ghee, cold-pressed oils & natural honey from Gauswarn India. NABL lab tested, FSSAI certified. Delivered fresh across India. No adulterants guaranteed."
        />
        <meta name="keywords" content="A2 gir cow ghee, bilona ghee, pure desi ghee, buy ghee online India, Gauswarn ghee, cold pressed oil, natural honey" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gauswarn.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Buy Pure A2 Gir Cow Bilona Ghee Online | Gauswarn India" />
        <meta property="og:description" content="100% pure A2 Gir Cow Bilona Ghee. NABL certified, FSSAI approved. Delivered fresh pan-India." />
        <meta property="og:url" content="https://gauswarn.com" />
        <meta property="og:image" content="https://gauswarn.com/favicon-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Pure A2 Gir Cow Bilona Ghee | Gauswarn India" />
        <meta name="twitter:description" content="100% pure A2 Gir Cow Ghee, cold-pressed oils & raw honey. Farm to table. NABL certified." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* ── Visually Hidden H1 (carousel already shown in hero h1) ── */}
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ProductsSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
