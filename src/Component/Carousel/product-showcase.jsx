import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { environment } from "../../environment/environment.jsx";
import { ProductCard } from "./product-card.jsx";
import { YoutubeVideosSection } from "../Youtube-video/Youtube.jsx";

const ProductShowcaseComplete = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

      let productsList = res?.data?.products || [];

      // ✅ SORTING BY WEIGHT (250ml < 500ml < 1000ml < 5kg < 15kg)
      const weightMap = (weightStr) => {
        if (!weightStr) return 0;
        const lowerWeight = weightStr.toLowerCase();
        let val = parseFloat(lowerWeight.match(/\d+/)?.[0] || 0);

        if (lowerWeight.includes("kg")) {
          return val * 1000;
        }
        return val;
      };

      productsList.sort(
        (a, b) => weightMap(a.product_weight) - weightMap(b.product_weight),
      );

      setProducts(productsList);
    } catch (err) {
      console.error("Product fetch error", err);
      setProducts([]);
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      await Promise.all([loadProducts()]);
      setLoading(false);
    };
    loadData();
  }, [loadProducts]);

  if (loading) {
    return (
      <div className="product-showcase-loading">
        <div className="loader-container">
          <div className="custom-loader"></div>
          <p>Harvesting Pure Ghee for you...</p>
        </div>
        <style>{`
          .product-showcase-loading {
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .custom-loader {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #d4af37;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="showcase-wrapper">
      {/* PRODUCTS SECTION */}
      <section className="products-grid-section">
        <div className="section-header">
          <span className="subtitle">Authentic & Grass-Fed</span>
          <h2 className="main-title">Pure A2 Cow Ghee</h2>
          <div className="title-underline"></div>
          <p className="description">
            100% Pure A2 Desi Cow Ghee made from the A2 milk of indigenous Gir
            cows. Experience the purity of traditional curd-based Bilona method
            ghee, rich in nutrients and perfect for your family's health.
          </p>
        </div>

        <div className="variants-container">
          {products.length > 0 ? (
            <div className="variants-grid">
              {products.map((product) => (
                <div key={product.id} className="variant-item">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">No products found.</div>
          )}
        </div>
      </section>

      {/* REELS SECTION */}
      <section className="instagram-reels-section">
        <div className="section-header">
          <span className="subtitle">Watch our latest videos and updates</span>
          <h2 className="main-title">Our YouTube Shorts</h2>

          <div className="title-underline"></div>
        </div>
        <YoutubeVideosSection />
      </section>

      <style>{`
        .showcase-wrapper {
          padding: 0 0;
          background-color: #ffffff;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px;
          padding: 0 20px;
        }

        .subtitle {
          color: #8a7121;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 700;
          font-size: 0.85rem;
          display: block;
          margin-bottom: 10px;
        }

        .main-title {
          font-size: 3rem;
          color: #2c1a0a;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: #d4af37;
          margin: 0 auto 25px;
          border-radius: 2px;
        }

        .description {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .variants-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .variants-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
        }

        .variant-item {
          height: 100%;
        }

        .instagram-reels-section {
          margin-top: 100px;
          background: #ffffff;
          padding: 100px 0;
          color: #2c1a0a;
        }

        .instagram-reels-section .main-title {
          color: #2c1810;
        }

        .reels-carousel-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .reels-slider .slick-slide {
          padding: 0 10px;
        }

        .reels-slider .slick-dots li button:before {
          color: #fff;
        }

        .reels-slider .slick-dots li.slick-active button:before {
          color: #d4af37;
        }

        @media (max-width: 1200px) {
          .variants-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .main-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .variants-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          .main-title {
            font-size: 2rem;
          }
          .showcase-wrapper {
            padding: 50px 0;
          }
          .reels-carousel-container {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .variants-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .main-title {
            font-size: 1.8rem;
          }
          .instagram-reels-section {
            padding: 60px 0;
          }
        }

        .no-data {
          text-align: center;
          padding: 40px;
          color: #888;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default ProductShowcaseComplete;
