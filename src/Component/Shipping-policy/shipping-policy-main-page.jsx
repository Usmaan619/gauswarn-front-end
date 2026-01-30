import React from "react";
import "./shipping-policy-main-page.css";

const ShippingPolicy = () => {
  return (
    <div className="shipping-container">
      <div className="shipping-header">
        <h4 className="shipping-title">Shipping & Delivery Policy</h4>
      </div>
      
      <div className="shipping-content">
        <div className="shipping-sections">
          {/* Processing Time */}
          <div className="shipping-section">
            <h5 className="section-title">⏱️ Processing Time</h5>
            <ul className="section-list">
              <li>All orders will be delivered within <strong>5-10 working days</strong>.</li>
              <li>Orders are not shipped or delivered on weekends or holidays.</li>
              <li>
                If we experience a high volume of orders, shipments may be delayed. 
                We will notify you via email or phone.
              </li>
            </ul>
          </div>

          {/* Shipping Confirmation */}
          <div className="shipping-section">
            <h5 className="section-title">📬 Shipping Confirmation & Order Tracking</h5>
            <ul className="section-list">
              <li>
                You will receive a shipment confirmation email once your order has shipped, 
                containing a tracking number and link to track your package.
              </li>
              <li>
                Non-personal information is automatically collected as you interact with 
                our website through cookies, web beacons, and other tracking technologies.
              </li>
            </ul>
          </div>

          {/* Damages */}
          <div className="shipping-section">
            <h5 className="section-title">💥 Damages</h5>
            <ul className="section-list">
              <li>
                Gauswarn is not responsible for products damaged or lost during shipping. 
                Contact the shipment carrier or our support team to file a claim.
              </li>
              <li>Please save all packaging materials and damaged goods before filing a claim.</li>
            </ul>
          </div>

          {/* Undeliverable Packages */}
          <div className="shipping-section">
            <h5 className="section-title">📦 Undeliverable Packages</h5>
            <ul className="section-list">
              <li>
                If a package is returned as undeliverable due to incorrect address, 
                additional shipping charges may apply for reshipping.
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="shipping-section">
            <h5 className="section-title">📞 Contact Us</h5>
            <div className="contact-details">
              <p>For questions about shipping or issues with your order:</p>
              <ul className="contact-list">
                <li>
                  <strong>Email:</strong>{' '}
                  <a aria-label="Send an email to Gauswarn" href="mailto:rajlaxmiorganicfoods@gmail.com" className="contact-link">
                    rajlaxmiorganicfoods@gmail.com
                  </a>
                </li>
                <li><strong>Phone:</strong> <strong>+91 8769115905</strong></li>
                <li><strong>Business Hours:</strong> Mon to Sat 10AM to 8PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
