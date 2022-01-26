import React from "react";
import { Container } from "react-bootstrap";
import Trip1 from "./../Images/trip1.jpg";
import Trip2 from "./../Images/tipr2.jpg";

const TripBlogSection = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center mb-5 pb-5">
        <div className="mx-2">
          <div className="tripText mx-3">
            <h1 className="display-5 fw-bolder">
              Things Solo Travelers Must <br /> Do on a Trip
            </h1>
            <p className="py-3 text-secondary">
              There are endless advantages to traveling without anyone else in
              tow !
            </p>
          </div>
          <div className="tripCenter">
            <img className="tripImage1" src={Trip1} alt="Image" />
            <div className="tripCentered">
              <div className="z-index back-dark p-4 shadow">
                <div>
                  <h2 className="text-white py-2">
                    Top 10 thing to do When <br /> Bali Indonesia
                  </h2>
                  <p className="d-flex align-items-center color-primary h-line">
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tripImage mx-3">
          <img className="tripImage2 pl-2" src={Trip2} alt="Image" />
          <div className="z-index back-dark p-4 trip-paragraph shadow">
            <div>
              <h2 className="text-white">
                Top 10 things to do in <br /> Sri Lanka
              </h2>
              <p className="d-flex align-items-center color-primary h-line">
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TripBlogSection;
