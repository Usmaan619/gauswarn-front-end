import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./blog-view.css";
import { getData } from "../../services/api";
import { toastError } from "../../services/toaster.service";

const BlogView = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

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
      console.error(err);
      toastError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  if (loading || !blog) {
    return <div className="blog-view-loading">Loading blog...</div>;
  }

  return (
    <div className="blog-view">
      <div className="blog-view-container">
        {/* CATEGORY */}
        <span className="blog-view-category">{blog.category}</span>

        {/* TITLE */}
        <h1 className="blog-view-title">{blog.title}</h1>

        {/* META */}
        <p className="blog-view-meta">
          {new Date(blog.created_at).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* COVER IMAGE */}
        {blog.image_url && (
          <div className="blog-view-cover-wrapper">
            <img
              src={blog.image_url}
              alt={blog.title}
              className="blog-view-cover"
            />
          </div>
        )}

        {/* CONTENT */}
        <div
          className="blog-view-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* FOOTER */}
        <div className="blog-view-footer">
          <Link to="/blog" className="blog-view-back-btn">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
