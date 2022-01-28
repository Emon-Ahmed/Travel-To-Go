import React from "react";
import { BsSuitHeartFill, BsBookmarkPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import useAuth from "../Hooks/useAuth";

const Blog = ({blog}) => {
  const {setCompare, compare} = useAuth()
  console.log(compare)
  const handleCompare = (blogData) =>{
    const check = compare.find(i=> i._id === blogData._id)
    if(check) return alert('Item is already added')
    setCompare([...compare, blogData])
  }
 
  return (
    <div className="mx-3">
      <div className="blog my-3">
        <img src={blog.img} alt="Blog" />
        <div className="p-3 innerBlog">
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
            <div className="text-secondary fw-bold" onClick={()=>handleCompare(blog)}>
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
