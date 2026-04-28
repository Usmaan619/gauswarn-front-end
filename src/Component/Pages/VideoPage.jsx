import React, { useState } from "react";
import Seo from "../../Component/SEO/Seo";
import "./video-page.css";

const VideoPage = ({ isEmbedded = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "GHzgddV5Jrc";

  // Video Schema for SEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Experience the Purity of Gauswarn A2 Gir Cow Ghee",
    description:
      "Discover the traditional Bilona process of making pure A2 Gir Cow Ghee at Gauswarn India. Watch our journey from farm to your kitchen and learn why our ghee is truly special.",
    thumbnailUrl: [
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    ],
    uploadDate: "2024-03-20T08:00:00+05:30",
    duration: "PT3M15S",
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    publisher: {
      "@type": "Organization",
      name: "Gauswarn India",
      logo: {
        "@type": "ImageObject",
        url: "https://gauswarn.com/favicon-512x512.png",
      },
    },
  };

  return (
    <div className="video-page-container">
      {!isEmbedded && (
        <Seo
          title="Our Story in Motion | Pure A2 Gir Cow Ghee - Gauswarn India"
          description="Watch the journey of Gauswarn's A2 Gir Cow Ghee. Traditional Bilona method, pure Vedic process, and farm-fresh goodness in every drop."
          url="https://gauswarn.com/video"
          structuredData={videoSchema}
        />
      )}

      <section className="video-hero">
        <div className="video-background-container">
          <iframe
            className="bg-video-iframe"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&disablekb=1&fs=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            title="Background Video"
          ></iframe>
          <div className="video-overlay"></div>
        </div>

        <div className="video-content" data-aos="fade-up">
          <h1 className="video-title">
            The Essence of <span className="highlight">Pure Bilona</span> Ghee
          </h1>
          <p className="video-subtitle">
            Watch how we preserve tradition in every drop of Gauswarn A2 Ghee.
          </p>

          <button
            className="play-btn-large"
            onClick={() => setIsOpen(true)}
            aria-label="Play Video"
          >
            <div className="play-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="play-text">Watch Full Film</span>
          </button>
        </div>
      </section>

      {/* Full Screen Modal */}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="iframe-wrapper">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Gauswarn Video Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { VideoPage };
export default VideoPage;
