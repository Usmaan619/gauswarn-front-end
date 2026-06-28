import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";
import { buildArticleSchema } from "../../utils/seo-utils";
import Seo from "../SEO/Seo";

import blogImg from "../../asset/new-img/banner.webp";
import "./blog-view.css";

// Add simple RelatedBlogs component
const RelatedBlogs = ({ currentSlug }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await getData('admin/blogs?page=1&limit=4');
        if (res?.blogs || res?.data?.blogs) {
          const list = res.blogs || res.data.blogs;
          setBlogs(list.filter(b => b.slug !== currentSlug || b.id !== currentSlug).slice(0, 3));
        }
      } catch (err) {}
    };
    fetchRelated();
  }, [currentSlug]);

  if (blogs.length === 0) return null;

  return (
    <div style={{ maxWidth: 1300, margin: '40px auto', padding: '0 16px' }}>
      <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px', color: '#111827' }}>Related Articles</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {blogs.map(post => (
          <Link key={post.id || post._id} to={`/blog/${post.slug || post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src={blogImg} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '16px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{post.title}</h4>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>
                  Read full article &rarr;
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

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

  const fetchBlog = useCallback(async () => {
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
  }, [slug]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);



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
        structuredData={buildArticleSchema(blog)}
      />

      <div style={{ overflow: "hidden", background: "#f8f8f8" }}>
        {/* BACK BUTTON REMOVED IN FAVOR OF GLOBAL BREADCRUMB */}

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

        {/* RELATED ARTICLES */}
        <RelatedBlogs currentSlug={slug} />
      </div>
    </>
  );
};

export default BlogView;
