import React from "react";
import { BsSuitHeartFill, BsBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

const Blog = ({blog}) => {
  return (
    <div className="mx-3">
      <div className="blog my-3">
        <img src={blog.img} alt="Blog" />
        <div className="p-3">
          <div className="mx-2 text-left">
            <Link to={`/blogs/${blog._id}`}>
               <h5 className="text-black text-decoration-none">{blog.title}</h5>
              </Link>
            <p className="text-secondary">
            {blog.description}
            </p>
          </div>
          <div className="d-flex justify-content-between mx-2">
            <div>
              <span className="color-red me-2">
                <BsSuitHeartFill />
              </span>
              {blog.rating}
            </div>
            <div className="text-secondary fw-bold">
              <BsBookmarkPlusFill data-tip="Click For Compare" /> 
              <ReactTooltip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
