import React from "react";
import { BsSuitHeartFill, BsBookmarkPlusFill } from "react-icons/bs";
import ReactTooltip from 'react-tooltip';

const Blog = ({blog}) => {
  return (
    <div className="mx-3">
      <div className="blog">
        <img src={blog.img} alt="Blog" />
        <div className="p-3">
          <div className="mx-2 text-left">
            <h5>{blog.title}</h5>
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
