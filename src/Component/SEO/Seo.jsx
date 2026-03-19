import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  url,
  image = "https://gauswarn.com/favicon-512x512.png",
  structuredData,
  type = "website",
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Gauswarn India" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Gauswarn India" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

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
