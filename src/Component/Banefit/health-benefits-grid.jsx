"use client";

import BenefitCard from "./benefit-card";
import "./health-benefits-grid.css";
import image1 from "../../asset/new-img/banefit/lowers.png";
import image2 from "../../asset/new-img/banefit/brain.png";
import image3 from "../../asset/new-img/banefit/muscel.png";
import image4 from "../../asset/new-img/banefit/heart.png";
import image5 from "../../asset/new-img/banefit/bad.png";
import image6 from "../../asset/new-img/banefit/hand-eye.png";

// src/asset/new-img/banefit/bad.png src/asset/new-img/banefit/brain.png src/asset/new-img/banefit/hand-eye.png src/asset/new-img/banefit/heart.png src/asset/new-img/banefit/lowers.png src/asset/new-img/banefit/muscel.png

const benefits = [
  {
    id: 1,
    icon: image1,
    title: "Lowers Bad Cholesterol",
    description: "Supports joint and bone health",
  },
  {
    id: 2,
    icon: image2,
    title: "Lowers Bad Cholesterol",
    description: "Enhances cognitive function",
  },
  {
    id: 3,
    icon: image3,
    title: "Lowers Bad Cholesterol",
    description: "Builds muscle strength",
  },
  {
    id: 4,
    icon: image4,
    title: "Lowers Bad Cholesterol",
    description: "Supports heart health",
  },
  {
    id: 5,
    icon: image5,
    title: "Lowers Bad Cholesterol",
    description: "Improves vision",
  },
  {
    id: 6,
    icon: image6,
    title: "Lowers Bad Cholesterol",
    description: "Promotes wellness",
  },
];

export default function HealthBenefitsGrid() {
  return (
    <div className="benefits-grid-wrapper">
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </div>
  );
}
