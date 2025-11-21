import React from "react";
import "./nurturing-about-us-page.css";
import aimImg from "../../asset/new-img/about-new-logo/aim.png";
import eyeYellowImg from "../../asset/new-img/about-new-logo/eye-yellow.png";
import reactImg from "../../asset/new-img/about-new-logo/react.png";

const NurituringAboutUs = () => {
  return (
    <div className="nurtring-container">
      <div className="nurtring-content-wrapper">
        {/* Left Section */}
        <div className="nurtring-left-section">
          <h1 className="nurtring-main-heading">
            Nurturing wellness with every drop of purity
          </h1>

          {/* Mission Card */}
          <div className="nurtring-card nurtring-mission-card">
            <div className="nurtring-icon-wrapper">
              <img src={aimImg} className="nurtring-icon" alt="" srcset="" />
            </div>
            <div className="nurtring-card-content">
              <h3 className="nurtring-card-title">Our Mission</h3>
              <p className="nurtring-card-text">
                At GAUSWARN, our mission is to deliver pure, authentic A2 ghee
                crafted through traditional methods—fresh, natural, and full of
                nourishment.
              </p>
            </div>
          </div>

          {/* Vision and Values Cards */}
          <div className="nurtring-cards-row">
            {/* Vision Card */}
            <div className="nurtring-card nurtring-small-card">
              <div className="nurtring-icon-wrapper">
                <img
                  src={eyeYellowImg}
                  className="nurtring-icon"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="nurtring-card-content">
                <h3 className="nurtring-card-title">Our Vision</h3>
                <p className="nurtring-card-text">
                  We envision a world where every home enjoys honest,
                  chemical-free, traditionally crafted ghee that supports better
                  health.
                </p>
              </div>
            </div>

            {/* Values Card */}

            <div className="nurtring-card nurtring-small-card">
              <div className="nurtring-icon-wrapper">
                <img
                  src={reactImg}
                  className="nurtring-icon"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="nurtring-card-content">
                <h3 className="nurtring-card-title">Our Values</h3>
                <p className="nurtring-card-text">
                  We take pride in purity, transparency, and small-batch
                  craftsmanship—ensuring quality in every spoon.
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <button className="nurtring-download-btn">
            <span>See Report</span>
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="nurtring-right-section">
          <div className="nurtring-image-container">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80"
              alt="Indian farmer with cow in traditional setting"
              className="nurtring-hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurituringAboutUs;
