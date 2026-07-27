import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import "./b2b-styles/b2b-contact-section.css";

const ContactPage = () => {
  return (
    <>
      <div className="b2b-contact-container">
        <div className="b2b-map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.756483627257!2d75.86814137476085!3d22.700107428286067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce21e4694af%3A0xa8938712e4fc840d!2s11%2C%20Manish%20Baag%20Colony%2C%20Navlakha%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1731327925359!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy" decoding="async"
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
