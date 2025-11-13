import React from "react";

// Images
import FssaiLogo from "../../asset/img/Icons/FSSAI.svg";
import IndiaOrganicLogo from "../../asset/img/Certified/Natural icon.png";
import Usda from "../../asset/img/Certified/Orignal icon.png";
import Apeda from "../../asset/img/Icons/apeda-seeklogo.com.svg";

const Certified = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            {/* Certified Logos */}
            <div className="row justify-content-around align-items-center">
              {[
                { src: FssaiLogo, alt: "FSSAI Certification" },
                { src: IndiaOrganicLogo, alt: "India Organic Certification" },
                { src: Usda, alt: "USDA Organic Certification" },
                { src: Apeda, alt: "APEDA Certification" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="col-md-2 col-sm-4 col-6 d-flex justify-content-center mb-4"
                >
                  <img
                    className="img-fluid"
                    src={logo.src}
                    alt={logo.alt}
                    // style={{ maxWidth: "150px", height: "100px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certified;
