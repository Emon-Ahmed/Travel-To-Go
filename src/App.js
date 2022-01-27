import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Compare from "./Pages/Compare";
import About from "./Pages/About";
import Account from "./Pages/Account";
import Dashboard from "./Pages/Admin/Dashboard";
import Welcome from "./Pages/Admin/Welcome";
import AddBlog from "./Pages/Admin/AddBlog";
import AddCategory from "./Pages/Admin/AddCategory";
import MakeAdmin from "./Pages/Admin/MakeAdmin";
import AdminApprove from "./Pages/Admin/AdminApprove";
import BlogList from "./Pages/Admin/BlogList";
import CategoryList from "./Pages/Admin/CategoryList";
import UpdateBlog from "./Pages/Admin/UpdateBlog";
import UpdateCategory from "./Pages/Admin/UpdateCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="compare" element={<Compare />} />
        <Route path="about" element={<About />} />
        <Route path="account" element={<Account />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Welcome />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="blogList" element={<BlogList />} />
          <Route path="categoryList" element={<CategoryList />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="adminApprove" element={<AdminApprove />} />
          <Route path="/dashboard/blogList/:id" element={<UpdateBlog />} />
          <Route path="/dashboard/categoryList/:id" element={<UpdateCategory/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
