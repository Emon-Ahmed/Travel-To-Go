import React from "react";
import { Container } from "react-bootstrap";
import Blog from "../Components/Blog";
import SubHeader from "../Components/SubHeader";

const Blogs = () => {
  return (
    <>
      <SubHeader pageName="Blogs" />
      <Container className="py-5">
        <div className="row py-5">
          <div className="col-4">
            <Blog />
          </div>
          <div className="col-4">
            <Blog />
          </div>
          <div className="col-4">
            <Blog />
          </div>
        </div>
        <nav className="py-5" aria-label="Page navigation example">
          <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
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
            <li class="page-item">
              <a class="page-link" href="#">
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
