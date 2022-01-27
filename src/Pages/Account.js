import React from "react";
import { Container } from "react-bootstrap";
import SubHeader from "../Components/SubHeader";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <SubHeader pageName="Account" />
      <Container className="py-5 my-5">
        <div className="row">
          <div className="col-6">
            <h1 className="mb-4">LOGIN</h1>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button type="button" className="btn btn-outline-dark btn-lg">
              Login
            </button>
            <Link to="/dashboard">
              <button
                type="button"
                className="mx-2 btn btn-outline-dark active btn-lg"
              >
                {" "}
                Google <BsBoxArrowInUpRight />
              </button>
            </Link>
          </div>

          {/* SING UP AREA  */}

          <div className="col-6">
            <h1 className="mb-4">SING UP</h1>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Your Name"
              />
              <label for="floatingInput">Your Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <button
              type="button"
              className="btn btn-outline-dark active btn-lg"
            >
              Sing Up
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Account;
