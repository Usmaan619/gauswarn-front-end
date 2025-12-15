import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog-new-main.css";
import FilterNewsletterCard from "./blog-filter";
import ProductHeroSection from "../Products/product-hero-section";
import { getData } from "../../services/api";

const BlogCard = ({
  image,
  title,
  description,
  date,
  tags,
  watermark,
  slug,
}) => (
  <div className="blog-card">
    <div className="blog-image">
      <img src={image} alt={title} />
      {watermark && <div className="watermark">{watermark}</div>}
    </div>
    <div className="blog-content">
      <div className="blog-meta">
        <div className="blog-tags">
          {tags?.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <span className="blog-date">{date}</span>
      </div>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-description">{description}</p>

      <Link to={`/blog/${slug}`} className="read-more-btn">
        Read More
      </Link>
    </div>
  </div>
);

const BlogMainPageNew = () => {
  const [email, setEmail] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const postsPerPage = 9;

  const fetchBlogs = async (page) => {
    try {
      setLoading(true);

      const res = await getData(`admin/blogs`, {
        params: {
          page,
          limit: postsPerPage,
        },
      });

      // { success, blogs: [...], page, limit }
      const list = res.blogs || [];
      setBlogs(list);

      if (list.length < postsPerPage) {
        setTotalPages(page);
      } else {
        setTotalPages(page + 1);
      }
    } catch (err) {
      console.error("Error loading blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber) => {
    if (pageNumber === currentPage) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="mt-4">
      <ProductHeroSection />
      <div className="app">
        <div className="main-content">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="blog-grid">
              {blogs.map((post) => (
                <BlogCard
                  key={post.id}
                  image={post.image_url}
                  title={post.title}
                  description={post.content}
                  date={formatDate(post.created_at)}
                  tags={[post.category]}
                  watermark={null}
                  slug={post.slug}
                />
              ))}
              {blogs.length === 0 && !loading && <p>No blogs found.</p>}
            </div>
          )}
        </div>

        <FilterNewsletterCard />
      </div>

      <div className="pagination my-3">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-btn ${
              currentPage === index + 1 ? "pagination-active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogMainPageNew;

// import React, { useState, useEffect } from "react";
// import "./blog-new-main.css";
// import FilterNewsletterCard from "./blog-filter";
// import ProductHeroSection from "../Products/product-hero-section";
// import { getData } from "../../services/api";

// const BlogCard = ({ image, title, description, date, tags, watermark }) => (
//   <div className="blog-card">
//     <div className="blog-image">
//       <img src={image} alt={title} />
//       {watermark && <div className="watermark">{watermark}</div>}
//     </div>
//     <div className="blog-content">
//       <div className="blog-meta">
//         <div className="blog-tags">
//           {tags?.map((tag, index) => (
//             <span key={index} className="tag">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <span className="blog-date">{date}</span>
//       </div>
//       <h3 className="blog-title">{title}</h3>
//       <p className="blog-description">{description}</p>
//       <button className="read-more-btn">Read More</button>
//     </div>
//   </div>
// );

// const BlogMainPageNew = () => {
//   const [email, setEmail] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const [blogs, setBlogs] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const postsPerPage = 9;

//   const fetchBlogs = async (page) => {
//     try {
//       setLoading(true);

//       const res = await getData(`admin/blogs`, {
//         params: {
//           page,
//           limit: postsPerPage,
//         },
//       });

//       // response structure tumne diya hai:
//       // { success, blogs: [...], page, limit }
//       setBlogs(res.blogs || []);

//       // agar backend total count nahi de raha,
//       // simple logic: agar current page pe less than limit aaye,
//       // to ye last page hai.
//       if ((res.blogs || []).length < postsPerPage) {
//         setTotalPages(page);
//       } else {
//         // ya to fixed 10 pages maan lo, ya alag se total leke aao
//         setTotalPages(page + 1); // simple optimistic approach
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs(currentPage);
//   }, [currentPage]);

//   const paginate = (pageNumber) => {
//     if (pageNumber === currentPage) return;
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // helper: ISO date ko readable banane ke liye
//   const formatDate = (iso) => {
//     if (!iso) return "";
//     const d = new Date(iso);
//     return d.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   return (
//     <div className="mt-4">
//       <ProductHeroSection />
//       <div className="app">
//         <div className="main-content">
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="blog-grid">
//               {blogs.map((post) => (
//                 <BlogCard
//                   key={post.id}
//                   image={post.image_url}
//                   title={post.title}
//                   description={post.content}
//                   date={formatDate(post.created_at)}
//                   tags={[post.category]} // ya jo bhi tags logic hai
//                   watermark={null}
//                 />
//               ))}
//               {blogs.length === 0 && !loading && <p>No blogs found.</p>}
//             </div>
//           )}
//         </div>

//         <FilterNewsletterCard />
//       </div>

//       {/* PAGINATION */}
//       <div className="pagination my-3">
//         <button
//           className="pagination-btn"
//           disabled={currentPage === 1}
//           onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//         >
//           Prev
//         </button>

//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => paginate(index + 1)}
//             className={`pagination-btn ${
//               currentPage === index + 1 ? "pagination-active" : ""
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           className="pagination-btn"
//           disabled={currentPage === totalPages}
//           onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogMainPageNew;
