import React from "react";
import ManImage from "../../asset/img/About/uncle.png"; // Replace with actual image path
import Icon1 from "../../asset/img/Icons/about4.png";
import Icon2 from "../../asset/img/Icons/about1.png";
import Icon3 from "../../asset/img/Icons/about2.png";
import Icon4 from "../../asset/img/Icons/about5.png";
import Icon5 from "../../asset/img/Icons/about8.png";
import Footer2 from "../Common/Footer/index2";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="px-4">
        <div className="d-flex align-items-center background-color-white">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-sm-12 about-img d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <img src={ManImage} alt="Man" className="img-fluid" />
              </div>
              <div
                className="col-lg-6 col-sm-12 d-flex align-items-center"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div>
                  <div className="p-3">
                    <h2 className="text-color-pullman-green fw-bold">ABOUT US</h2>

                    <div className="text-color-green font-size-18 fw-bold mt-1">
                      About our Gir Cow Ghee, cultures with Vedic Bilona Method
                    </div>
                    <h2 className="text-color-pullman-green fw-bold mt-2">
                      {" "}
                      Nourish Your Body,
                      <br /> Elevate Your Dishes
                    </h2>

                    <p className="pb-4">
                      Ghee is a revolutionary, sustainable, and eco-friendly
                      beverage that brings a fresh and healthy taste to the table.
                      Our mission is to make ghee accessible and affordable to
                      everyone, regardless of their dietary restrictions or
                      lifestyle.
                    </p>
                    <div className="row d-flex justify-content-between">
                      <div className="vision-mission-container vision col-lg-5 col-md-12 col-sm-12">
                        <div className="vision-mission-tab vision-tab">
                          OUR VISION
                        </div>
                        <div className="vision-mission-content">
                          <div className="vision-content text-start">
                            Ghee is a revolutionary, sustainable, and eco-friendly
                            beverage that brings a fresh and healthy taste to the
                            table.
                          </div>
                        </div>
                      </div>
                      <div className="vision-mission-container mission col-lg-5 col-md-12 col-sm-12">
                        <div className="vision-mission-tab mission-tab">
                          OUR MISSION
                        </div>
                        <div className="vision-mission-content">
                          <div className="mission-content text-start">
                            Our mission is to make ghee accessible and affordable
                            to everyone, regardless of their dietary restrictions
                            or lifestyle.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-around py-3">
                <p className="text-center text-color-pullman-green fs-1 fw-bold">
                  Our Features
                </p>
                <div
                  className="col-lg-2 col-md-3 col-sm-3"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="about-icons text-center">
                    <img src={Icon1} alt="" className="w-75 h-75" />
                    <p className="text-center fs-5 fw-bold">
                      We assure <br />
                      Premium Quality
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-3"
                  data-aos="fade-up-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="about-icons text-center">
                    <img src={Icon2} alt="" className="w-75 h-75" />
                    <p className="text-center fs-5 fw-bold">
                      100% <br />
                      Made In India
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-3"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="about-icons text-center">
                    <img src={Icon3} alt="" className="w-75 h-75" />
                    <p className="text-center fs-5 fw-bold">
                      100% <br />
                      Secure Payment
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-3"
                  data-aos="fade-up-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="about-icons text-center">
                    <img src={Icon4} alt="" className="w-75 h-75" />
                    <p className="text-center fs-5 fw-bold">
                      We Provide <br />
                      Fast Delivery
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-3 col-sm-3"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="about-icons text-center">
                    <img src={Icon5} alt="" className="w-75 h-75" />
                    <p className="text-center fs-5 fw-bold">
                      We assure <br />
                      Your Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default AboutUs;
