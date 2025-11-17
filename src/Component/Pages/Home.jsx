import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg1 from "../../asset/new-img/banner-main-page/banner1.png";
import BannerImg2 from "../../asset/new-img/banner-main-page/banner2.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const slides = [
  { desktop: BannerImg1, mobile: BannerImg1, alt: "Banner 1" },
  { desktop: BannerImg2, mobile: BannerImg2, alt: "Banner 2" },
];

const Home = () => {
  // Custom arrow components
  const CustomPrevArrow = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-prev"
        aria-label="Previous"
      >
        <BsChevronLeft className="carousel-icon" />
      </button>
    );

  const CustomNextArrow = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="custom-arrow custom-arrow-next"
        aria-label="Next"
      >
        <BsChevronRight className="carousel-icon" />
      </button>
    );

  return (
    <div className="home">
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={6500}
          transitionTime={600}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          stopOnHover={false}
          // renderArrowPrev={CustomPrevArrow}
          // renderArrowNext={CustomNextArrow}
          className="main-carousel"
          width={"100%"}
        >
          {slides.map((item, index) => (
            <div key={index} className="carousel-slide">
              <picture>
                <source media="(max-width: 768px)" srcSet={item.mobile} />
                <img
                  src={item.desktop}
                  alt={item.alt}
                  className="carousel-full-image"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
