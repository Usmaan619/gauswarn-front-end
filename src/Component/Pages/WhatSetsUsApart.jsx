import React from "react";
import SustainableIcon from "../../asset/img/WhyChoose/20.png"; // Add icon paths
import EthicalIcon from "../../asset/img/WhyChoose/21.png";
import ChemicalFreeIcon from "../../asset/img/WhyChoose/22.png";
import NonGMOIcon from "../../asset/img/WhyChoose/23.png";
import Chemical from "../../asset/img/WhyChoose/ChemicalIcon.png";
import JarIcon from "../../asset/img/Ghee/ds (6).png"; // Jar icons in the top left/right

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: SustainableIcon,
      alt: "Sustainable Farming",
      text: "Sustainable Farming Techniques",
    },
    {
      icon: EthicalIcon,
      alt: "Locally & Ethically Sourced",
      text: "Locally & Ethically Sourced",
    },
    {
      icon: Chemical,
      alt: "Chemical & Pesticide Free",
      text: "Chemical & Pesticide-free",
    },
    {
      icon: NonGMOIcon,
      alt: "Non-GMO Produce",
      text: "Non-GMO Produce",
    },
    {
      icon: ChemicalFreeIcon,
      alt: "Global Testing Standards",
      text: "189 Global Testing Standards",
    },
  ];
  return (
    <div className="container py-5">
    <div className="background-color-eggshell rounded-3 py-4 d-lg-flex justify-content-evenly align-items-center text-center d-block" data-aos="zoom-in-down">
      <div>
        <img src={JarIcon} alt="Jar" className="ghee-icon-left" />
      </div>
      <div>
        <div className="font-size-27 fw-bold text-color-pullman-green py-2">
          Why Choose Us ?
        </div>
        <div className="font-size-18 text-color-pullman-green py-2">
          Culture of sustainability and wholesome living, a healthier you and a healthier planet.
        </div>
      </div>
      <div>
        <img src={JarIcon} alt="Jar" className="ghee-icon-right" />
      </div>
    </div>

    <div className="apart-features pt-5">
      {features.map((feature, index) => (
        <div className="feature" key={index}>
          <img src={feature.icon} alt={feature.alt} />
          <p className="text-color-pullman-green">{feature.text}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default WhatSetsUsApart;
