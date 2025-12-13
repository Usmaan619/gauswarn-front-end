import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";

const Home = () => {
  const [banners, setBanners] = useState({
    banner1: null,
    banner2: null,
    banner3: null,
    banner4: null,
  });
  const [loading, setLoading] = useState(false);

  // 🔹 API call – yahi se data aa raha hai
  const fetchBanners = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getData("admin/home-banners"); // GET /home-banners se data aaega [web:7][web:13]

      // assume API => { banner1: 'url', banner2: 'url', ... }
      if (res) {
        setBanners({
          banner1: res.banner1 || null,
          banner2: res.banner2 || null,
          banner3: res.banner3 || null,
          banner4: res.banner4 || null,
        });
      }
    } catch (err) {
      console.error("Failed to fetch banners:", err);
      toastError("Failed to load banners");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  // 🔹 API se aayi values ko slides me map
  const slides = useMemo(() => {
    const items = [];

    if (banners.banner1)
      items.push({
        desktop: banners.banner1,
        mobile: banners.banner1,
        alt: "Banner 1",
      });
    if (banners.banner2)
      items.push({
        desktop: banners.banner2,
        mobile: banners.banner2,
        alt: "Banner 2",
      });
    if (banners.banner3)
      items.push({
        desktop: banners.banner3,
        mobile: banners.banner3,
        alt: "Banner 3",
      });
    if (banners.banner4)
      items.push({
        desktop: banners.banner4,
        mobile: banners.banner4,
        alt: "Banner 4",
      });

    return items;
  }, [banners]);

  const hasSlides = useMemo(() => slides.length > 0, [slides]);

  const CustomPrevArrow = useCallback(
    (onClickHandler, hasPrev, label) =>
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
      ),
    []
  );

  const CustomNextArrow = useCallback(
    (onClickHandler, hasNext, label) =>
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
      ),
    []
  );

  const carouselProps = useMemo(
    () => ({
      showArrows: false,
      showStatus: false,
      showThumbs: false,
      infiniteLoop: true,
      autoPlay: true,
      interval: 6500,
      transitionTime: 600,
      swipeable: true,
      emulateTouch: true,
      dynamicHeight: false,
      stopOnHover: false,
      renderArrowPrev: CustomPrevArrow,
      renderArrowNext: CustomNextArrow,
      className: "main-carousel",
      width: "100%",
    }),
    [CustomPrevArrow, CustomNextArrow]
  );

  // 🔹 Loading + no data state
  if (loading || !hasSlides) {
    return (
      <div className="home">
        <div className="carousel-container">
          <div
            className="carousel-skeleton"
            style={{ height: "500px", background: "#f5f5f5" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="carousel-container">
        <Carousel {...carouselProps}>
          {slides.map((item, index) => (
            <div key={`${item.alt}-${index}`} className="carousel-slide">
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
