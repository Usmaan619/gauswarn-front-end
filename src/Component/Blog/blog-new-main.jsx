import React, { useState } from "react";
import "./blog-new-main.css";
import FilterNewsletterCard from "./blog-filter";
import ProductHeroSection from "../Products/product-hero-section";

const BlogCard = ({ image, title, description, date, tags, watermark }) => (
  <div className="blog-card">
    <div className="blog-image">
      <img src={image} alt={title} />
      {watermark && <div className="watermark">{watermark}</div>}
    </div>
    <div className="blog-content">
      <div className="blog-meta">
        <div className="blog-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="blog-date">{date}</span>
      </div>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{description}</p>
      <button className="read-more-btn">Read More</button>
    </div>
  </div>
);

const BlogMainPageNew = () => {
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 9;
  const blogPosts = new Array(36).fill({
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
    title: "Why A2 Ghee Is the Purest Superfood for Your Daily Diet",
    description:
      "Learn how A2 Gir cow ghee boosts digestion, energy, immunity, and overall wellness — backed by ancient Ayurved...",
    date: "15 Nov 2025",
    tags: ["ZEV", "RD", "BC LCFS"],
  });

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-4">
      <ProductHeroSection />
      <div className="app">
        {/* BLOG CONTENT */}
        <div className="main-content">
          <div className="blog-grid">
            {currentPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>

        {/* FILTER SIDEBAR */}

        <FilterNewsletterCard />
      </div>
      {/* PAGINATION */}
      <div className="pagination my-3">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-btn ${
              currentPage === index + 1 ? "pagination-active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogMainPageNew;
