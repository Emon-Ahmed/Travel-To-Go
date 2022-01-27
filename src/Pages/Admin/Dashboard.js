import React from "react";
import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import SubHeader from "../../Components/SubHeader";

const Dashboard = () => {
  return (
    <div>
      <SubHeader pageName="Dashboard" />
      <div className="py-5 my-5">
        <Container>
          <div className="row">
            <div className="col-3">
              <div className="dashboard-navbar">
                <nav className="nav flex-column">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <Link className="nav-link" to="/dashboard/addblog">
                    Add Blog / Experience
                  </Link>
                  <Link className="nav-link" to="/dashboard/addCategory">
                    Add Category
                  </Link>
                  <Link className="nav-link" to="/dashboard/blogList">
                    Blog List
                  </Link>
                  <Link className="nav-link" to="/dashboard/categoryList">
                    Category List
                  </Link>
                  <Link className="nav-link" to="/dashboard/makeAdmin">
                    Make Admin
                  </Link>
                  <Link className="nav-link" to="/dashboard/adminApprove">
                    Blog Approval
                  </Link>
                  <Link className="nav-link logout-bg" to="/">
                    Log Out
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-9">
              <div className="dashboard-sidebar">
                <Outlet />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
