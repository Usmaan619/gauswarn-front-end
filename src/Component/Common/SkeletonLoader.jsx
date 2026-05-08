import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="global-skeleton-wrapper">
      {/* Header Skeleton */}
      <div className="skeleton-header">
        <div className="skeleton-logo shimmer"></div>
        <div className="skeleton-nav">
          <div className="skeleton-nav-item shimmer"></div>
          <div className="skeleton-nav-item shimmer"></div>
          <div className="skeleton-nav-item shimmer"></div>
          <div className="skeleton-nav-item shimmer"></div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="skeleton-hero shimmer"></div>

      {/* Content Skeleton */}
      <div className="skeleton-content-container">
        <div className="skeleton-title shimmer"></div>
        <div className="skeleton-grid">
          <div className="skeleton-card shimmer"></div>
          <div className="skeleton-card shimmer"></div>
          <div className="skeleton-card shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
