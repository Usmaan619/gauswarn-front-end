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
                At GAUSWARN, our mission is to bring the purity of authentic A2
                Desi Cow Ghee to every home—fresh, traditional, and deeply
                nourishing. We follow the ancient Bilona method to craft pure A2
                Gir Cow Ghee, ensuring unmatched aroma, taste, and health
                benefits.
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
                  We are committed to supporting and promoting the (Pashupalak)
                  community, the traditional cow-herding families who have
                  preserved Gir cow breeds for generations. Their lifestyle,
                  culture, and survival revolve around ethical cattle rearing,
                  and we proudly stand with them to protect this heritage.
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
                  Through our initiative, GAUSWARN aims to Empower the /
                  Pashupalak community Promote sustainable and ethical Gir cow
                  rearing Preserve India’s indigenous cattle traditions Deliver
                  100% natural, chemical-free Bilona A2 ghee Connect consumers
                  with truly pure, farm-fresh ghee Our mission is to keep purity
                  alive — by delivering real A2 Gir Cow Ghee while uplifting the
                  communities who safeguard our cows and culture.
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
