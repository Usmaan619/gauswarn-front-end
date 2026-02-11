import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";

import banner1Img from "../../asset/new-img/banner-main-page/banner2.webp";
import banner2Img from "../../asset/new-img/banner-main-page/banner1.webp";

import "./home.css";

/* =========================
   LAZY LOAD CAROUSEL
========================= */
const Carousel = lazy(() =>
  import("react-responsive-carousel").then((mod) => ({
    default: mod.Carousel,
  })),
);

/* =========================
   FALLBACK
========================= */
const FALLBACK_BANNERS = [banner1Img, banner2Img];

/* =========================
   CLOUDINARY OPTIMIZER
========================= */
const optimizeImage = (url, width = 1400) => {
  if (!url) return "";
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
  }
  return url;
};

const Home = () => {
  const [bannerUrls, setBannerUrls] = useState(FALLBACK_BANNERS);
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH BANNERS
  ========================= */
  const fetchBanners = useCallback(async () => {
    try {
      const res = await getData("admin/home-banners");

      const urls = [
        res?.banner1,
        res?.banner2,
        res?.banner3,
        res?.banner4,
      ].filter(Boolean);

      setBannerUrls(urls.length ? urls : FALLBACK_BANNERS);
    } catch (error) {
      console.error("Banner fetch error:", error);
      toastError("Failed to load banners");
      setBannerUrls(FALLBACK_BANNERS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  /* =========================
     SLIDES
  ========================= */
  const slides = useMemo(
    () =>
      bannerUrls.map((url, index) => ({
        desktop: optimizeImage(url, 1400),
        mobile: optimizeImage(url, 768),
        alt: `Banner ${index + 1}`,
      })),
    [bannerUrls],
  );

  /* =========================
     PRELOAD FIRST IMAGE
  ========================= */
  useEffect(() => {
    if (!slides.length) return;
    const img = new Image();
    img.src = slides[0].desktop;
  }, [slides]);

  /* =========================
     ARROWS
  ========================= */
  const renderPrevArrow = useCallback(
    (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="custom-arrow prev-arrow"
          aria-label="Previous slide"
        >
          <BsChevronLeft />
        </button>
      ),
    [],
  );

  const renderNextArrow = useCallback(
    (onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="custom-arrow next-arrow"
          aria-label="Next slide"
        >
          <BsChevronRight />
        </button>
      ),
    [],
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
      animationHandler: "fade",
      swipeable: false,
      emulateTouch: false,
      stopOnHover: false,
      renderArrowPrev: renderPrevArrow,
      renderArrowNext: renderNextArrow,
      className: "main-carousel fade-carousel",
    }),
    [renderPrevArrow, renderNextArrow],
  );

  /* =========================
     SKELETON (NO CLS)
  ========================= */
  if (loading || !slides.length) {
    return (
      <div className="home">
        <div className="carousel-skeleton" />
      </div>
    );
  }

  /* =========================
     MAIN
  ========================= */
  return (
    <div className="home">
      <div className="carousel-container">
        <Suspense fallback={<div className="carousel-skeleton" />}>
          <Carousel {...carouselProps}>
            {slides.map((item, index) => (
              <div key={item.alt}>
                <picture>
                  <source media="(max-width: 768px)" srcSet={item.mobile} />
                  <img
                    src={item.desktop}
                    alt={item.alt}
                    width="1262"
                    height="508"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    className="carousel-image"
                    onError={(e) => {
                      e.currentTarget.src = banner1Img;
                    }}
                  />
                </picture>
              </div>
            ))}
          </Carousel>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
