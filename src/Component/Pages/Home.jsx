import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";

/* =========================
   INITIAL STATE
========================= */
const INITIAL_BANNERS = {
  banner1: null,
  banner2: null,
  banner3: null,
  banner4: null,
};

const Home = () => {
  const [banners, setBanners] = useState(INITIAL_BANNERS);
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH BANNERS (SAFE)
  ========================= */
  const fetchBanners = useCallback(async () => {
    setLoading(true);

    try {
      const res = await getData("admin/home-banners");

      if (!res || typeof res !== "object") {
        throw new Error("Invalid banner response");
      }

      setBanners({
        banner1: res?.banner1 ?? null,
        banner2: res?.banner2 ?? null,
        banner3: res?.banner3 ?? null,
        banner4: res?.banner4 ?? null,
      });
    } catch (error) {
      console.error("Failed to fetch banners:", error);
      toastError("Failed to load banners");
      setBanners(INITIAL_BANNERS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  /* =========================
     SLIDES (SAFE MAP)
  ========================= */
  const slides = useMemo(() => {
    try {
      return Object.values(banners)
        .filter(Boolean)
        .map((url, index) => ({
          desktop: url,
          mobile: url,
          alt: `Banner ${index + 1}`,
        }));
    } catch (error) {
      console.error("Slide mapping error:", error);
      return [];
    }
  }, [banners]);

  const hasSlides = slides.length > 0;

  /* =========================
     CUSTOM ARROWS
  ========================= */
  const renderPrevArrow = useCallback(
    (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="custom-arrow prev-arrow"
        >
          <BsChevronLeft />
        </button>
      ),
    []
  );

  const renderNextArrow = useCallback(
    (onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="custom-arrow next-arrow"
        >
          <BsChevronRight />
        </button>
      ),
    []
  );

  /* =========================
     CAROUSEL CONFIG
  ========================= */
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
      stopOnHover: false,
      renderArrowPrev: renderPrevArrow,
      renderArrowNext: renderNextArrow,
      className: "main-carousel",
    }),
    [renderPrevArrow, renderNextArrow]
  );

  /* =========================
     SKELETON (HEIGHT LOCK)
  ========================= */
  if (loading || !hasSlides) {
    return (
      <div className="home">
        <style>
          {`
            @keyframes shimmer {
              0% { background-position: 100% 0; }
              100% { background-position: -100% 0; }
            }
          `}
        </style>

        <div className="carousel-container">
          <div
            className="carousel-full-image"
            style={{
              background:
                "linear-gradient(90deg, #eeeeee 25%, #f5f5f5 37%, #eeeeee 63%)",
              backgroundSize: "400% 100%",
              animation: "shimmer 1.4s infinite",
            }}
          />
        </div>
      </div>
    );
  }

  /* =========================
     MAIN RENDER
  ========================= */
  return (
    <div className="home">
      <div className="carousel-container">
        <Carousel {...carouselProps}>
          {slides.map((item, index) => (
            <div
              key={`${item.alt}-${index}`}
              className="carousel-slide"
            >
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={item.mobile}
                />
                <img
                  src={item.desktop}
                  alt={item.alt}
                  className="carousel-full-image"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.currentTarget.src =
                      "/default-banner.jpg";
                  }}
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
