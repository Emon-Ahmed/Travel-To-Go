import React from "react";
import { Link } from "react-router-dom";
import Img1 from "./../../Images/blog1.jpg";

const BlogList = () => {
  return (
    <>
      <div>
        <h1 className="mb-3">Blog List</h1>
        <div className="row">
          <div className="col-4">
            <div className="shadow-lg">
              <img className="w-100" height={250} src={Img1} alt="Category" />
              <div className="p-3">
                <h5 className="py-2">Blog Name</h5>
                <div className="d-flex justify-content-between">
                  <Link to="/dashboard/blogList/updateBlog">
                    <button
                      type="button"
                      className="btn btn-outline-success mx-1"
                    >
                      Update
                    </button>
                  </Link>
                  <button type="button" className="btn btn-outline-danger mx-1">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
