import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { getData } from "../../services/api.jsx";
import "./youtube-video.css";

const VideoProductCard = ({ product, isActive, onOpenModal }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFocusable, setIsFocusable] = useState(true);

  // accessibility: watch for aria-hidden on parent slick-slide
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const slideWrapper = el.closest(".slick-slide");
    if (!slideWrapper) return;

    const checkVisibility = () => {
      const isHidden = slideWrapper.getAttribute("aria-hidden") === "true";
      setIsFocusable(!isHidden);
    };

    // Initial check
    checkVisibility();

    // Observe changes to aria-hidden attribute by slick-carousel
    const observer = new MutationObserver(checkVisibility);
    observer.observe(slideWrapper, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
    });

    return () => observer.disconnect();
  }, []);

  // YouTube ID extractor
  const getYoutubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = useMemo(
    () => getYoutubeId(product.videoUrl),
    [product.videoUrl],
  );
  const isYoutube = !!youtubeId;

  // Autoplay logic for previews
  useEffect(() => {
    if (isActive || isHovered) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isActive, isHovered]);

  // Handle native video playback
  useEffect(() => {
    if (!isYoutube && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, isYoutube]);

  const handleCardClick = (e) => {
    if (isActive) {
      onOpenModal(product);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCardClick(e);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className={`video-product-card-v2 ${isActive ? "active" : "inactive"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={isFocusable && isActive ? 0 : -1}
      aria-label={`View video: ${product.name}`}
    >
      {/* Media Content */}
      <div className="media-container">
        {/* Thumbnail Background */}
        <img
          src={product.thumbnail}
          alt={product.name}
          className="thumbnail-bg"
          loading="lazy"
        />

        {/* Video Overlay (Preview) */}
        {isYoutube ? (
          isPlaying && (
            <iframe
              className="youtube-video-iframe"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&rel=0&enablejsapi=1&showinfo=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={product.name}
              tabIndex="-1" // Prevent focus on iframe inside carousel
            />
          )
        ) : (
          <video
            ref={videoRef}
            src={product.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className={`native-video ${isPlaying ? "playing" : "hidden"}`}
          />
        )}

        {/* Top-right View icon */}
        <button
          className="action-icon-btn view-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          aria-label="View Full Screen"
          tabIndex={isFocusable ? 0 : -1}
        >
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
};

const YoutubeVideosSection = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sliderRef = useRef(null);

  const fetchShortsData = useCallback(async () => {
    try {
      const responseData = await getData("admin/shorts/all");
      const items = Array.isArray(responseData)
        ? responseData
        : responseData?.data || responseData?.shorts || [];

      if (items.length > 0) {
        const formatted = items
          .map((item) => {
            const videoUrl = item.short_id
              ? `https://www.youtube.com/shorts/${item.short_id}`
              : item.videoUrl || item.url || item.link || "";

            const regExp =
              /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
            const match = videoUrl.match(regExp);
            const youtubeId = match && match[2].length === 11 ? match[2] : null;

            return {
              id: item._id || item.id || Math.random().toString(),
              name: item.title || "Pure A2 Ghee",
              price: item.price || 899,
              thumbnail:
                item.thumbnail ||
                `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
              videoUrl,
              youtubeId,
            };
          })
          .filter((p) => p.videoUrl);

        setProducts(formatted);
      }
    } catch (err) {
      console.error("Shorts fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchShortsData();
  }, [fetchShortsData]);

  // Slick Settings
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 800,
    autoplay: !selectedVideo, // Pause autoplay when modal is open
    autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    afterChange: (current) => setActiveIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  if (loading)
    return <div className="loading-state">Harvesting for you...</div>;

  return (
    <section className="youtube-videos-premium-section">
      <div className="section-container">
        {/* Slider */}
        <div className="premium-carousel-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product, index) => (
              <div key={product.id} className="carousel-item-v2">
                <VideoProductCard
                  product={product}
                  isActive={activeIndex === index}
                  onOpenModal={(video) => setSelectedVideo(video)}
                />
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <button
            className="premium-nav-btn prev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="premium-nav-btn next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <div className="video-responsive-container">
              {selectedVideo.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoplay
                  className="modal-native-video"
                ></video>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { YoutubeVideosSection };
export default YoutubeVideosSection;
