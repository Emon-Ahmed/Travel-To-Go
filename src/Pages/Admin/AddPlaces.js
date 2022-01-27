import React, { useRef } from "react";

const AddPlaces = () => {
  const catTitle = useRef();
  const catBanner = useRef();

  const handleAddCategory = (e) => {
    const Title = catTitle.current.value;
    const Banner = catBanner.current.value;
    const newCategory = { Title, Banner };
    fetch("http://localhost:5000/category", {
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
          e.target.reset();
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

export default AddPlaces;
