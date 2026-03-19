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
import { ExternalLink, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getData } from "../../services/api";
import { useCartContext } from "../Context/UserContext";
import "./youtube-video.css";

const VideoProductCard = ({ product, isActive, onOpenModal }) => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(!isFavorite ? "Added to Wishlist" : "Removed from Wishlist");
  };

  const handleCardClick = (e) => {
    if (isActive) {
      onOpenModal(product);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`video-product-card-v2 ${isActive ? "active" : "inactive"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        >
          <ExternalLink size={18} />
        </button>

        {/* Wishlist icon */}
      </div>

      {/* Info Floating Box */}
      {/* <div className="product-info-box" onClick={(e) => e.stopPropagation()}>
        <div className="info-main">
          <img src={product.thumbnail} alt="" className="mini-thumb" />
          <div className="text-info">
            <h3 className="name">{product.name}</h3>
            <p className="price">₹{product.price}.00</p>
          </div>
        </div>
        <button
          className="view-details-btn"
          onClick={() => navigate("/products")}
        >
          VIEW DETAILS
        </button>
      </div> */}
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

export default YoutubeVideosSection;
