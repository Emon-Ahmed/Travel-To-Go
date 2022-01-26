import React from "react";

const MakeAdmin = () => {
  return (
    <div>
      <h1 className="mb-3">Make A New Admin</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Your Name"
        />
        <label for="floatingInput">Admin Email</label>
      </div>
      <button type="button" className="btn btn-outline-dark btn-lg">
        Make Admin
      </button>
    </div>
  );
};

export default MakeAdmin;
