import React from "react";
import { Container } from "react-bootstrap";
import Hero1 from "../Images/hero1.png";
import Hero2 from "../Images/hero2.png";

const HeroSection = () => {
  return (
    <Container>
      <div className="hero-section my-5 py-4">
        <div className="w-100 d-flex">
          <div className="hero-img">
            <img src={Hero1} alt="HERO1" className="hero-img1 me-4" />
          </div>
          <div className="hero-img hero-section2 mt-5">
            <div className="d-flex justify-content-between px-5 py-5 pb-2">
              <div className="text-center">
                <h1 className="fw-bold display-4">38 &deg; </h1>
                <p className="fw-bold text-secondary">Temperature</p>
              </div>
              <div className="text-center">
                <h1 className="fw-bold display-4">17th</h1>
                <p className="fw-bold text-secondary">Ranking</p>
              </div>
              <div className="text-center">
                <h1 className="fw-bold display-4">153k</h1>
                <p className="fw-bold text-secondary">Population</p>
              </div>
              <div className="text-center">
                <h1 className="fw-bold display-4">High</h1>
                <p className="fw-bold text-secondary">Cost of living</p>
              </div>
            </div>
            <img src={Hero2} alt="HERO1" className="hero-img2" />
            <div className="z-index back-dark p-4 pt-5 me-5 header-paragraph shadow">
              <div className="pt-5">
                <p className="d-flex align-items-center color-primary h-line h5">
                  PLACE
                </p>
                <h2 className="text-white py-2">Bondi Beach <br /> Australia</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
