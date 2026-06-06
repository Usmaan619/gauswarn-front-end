import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * Dynamic Canonical Component
 * - Strips query parameters for SEO purposes (prevents /products?v=1 duplicates).
 * - Enforces no trailing slashes at the end of the URL.
 * 
 * Usage: Place <CanonicalHelper /> inside your main <App /> or individual pages.
 */
const CanonicalHelper = () => {
  const location = useLocation();
  const BASE_URL = "https://gauswarn.com";

  // Get the current path without query parameters
  let cleanPath = location.pathname;

  // Remove trailing slash if present (unless it's exactly "/")
  if (cleanPath.endsWith("/") && cleanPath.length > 1) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Construct the clean canonical URL
  const canonicalUrl = cleanPath === "/" ? BASE_URL : `${BASE_URL}${cleanPath}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalHelper;
