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
    title: "100% Pure A2 Desi Cow Ghee",
    description:
      "Every batch of our Bilona Ghee is tested to ensure it's free from adulteration, chemicals, and preservatives.",
  },
  {
    icon: ghee2Img,
    title: "Milk Sourced from Gir Cows",
    description:
      "We use only A2 milk from grass-fed, ethically raised Gir cows to maintain high A2 beta-casein protein levels.",
  },
  {
    icon: ghee3Img,
    title: "Traditional Bilona Method",
    description:
      "Our ghee is made using the ancient curd-churning method, ensuring it's 100% natural and nutrient-rich.",
  },
];

const rightFeatures = [
  {
    icon: ghee4Img,
    title: "Vedic Ayurvedic Process",
    description:
      "Our ghee follows the multi-stage Vedic process for maximum safety, aroma, and therapeutic benefits.",
  },
  {
    icon: ghee3Img,
    title: "Eco-Friendly & Cruelty-Free",
    description:
      "We follow sustainable, ethical farming practices, ensuring our A2 Gir cows are happy and healthy.",
  },
  {
    icon: ghee5Img,
    title: "Trusted A2 Ghee Brand",
    description:
      "Our lab-verified pure bilona ghee is trusted by thousands of Indian families for daily nutrition.",
  },
];

const FeatureItem = ({ icon, title, description }) => (
  <div className="new-ghee-feature-item">
    <img
      src={icon}
      alt={`${title} – Gauswarn A2 Gir Cow Ghee`}
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
    </section>
  );
};

export default GheePurity;
