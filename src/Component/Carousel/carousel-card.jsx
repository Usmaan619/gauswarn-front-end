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
          title="Instagram Reel"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
