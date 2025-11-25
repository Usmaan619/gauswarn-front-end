import React, { useState } from "react";
import "./b2b-styles/b2b-partner-form.css";

export default function PartnerInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "",
    bulkRequirement: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you within 24 hours.");
  };

  return (
    <div className="b2b-form-container">
      <div className="b2b-form-header">
        <h1>Partner Inquiry Form</h1>
        <p>Fill in your details and we'll get back to you within 24 hours</p>
      </div>

      <div className="b2b-inquiry-form">
        <div className="b2b-form-row">
          <div className="b2b-form-group">
            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="b2b-form-group">
            <label htmlFor="businessName">Business Name*</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="your business name"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="b2b-form-row">
          <div className="b2b-form-group">
            <label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 xxxxx xxxxx"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="b2b-form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="b2b-form-row">
          <div className="b2b-form-group">
            <label htmlFor="businessType">Business Type*</label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            >
              <option value="">select business type</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="distributor">Distributor</option>
              <option value="retailer">Retailer</option>
              <option value="wholesaler">Wholesaler</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="b2b-form-group">
            <label htmlFor="bulkRequirement">Monthly Bulk Requirement</label>
            <input
              type="text"
              id="bulkRequirement"
              name="bulkRequirement"
              placeholder="e.g., 500kg/month"
              value={formData.bulkRequirement}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="b2b-form-group b2b-full-width">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your requirements, preferred products, or any specific questions..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
          />
        </div>

        <button type="button" onClick={handleSubmit} className="b2b-submit-btn">
          Submit Inquiry
        </button>
      </div>
    </div>
  );
}
