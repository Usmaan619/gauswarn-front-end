import React from "react";
import { Building2, Globe, Users } from "lucide-react";
import "./b2b-styles/b2b-about-section.css";

const B2bAboutSection = ({ onQuoteClick }) => {
  return (
    <section className="b2b-aboutSection">
      <p className="sr-only">
        Learn about Gauswarn India’s B2B and wholesale partnership program for
        bulk A2 Gir Cow Ghee supply across India.
      </p>

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
                text: "Minimum order quantity depends on packaging and location. Our team provides flexible MOQ options for distributors and retailers.",
              },
            },
            {
              "@type": "Question",
              name: "Is your ghee certified and lab tested?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our A2 Gir Cow Ghee is lab-tested and certified to ensure purity, safety, and quality for B2B and wholesale supply.",
              },
            },
            {
              "@type": "Question",
              name: "Do you support private labeling or bulk packaging?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we offer bulk packaging and private labeling support for eligible B2B partners.",
              },
            },
            {
              "@type": "Question",
              name: "How can I become a B2B partner with Gauswarn India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can submit a partnership request using the B2B form on this page, and our team will contact you with pricing and onboarding details.",
              },
            },
          ],
        })}
      </script>

      <div className="container b2b-aboutGrid">
        <div className="b2b-statsCardModern">
          <div className="b2b-statsList">
            {[
              ["Active Partners", "500+"],
              ["Product Range", "150+"],
              ["Years in Business", "20+"],
              ["Satisfaction Rate", "98%"],
            ].map(([label, value], i) => (
              <div key={i} className="b2b-statsRow">
                <span className="b2b-statsLabel">{label}</span>
                <span className="b2b-statsValue">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="b2b-aboutTextModern">
          <h2 className="b2b-sectionTitleModern">About Our B2B Program</h2>

          <p className="b2b-aboutDescriptionModern">
            Our B2B partnership program empowers retailers, wholesalers,
            distributors, and corporate clients with premium products and
            flexible pricing.
          </p>

          <p className="b2b-aboutDescriptionModern">
            We serve supermarkets, gyms, spas, Ayurvedic stores, online sellers,
            and export partners across India.
          </p>

          <hr className="b2b-dividerModern" />

          <div className="b2b-featuresModern">
            {[
              {
                icon: <Building2 color="#29A44F" aria-hidden="true" />,
                title: "Established Network",
                desc: "500+ active partners across India",
              },
              {
                icon: <Users color="#29A44F" aria-hidden="true" />,
                title: "24/7 Personal Care",
                desc: "Account manager for every partner",
              },
              {
                icon: <Globe color="#29A44F" aria-hidden="true" />,
                title: "Pan-India Reach",
                desc: "Fast logistics nationwide",
              },
            ].map((item, i) => (
              <div key={i} className="b2b-featureModern">
                <span className="b2b-featureIconModern">{item.icon}</span>
                <span>
                  <b>{item.title}</b>
                  <br />
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

          <button
            className="b2b-ctaButtonModern"
            aria-label="Get a free wholesale quote for A2 Gir Cow Ghee"
            onClick={onQuoteClick}
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default B2bAboutSection;
