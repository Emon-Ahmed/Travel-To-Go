import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SubHeader from "./SubHeader";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  useEffect(() => {
    const url = `https://ancient-scrubland-54558.herokuapp.com/blogs/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  return (
    <div>
      <SubHeader pageName={blogDetails.title} />
      <Container>
        <div className="my-5">
          <div className="row">
            <div className="col-9">
              <div>
                <div>
                  <img
                    className="w-100 my-4"
                    height={350}
                    src={blogDetails.img}
                    alt="Blog Banner"
                  />
                </div>
                <h1>
                  {blogDetails.title}
                </h1>
                <p>
                {blogDetails.description}
                </p>

              </div>
            </div>
            <div className="col-3">
              <div>
                <p className="blog-info">Total Cost: {blogDetails.cost} </p>
                <p className="blog-info">Traveler: {blogDetails.traveler}</p>
                <p className="blog-info">Category: {blogDetails.category}</p>
                <p className="blog-info">Location: {blogDetails.location}</p>
                <p className="blog-info">Date: {blogDetails.date}</p>
                <p className="blog-info">Rating: {blogDetails.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
