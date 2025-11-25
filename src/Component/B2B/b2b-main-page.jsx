import React, { useState } from "react";
import ProductHeroSection from "../Products/product-hero-section";
import Certified from "../Pages/Certified";
import "./b2b-styles/b2b-main-page.css";
import { Building2, Globe, Users } from "lucide-react";
import B2bAboutSection from "./b2b-about-section";
import B2bWhyPartner from "./b2b-why-partner";
import B2bPartnerForm from "./b2b-partner-form";
import B2bHowItWorks from "./b2b-how-it-works";
import B2bContactSection from "./b2b-contact-section";

import "./b2b-styles/b2b-main-page.css";
import SustainableFeaturesAboutus from "../AboutUs-new/sustainable-features-aboutus";

const B2BLandingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "",
    bulkRequirement: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry! We will get back to you within 24 hours."
    );
  };

  return (
    <div className="landingPage">
      <ProductHeroSection />
      <Certified />
      {/* About Section */}
      <B2bAboutSection />

      {/* Why Partner With Us */}
      <B2bWhyPartner />

      {/* Partner Inquiry Form */}
      {/* How B2B Works */}
      <B2bHowItWorks />

      <B2bPartnerForm />

      {/* Contact Section */}
      <B2bContactSection />

      <SustainableFeaturesAboutus/>
    </div>
  );
};

export default B2BLandingPage;
