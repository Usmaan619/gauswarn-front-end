import "./seo-content.css";

/**
 * SeoContent – Renders keyword-rich, crawlable text for SEO/AEO.
 * Visually hidden (sr-only) but present in the DOM for crawlers.
 * 
 * @param {Object} props
 * @param {string} props.heading - Main H2 heading
 * @param {Array<{title?: string, text: string}>} props.sections - Content blocks
 */
const SeoContent = ({ heading, sections = [] }) => {
  if (!sections.length) return null;

  return (
    <div className="seo-crawl-content" aria-hidden="true">
      {heading && <h2>{heading}</h2>}
      {sections.map((section, idx) => (
        <div key={idx}>
          {section.title && <h3>{section.title}</h3>}
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SeoContent;
