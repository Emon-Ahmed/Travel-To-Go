import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Places from "./Pages/Places";
import Compare from "./Pages/Compare";
import About from "./Pages/About";
import Account from "./Pages/Account";
import Dashboard from "./Pages/Admin/Dashboard";
import Welcome from "./Pages/Admin/Welcome";
import AddBlog from "./Pages/Admin/AddBlog";
import AddPlaces from "./Pages/Admin/AddPlaces";
import MakeAdmin from "./Pages/Admin/MakeAdmin";
import AdminApprove from "./Pages/Admin/AdminApprove";
import BlogList from "./Pages/Admin/BlogList";
import PlaceList from "./Pages/Admin/PlaceList";
import UpdateBlog from "./Pages/Admin/UpdateBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="compare" element={<Compare />} />
        <Route path="about" element={<About />} />
        <Route path="account" element={<Account />} />
        <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<Welcome />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="blogList" element={<BlogList />} >
            <Route path="updateBlog" element={<UpdateBlog />} />
          </Route>
          <Route path="placeList" element={<PlaceList />} />
          <Route path="addPlaces" element={<AddPlaces />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="adminApprove" element={<AdminApprove />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
