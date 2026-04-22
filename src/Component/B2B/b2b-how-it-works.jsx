import { FileText, Calculator, CircleCheckBig, Truck } from "lucide-react";
import "./b2b-styles/b2b-how-it-work.css";

const PartnerSection = () => {
  const features = [
    {
      icon: <FileText size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Submit Inquiry",
      description:
        "Fill out our partnership form with your business details and requirements.",
    },
    {
      icon: <Calculator size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Get Custom Quote",
      description:
        "Receive personalized pricing based on your volume and product selection.",
    },
    {
      icon: <CircleCheckBig size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Approve & Place Order",
      description:
        "Review terms, approve the quotation, and confirm your bulk order.",
    },
    {
      icon: <Truck size={28} strokeWidth={1.5} aria-hidden="true" />,
      title: "Packaging & Dispatch",
      description:
        "We ensure secure packaging and timely delivery to your location.",
    },
  ];

  return (
    <section className="b2b-how-partner-section">
      <p className="sr-only">
        Step-by-step process to partner with Gauswarn India for wholesale and
        bulk A2 Gir Cow Ghee supply.
      </p>


      <div className="b2b-how-partner-container">
        {/* Section Heading */}
        <h2 className="b2b-how-partner-title">How Our B2B Process Works</h2>

        <h3 className="sectionSubtitle">
          Start your journey in 4 simple steps
        </h3>

        {/* Ordered Steps */}
        <ol className="b2b-how-features-grid">
          {features.map((feature, index) => (
            <li key={index} className="b2b-how-feature-card">
              <div className="b2b-how-icon-wrapper">{feature.icon}</div>
              <h4 className="b2b-how-feature-title">{feature.title}</h4>
              <p className="b2b-how-feature-description">
                {feature.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default PartnerSection;
