import React from "react";
import Image from "../../asset/img/GirCowImg/cow.png";
import Wave from "../../asset/img/GirCowImg/about cow bg.png";

const Cow = () => {
  return (
    <>
      <img src={Wave} alt="" className="w-100" />
      <div className="cow">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="zoom-out-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="cow-section d-flex">
                <div className="cow-img m-auto">
                  <img src={Image} alt="" />
                </div>
                <div className="cow-content">
                  <p className="cow-heading">GIR COW</p>
                  <div className="cow-describe container-md">
                    <div className="font-size-27 fw-bold">
                      The Pride of India's Indigenous Breeds"
                    </div>
                    <div
                      className="font-size-18 mt-4"
                      style={{ lineHeight: 2 }}
                    >
                      The Gir cow is a prominent dairy breed that hails from the
                      Gir forest region in Gujarat, India. Known for its
                      remarkable milk production, this breed has been nurtured
                      for centuries, making it an integral part of Indian
                      agriculture and dairy farming. Renowned for its high milk
                      yield, Gir cows typically produce between 15 to 25 liters
                      of milk per day, characterized by rich fat content that is
                      ideal for producing ghee, cheese, and yogurt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cow;
