import React from "react";

// Images
import FssaiLogo from "../../asset/new-img/certified/FSSAI.svg";
import IndiaOrganicLogo from "../../asset/new-img/certified/Natural-icon.png";
import Usda from "../../asset/new-img/certified/Orignal-icon.png";
import Apeda from "../../asset/new-img/certified/apeda-seeklogo.com.svg";

const Certified = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            {/* Certified Logos */}
            <div className="d-flex justify-content-between my-4  my-sm-3 my-md-4 my-xl-4 flex-wrap gap-4">
              {[
                { src: FssaiLogo, alt: "FSSAI Certification" },
                { src: IndiaOrganicLogo, alt: "India Organic Certification" },
                { src: Usda, alt: "USDA Organic Certification" },
                { src: Apeda, alt: "APEDA Certification" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className=" d-flex justify-content-center mb-4"
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
