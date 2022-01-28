import React from "react";
import { Container } from "react-bootstrap";
import SubHeader from "../Components/SubHeader";
import AboutImg from "./../Images/about.png";

const About = () => {
  return (
    <>
      <SubHeader pageName="About" />
        <Container className="about-section my-5">
          <div className="back-color d-flex justify-content-between align-items-center">
            <div className="w-50">
              <h1 className="display-5 fw-bolder">
                About Us
              </h1>
              <p className="py-3 text-secondary">
                There's more world out there that you don't know about. Culture
                is
                <br /> abundant and it is imperative that you experience.
              </p>
              <p className="py-3 text-secondary">
                There's more world out there that you don't know about. Culture
                is abundant and it is imperative that you experience.
                There's more world out there that you don't know about. Culture
                is abundant and it is imperative that you experience.
              </p>
              <p className="py-3 text-secondary">
                There's more world out there that you don't know about. Culture
                is abundant and it is imperative that you experience.
                There's more world out there that you don't know about. Culture
                is abundant and it is imperative that you experience.
              </p>
              <p className="py-3 text-secondary">
                There's more world out there that you don't know about. Culture
                is
                <br /> abundant and it is imperative that you experience.
              </p>
            </div>
            <img className="about-img" src={AboutImg} alt="ABOUT" />
          </div>
        </Container>
    </>
  );
};

export default About;
