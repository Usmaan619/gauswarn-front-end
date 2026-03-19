import React, { useState, useEffect, useRef } from "react";
import "./carousel-card-wrapper.css";

const CarouselCard = ({ reelId }) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);

  // ✅ Hook always called
  useEffect(() => {
    if (!reelId || !loaded || !iframeRef.current) return;

    const timer = setTimeout(() => {
      try {
        const iframeDoc =
          iframeRef.current.contentDocument ||
          iframeRef.current.contentWindow?.document;

        if (!iframeDoc) return;

        const playBtn = iframeDoc.querySelector(
          '.fXIG0, [data-testid="play-button"], button[aria-label*="play"], .wpO6b',
        );

        if (playBtn) playBtn.click();
      } catch (e) {
        console.log("Autoplay blocked");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [reelId, loaded]);

  if (!reelId) return null;

  return (
    <div className="carousel-card-wrapper">
      <div className="carousel-card">
        {!loaded && <div className="video-skeleton" />}

        <iframe
          ref={iframeRef}
          src={`https://www.instagram.com/reel/${reelId}/embed`}
          title={`Instagram Reel ${reelId}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className="reel-iframe"
        />
      </div>
    </div>
  );
};

export default CarouselCard;
