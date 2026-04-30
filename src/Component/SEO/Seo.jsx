import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  url,
  image = "https://gauswarn.com/favicon-512x512.png",
  structuredData,
  type = "website",
  keywords = "A2 Cow Ghee, Bilona Ghee, Pure Ghee, Gir Cow Ghee, Gauswarn India",
}) => {
  // Ensure the canonical URL is consistent (no trailing slash)
  const canonicalUrl = (url || (typeof window !== "undefined" ? window.location.origin + window.location.pathname : "https://gauswarn.com")).replace(/\/$/, "");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Gauswarn India" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Gauswarn India" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gauswarnindia" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
