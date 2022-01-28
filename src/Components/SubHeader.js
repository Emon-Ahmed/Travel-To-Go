import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";

const SubHeader = ({ pageName }) => {
  const { user } = useAuth();
  return (
    <div>
      <div className="sub-banner">
        <div className="nav-bar py-3">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <span className="text-white fw-bold h4">travelFast.</span>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/" className="text-white px-3">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blogs" className="text-white px-3">
                    Explore Blogs
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/category"
                    className="text-white px-3"
                  >
                    Category
                  </Nav.Link>
                  <Nav.Link as={Link} to="/compare" className="text-white px-3">
                    Compare
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" className="text-white px-3">
                    About
                  </Nav.Link>
                  {user.email ? (
                    <Nav.Link
                      as={Link}
                      to="/dashboard"
                      className="text-black ps-4 icon-area back-glow rounded"
                    >
                      Dashboard{" "}
                      <span className="singup-icon rounded ms-2 text-left">
                        <BsBoxArrowUpRight />
                      </span>
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      as={Link}
                      to="/account"
                      className="text-black ps-4 icon-area back-glow rounded"
                    >
                      Sing Up{" "}
                      <span className="singup-icon rounded ms-2 text-left">
                        <BsBoxArrowUpRight />
                      </span>
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="py-5 mt-4">
          <Container>
            <h1 className="text-white sub-banner-fs fw-bolder">{pageName}</h1>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
