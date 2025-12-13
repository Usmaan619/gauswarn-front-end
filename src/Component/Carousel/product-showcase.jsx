import React, { useEffect, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import CarouselCard from "./carousel-card";
import { getData } from "../../services/api";
import ProductCard from "./product-card";
import { environment } from "../../environment/environment";
import axios from "axios";

const ProductShowcase = ({ showProduct = true }) => {
  const [reels, setReels] = useState([]);
  const [products, setProducts] = useState([]);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    }),
    []
  );

  const loadReels = useCallback(async () => {
    const res = await getData("admin/reels/all");
    if (res.success) setReels(res.reels);
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
        }
      );

      setProducts(res?.data?.products || []);
    } catch (err) {
      console.error("Product fetch error", err);
    }
  }, []);

  useEffect(() => {
    loadReels();
    loadProducts();
  }, [loadReels, loadProducts]);

  const memoizedReelsList = useMemo(
    () =>
      reels.map((item) => <CarouselCard key={item.id} reelId={item.reel_id} />),
    [reels]
  );

  return (
    <div className="product-showcase">
      <div className="showcase-container">
        <h1 className="showcase-title">Our Product</h1>

        <div className="showcase-content">
          {/*  MAIN PRODUCT */}
          {showProduct && products.length > 0 && (
            <ProductCard product={products} />
          )}

          {/*  REELS */}
          <div className="carousel-section">
            <Slider {...settings} className="products-carousel">
              {memoizedReelsList}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

// import React, { useEffect, useState, useMemo, useCallback } from "react";
// import Slider from "react-slick";
// import CarouselCard from "./carousel-card";
// import { getData } from "../../services/api";
// import ProductCard from "./product-card";

// const ProductShowcase = ({ showProduct = true }) => {
//   const [reels, setReels] = useState([]);

//   // ============================
//   // Memoized Slider Settings
//   // ============================
//   const settings = useMemo(
//     () => ({
//       dots: true,
//       infinite: false,
//       speed: 400,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: false,
//       responsive: [
//         { breakpoint: 1024, settings: { slidesToShow: 2 } },
//         { breakpoint: 768, settings: { slidesToShow: 1 } },
//       ],
//     }),
//     []
//   );

//   // ============================
//   // Memoized API Function
//   // ============================
//   const loadReels = useCallback(async () => {
//     const res = await getData("admin/reels/all");
//     if (res.success) setReels(res.reels);
//   }, []);

//   // Load reels on mount
//   useEffect(() => {
//     loadReels();
//   }, [loadReels]);

//   // ============================
//   // Memoized Render List
//   // ============================
//   const memoizedReelsList = useMemo(
//     () =>
//       reels.map((item) => <CarouselCard key={item.id} reelId={item.reel_id} />),
//     [reels]
//   );

//   return (
//     <div className="product-showcase">
//       <div className="showcase-container">
//         <h1 className="showcase-title">Our Product</h1>

//         <div className="showcase-content">
//           {showProduct && <ProductCard />}

//           <div className="carousel-section">
//             <Slider {...settings} className="products-carousel">
//               {memoizedReelsList}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;
