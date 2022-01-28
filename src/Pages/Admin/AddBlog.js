import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const AddBlog = () => {
  const navigate = useNavigate();

  const { admin } = useAuth();

  const titleRef = useRef();
  const imgRef = useRef();
  const travelerRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const costRef = useRef();
  const locationRef = useRef();
  const dateRef = useRef();
  const ratingRef = useRef();

  const handleAddBlog = (e) => {
    const title = titleRef.current.value;
    const img = imgRef.current.value;
    const traveler = travelerRef.current.value;
    const description = descriptionRef.current.value;
    const category = categoryRef.current.value;
    const cost = costRef.current.value;
    const location = locationRef.current.value;
    const date = dateRef.current.value;
    const rating = ratingRef.current.value;

    const newBlog = {
      title,
      img,
      traveler,
      description,
      category,
      cost,
      location,
      date,
      rating,
    };
    fetch("https://ancient-scrubland-54558.herokuapp.com/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...newBlog,
        status: admin ? "approved" : "pending",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Blog Added");
          navigate("/dashboard/blogList");
        }
      });
  };

  // For Category Showing
  const [categoryShow, setCategoryShow] = useState([]);
  useEffect(() => {
    fetch("https://ancient-scrubland-54558.herokuapp.com/category")
      .then((res) => res.json())
      .then((data) => setCategoryShow(data));
  }, []);

  return (
    <div>
      <h1 className="mb-3">Add Your Blog or Your Experience</h1>
      <div className="form-floating mb-3">
        <input
        required
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Blog Title"
          ref={titleRef}
        />
        <label for="floatingInput">Blog Title</label>
      </div>
      <div className="d-flex justify-content-center">
        <div className="form-floating mb-3 w-75 me-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Img Link"
            ref={imgRef}
          />
          <label for="floatingInput">Blog Img Link</label>
        </div>
        <div className="form-floating mb-3 w-25">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Traveler Name"
            ref={travelerRef}
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
          ref={descriptionRef}
        ></textarea>
        <label for="floatingTextarea2">Blog Description</label>
      </div>
      <div className="form-floating  mb-3">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          ref={categoryRef}
        >
          <option selected>Open this select menu</option>
          {categoryShow.map((i) => (
            <option value={i.Title}>{i.Title}</option>
          ))}
        </select>
        <label for="floatingSelect">Blog Category</label>
      </div>
      <div className="d-flex justify-content-between">
        <div className="form-floating mb-3 w-50 me-2">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Total Cost"
            ref={costRef}
          />
          <label for="floatingInput">Total Cost</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
            ref={locationRef}
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
            placeholder="Date"
            ref={dateRef}
          />
          <label for="floatingInput">Date</label>
        </div>
        <div className="form-floating mb-3 w-50">
          <input
            min="0"
            max="5"
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Rating"
            ref={ratingRef}
          />
          <label for="floatingInput">Rating</label>
        </div>
      </div>
      <button
        onClick={handleAddBlog}
        type="button"
        className="btn btn-outline-dark btn-lg"
      >
        Post Your Blog
      </button>
    </div>
  );
};

export default AddBlog;
