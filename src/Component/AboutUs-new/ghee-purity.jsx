import React from "react";
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
    title: "Certified for 100% Purity",
    description:
      "Every batch is tested to ensure it's free from adulteration, chemicals, and preservatives.",
  },
  {
    icon: ghee2Img,
    title: "Milk Sourced from Happy Desi Cows",
    description:
      "We use only A2 milk from ethically raised cows to maintain natural richness and quality.",
  },
  {
    icon: ghee3Img,
    title: "No Chemicals, No Additives",
    description:
      "Our ghee is completely natural — free from artificial flavors, colors, or enhancers.",
  },
];

const rightFeatures = [
  {
    icon: ghee4Img,
    title: "Multi-Stage Quality Checks",
    description:
      "Every batch of our ghee is carefully tested for nutrition, safety, and purity before it reaches you.",
  },
  {
    icon: ghee3Img,
    title: "Eco-Friendly & Ethical Farming",
    description:
      "We follow clean, sustainable, and cruelty-free practices at our farms.",
  },
  {
    icon: ghee5Img,
    title: "Trusted by Thousands of Families",
    description:
      "Our lab-verified ghee is relied upon by households for daily health & nutrition.",
  },
];

const FeatureItem = ({ icon, title, description }) => (
  <div className="new-ghee-feature-item">
    <img
      src={icon}
      alt={`${title} – Gauswarn A2 Gir Cow Ghee`}
      className="new-ghee-feature-icon"
    />
    <div>
      <h3 className="new-ghee-feature-title">{title}</h3>
      <p className="new-ghee-feature-desc">{description}</p>
    </div>
  </div>
);

const GheePurity = () => {
  return (
    <section className="new-ghee-purity">
      <p className="sr-only">
        Discover how Gauswarn India ensures lab-tested purity, ethical sourcing,
        and chemical-free A2 Gir Cow Ghee using traditional methods.
      </p>

      <h2 className="new-ghee-purity-title">Lab-tested purity you can trust</h2>

      <div className="new-ghee-purity-layout">
        <div className="new-ghee-column">
          {leftFeatures.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>

        <div className="new-ghee-bottle-wrapper">
          <img
            src={gheeBottleImg}
            alt="Pure A2 Gir Cow Ghee bottle by Gauswarn India"
            className="new-ghee-bottle"
            loading="lazy"
          />
        </div>

        <div className="new-ghee-column">
          {rightFeatures.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GheePurity;
