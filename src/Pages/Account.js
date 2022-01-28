import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";

import { Container } from "react-bootstrap";
import SubHeader from "../Components/SubHeader";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Account = () => {
  const [loginData, setLoginData] = useState({});
  const [regiData, setRegiData] = useState({});
  const { regiUser, loginUser, googleAuth, user, error } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/blogs";

  const handleLog = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const redirect = () => {
    navigate(redirect_uri);
  };
  const loginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, redirect);
  };

  const handleRegi = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...regiData };
    newLoginData[field] = value;
    setRegiData(newLoginData);
  };

  const registerSubmit = (e) => {
    regiUser(regiData.email, regiData.password, redirect);
  };
  const handleGoogle = (e) => {
    googleAuth(redirect);
  };

  return (
    <>
      <SubHeader pageName="Account" />
      <Container className="py-5 my-5">
        {user?.email && (
          <div className="my-3 alert alert-success" role="alert">
            You Logged Successfully. Go To <Link to="dashboard">Dashboard</Link>
          </div>
        )}
        {error && (
          <div class="my-3 alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="row">
          <div className="col-md-6 my-3">
            <h1 className="mb-4">LOGIN</h1>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                onChange={handleLog}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                onChange={handleLog}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <Link to="/blogs">
              <button
                onClick={loginSubmit}
                type="button"
                className="btn btn-outline-dark btn-lg"
              >
                Login
              </button>
            </Link>
            <Link to="/blogs">
              <button
                onClick={handleGoogle}
                type="button"
                className="mx-2 btn btn-outline-dark active btn-lg"
              >
                Google <BsBoxArrowInUpRight />
              </button>
            </Link>
          </div>
          {/* SING UP AREA  */}
          <div className="col-md-6 my-3">
            <h1 className="mb-4">SING UP</h1>
            {/* <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Your Name"
              />
              <label for="floatingInput">Your Name</label>
            </div> */}
            <div className="form-floating mb-3">
              <input
                name="email"
                onChange={handleRegi}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                name="password"
                onChange={handleRegi}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            {/* <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div> */}
            <Link to="/blogs">
              <button
                onClick={registerSubmit}
                type="button"
                className="btn btn-outline-dark active btn-lg"
              >
                Sing Up
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Account;
