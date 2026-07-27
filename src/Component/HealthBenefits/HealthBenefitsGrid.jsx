import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./health-benefits-grid.css";
import HEALTH_BENEFITS from "./health-benefits-data.js";

/* ═══════════════════════════════════
   SVG ICONS — Lightweight, no library
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

/* ═══════════════════════════════════
   BENEFIT CARD — Now clickable
   ═══════════════════════════════════ */
const BenefitCard = ({ slug, title, description, index, isVisible }) => {
  const Icon = ICON_MAP[slug];
  return (
    <Link
      to={`/health-benefits/${slug}`}
      className={`hbg-card${isVisible ? " hbg-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-label={`Read more about: ${title}`}
    >
      <div className="hbg-icon-wrap">
        {Icon && <Icon />}
      </div>
      <h3 className="hbg-card-title">{title}</h3>
      <p className="hbg-card-desc">{description}</p>
      <span className="hbg-read-more">Read Full Article →</span>
    </Link>
  );
};

/* ═══════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════ */
const HealthBenefitsGrid = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hbg-section"
      id="health-benefits"
      aria-labelledby="hbg-heading"
    >
      {/* Section Heading */}
      <div className="hbg-header">
        <span className="hbg-badge">✦ Science-Backed Benefits</span>
        <h2 id="hbg-heading" className="hbg-title">
          A2 Desi Ghee Health Benefits for Brain, Heart &amp; Immunity
        </h2>
        <p className="hbg-subtitle">
          Discover why millions of Indian families trust pure A2 Bilona Ghee for 
          everyday health, nutrition, and Ayurvedic wellness.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="hbg-grid" role="list">
        {HEALTH_BENEFITS.map((benefit, idx) => (
          <BenefitCard
            key={benefit.slug}
            slug={benefit.slug}
            title={benefit.title}
            description={benefit.description}
            index={idx}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={`hbg-cta-wrap${isVisible ? " hbg-visible" : ""}`}>
        <p className="hbg-cta-text">
          Experience the difference of 100% pure, lab-tested A2 Gir Cow Ghee — 
          handcrafted using the traditional Bilona method.
        </p>
      </div>
    </section>
  );
};

export default HealthBenefitsGrid;
