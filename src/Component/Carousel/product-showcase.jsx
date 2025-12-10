// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProductCard from "./product-card";
// import CarouselCard from "./carousel-card";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// import Rectangle1 from "../../asset/new-img/mini-slider-img/Rectangle1.png";
// import Rectangle2 from "../../asset/new-img/mini-slider-img/Rectangle2.png";
// import Rectangle3 from "../../asset/new-img/mini-slider-img/Rectangle3.png";

// const ProductShowcase = ({ showProduct = true }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // nextArrow: <CustomNextArrow />,
//     // prevArrow: <CustomPrevArrow />,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     customPaging: () => <div className="custom-dot" />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const products = [
//     {
//       id: 1,
//       title: "The Secret to Authentic Flavor",
//       subtitle: "Premium A2 Gir Cow Ghee",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//     {
//       id: 2,
//       title: "Ancient Wisdom",
//       subtitle: "Modern Wellness with A2 Gir Cow Ghee",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//     {
//       id: 3,
//       title: "Pure Love in Every Meal",
//       subtitle: "Premium A2 Cow Ghee for Your Family",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//     {
//       id: 4,
//       title: "Ancient Recipes",
//       subtitle: "Modern Wellness with A2 Gir Cow Ghee",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//   ];

//   return (
//     <div className="product-showcase">
//       <div className="showcase-container">
//         <h1 className="showcase-title">Our Product</h1>

//         <div className="showcase-content">
//           {/* Featured Product */}

//           {showProduct && <ProductCard />}

//           {/* Carousel */}
//           <div className="carousel-section">
//             <Slider {...settings} className="products-carousel">
//               {products.map((product) => (
//                 <CarouselCard key={product.id} product={product} />
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       className="custom-arrow next-arrow"
//       onClick={onClick}
//       aria-label="Next slide"
//     >
//       <ChevronRight size={24} />
//     </button>
//   );
// };

// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       className="custom-arrow prev-arrow"
//       onClick={onClick}
//       aria-label="Previous slide"
//     >
//       <ChevronLeft size={24} />
//     </button>
//   );
// };

// export default ProductShowcase;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import ProductCard from "./product-card";
// import CarouselCard from "./carousel-card";

// const ProductShowcase = ({ showProduct = true }) => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false, // ❌ Auto-play fully disabled
//     beforeChange: (_, next) => setActiveSlide(next),
//     customPaging: () => <div className="custom-dot" />,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   const products = [
//     {
//       id: 1,
//       title: "The Secret to Authentic Flavor",
//       subtitle: "Premium A2 Gir Cow Ghee",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//     {
//       id: 2,
//       title: "Ancient Wisdom",
//       subtitle: "Modern Wellness with A2 Gir Cow Ghee",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//     {
//       id: 3,
//       title: "Pure Love in Every Meal",
//       subtitle: "Premium A2 Cow Ghee for Your Family",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//     {
//       id: 4,
//       title: "Ancient Recipes",
//       subtitle: "Modern Wellness with A2 Gir Cow Ghee",
//       video:
//         "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
//     },
//   ];

//   return (
//     <div className="product-showcase">
//       <div className="showcase-container">
//         <h1 className="showcase-title">Our Product</h1>

//         <div className="showcase-content">
//           {showProduct && <ProductCard />}

//           <div className="carousel-section">
//             <Slider {...settings} className="products-carousel">
//               {products.map((product, index) => (
//                 <CarouselCard
//                   key={product.id}
//                   product={product}
//                   isActive={activeSlide === index}
//                 />
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductShowcase;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "./product-card";
import CarouselCard from "./carousel-card";

const ProductShowcase = ({ showProduct = true }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // no autoplay
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const products = [
    {
      id: 1,
      title: "Premium A2 Ghee",
      subtitle: "Authentic A2 Gir Cow Ghee",
      video:
        "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
    },
    {
      id: 2,
      title: "Ancient Wisdom",
      subtitle: "Modern Wellness",
      video:
        "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
    },
    {
      id: 3,
      title: "Pure Love in Every Meal",
      subtitle: "Healthy & Authentic",
      video:
        "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
    },
    {
      id: 4,
      title: "Modern Wellness",
      subtitle: "Premium A2 Cow Ghee",
      video:
        "https://gauswarn-bucket.s3.ap-south-1.amazonaws.com/reels-video/11th+reel.mp4",
    },
  ];

  return (
    <div className="product-showcase">
      <div className="showcase-container">
        <h1 className="showcase-title">Our Product</h1>

        <div className="showcase-content">
          {showProduct && <ProductCard />}

          <div className="carousel-section">
            <Slider {...settings} className="products-carousel">
              {products.map((product) => (
                <CarouselCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
