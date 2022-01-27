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

  return (
    <>
      <SubHeader pageName="Blogs" />
      <Container className="py-5">
        <div className="row py-5">
          {blogs?.map((i) => (
            <div  key={i?._id} className="col-4">
              <Blog blog={i}/>
            </div>
          ))}
        </div>
        <nav className="py-5" aria-label="Page navigation example">
          <ul className="pagination pagination-lg justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Blogs;
