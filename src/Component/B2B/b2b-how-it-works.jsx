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

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Wholesale & Bulk A2 Gir Cow Ghee Supply",
          description:
            "Gauswarn India provides bulk and wholesale supply of A2 Gir Cow Ghee for retailers, distributors, wholesalers, and corporate buyers across India.",
          provider: {
            "@type": "Organization",
            name: "Gauswarn India",
            url: "https://gauswarn.com",
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          audience: {
            "@type": "BusinessAudience",
            audienceType: [
              "Retailers",
              "Distributors",
              "Wholesalers",
              "Corporate Buyers",
              "Exporters",
            ],
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            },
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you provide wholesale A2 Gir Cow Ghee?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Gauswarn India supplies bulk and wholesale A2 Gir Cow Ghee to retailers, distributors, and corporate partners across India.",
              },
            },
            {
              "@type": "Question",
              name: "What is the minimum order quantity for B2B partners?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Minimum order quantity depends on packaging format and location. Our team offers flexible MOQ options for B2B and wholesale partners.",
              },
            },
            {
              "@type": "Question",
              name: "Is your A2 Gir Cow Ghee lab tested and certified?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our A2 Gir Cow Ghee is lab tested and certified to ensure purity, safety, and consistent quality for B2B supply.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer bulk packaging or private labeling?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we provide bulk packaging options and private labeling support for eligible B2B and wholesale partners.",
              },
            },
            {
              "@type": "Question",
              name: "How can I become a B2B partner with Gauswarn India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can submit your details through the B2B partnership form on this page, and our team will contact you with pricing and onboarding information.",
              },
            },
          ],
        })}
      </script>

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
