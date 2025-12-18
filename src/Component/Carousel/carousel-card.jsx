import React, { useState } from "react";
import "./carousel-card-wrapper.css";

const CarouselCard = ({ reelId }) => {
  const [loaded, setLoaded] = useState(false);

  if (!reelId) return null;

  return (
    <div className="carousel-card-wrapper">
      <div className="carousel-card">
        {!loaded && <div className="video-skeleton" />}

        <iframe
          src={`https://www.instagram.com/reel/${reelId}/embed`}
          title={`Instagram Reel ${reelId}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)} // Hide skeleton on error too
          className="reel-iframe"
        />
      </div>
    </div>
  );
};

export default CarouselCard;
