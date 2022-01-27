import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { Container } from "react-bootstrap";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://ancient-scrubland-54558.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Container className="my-5 py-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold mt-5 mb-3">Latest on The Blogs</h1>
        <p className="text-secondary">
          There's more world out there you don't know about. Culture is abundant
          and it is imperative that you <br /> experience this culture. So erase
          your limits and expand your travel.
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center py-5">
          {blogs?.map((i) => (
            <div  key={i?._id} className="col-4">
              <Blog blog={i}/>
            </div>
          )).splice(0,3)}
      </div>
    </Container>
  );
};

export default BlogSection;
