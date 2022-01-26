import React from "react";

const AddPlaces = () => {
  return (
    <div>
      <h1 className="mb-3">Add Category</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Your Name"
        />
        <label for="floatingInput">Category Title</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Your Name"
        />
        <label for="floatingInput">Banner Link</label>
      </div>
      <button type="button" className="btn btn-outline-dark btn-lg">
        Add New Category
      </button>
    </div>
  );
};

export default AddPlaces;
