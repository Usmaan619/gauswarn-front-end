import React from "react";
import "./ghee-purity.css";

import ghee1Img from "../../asset/new-img/bilona-img/labbottle.png";
import ghee2Img from "../../asset/new-img/bilona-img/cow-green.png";
import ghee3Img from "../../asset/new-img/bilona-img/leaves-icon.png";
import ghee4Img from "../../asset/new-img/bilona-img/green-dot-big-small.png";
import ghee5Img from "../../asset/new-img/bilona-img/magic-star.png";

import gheeBottleImg from "../../asset/new-img/about-main/bottle-about.png";

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
    <img src={icon} alt={title} className="new-ghee-feature-icon" />
    <div>
      <h3 className="new-ghee-feature-title">{title}</h3>
      <p className="new-ghee-feature-desc">{description}</p>
    </div>
  </div>
);

const GheePurity = () => {
  return (
    <section className="new-ghee-purity">
      <h1 className="new-ghee-purity-title">
        Lab-tested purity you can trust
      </h1>

      <div className="new-ghee-purity-layout">
        <div className="new-ghee-column">
          {leftFeatures.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>

        <div className="new-ghee-bottle-wrapper">
          <img
            src={gheeBottleImg}
            alt="Pure A2 Ghee Bottle"
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
