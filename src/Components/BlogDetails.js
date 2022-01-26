import React from "react";
import { Container } from "react-bootstrap";
import SubHeader from "./SubHeader";

const BlogDetails = () => {
  return (
    <div>
      <SubHeader pageName="Blogs Details" />
      <Container>
        <div>
          <img className="w-100" height={450} src="" alt="Blog Banner" />
        </div>
        <div>
          <div className="row">
            <div className="col-9">
              <div>
                <h1>Blog Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Labore est ad animi vel veritatis odit? Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Ut adipisci eaque a, atque
                  voluptatum iusto nemo illum provident debitis quasi odio
                  exercitationem accusamus itaque saepe doloremque fugiat rem in
                  laborum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum deleniti, ducimus est nobis repellendus dolores
                  reiciendis rem? Repellendus, expedita beatae.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div>
                <p className="blog-info">Total Cost: </p>
                <p className="blog-info">Traveler: </p>
                <p className="blog-info">Category: </p>
                <p className="blog-info">Location: </p>
                <p className="blog-info">Date: </p>
                <p className="blog-info">Rating: </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
