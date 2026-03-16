import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import "./blog-new-main.css";

import FilterNewsletterCard from "./blog-filter";
import ProductHeroSection from "../Products/product-hero-section";
import { getData } from "../../services/api";
import Seo from "../SEO/Seo";

/* ======================
   UTILITIES
====================== */
const truncateText = (html = "", limit = 150) => {
  try {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.innerText || "";
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  } catch {
    return "";
  }
};

const formatSlug = (slug) =>
  slug ? slug.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "blog";

const formatDate = (dateString) => {
  try {
    return dateString
      ? new Date(dateString).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "N/A";
  } catch {
    return "N/A";
  }
};

/* ======================
   BLOG CARD
====================== */
const BlogCard = ({ image, title, description, date, category, slug }) => (
  <Link to={`/blog/${formatSlug(slug)}`} className="blog-card-link">
    <div className="blog-card">
      <div className="blog-image">
        <img
          src={image || "/default-blog-image.jpg"}
          alt={title || "Blog post"}
          loading="lazy"
        />
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="tag">{category || "Blog"}</span>
          <span className="blog-date">{date}</span>
        </div>

        <h3 className="blog-title">{title || "Untitled"}</h3>

        <p className="blog-description">{truncateText(description)}</p>

        <span className="read-more-btn">More →</span>
      </div>
    </div>
  </Link>
);

/* ======================
   SKELETON
====================== */
const BlogSkeleton = () => (
  <div className="blogcard-skel">
    <div className="blogcard-skel-img shimmer" />
    <div className="blogcard-skel-body">
      <div className="blogcard-skel-line sm shimmer" />
      <div className="blogcard-skel-line md shimmer" />
      <div className="blogcard-skel-line shimmer" />
      <div className="blogcard-skel-line shimmer" />
    </div>
  </div>
);

/* ======================
   MAIN PAGE
====================== */
const BlogMainPageNew = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("new");
  const [error, setError] = useState("");

  /* ===== FETCH BLOGS ===== */
  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const res = await getData("admin/blogs");

      const blogList = res?.data?.blogs || res?.blogs || [];

      if (!Array.isArray(blogList)) {
        throw new Error("Invalid blog response");
      }

      setBlogs(blogList);
    } catch (err) {
      console.error("Blog fetch failed:", err);
      setBlogs([]);
      setError("Failed to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  /* ===== SORTING ===== */
  const sortedBlogs = useMemo(() => {
    if (!Array.isArray(blogs)) return [];

    return [...blogs].sort((a, b) => {
      const dateA = new Date(a?.created_at || 0);
      const dateB = new Date(b?.created_at || 0);
      return sortOrder === "new" ? dateB - dateA : dateA - dateB;
    });
  }, [blogs, sortOrder]);

  /* ===== STRUCTURED DATA ===== */
  const generateBlogSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Gauswarn India - A2 Ghee & Wellness Blog",
      "description": "Read expert articles on A2 ghee benefits, ayurveda, digestion, and healthy living.",
      "url": "https://gauswarn.com/blog",
      "blogPost": sortedBlogs.slice(0, 10).map((post) => ({
        "@type": "BlogPosting",
        "headline": post?.title,
        "description": truncateText(post?.content || post?.description, 160),
        "image": post?.image_url || post?.image,
        "datePublished": post?.created_at || post?.date,
        "author": {
          "@type": "Organization",
          "name": "Gauswarn India"
        }
      }))
    };
  };

  /* ===== ERROR STATE ===== */
  if (error) {
    return (
      <div className="blog-error">
        <div className="error-message">
          <h2>{error}</h2>
          <button
            aria-label="Retry loading blogs"
            className="retry-btn"
            onClick={fetchBlogs}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  /* ===== RENDER ===== */
  return (
    <>
      {/* SEO SUPPORTING CONTENT (Google-safe) */}
      <section className="sr-only">
        <h1>A2 Ghee Benefits, Ayurveda & Healthy Living Blog | Gauswarn India</h1>

        <p>
          Welcome to the Gauswarn India blog where we share expert knowledge on
          Pure A2 Gir Cow Ghee, traditional Bilona method, Ayurveda principles,
          digestion, immunity, and natural wellness. Our articles focus on the
          health benefits of A2 desi cow ghee made from indigenous Gir cows.
        </p>
      </section>

      <Seo
        title="A2 Ghee Benefits & Ayurveda Blog | Gauswarn Pure Bilona Ghee"
        description="Read expert articles on Pure A2 Gir Cow Ghee benefits, traditional bilona method, ayurveda, and healthy living by Gauswarn India."
        url="https://gauswarn.com/blog"
        structuredData={generateBlogSchema()}
      />
      <ProductHeroSection />

      <div className="app">
        <div className="main-content">
          <div className="blog-grid">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
            ) : sortedBlogs.length > 0 ? (
              sortedBlogs.map((post) => (
                <Link 
                  key={post?.id || post?._id} 
                  to={`/blog/${formatSlug(post?.slug || post?.id)}`} 
                  className="blog-card-link"
                  aria-label={`Read full article: ${post?.title}`}
                >
                  <div className="blog-card">
                    <div className="blog-image">
                      <img
                        src={post?.image_url || post?.image || "/default-blog-image.jpg"}
                        alt={`Blog: ${post?.title}`}
                        loading="lazy"
                      />
                    </div>

                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="tag">{post?.category?.name || post?.category || "Blog"}</span>
                        <span className="blog-date">{formatDate(post?.created_at || post?.date)}</span>
                      </div>

                      <h3 className="blog-title">{post?.title || "Untitled"}</h3>

                      <p className="blog-description">{truncateText(post?.content || post?.description)}</p>

                      <span className="read-more-btn">Read Full Article →</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-blogs">
                <h3>No blogs found</h3>
                <p>Check back later for new content!</p>
              </div>
            )}
          </div>
        </div>

        {/* FILTER / SORT */}
        <div className="right-filter-card">
          <FilterNewsletterCard
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
        </div>
      </div>
    </>
  );
};

export default BlogMainPageNew;
