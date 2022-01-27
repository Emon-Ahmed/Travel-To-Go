import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Blog from "../Components/Blog";
import SubHeader from "../Components/SubHeader";
import PaginatePage from '../Components/PaginatePage';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading]= useState(false)
  const [page, setPage] = useState({ currentPage: 0, offset: 0 });

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) =>{
        setLoading(false)
         setBlogs(data)});
  }, []);



  // Get Current Blogs
  const pageCount = Math.ceil(blogs.length / 12)

  const changePage = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * 12;
    setPage({ currentPage: selectedPage, offset: offset });
  };

  console.log(page.currentPage * 12, (page.currentPage * 12) + 12)
  return (
    <>
      <SubHeader pageName="Explore Blogs" />
      <Container className="py-5">
        {loading && <h1 className="text-center my-5">Loading</h1>}
        <div className="row py-5">
          {blogs.slice(page.currentPage * 12, (page.currentPage * 12) + 12).map((blog) => (
            <div  key={blog._id} className="col-4">
              <Blog blog={blog}/>
            </div>
          ))}
          <PaginatePage pageCount={pageCount} changePage={changePage} />
        </div>
        {/* <nav className="py-5" aria-label="Page navigation example">
          <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav> */}
      </Container>
    </>
  );
};

export default Blogs;
