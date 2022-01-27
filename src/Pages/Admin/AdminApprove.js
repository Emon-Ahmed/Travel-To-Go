import React from "react";

const AdminApprove = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button type="button" className="btn btn-outline-success mx-1">
                Approve
              </button>
              <button type="button" className="btn btn-outline-danger mx-1">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="button" className="btn btn-outline-success mx-1">
                Approve
              </button>
              <button type="button" className="btn btn-outline-danger mx-1">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminApprove;
