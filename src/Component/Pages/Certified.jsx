import React from "react";

// Images
import FssaiLogo from "../../asset/img/Icons/FSSAI.svg";
import IndiaOrganicLogo from "../../asset/img/Certified/Natural icon.png";
import Usda from "../../asset/img/Certified/Orignal icon.png";
import Apeda from "../../asset/img/Icons/apeda-seeklogo.com.svg";
// import Leaf1 from "../../asset/img/Icons/leaf-1.png";
// import Leaf2 from "../../asset/img/Icons/leaf-2.png";

// import FooterTopImg from "../../asset/img/Background/footer-img-top.png";

const Certified = () => {
  return (
    <React.Fragment>
      <div className="background-color-white position-relative">
        {/* <img src={Leaf1} alt="Leaf" className="w-25 position-absolute end-0" /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="text-color-pullman-green font-size-27 font-family-roboto py-3">
                Proudly Certified
              </div>
              <p className="text-color-pullman-green font-family-agdasima">
                We provide assurance to consumers about quality and trust with{" "}
                <br />
                compliance and regulations.
              </p>
            </div>

            <div className="col-md-12 py-4">
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
                      style={{ maxWidth: "150px", height: "100px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src={Leaf2}
          alt="Leaf"
          className="w-25 position-absolute start-0 leaf2-img"
        /> */}
      </div>
      {/* <div className="mt-5">
        <img className="img-fluid w-100" src={FooterTopImg} alt="Background" />
      </div> */}
    </React.Fragment>
  );
};

export default Certified;
