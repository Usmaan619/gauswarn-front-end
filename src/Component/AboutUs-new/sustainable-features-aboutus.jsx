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
      title: "Chemical & Pesticide-free",
      icon: SustainableFeaturesAboutusImg3,
    },
    {
      id: 4,
      title: "Non-Genetically Modified Organism Produce",
      icon: SustainableFeaturesAboutusImg4,
    },
    {
      id: 5,
      title: "From Grass-Fed Gir Cows",
      icon: SustainableFeaturesAboutusImg5,
      height: 85,
    },
  ];

  return (
    <div className="sustainable-features">
      <div className="sustainable-features-container">
        {features.map((feature) => (
          <div key={feature?.id} className="sustainable-feature-item">
            <img
              src={feature?.icon}
              alt={feature?.title}
              style={feature.id === 5 ? { padding: "20px" } : {}}
              className="sustainable-icon-wrapper"
            />
            <h3 className="sustainable-feature-title">{feature?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainableFeaturesAboutus;
