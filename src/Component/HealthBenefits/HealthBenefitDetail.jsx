import React from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../SEO/Seo.jsx";
import HEALTH_BENEFITS from "./health-benefits-data.js";
import "./health-benefit-detail.css";

/* ═══════════════════════════════════
   SVG ICONS — same set from grid
   ═══════════════════════════════════ */
const BoneIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 8a5 5 0 0 1 8 0 5 5 0 0 1 8 0c2.5 3-1 7-4 8l-1 16c3 1 6.5 5 4 8a5 5 0 0 1-8 0 5 5 0 0 1-8 0c-2.5-3 1-7 4-8l1-16c-3-1-6.5-5-4-8z" />
    <circle cx="18" cy="24" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="26" cy="24" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 40V24" />
    <path d="M24 24c0-6-4-10-9-10s-7 4-7 7 2 5 5 6" />
    <path d="M24 24c0-6 4-10 9-10s7 4 7 7-2 5-5 6" />
    <path d="M13 21c-3 0-5 2-5 5s3 6 6 6" />
    <path d="M35 21c3 0 5 2 5 5s-3 6-6 6" />
    <path d="M14 32c-1 2 0 5 3 6s5 0 7-2" />
    <path d="M34 32c1 2 0 5-3 6s-5 0-7-2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 4L6 12v10c0 12 8 18 18 22 10-4 18-10 18-22V12L24 4z" />
    <path d="M17 24l5 5 9-10" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 42s-16-10-16-22a9 9 0 0 1 16-5.5A9 9 0 0 1 40 20c0 12-16 22-16 22z" />
    <path d="M18 20c0-2 2-4 4-3" />
  </svg>
);

const DropletIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 4C24 4 10 20 10 30a14 14 0 0 0 28 0C38 20 24 4 24 4z" />
    <path d="M20 30a4 4 0 0 0 8 0" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 24s8-14 20-14 20 14 20 14-8 14-20 14S4 24 4 24z" />
    <circle cx="24" cy="24" r="6" />
    <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
  </svg>
);

/* Map slug → icon component */
const ICON_MAP = {
  "strong-bones-joint-health": BoneIcon,
  "brain-power-memory-boost": BrainIcon,
  "boost-immunity-naturally": ShieldIcon,
  "heart-health": HeartIcon,
  "healthy-fats": DropletIcon,
  "eye-health-vision-support": EyeIcon,
};

/* Arrow icons */
const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

/* ═══════════════════════════════════
   MAIN DETAIL PAGE COMPONENT
   ═══════════════════════════════════ */
const HealthBenefitDetail = () => {
  const { slug } = useParams();
  const benefit = HEALTH_BENEFITS.find((b) => b.slug === slug);

  if (!benefit) {
    return (
      <div style={{ textAlign: "center", padding: "120px 24px", minHeight: "60vh" }}>
        <h2 style={{ color: "#3e2c1c", marginBottom: 16 }}>Benefit Not Found</h2>
        <p style={{ color: "#6b5540", marginBottom: 24 }}>
          The health benefit you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          style={{
            color: "#c49b55",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const Icon = ICON_MAP[benefit.slug];
  const relatedBenefits = HEALTH_BENEFITS.filter((b) => b.slug !== benefit.slug).slice(0, 3);

  /* Structured data for the article */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: benefit.title,
    description: benefit.description,
    author: {
      "@type": "Organization",
      name: "Gauswarn India",
      url: "https://gauswarn.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Gauswarn India",
      logo: {
        "@type": "ImageObject",
        url: "https://gauswarn.com/favicon-512x512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gauswarn.com/health-benefits/${benefit.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gauswarn.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Health Benefits",
        item: "https://gauswarn.com/#health-benefits",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: benefit.title,
        item: `https://gauswarn.com/health-benefits/${benefit.slug}`,
      },
    ],
  };

  return (
    <>
      <Seo
        title={benefit.metaTitle}
        description={benefit.metaDescription}
        keywords={benefit.metaKeywords}
        url={`https://gauswarn.com/health-benefits/${benefit.slug}`}
        structuredData={[articleSchema, breadcrumbSchema]}
        type="article"
      />

      {/* ── HERO ── */}
      <section className="hbd-hero" aria-label={benefit.title}>
        <div className="hbd-hero-content">
          <Link to="/#health-benefits" className="hbd-back-link" aria-label="Back to all benefits">
            <ArrowLeft />
            Back to All Benefits
          </Link>

          {Icon && (
            <div className="hbd-hero-icon">
              <Icon />
            </div>
          )}

          <span className="hbd-hero-tagline">{benefit.heroTagline}</span>
          <h1 className="hbd-hero-title">{benefit.title}</h1>
          <p className="hbd-hero-desc">{benefit.description}</p>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="hbd-body">
        <div className="hbd-content">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="hbd-breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li className="hbd-breadcrumb-sep">›</li>
              <li><Link to="/#health-benefits">Health Benefits</Link></li>
              <li className="hbd-breadcrumb-sep">›</li>
              <li className="hbd-breadcrumb-current">{benefit.title}</li>
            </ol>
          </nav>

          {/* Content Sections */}
          {benefit.sections.map((section, idx) => (
            <article key={idx} className="hbd-section">
              <span className="hbd-section-number">{idx + 1}</span>
              <h2 className="hbd-section-heading">{section.heading}</h2>
              <p className="hbd-section-text">{section.content}</p>
            </article>
          ))}

          {/* CTA */}
          <div className="hbd-cta">
            <h2 className="hbd-cta-title">
              Try Pure A2 Bilona Ghee Today
            </h2>
            <p className="hbd-cta-text">
              Experience the difference of 100% pure, lab-tested A2 Gir Cow Ghee — 
              handcrafted using the traditional Bilona method.
            </p>
            <Link to="/products" className="hbd-cta-btn">
              Shop Now
              <ArrowRight />
            </Link>
          </div>

          {/* Related Benefits */}
          <div className="hbd-related">
            <h2 className="hbd-related-title">Explore More Benefits</h2>
            <div className="hbd-related-grid">
              {relatedBenefits.map((rb) => {
                const RbIcon = ICON_MAP[rb.slug];
                return (
                  <Link
                    key={rb.slug}
                    to={`/health-benefits/${rb.slug}`}
                    className="hbd-related-card"
                    aria-label={rb.title}
                  >
                    {RbIcon && (
                      <div className="hbd-related-card-icon">
                        <RbIcon />
                      </div>
                    )}
                    <h3 className="hbd-related-card-title">{rb.title}</h3>
                    <span className="hbd-related-card-link">Read More →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthBenefitDetail;
