import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://ancient-scrubland-54558.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //Delete Blog
  const handleBlogDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://ancient-scrubland-54558.herokuapp.com/blogs/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remainingBlog = blogs.filter((blogs) => blogs._id !== id);
            setBlogs(remainingBlog);
          }
        });
    }
  };
  return (
    <>
      <div>
        <h1 className="mb-3">Blog List</h1>
        <div className="row">
          {blogs?.map((blog) => (
            <div className="col-4 my-2">
              <div className="shadow-lg">
                <img
                  className="w-100"
                  height={250}
                  src={blog.img}
                  alt="Category"
                />
                <div className="p-3">
                  <h5 className="py-2">{blog.title}</h5>
                  <div className="d-flex justify-content-between">
                    <Link to={`/dashboard/blogList/${blog._id}`}>
                      <button
                        type="button"
                        className="btn btn-outline-success mx-1"
                      >
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleBlogDelete(blog._id)}
                      type="button"
                      className="btn btn-outline-danger mx-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
