import React from "react";

const AddBlog = () => {
  return (
    <div>
      <h1 className="mb-3">Add Your Blog or Your Experience</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Your Name"
        />
        <label for="floatingInput">Blog Title</label>
      </div>
      <div className="d-flex justify-content-center">
        <div className="form-floating mb-3 w-75 me-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Blog Img Link</label>
        </div>
        <div className="form-floating mb-3 w-25">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Traveler Name</label>
        </div>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control mb-3"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label for="floatingTextarea2">Blog Description</label>
      </div>
      <div className="form-floating  mb-3">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelect">Blog Category</label>
      </div>
      <div className="d-flex justify-content-between">
        <div className="form-floating mb-3 w-50 me-2">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Total Cost</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Travel Location</label>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="form-floating mb-3 me-2 w-50">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Date</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
          />
          <label for="floatingInput">Rating</label>
        </div>
      </div>
      <button type="button" className="btn btn-outline-dark btn-lg">
        Post Your Blog
      </button>
    </div>
  );
};

export default AddBlog;
