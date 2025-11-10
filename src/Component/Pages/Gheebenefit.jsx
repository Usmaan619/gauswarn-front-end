import React from "react";
import Wave from "../../asset/img/benefits of ghee/wave2.png";
import Image1 from "../../asset/img/benefits of ghee/9.png";
import Image2 from "../../asset/img/benefits of ghee/10.png";
import Image3 from "../../asset/img/benefits of ghee/8.png";
import Image4 from "../../asset/img/benefits of ghee/6.png";
import Image5 from "../../asset/img/benefits of ghee/11.png";
import Image6 from "../../asset/img/benefits of ghee/7.png";
// import { CiShoppingBasket } from "react-icons/ci";

const Gheebenefit = () => {
  // Array of benefits
  const benefits = [
    { icon: Image1, title: "Lowers Bad Cholesterol" },
    { icon: Image2, title: "Powers The Brain" },
    { icon: Image3, title: "Promotes  Good Eyesight" },
    { icon: Image4, title: "Builds strong Immune System" },
    { icon: Image5, title: "Give strength to Bones" },
    { icon: Image6, title: "Good For Heart Health" },
  ];

  return (
    <>
      <img src={Wave} alt="" className="w-100" />

      <div className="background-color-pullman-green position-relative height-benefit pb-4">
        {/* Left Decoration */}
        {/* <img src={Leaf} alt="Leaf" className="w-25 benefit-leaf position-absolute start-0" /> */}

        {/* Content */}
        <div className="container">
          {/* Title */}
          <div className="text-center text-color-eggshell font-size-27 font-family-roboto py-3">
            Benefits Of Our GAUSWARN Gir Cow Ghee <br />(Vedic Bilona Method)
          </div>

          {/* Benefits Grid */}
          <div className="row g-4 pt-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={` col-sm-6 col-lg-4 d-flex justify-content-center ${
                  index % 2 === 0 ? "d-flex justify-content-center" : ""
                }`}
              >
                <div className="grid-item text-center">
                  {/* Icon */}
                  <div className="icon m-auto mb-2">
                    <img src={benefit.icon} alt="" />
                  </div>
                  {/* Title */}
                  <p className="mb-0">{benefit.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Decoration */}
        {/* <img
          src={CowImg}
          alt="Cow"
          className="w-25 benefit-cow position-absolute end-0"
          style={{ bottom: "10px" }}
        /> */}
      </div>
    </>
  );
};

export default Gheebenefit;
