import { Award, Package, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import "./b2b-styles/b2b-why-partner.css";

const PartnerSection = () => {
  const features = [
    {
      icon: <Award size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Consistent Quality",
      description: (
        <>
          Premium, <Link to="/lab-report">lab-tested</Link>, high-demand products that your customers trust and love.
        </>
      ),
    },
    {
      icon: <Package size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Reliable Bulk Supply",
      description:
        "Fast fulfillment and dependable stock availability for uninterrupted business operations.",
    },
    {
      icon: <TrendingUp size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Competitive Margins",
      description:
        "Wholesale pricing with flexible payment terms and volume-based discounts.",
    },
    {
      icon: <Shield size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Trusted Brand",
      description: (
        <>
          Strong customer loyalty and repeat sales backed by Gauswarn India’s <Link to="/about">reputation</Link>.
        </>
      ),
    },
  ];

  return (
    <section className="partner-section">
      <p className="sr-only">
        Benefits of partnering with Gauswarn India for wholesale and bulk A2 Gir
        Cow Ghee supply across India.
      </p>

      <div className="partner-container">
        {/* Section Heading */}
        <h2 className="partner-title">Why Partner With Gauswarn India</h2>

        {/* Features List */}
        <ul className="features-grid">
          {features.map((feature, index) => (
            <li key={index} className="feature-card">
              <div className="icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PartnerSection;
