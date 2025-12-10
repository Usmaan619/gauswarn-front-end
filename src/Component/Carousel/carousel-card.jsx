// import React from "react";

// const CarouselCard = ({ product }) => {
//   return (
//     <div className="carousel-card-wrapper">
//       <div className="carousel-card">
//         <img
//           src={product?.video || "/placeholder.svg"}
//           alt={product.title}
//           className="carousel-image"
//         />
//         {/* <div className="carousel-overlay">
//           <h3 className="carousel-title">{product.title}</h3>
//           <p className="carousel-subtitle">{product.subtitle}</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;

// import React from "react";
// import HoverVideoPlayer from "react-hover-video-player";
// import "./carousel-card-wrapper.css";

// const CarouselCard = ({ product }) => {
//   return (
//     <div className="carousel-card-wrapper">
//       <div className="carousel-card">
//         <HoverVideoPlayer
//           videoSrc={product.video}
//           restartOnPaused
//           playbackStartDelay={0}
//           hoverTargetClass="hover-area"
//           pausedOverlay={
//             <img
//               src="/placeholder.svg"
//               alt="Preview"
//               className="carousel-preview"
//             />
//           }
//           loadingOverlay={<div className="video-skeleton" />}
//         />
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;

// import React from "react";
// import HoverVideoPlayer from "react-hover-video-player";
// import "./carousel-card-wrapper.css";

// const CarouselCard = ({ product }) => {
//   return (
//     <div className="carousel-card-wrapper">
//       <div className="carousel-card">
//         <HoverVideoPlayer
//           videoSrc={product.video}
//           restartOnPaused
//           playbackStartDelay={0}
//           // MOST IMPORTANT: enable autoplay on hover
//           videoProps={{
//             muted: true,
//             playsInline: true,
//             preload: "metadata",
//             disableRemotePlayback: true,
//             style: {
//               width: "100%",
//               height: "100%",
//               objectFit: "cover", // full fill, no black screen
//             },
//           }}
//           pausedOverlay={
//             <img
//               src="/placeholder.svg"
//               alt="Preview"
//               className="carousel-preview"
//             />
//           }
//           loadingOverlay={<div className="video-skeleton" />}
//         />
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;

import React, { useRef, useEffect, useState } from "react";
import "./carousel-card-wrapper.css";

const CarouselCard = ({ product }) => {
  const videoRef = useRef(null);
  const autoPlayTimer = useRef(null);
  const [loading, setLoading] = useState(true);
  const [played3Sec, setPlayed3Sec] = useState(false);

  const playFor3Sec = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});

    autoPlayTimer.current = setTimeout(() => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlayed3Sec(true);
    }, 5000);
  };

  const handleMouseEnter = () => {
    if (!videoRef.current) return;

    clearTimeout(autoPlayTimer.current);
    videoRef.current.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleLoadedData = () => {
    setLoading(false);

    if (!played3Sec) {
      playFor3Sec();
    }
  };

  useEffect(() => {
    return () => clearTimeout(autoPlayTimer.current);
  }, []);

  return (
    <div
      className="carousel-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-card">
        {loading && <div className="video-skeleton" />}

        {product?.video ? (
          <video
            ref={videoRef}
            src={product.video}
            className={`carousel-image ${loading ? "hidden" : "show"}`}
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleLoadedData}
          />
        ) : (
          <img
            src="/placeholder.svg"
            alt="placeholder"
            className="carousel-image"
          />
        )}
      </div>
    </div>
  );
};

export default CarouselCard;
