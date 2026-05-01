import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "Pure A2 Gir Cow Ghee - Traditional Bilona Method | Gauswarn India",
  description = "Order 100% pure, traditional bilona-made A2 Gir Cow ghee from Gauswarn. Farm fresh, lab tested, rich in nutrients and delivered across India.",
  url,
  image = "https://gauswarn.com/favicon-512x512.png",
  structuredData,
  type = "website",
  keywords = "A2 Cow Ghee, Bilona Ghee, Pure Ghee, Gir Cow Ghee, Gauswarn India, Desi Cow Ghee, Traditional Ghee",
}) => {
  // Ensure the canonical URL is consistent (no trailing slash for home, consistent for others)
  const baseUrl = "https://gauswarn.com";
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  const canonicalUrl = (url || (baseUrl + currentPath)).replace(/\/$/, "");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title data-rh="true">{title}</title>
      <meta data-rh="true" name="description" content={description} />
      <meta data-rh="true" name="keywords" content={keywords} />
      <meta data-rh="true" name="robots" content="index, follow" />
      <meta data-rh="true" name="author" content="Gauswarn India" />
      <link data-rh="true" rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta data-rh="true" property="og:type" content={type} />
      <meta data-rh="true" property="og:site_name" content="Gauswarn India" />
      <meta data-rh="true" property="og:title" content={title} />
      <meta data-rh="true" property="og:description" content={description} />
      <meta data-rh="true" property="og:image" content={image} />
      <meta data-rh="true" property="og:url" content={canonicalUrl} />

      {/* Twitter Card Tags */}
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:site" content="@gauswarnindia" />
      <meta data-rh="true" name="twitter:title" content={title} />
      <meta data-rh="true" name="twitter:description" content={description} />
      <meta data-rh="true" name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script data-rh="true" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
