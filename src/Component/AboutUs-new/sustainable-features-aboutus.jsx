import React from "react";
import "./sustainable-features-aboutus.css";
import SustainableFeaturesAboutusImg1 from "../../asset/new-img/sustainable-features-aboutus/sustainable-features-aboutus1.png";
import SustainableFeaturesAboutusImg2 from "../../asset/new-img/sustainable-features-aboutus/sustainable-features-aboutus2.png";
import SustainableFeaturesAboutusImg3 from "../../asset/new-img/sustainable-features-aboutus/sustainable-features-aboutus3.png";
import SustainableFeaturesAboutusImg4 from "../../asset/new-img/sustainable-features-aboutus/sustainable-features-aboutus4.png";
import SustainableFeaturesAboutusImg5 from "../../asset/new-img/sustainable-features-aboutus/sustainable-features-aboutus5.png";

const SustainableFeaturesAboutus = () => {
  const features = [
    {
      id: 1,
      title: "Sustainable Farming Techniques",
      icon: SustainableFeaturesAboutusImg1,
    },
    {
      id: 2,
      title: "Locally & Ethically Sourced",
      icon: SustainableFeaturesAboutusImg2,
    },
    {
      id: 3,
      title: "Chemical & Pesticide-Free",
      icon: SustainableFeaturesAboutusImg3,
    },
    {
      id: 4,
      title: "Non-GMO Produce",
      icon: SustainableFeaturesAboutusImg4,
    },
    {
      id: 5,
      title: "From Grass-Fed Gir Cows",
      icon: SustainableFeaturesAboutusImg5,
    },
  ];

  return (
    <section className="sustainable-features">
      <ul className="sustainable-features-container">
        {features.map((feature) => (
          <li key={feature.id} className="sustainable-feature-item">
            <img
              src={feature.icon}
              alt={`${feature.title} at Gauswarn India`}
              loading="lazy"
              style={feature.id === 5 ? { padding: "20px" } : {}}
              className="sustainable-icon-wrapper"
            />
            <h3 className="sustainable-feature-title">{feature.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SustainableFeaturesAboutus;
