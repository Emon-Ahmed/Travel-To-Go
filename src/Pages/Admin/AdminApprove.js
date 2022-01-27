import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminApprove = () => {
  const [approve, setApprove] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/pendingBlogs")
      .then((res) => res.json())
      .then((data) => setApprove(data));
  }, []);

  const handleApprove = (id) =>{
    console.log(id)
    fetch(`http://localhost:5000/updateBlog/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
  
        if (data.modifiedCount) {
          navigate("/dashboard/blogList");
        }
      });
  }
  const handleDelete = (id) =>{
    console.log(id)
    fetch(`http://localhost:5000/blog/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          navigate("/dashboard/blogList");
        }
      });
  }
  return (
    <div>
      <h1 className="mb-3">Approve New Blog</h1>

      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Blog Title</th>
            <th scope="col">Traveler Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {approve.map((pending) => (
            <tr>
              <th scope="row">1</th>
              <td>{pending.title}</td>
              <td>{pending.traveler}</td>
              <td>
                <button type="button" className="btn btn-outline-success mx-1" onClick={()=>handleApprove(pending._id)}>
                  Approve
                </button>
                <button type="button" className="btn btn-outline-danger mx-1" onClick={()=>handleDelete(pending._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApprove;
