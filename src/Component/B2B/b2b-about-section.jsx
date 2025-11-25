import React from "react";
import { Building2, Globe, Users } from "lucide-react";

import "./b2b-styles/b2b-about-section.css";

const B2bAboutSection = () => {
  return (
    <section className="b2b-aboutSection">
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
          <h1 className="b2b-sectionTitleModern">About Our B2B Program</h1>
          <p className="b2b-aboutDescriptionModern">
            Our B2B partnership program is designed to empower businesses across
            multiple sectors. Whether you're a retailer, wholesaler,
            distributor, or corporate client, we provide the premium products,
            pricing flexibility, and support you need to thrive.
          </p>
          <p className="b2b-aboutDescriptionModern">
            We work with supermarkets, gyms, spas, Ayurvedic stores, online
            sellers, and export partners to deliver consistent quality and
            reliable supply chains that drive profitability and customer
            satisfaction.
          </p>
          <hr className="b2b-dividerModern" />

          <div className="b2b-featuresModern">
            {[
              {
                icon: <Building2 color="#29A44F" />,
                title: "Established Network",
                desc: "500+ active partners across India",
              },
              {
                icon: <Users color="#29A44F" />,
                title: "Dedicated Support",
                desc: "Account manager for every partner",
              },
              {
                icon: <Globe color="#29A44F" />,
                title: "Pan-India Reach",
                desc: "Fast logistics nationwide",
              },
            ].map((item, i) => (
              <div key={i} className="b2b-featureModern">
                <span className="b2b-featureIconModern">{item.icon}</span>
                <span>
                  <b>{item.title}</b> <br />
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

          <button className="b2b-ctaButtonModern">Get a Free Quote</button>
        </div>
      </div>
    </section>
  );
};

export default B2bAboutSection;
