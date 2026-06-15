import React from "react";
import "./term-and-condition.css";
import Seo from "../SEO/Seo";
import SeoContent from "../SEO/SeoContent";
import { SEO_CONTENT } from "../SEO/seo-content-data";

const TermsConditions = () => {
  return (
    <>
      <Seo
        title="Terms & Conditions | Gauswarn India"
        description="Read the terms and conditions for using the Gauswarn India website and purchasing our A2 Gir Cow Ghee."
        url="https://gauswarn.com/terms"
        noindex={true}
      />
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="terms-title">Terms & Conditions</h1>
      </div>

      <div className="terms-content">
        <div className="intro-section">
          <p>
            This document is an electronic record under the Information
            Technology Act, 2000. No physical or digital signatures required.
          </p>
        </div>

        <div className="terms-sections">
          {/* Platform Info */}
          <div className="terms-section">
            <h5 className="section-title">🌐 Platform Information</h5>
            <ul className="section-list">
              <li>
                Published as per IT Rules 2011 for{" "}
                <a  aria-label="Visit Gauswarn website" href="https://gauswarn.com" className="website-link">
                  gauswarn.com
                </a>
              </li>
              <li>Owned by RAJLAKSHMI JAVIKS IN, Indore, Madhya Pradesh</li>
            </ul>
          </div>

          {/* Terms of Use */}
          <div className="terms-section">
            <h5 className="section-title">📋 Terms of Use</h5>
            <ul className="section-list">
              <li>Your use indicates agreement to these terms</li>
              <li>Provide accurate information during registration</li>
              <li>Services at your own risk and discretion</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="terms-section">
            <h5 className="section-title">👤 User Responsibilities</h5>
            <ul className="section-list">
              <li>Pay applicable charges for services</li>
              <li>No unlawful or illegal use of platform</li>
              <li>Indemnify platform owner against claims</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="terms-section">
            <h5 className="section-title">⚖️ Legal Jurisdiction</h5>
            <ul className="section-list">
              <li>Governed by laws of India</li>
              <li>Exclusive jurisdiction: Courts in Indore, MP</li>
              <li>Force majeure events apply</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="terms-section">
            <h5 className="section-title">©️ Intellectual Property</h5>
            <ul className="section-list">
              <li>All content proprietary to platform owner</li>
              <li>No unauthorized use permitted</li>
            </ul>
          </div>

          {/* Third Party Links */}
          <div className="terms-section">
            <h5 className="section-title">🔗 Third Party Links</h5>
            <p className="section-text">
              Links to third-party sites governed by their own terms and
              policies.
            </p>
          </div>

          {/* Contact */}
          <div className="terms-section contact-section">
            <h5 className="section-title">📞 Contact</h5>
            <p>Use contact information on website for all concerns.</p>
          </div>
        </div>
      </div>
    </div>
    <SeoContent heading={SEO_CONTENT.terms.heading} sections={SEO_CONTENT.terms.sections} />
    </>
  );
};

export default TermsConditions;
