import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();

  const catTitle = useRef();
  const catBanner = useRef();

  const handleAddCategory = (e) => {
    const Title = catTitle.current.value;
    const Banner = catBanner.current.value;
    const newCategory = { Title, Banner };
    fetch("https://ancient-scrubland-54558.herokuapp.com/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Category Added");
          navigate("/dashboard/categoryList");
        }
      });
  };
  return (
    <div>
      <h1 className="mb-3">Add Category</h1>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Category Title"
          ref={catTitle}
        />
        <label for="floatingInput">Category Title</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Banner Link"
          ref={catBanner}
        />
        <label for="floatingInput">Banner Link</label>
      </div>
      <button
        onClick={handleAddCategory}
        type="button"
        className="btn btn-outline-dark btn-lg"
      >
        Add New Category
      </button>
    </div>
  );
};

export default AddCategory;
