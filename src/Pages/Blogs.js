import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Blog from "../Components/Blog";
import SubHeader from "../Components/SubHeader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // Get Current Blogs

  return (
    <>
      <SubHeader pageName="Explore Blogs" />
      <Container className="py-5">
        <div className="row py-5">
          {blogs.map((blog) => (
            <div  key={blog._id} className="col-4">
              <Blog blog={blog}/>
            </div>
          ))}
        </div>
        <nav className="py-5" aria-label="Page navigation example">
          <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Blogs;
