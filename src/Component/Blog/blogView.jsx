import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";

import blogImg from "../../asset/new-img/banner.webp";

import Seo from "../SEO/Seo";
import "./blog-view.css";

/* ---------- SKELETON ---------- */
const BlogViewSkeleton = () => (
  <div className="blog-view-skel">
    <div className="blog-view-skel-hero shimmer"></div>

    <div className="blog-view-skel-card">
      <div className="blog-view-skel-line sm shimmer"></div>
      <div className="blog-view-skel-line md shimmer"></div>
      <div className="blog-view-skel-line lg shimmer"></div>
      <div className="blog-view-skel-line lg shimmer"></div>
      <div className="blog-view-skel-line lg shimmer"></div>
      <div className="blog-view-skel-line md shimmer"></div>
    </div>
  </div>
);

const BlogView = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const res = await getData(`admin/blogs/single/${slug}`);
      if (res?.success) {
        setBlog(res.blog);
      } else {
        toastError("Blog not found");
      }
    } catch (err) {
      toastError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <BlogViewSkeleton />;

  if (!blog) return null;

  return (
    <>
      {/* SEO SUPPORT CONTENT – Google & Accessibility Friendly */}
      <section className="sr-only">
        <h2>{blog?.title}</h2>

        <p>
          This article by Gauswarn India explains insights related to A2 Cow
          Ghee, Ayurveda, natural nutrition, digestion, immunity, and healthy
          living. The blog focuses on traditional Indian practices including the
          Bilona method and the benefits of pure desi cow ghee.
        </p>

        <p>
          Readers can learn how A2 ghee supports gut health, boosts immunity,
          improves metabolism, and plays an important role in Ayurvedic wellness
          and daily cooking.
        </p>
      </section>

      <Seo
        title={`${blog.title} | Gauswarn Blog`}
        description={
          blog.meta_description ||
          blog.excerpt ||
          "Read this informative blog from Gauswarn India on A2 Cow ghee, health and ayurveda."
        }
        url={`https://gauswarn.com/blog/${slug}`}
        image={blogImg}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: blog?.title,
          description:
            blog?.meta_description ||
            blog?.excerpt ||
            "Informative article on A2 Cow Ghee, Ayurveda and natural wellness by Gauswarn India.",
          image: blogImg,
          author: {
            "@type": "Organization",
            name: "Gauswarn India",
            url: "https://gauswarn.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Gauswarn India",
            logo: {
              "@type": "ImageObject",
              url: "https://gauswarn.com/favicon-512x512.png",
            },
          },
          datePublished: blog?.created_at,
          dateModified: blog?.updated_at || blog?.created_at,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://gauswarn.com/blog/${slug}`,
          },
        }}
      />

      <div style={{ overflow: "hidden", background: "#f8f8f8" }}>
        {/* BACK BUTTON */}
        <div
          style={{
            padding: "20px 16px",
            maxWidth: 1300,
            margin: "0 auto",
          }}
        >
          <Link
            to="/blog"
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "10px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: 500,
              textDecoration: "none",
              color: "#111827",
            }}
          >
            <ArrowLeft size={20} /> Back to Blogs
          </Link>
        </div>

        {/* HERO */}
        <div
          style={{
            minHeight: 320,
            height: "60vh", // responsive height
            maxHeight: 800,
            background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${blogImg}) center/cover`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          <div style={{ maxWidth: 900, padding: "0 8px" }}>
            {blog?.category && (
              <div
                style={{
                  background: "rgba(255,255,255,0.25)",
                  padding: "6px 18px",
                  borderRadius: "30px",
                  marginBottom: 18,
                  fontSize: 13,
                  backdropFilter: "blur(10px)",
                  display: "inline-block",
                }}
              >
                {blog?.category}
              </div>
            )}

            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              {blog?.title}
            </h2>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                opacity: 0.95,
              }}
            >
              Published on{" "}
              {new Date(blog?.created_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            margin: "-20px auto 0",
            padding: "0 16px 40px",
            maxWidth: 1300,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 24,
              padding: "32px 20px 28px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.08)",
            }}
          >
            <div
              className="blog-content-container"
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
