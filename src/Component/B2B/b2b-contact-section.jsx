import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import "./b2b-styles/b2b-contact-section.css";
import Seo from "../SEO/Seo";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="B2B & Wholesale A2 Gir Cow Ghee | Gauswarn India"
        description="Partner with Gauswarn India for bulk and wholesale A2 Gir Cow Ghee. Ethical sourcing, bilona process and pan-India supply."
        url="https://gauswarn.com/b2b"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gauswarn.com/#b2b",
            name: "Gauswarn India",
            url: "https://gauswarn.com/b2b",
            logo: "https://gauswarn.com/favicon-512x512.png",
            image: "https://gauswarn.com/favicon-512x512.png",
            description:
              "Gauswarn India is a trusted supplier of bulk and wholesale A2 Gir Cow Ghee for retailers, distributors and corporate buyers across India.",
            telephone: "+91-7470915905",
            email: "info@gauswarn.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "11 Manish Baag, Sapna Sangeeta Road",
              addressLocality: "Indore",
              addressRegion: "MP",
              postalCode: "452001",
              addressCountry: "IN",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "10:00",
                closes: "20:00",
              },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-7470915905",
              contactType: "B2B Sales",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
          })}
        </script>
      </Seo>

      <div className="b2b-contact-container">
        <div className="b2b-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.756483627257!2d75.86814137476085!3d22.700107428286067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce21e4694af%3A0xa8938712e4fc840d!2s11%2C%20Manish%20Baag%20Colony%2C%20Navlakha%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1731327925359!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>

        <div className="b2b-contact-info-section">
          <h2 className="b2b-contact-title">Contact Us</h2>

          <div className="b2b-contact-item">
            <div className="b2b-icon-wrapper phone-icon">
              <Phone size={24} />
            </div>
            <div className="b2b-contact-details">
              <h3 className="b2b-contact-label">Phone</h3>
              <p className="b2b-contact-value">
                +91-74709-15905,+91-9685715905
              </p>
            </div>
          </div>

          <div className="b2b-contact-item">
            <div className="b2b-icon-wrapper email-icon">
              <Mail size={24} />
            </div>
            <div className="b2b-contact-details">
              <h3 className="b2b-contact-label">E-mail</h3>
              <p className="b2b-contact-value">info@gauswarn.com</p>
            </div>
          </div>

          <div className="b2b-contact-item">
            <div className="b2b-icon-wrapper clock-icon">
              <Clock size={24} />
            </div>
            <div className="b2b-contact-details">
              <h3 className="b2b-contact-label">Office Hours</h3>
              <p className="b2b-contact-value">Mon - Sat: 10 AM to 8 PM</p>
            </div>
          </div>

          <div className="b2b-map-locations">
            <h2 className="b2b-locations-title">Find Us on the Map</h2>

            <div className="b2b-location-block">
              <h3 className="b2b-location-heading">Manufacturing Unit</h3>
              <p className="b2b-location-address">
                s no 174, near gaytri mandir, behind kanchan stone dtc,
                alankapuram road wadmukh, alandi rural, pune, maharashtra -
                412105
              </p>
            </div>

            <div className="b2b-location-block">
              <h3 className="b2b-location-heading">Corporate Office</h3>
              <p className="b2b-location-address">
                11 Manish Baag, Sapna Sangeeta Road, Indore, Madhya Pradesh
                452001
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
