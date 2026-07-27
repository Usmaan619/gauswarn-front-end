"use client";

import "./benefit-card.css";

export default function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
      <img src={benefit?.icon} alt="" srcset="" className="benefit-icon" />
      <h3 className="benefit-title">{benefit?.title}</h3>
    </div>
  );
}
