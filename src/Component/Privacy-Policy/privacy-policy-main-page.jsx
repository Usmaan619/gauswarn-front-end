import React from "react";
import "./privacy-policy-main.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h4 className="privacy-title">Privacy Policy</h4>
        <div className="last-updated">
          <strong>Last Updated</strong>
        </div>
      </div>

      <div className="privacy-content">
        <div className="intro-section">
          <p>
            We respect and value your privacy. This Privacy Policy outlines how
            we collect, use, and protect your personal information when you
            visit our website and make purchases from our online store. By
            accessing or using GAUSWARN, you agree to the practices described in
            this Privacy Policy.
          </p>
        </div>

        <div className="privacy-sections">
          {/* Introduction */}
          <div className="privacy-section">
            <h5 className="section-title">📋 Introduction</h5>
            <p className="section-text">
              This Privacy Policy describes how RAJLAKSHMI JAVIKS IN and its
              affiliates collect, use, share, protect or otherwise process your
              information through our website{" "}
              <a aria-label="Visit Gauswarn website" href="https://gauswarn.com" className="website-link">
                gauswarn.com
              </a>
              
            </p>
          </div>

          {/* Collection */}
          <div className="privacy-section">
            <h5 className="section-title">📝 Collection</h5>
            <div className="section-text">
              <p>
                We collect your personal data when you use our Platform
                including:
              </p>
              <ul className="section-list">
                <li>Name, date of birth, address, phone, email</li>
                <li>Payment information (with consent)</li>
                <li>Transaction and behavior data</li>
              </ul>
            </div>
          </div>

          {/* Usage */}
          <div className="privacy-section">
            <h5 className="section-title">🎯 Usage</h5>
            <div className="section-text">
              <p>We use your data to:</p>
              <ul className="section-list">
                <li>Process orders and payments</li>
                <li>Enhance customer experience</li>
                <li>Send offers and updates</li>
                <li>Prevent fraud and resolve disputes</li>
              </ul>
            </div>
          </div>

          {/* Sharing */}
          <div className="privacy-section">
            <h5 className="section-title">🔗 Sharing</h5>
            <p className="section-text">
              We share data with affiliates, service providers, and legal
              authorities when required. You can opt-out of marketing
              communications.
            </p>
          </div>

          {/* Security */}
          <div className="privacy-section">
            <h5 className="section-title">🛡️ Security Precautions</h5>
            <p className="section-text">
              We use secure servers and reasonable security practices. However,
              internet transmission is never 100% secure.
            </p>
          </div>

          {/* Data Retention */}
          <div className="privacy-section">
            <h5 className="section-title">🗑️ Data Retention & Deletion</h5>
            <p className="section-text">
              You can delete your account anytime. We retain data only as long
              as necessary or required by law.
            </p>
          </div>

          {/* Rights & Consent */}
          <div className="privacy-section">
            <h5 className="section-title">⚖️ Your Rights & Consent</h5>
            <div className="section-text">
              <p>You can access, update, or withdraw consent anytime.</p>
              <ul className="section-list">
                <li>Rectify your information</li>
                <li>Delete your account</li>
                <li>Opt-out of marketing</li>
              </ul>
            </div>
          </div>

          {/* Changes */}
          <div className="privacy-section">
            <h5 className="section-title">🔄 Changes to Policy</h5>
            <p className="section-text">
              We may update this policy. Check periodically for changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
