import { useState } from "react";
import styles from "./hero-section.module.css";
import VideoSource from "../../asset/new-img/Video/gauswarn.mp4";
import Seo from "../SEO/Seo";

export default function VideoSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "How Gauswarn A2 Gir Cow Ghee is Made",
    description:
      "Watch how Gauswarn India prepares pure A2 Gir Cow Ghee using the traditional Bilona method in our Gaushala.",
    thumbnailUrl: "https://gauswarn.com/images/ghee-video-thumbnail.jpg",
    uploadDate: "2026-01-10",
    contentUrl: "https://gauswarn.com/static/media/gauswarn.mp4",
    embedUrl: "https://gauswarn.com/",
    publisher: {
      "@type": "Organization",
      name: "Gauswarn India",
      logo: {
        "@type": "ImageObject",
        url: "https://gauswarn.com/logo.png",
      },
    },
  };
  return (
    <>
      <Seo
        title="How A2 Gir Cow Ghee is Made | Gauswarn India"
        description="Watch how Gauswarn prepares pure A2 Gir Cow Ghee using the traditional Bilona method."
        url="https://gauswarn.com"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <p className="sr-only">
        Watch how Gauswarn India prepares pure A2 Gir Cow Ghee using the
        traditional Bilona method in our Gaushala.
      </p>

      <section className={styles.hero}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src={VideoSource} type="video/mp4" />
          <track
            src="captions.vtt"
            kind="captions"
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className={styles.overlay}></div>

        {/* Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>Why Our Ghee is Truly Special</h2>

          <button
            className={styles.playButton}
            onClick={() => setIsVideoModalOpen(true)}
            aria-label="Play video about our ghee"
          >
            <svg
              viewBox="0 0 500 500"
              className={styles.circleSvg}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  id="textcircle"
                  d="M250,400 a150,150 0 0,1 0,-300 a150,150 0 0,1 0,300 Z"
                  transform="rotate(12,250,250)"
                />
              </defs>

              {/* Rotating text circle */}
              <g className={styles.textCircle}>
                <text textLength="940">
                  <textPath xlinkHref="#textcircle" aria-label="Watch Now">
                    Watch Now | Watch Now | Watch Now |
                  </textPath>
                </text>
              </g>

              {/* Play icon in center */}
              <circle cx="250" cy="250" r="60" fill="rgba(255,255,255,0.2)" />
              <polygon points="230,220 230,280 290,250" fill="white" />
            </svg>
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className={styles.modal}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video modal"
            >
              ✕
            </button>
            <video controls autoPlay className={styles.modalVideo}>
              <source src={VideoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
