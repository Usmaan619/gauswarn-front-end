import React, { useRef } from "react";
import Avatar from "../../asset/img/Icons/man.png";
import Pen from "../../asset/img/Icons/Untitled design.svg";
import ClientTopImg from "../../asset/img/Background/Client-img-top.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Shaifali Sharma",
    text: "If you're looking for an authentic, top-notch ghee that’s versatile and delicious, I highly recommend this one. It's perfect for those who appreciate healthy cooking and enjoy superior taste!",
    rating: 5,
    avatar: Avatar,
  },

  {
    id: 4,
    name: "Aayush Gurjar",
    text: "Highly recommend this ghee for anyone focused on fitness and healthy eating!",
    rating: 4,
    avatar: Avatar,
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    text: "I’ve been using this ghee daily, and it’s perfect for my fitness goals. Provides sustained energy without the crash. Highly recommend!",
    rating: 2,
    avatar: Avatar,
  },
];
const Client = () => {
  const sliderRef = useRef(null);
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <>
        <div className="w-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center text-color-pullman-green font-size-27 font-family-roboto py-3">
                  Customer’s Review
                </div>

                <Slider ref={sliderRef} {...settings}>
                  {testimonials.map((item) => (
                    <div
                      className="testimonial-container w-100  d-flex align-items-center justify-content-center"
                      key={item.id}
                    >
                      <div className="testimonial-card m-auto mt-5 d-flex align-items-center justify-content-center w-75">
                        <div className="testimonial-icon">
                          <img
                            src={Pen}
                            alt="Quill Icon"
                            className="quill-icon"
                          />
                        </div>
                        <div className="testimonial-content">
                          <div className="testimonial-stars py-2 pe-xl-5 me-xl-5 d-flex align-items-center justify-content-center">
                            <div className="me-xl-3">
                              <div className="text-color-pullman-green">
                                {item.name}
                              </div>
                              <div className="d-flex justify-content-center py-2">
                                {"★".repeat(item.rating)}
                                {"☆".repeat(5 - item.rating)}
                              </div>
                            </div>
                          </div>
                          <p className="testimonial-text d-flex justify-content-center">
                            {item.text}
                          </p>
                        </div>
                        <div className="testimonial-avatar">
                          <img
                            src={item.avatar}
                            alt="Avatar"
                            className="avatar-img"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="buttons d-flex align-items-center justify-content-center gap-3 ">
                <button
                  className="border-0 bg-transparent"
                  onClick={handlePrev}
                >
                  <FaArrowLeft />
                </button>{" "}
                <button
                  className="border-0 bg-transparent"
                  onClick={handleNext}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="py-3">
            <img
              className="img-fluid w-100"
              src={ClientTopImg}
              alt="Background"
            />
          </div>
        </div>
      </>
    </>
  );
};
export default Client;
