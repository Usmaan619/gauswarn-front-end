import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import "./blog-new-main.css";

import FilterNewsletterCard from "./blog-filter";
import ProductHeroSection from "../Products/product-hero-section";
import { getData } from "../../services/api";
import Seo from "../SEO/Seo";
import SeoContent from "../SEO/SeoContent";
import { SEO_CONTENT } from "../SEO/seo-content-data";

import blogImg from "../../asset/new-img/banner.webp";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  });

  /* ===== FETCH BLOGS ===== */
  const fetchBlogs = useCallback(async (page = 1) => {
    setLoading(true);
    setError("");

    try {
      const res = await getData(`admin/blogs?page=${page}&limit=10`);

      const blogList = res?.blogs || res?.data?.blogs || [];
      const paginData = res?.pagination || {};

      if (!Array.isArray(blogList)) {
        throw new Error("Invalid blog response");
      }

      setBlogs(blogList);
      setPagination({
        totalPages: paginData.totalPages || 1,
        hasNext: paginData.hasNext || false,
        hasPrev: paginData.hasPrev || false,
      });
      setCurrentPage(page);
      
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Blog fetch failed:", err);
      setBlogs([]);
      setError("Failed to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [fetchBlogs, currentPage]);

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
      name: "Gauswarn India - A2 Ghee & Wellness Blog",
      description:
        "Read expert articles on A2 ghee benefits, ayurveda, digestion, and healthy living.",
      url: "https://gauswarn.com/blog/",
      blogPost: sortedBlogs.slice(0, 10).map((post) => ({
        "@type": "BlogPosting",
        headline: post?.title,
        description: truncateText(post?.content || post?.description, 160),
        image: post?.image_url || post?.image,
        datePublished: post?.created_at || post?.date,
        author: {
          "@type": "Organization",
          name: "Gauswarn India",
        },
      })),
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
      <Seo
        title="A2 Ghee Benefits & Ayurveda Blog | Gauswarn Pure Bilona Ghee"
        description="Read expert articles on Pure A2 Cow Ghee benefits, traditional bilona method, ayurveda, and healthy living by Gauswarn India."
        url="https://gauswarn.com/blog/"
        structuredData={generateBlogSchema()}
      />
      <ProductHeroSection
        title="A2 Ghee Benefits, Ayurveda & Healthy Living Blog | Gauswarn India"
        isH1={true}
      />

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
                        src={blogImg}
                        alt={`Blog: ${post?.title}`}
                        loading="lazy"
                      />
                    </div>

                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="tag">
                          {post?.category?.name || post?.category || "Blog"}
                        </span>
                        <span className="blog-date">
                          {formatDate(post?.created_at || post?.date)}
                        </span>
                      </div>

                      <h3 className="blog-title">
                        {post?.title || "Untitled"}
                      </h3>

                      <p className="blog-description">
                        {truncateText(post?.content || post?.description)}
                      </p>

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

          {/* ===== PAGINATION ===== */}
          {!loading && blogs.length > 0 && pagination.totalPages > 1 && (
            <div className="pagination-container">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={!pagination.hasPrev}
                aria-label="Previous page"
              >
                &larr; Prev
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
                  (num) => (
                    <button
                      key={num}
                      className={`pagination-number ${
                        currentPage === num ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(num)}
                    >
                      {num}
                    </button>
                  )
                )}
              </div>

              <button
                className="pagination-btn"
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, pagination.totalPages)
                  )
                }
                disabled={!pagination.hasNext}
                aria-label="Next page"
              >
                Next &rarr;
              </button>
            </div>
          )}
        </div>

        {/* FILTER / SORT */}
        <div className="right-filter-card">
          <FilterNewsletterCard
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
        </div>
      </div>
      <SeoContent
        heading={SEO_CONTENT.blog.heading}
        sections={SEO_CONTENT.blog.sections}
      />
    </>
  );
};

export default BlogMainPageNew;
