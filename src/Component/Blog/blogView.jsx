import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";

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
      console.log("res: ", res);
      if (res?.success) {
        setBlog(res.blog);
      } else {
        toastError("Blog not found");
      }
    } catch (err) {
      console.log(err);
      toastError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <BlogViewSkeleton />;

  if (!blog) return null;

  return (
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
          background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${blog?.image_url}) center/cover`,
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

          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            {blog?.title}
          </h1>

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
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
            }}
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogView;
