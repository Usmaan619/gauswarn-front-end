import { useEffect, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { environment } from "../../environment/environment";
import ProductCard from "./product-card";
import { getData } from "../../services/api";
import CarouselCard from "./carousel-card";

const ProductShowcaseComplete = ({ showProduct = true }) => {
  const [reels, setReels] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      adaptiveHeight: false,
      arrows: false,
      touchThreshold: 10,
      draggable: true,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            dots: true,
            centerMode: false,
          },
        },
      ],
    }),
    [],
  );

  const loadReels = useCallback(async () => {
    try {
      const res = await getData("admin/reels/all");
      if (res.success) setReels(res.reels || []);
    } catch (err) {
      console.error("Reels fetch error:", err);
      setReels([]);
    }
  }, []);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axios.get(
        `${environment.API_BASE_URL}/users/getAllProduct`,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        },
      );
      setProducts(res?.data?.products || []);
    } catch (err) {
      console.error("Product fetch error", err);
      setProducts([]);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setError(null);
    setLoading(true);
    await Promise.all([loadReels(), loadProducts()]);
    setLoading(false);
  }, [loadReels, loadProducts]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        await Promise.all([loadReels(), loadProducts()]);
      } catch (err) {
        console.error("Load error:", err);
        setError("Failed to load content");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [loadReels, loadProducts]);

  const memoizedReelsList = useMemo(
    () =>
      reels.map((item) => (
        <CarouselCard key={item.id || item.reel_id} reelId={item.reel_id} />
      )),
    [reels],
  );

  if (error && !loading) {
    return (
      <div className="product-showcase">
        <div className="showcase-container">
          <h2 className="showcase-title">Our Product</h2>
          <div className="error-message">
            <span>{error}</span>
            <button onClick={handleRefresh} className="refresh-btn">
              🔄 Retry
            </button>
          </div>
        </div>
        <style>{`
          .error-message {
            text-align: center;
            padding: 80px 20px;
            color: #e74c3c;
            font-size: 1.2rem;
          }
          .refresh-btn {
            background: #3498db;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            margin-left: 12px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s;
          }
          .refresh-btn:hover {
            background: #2980b9;
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="product-showcase">
        <div className="showcase-container">
          <h1 className="showcase-title">Our Product</h1>
          <div className="shimmer-container">
            <div className="shimmer-product"></div>
            <div className="shimmer-carousel">
              <div className="shimmer-slide"></div>
              <div className="shimmer-slide"></div>
              <div className="shimmer-slide"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-showcase">
      <p className="sr-only">
        Explore our range of pure A2 Gir Cow Ghee products, crafted using the
        traditional Bilona method and sourced from our Gaushala.
      </p>

      <div className="showcase-container">
        <h1 className="showcase-title">Our Product</h1>

        <div className="showcase-content">
          {showProduct && products.length > 0 && (
            <div className="product-section">
              <ProductCard product={products} />
            </div>
          )}

          <div className="carousel-section">
            {reels.length > 0 ? (
              <Slider {...settings} className="products-carousel">
                {memoizedReelsList}
              </Slider>
            ) : (
              <div className="no-reels">
                No reels available
                <button onClick={loadReels} className="refresh-btn">
                  🔄 Refresh
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-showcase {
          width: 100%;
          padding: 40px 20px;
          // background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }

        .showcase-container {
          max-width: 1500px;
          margin: 0 auto;
        }

        .showcase-title {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 50px;
          color: #2c3e50;
          background: linear-gradient(135deg, #402405 0%, #402405 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .showcase-content {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        .product-section {
          flex: 0 0 400px;
          max-width: 400px;
        }

        .carousel-section {
          flex: 1;
          min-width: 0;
        }

        .products-carousel {
          width: 100%;
        }

        .carousel-card-wrapper {
          width: 100%;
          height: 620px;
          overflow: hidden;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .carousel-card-wrapper:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }

        :global(.product-card-main) {
          width: 100%;
          overflow: hidden;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        :global(.product-card-main:hover) {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }

        :global(.products-carousel .slick-slide) {
          padding: 0 12px;
          box-sizing: border-box;
          height: 620px;
        }

        :global(.products-carousel .slick-slide > div) {
          height: 100%;
        }

        :global(.products-carousel .slick-track) {
          display: flex !important;
          align-items: stretch;
        }

        :global(.products-carousel .slick-list) {
          overflow: hidden;
          margin: 0 -12px;
          touch-action: pan-y pinch-zoom;
        }

        :global(.products-carousel .slick-dots) {
          bottom: -45px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        :global(.products-carousel .slick-dots li) {
          width: 12px;
          height: 12px;
          margin: 0;
        }

        :global(.products-carousel .slick-dots li button) {
          width: 12px;
          height: 12px;
          padding: 0;
        }

        :global(.products-carousel .slick-dots li button:before) {
          width: 12px;
          height: 12px;
          font-size: 12px;
          line-height: 12px;
          color: #ddd;
          opacity: 1;
        }

        :global(.products-carousel .slick-dots li.slick-active button:before) {
          color: #2c3e50;
          opacity: 1;
        }

        .shimmer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .shimmer-product,
        .shimmer-slide {
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 20px;
        }

        .shimmer-product {
          height: 400px;
        }

        .shimmer-carousel {
          display: flex;
          gap: 24px;
          padding: 0 12px;
        }

        .shimmer-slide {
          flex: 1;
          height: 620px;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .no-reels {
          text-align: center;
          padding: 80px 20px;
          color: #7f8c8d;
          font-size: 1.2rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .refresh-btn {
          background: linear-gradient(135deg, #27ae60, #2ecc71);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          margin-left: 12px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
        }

        .refresh-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(46, 204, 113, 0.6);
        }

        @media (max-width: 1024px) {
          .showcase-content {
            flex-direction: column;
            gap: 40px;
          }
          .product-section {
            max-width: none;
            flex: none;
          }
          .carousel-section {
            min-width: auto;
          }
        }

        @media (max-width: 768px) {
          .product-showcase {
            padding: 30px 15px;
          }
          .showcase-title {
            font-size: 2.2rem;
            margin-bottom: 30px;
          }
          .product-section {
            max-width: 100%;
          }
          .carousel-card-wrapper,
          :global(.products-carousel .slick-slide) {
            height: 400px;
          }
          .shimmer-slide {
            height: 400px;
          }
          :global(.products-carousel .slick-slide) {
            padding: 0 8px;
          }
          :global(.products-carousel .slick-list) {
            margin: 0 -8px;
          }
        }

        @media (max-width: 480px) {
          .product-showcase {
            padding: 20px 10px;
          }
          .showcase-title {
            font-size: 1.8rem;
            margin-bottom: 25px;
          }
          .carousel-card-wrapper,
          :global(.products-carousel .slick-slide) {
            height: 350px;
          }
          .shimmer-slide {
            height: 350px;
          }
          :global(.products-carousel .slick-slide) {
            padding: 0 5px;
          }
          :global(.products-carousel .slick-list) {
            margin: 0 -5px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductShowcaseComplete;
