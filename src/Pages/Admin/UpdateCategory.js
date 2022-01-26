import React from "react";

const UpdateCategory = () => {
  return (
    <>
      <div>
        <h1 className="mb-3">Update Category</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Update Category Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Update Banner Link</label>
        </div>
        <button type="button" className="btn btn-outline-dark btn-lg">
          Update Category
        </button>
      </div>
    </>
  );
};

export default UpdateCategory;
