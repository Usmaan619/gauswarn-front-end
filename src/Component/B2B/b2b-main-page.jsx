import React, { useRef } from "react";
import ProductHeroSection from "../Products/product-hero-section";
import Certified from "../Pages/Certified";
import B2bAboutSection from "./b2b-about-section";
import B2bWhyPartner from "./b2b-why-partner";
import B2bPartnerForm from "./b2b-partner-form";
import B2bHowItWorks from "./b2b-how-it-works";
import B2bContactSection from "./b2b-contact-section";
import SustainableFeaturesAboutus from "../AboutUs-new/sustainable-features-aboutus";
import "./b2b-styles/b2b-main-page.css";

const B2BLandingPage = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="landingPage">
      <ProductHeroSection />
      <Certified />

      <B2bAboutSection onQuoteClick={scrollToForm} />
      <B2bWhyPartner />
      <B2bHowItWorks />

      {/* 🔽 TARGET FORM */}
      <B2bPartnerForm ref={formRef} />

      <B2bContactSection />
      <SustainableFeaturesAboutus />
    </div>
  );
};

export default B2BLandingPage;
