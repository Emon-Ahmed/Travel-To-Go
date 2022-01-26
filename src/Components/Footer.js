import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-bg py-5">
      <Container>
        <div>
          <div className="row">
            <div className="col-3">
              <span className="text-black fw-bold h4">
                travelFast <span className="footer-icon">.</span>
              </span>
              <div className="d-flex justify-content-between pe-4 py-5 footer-icon">
                {/* <FaGooglePlusG /> */}
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
            <div className="col-9">
              <div className="row justify-content-around fw-thin">
                <div className="col-3">
                  <p className="fw-bold">Services</p>
                  <p>Bangladesh</p>
                  <p>India</p>
                  <p>Nepal</p>
                  <p>Malaysia</p>
                </div>
                <div className="col-3">
                  <p className="fw-bold">Packages</p>
                  <p>Tour</p>
                  <p>Hotel</p>
                  <p>Ticket</p>
                  <p>Travel</p>
                </div>
                <div className="col-3">
                  <p className="fw-bold">About</p>
                  <p>Travel</p>
                  <p>Experience</p>
                  <p>Feature</p>
                  <p>Contact</p>
                </div>
                <div className="col-3">
                  <p className="fw-bold">Terms</p>
                  <p>Privacy</p>
                  <p>Policy</p>
                  <p>Terms</p>
                  <p>Conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <span>&copy; 2022 Travel Fast || All rights resolved</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
