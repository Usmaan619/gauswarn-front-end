import React from "react";

import "./ghee-purity.css";

import ghee1Img from "../../asset/new-img/bilona-img/labbottle.png";
import ghee2Img from "../../asset/new-img/bilona-img/cow-green.png";
import ghee3Img from "../../asset/new-img/bilona-img/leaves-icon.png";
import ghee4Img from "../../asset/new-img/bilona-img/green-dot-big-small.png";
import ghee5Img from "../../asset/new-img/bilona-img/magic-star.png";

const GheePurity = () => {
  const features = [
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
        "Each jar goes through strict lab analysis for nutrition, safety, and purity.",
    },
    {
      icon: ghee3Img,

      title: "Eco-Friendly & Ethical Farming",
      description:
        "We follow clean, sustainable, and cruelty-free practices at our partner farms.",
    },
    {
      icon: ghee5Img,

      title: "Trusted by Thousands of Families",
      description:
        "Our lab-verified ghee is relied upon by households for daily health & nutrition.",
    },
  ];

  return (
    <>
      <div className="ghee-purity-aboutus-ghee-purity-container">
        <h1 className="ghee-purity-aboutus-main-title mt-5">
          Lab-tested purity you can trust
        </h1>

        <div className="ghee-purity-aboutus-content-wrapper">
          <div className="ghee-purity-aboutus-features-left">
            {features.map((feature, index) => (
              <div key={index} className="ghee-purity-aboutus-feature-item">
                <img
                  src={feature.icon}
                  className="ghee-purity-aboutus-icon-wrapper green"
                />
                <div className="ghee-purity-aboutus-feature-content">
                  <h3 className="ghee-purity-aboutus-feature-title">
                    {feature.title}
                  </h3>
                  <p className="ghee-purity-aboutus-feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="ghee-purity-aboutus-center-image">
            <div className="ghee-purity-aboutus-ghee-jar">
              <div className="ghee-purity-aboutus-jar-container">
                <div className="ghee-purity-aboutus-jar-lid"></div>
                <div className="ghee-purity-aboutus-jar-body">
                  <div className="ghee-purity-aboutus-jar-label">
                    <div className="ghee-purity-aboutus-brand-name">
                      Ghir Swarn's
                    </div>
                    <div className="ghee-purity-aboutus-product-title">
                      A2 Gir
                      <br />
                      COW GHEE
                    </div>
                    <div className="ghee-purity-aboutus-product-subtitle">
                      Made from milk
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ghee-purity-aboutus-features-right">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="ghee-purity-aboutus-feature-item">
                <img
                  src={feature.icon}
                  className="ghee-purity-aboutus-icon-wrapper green"
                />

                <div className="ghee-purity-aboutus-feature-content">
                  <h3 className="ghee-purity-aboutus-feature-title">
                    {feature.title}
                  </h3>
                  <p className="ghee-purity-aboutus-feature-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GheePurity;
