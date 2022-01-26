import React from "react";
import Blog1 from "./../Images/blog1.jpg";
import { BsSuitHeartFill, BsBookmarkPlusFill } from "react-icons/bs";
import ReactTooltip from 'react-tooltip';

const Blog = () => {
  return (
    <div className="mx-3">
      <div className="blog">
        <img src={Blog1} alt="Blog" />
        <div className="p-3">
          <div className="mx-2 text-left">
            <h5>Finding Love and Home in Tbilisi</h5>
            <p className="text-secondary">
              When did you first hear of Georgia Mako her asked a long drag from
              her cigarette.
            </p>
          </div>
          <div className="d-flex justify-content-between mx-2">
            <div>
              <span className="color-red me-2">
                <BsSuitHeartFill />
              </span>
              227
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
