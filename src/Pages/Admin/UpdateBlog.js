import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateBlog, setUpdateBlog] = useState({});
  const initialData = {
    title: "",
    img: "",
    traveler: "",
    description: "",
    category: "",
    cost: "",
    location: "",
    date: "",
    rating: "",
  };

  const [update, setUpdate] = useState(initialData);
  useEffect(() => {
    setUpdate(updateBlog);
  }, [updateBlog]);

  useEffect(() => {
    const url = `https://ancient-scrubland-54558.herokuapp.com/blogs/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateBlog(data));
  }, []);

  // Update Blog
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleUpdateBlog = (e) => {
    const url = `https://ancient-scrubland-54558.herokuapp.com/blogs/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate("/dashboard/blogList");
        }
      });
  };
  return (
    <>
      <div className="container py-2">
        <h1 className="mb-3">Update Your Blog or Your Experience</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Your Name"
            defaultValue={updateBlog?.title}
            onChange={handleUpdate}
            name="title"
          />
          <label for="floatingInput">New Blog Title</label>
        </div>
        <div className="d-flex justify-content-center">
          <div className="form-floating mb-3 w-75 me-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Image Link"
              defaultValue={updateBlog?.img}
              onChange={handleUpdate}
              name="img"
            />
            <label for="floatingInput">New Blog Img Link</label>
          </div>
          <div className="form-floating mb-3 w-25">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your Name"
              defaultValue={updateBlog?.traveler}
              onChange={handleUpdate}
              name="traveler"
            />
            <label for="floatingInput">New Traveler Name</label>
          </div>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control mb-3"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            defaultValue={updateBlog?.description}
            onChange={handleUpdate}
            name="description"
          ></textarea>
          <label for="floatingTextarea2">New Blog Description</label>
        </div>
        <div className="form-floating  mb-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            defaultValue={updateBlog?.category}
            onChange={handleUpdate}
            name="category"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Change Blog Category</label>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-floating mb-3 w-50 me-2">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Your Name"
              defaultValue={updateBlog?.cost}
              onChange={handleUpdate}
              name="cost"
            />
            <label for="floatingInput">Update Total Cost</label>
          </div>
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your Name"
              defaultValue={updateBlog?.location}
              onChange={handleUpdate}
              name="location"
            />
            <label for="floatingInput">Update Travel Location</label>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-floating mb-3 me-2 w-50">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your Name"
              defaultValue={updateBlog?.date}
              onChange={handleUpdate}
              name="date"
            />
            <label for="floatingInput">New Date</label>
          </div>
          <div className="form-floating mb-3 w-50">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your Name"
              defaultValue={updateBlog?.rating}
              onChange={handleUpdate}
              name="rating"
            />
            <label for="floatingInput">Update Rating</label>
          </div>
        </div>
        <button
          onClick={handleUpdateBlog}
          type="button"
          className="btn btn-outline-dark btn-lg"
        >
          Update Your Blog
        </button>
      </div>
    </>
  );
};

export default UpdateBlog;
