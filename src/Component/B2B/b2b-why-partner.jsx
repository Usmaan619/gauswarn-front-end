import React from "react";
import { Award, Package, TrendingUp, Shield } from "lucide-react";
import "./b2b-styles/b2b-why-partner.css";

const PartnerSection = () => {
  const features = [
    {
      icon: <Award size={28} strokeWidth={1.5} />,
      title: "Consistent Quality",
      description:
        "Premium, lab-tested, high-demand products that your customers trust and love.",
    },
    {
      icon: <Package size={28} strokeWidth={1.5} />,
      title: "Bulk Supply",
      description:
        "Fast fulfillment & reliable stock availability for uninterrupted business operations.",
    },
    {
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      title: "Competitive Margins",
      description:
        "Best wholesale pricing for partners with flexible payment terms and volume discounts.",
    },
    {
      icon: <Shield size={28} strokeWidth={1.5} />,
      title: "Brand Trust",
      description:
        "Strong customer loyalty & repeat sales backed by our established market reputation.",
    },
  ];

  return (
    <div className="partner-section">
      <div className="partner-container">
        <h1 className="partner-title">Why Partner With Us</h1>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
