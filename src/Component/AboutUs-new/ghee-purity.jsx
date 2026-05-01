import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../services/api";
import "./ghee-purity.css";

import ghee1Img from "../../asset/new-img/bilona-img/labbottle.webp";
import ghee2Img from "../../asset/new-img/bilona-img/cow-green.webp";
import ghee3Img from "../../asset/new-img/bilona-img/leaves-icon.webp";
import ghee4Img from "../../asset/new-img/bilona-img/green-dot-big-small.webp";
import ghee5Img from "../../asset/new-img/bilona-img/magic-star.webp";

import gheeBottleImg from "../../asset/new-img/about-main/bottle-about.webp";

const leftFeatures = [
  {
    icon: ghee1Img,
    title: "100% Pure A2 Desi Cow Ghee",
    description:
      "Every single batch of our premium Bilona Ghee undergoes rigorous laboratory testing to ensure it remains 100% free from any adulteration, synthetic chemicals, or harmful preservatives. We guarantee absolute purity in every jar.",
  },
  {
    icon: ghee2Img,
    title: "Milk Sourced from Gir Cows",
    description:
      "We exclusively use fresh A2 milk from grass-fed, ethically raised indigenous Gir cows. This practice ensures high levels of A2 beta-casein protein and essential nutrients that are often missing in mass-produced dairy.",
  },
  {
    icon: ghee3Img,
    title: "Traditional Bilona Method",
    description:
      "Our ghee is handcrafted using the ancient Vedic curd-churning method known as Bilona. This slow, traditional process ensures the ghee retains its natural granular texture, rich aroma, and full spectrum of nutritional benefits.",
  },
];

const rightFeatures = [
  {
    icon: ghee4Img,
    title: "Vedic Ayurvedic Process",
    description:
      "Our ghee-making journey follows a multi-stage Vedic process designed for maximum therapeutic benefit. From curdling to slow-heating, we preserve the life-force (Prana) and healing properties of the ghee.",
  },
  {
    icon: ghee3Img,
    title: "Eco-Friendly & Cruelty-Free",
    description:
      "At Gauswarn, we practice sustainable and ethical farming. Our cows are treated with love and respect, roaming freely in stress-free environments, which translates into the pure, high-vibration quality of our final product.",
  },
  {
    icon: ghee5Img,
    title: "Trusted A2 Ghee Brand",
    description:
      "As a lab-verified and transparent brand, our pure Bilona Ghee is trusted by thousands of health-conscious families across India for their daily nutrition, Ayurvedic remedies, and culinary masterpieces.",
  },
];

const BLOG_LINKS = [
  {
    label: "A2 Ghee Benefits & Uses",
    to: "/blog/what-is-a2-gir-cow-ghee-benefits-uses-why-it-matters",
  },
  {
    label: "A2 Ghee vs Regular Ghee",
    to: "/blog/a2-ghee-vs-regular-ghee-which-one-is-better-for-your-health",
  },
  {
    label: "Our Traditional Bilona Process",
    to: "/blog/what-is-the-bilona-method-why-it-matters-for-pure-a2-ghee",
  },
  {
    label: "A2 Ghee & Heart Health",
    to: "/blog/a2-ghee-and-heart-health-separating-myth-from-science",
  },
  {
    label: "A2 Ghee for Kids & Babies",
    to: "/blog/a2-ghee-for-babies-and-children-a-complete-parent-s-guide",
  },
  {
    label: "Why Gauswarn is #1 A2 Ghee",
    to: "/blog/why-gau-swarn-is-considered-the-best-a2-ghee-in-the-world",
  },
];

const FeatureItem = ({ icon, title, description }) => (
  <div className="new-ghee-feature-item">
    <img
      src={icon}
      alt={`${title} – Gauswarn A2 Cow Ghee`}
      className="new-ghee-feature-icon"
      width="48"
      height="48"
      loading="lazy"
    />
    <div>
      <h3 className="new-ghee-feature-title">{title}</h3>
      <p className="new-ghee-feature-desc">{description}</p>
    </div>
  </div>
);

const GheePurity = () => {
  const [dynamicLinks, setDynamicLinks] = useState([]);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await getData("admin/blogs?limit=6");
        if (res?.success && res?.blogs?.length > 0) {
          const formattedLinks = res.blogs.slice(0, 6).map((blog) => ({
            label: blog.title,
            to: `/blog/${blog.slug}`,
          }));
          setDynamicLinks(formattedLinks);
        } else {
          setDynamicLinks(BLOG_LINKS);
        }
      } catch (error) {
        console.error("Error fetching blogs for GheePurity:", error);
        setDynamicLinks(BLOG_LINKS);
      }
    };

    fetchLatestBlogs();
  }, []);

  const displayLinks = dynamicLinks.length > 0 ? dynamicLinks : BLOG_LINKS;

  return (
    <section className="new-ghee-purity">
      <p className="sr-only">
        Discover how Gauswarn India ensures lab-tested purity, ethical sourcing,
        and chemical-free A2 Cow Ghee using traditional methods.
      </p>

      <h2 className="new-ghee-purity-title">Benefits of Pure A2 Ghee</h2>

      <div className="new-ghee-purity-layout">
        <div className="new-ghee-column">
          {leftFeatures.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>

        <div className="new-ghee-bottle-wrapper">
          <img
            src={gheeBottleImg}
            alt="Pure A2 Cow Ghee bottle by Gauswarn India"
            className="new-ghee-bottle"
            loading="lazy"
            width="300"
            height="400"
          />
        </div>

        <div className="new-ghee-column">
          {rightFeatures.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Internal Links — Blog Topics for SEO */}
      <div className="internal-links-section">
        <p className="internal-links-title">📖 Read Our Expert Guides on A2 Ghee:</p>
        <div className="internal-links-grid">
          {displayLinks.map((link, idx) => (
            <Link key={idx} to={link.to} className="internal-link-card">
              <span>{link.label}</span>
              <span className="link-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GheePurity;

