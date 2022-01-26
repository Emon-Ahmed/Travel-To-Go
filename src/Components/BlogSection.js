import React from "react";
import Blog from "./Blog";
import { Container } from "react-bootstrap";

const BlogSection = () => {
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
        <Blog />
        <Blog />
        <Blog />
      </div>
    </Container>
  );
};

export default BlogSection;
