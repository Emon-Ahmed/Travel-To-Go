import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [UpdateCategory, setUpdateCategory] = useState({});
  const initialData = {
    Title: "",
    Banner: "",
  };

  const [update, setUpdate] = useState(initialData);
  useEffect(() => {
    setUpdate(UpdateCategory);
  }, [UpdateCategory]);


  useEffect(() => {
    const url = `https://ancient-scrubland-54558.herokuapp.com/category/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateCategory(data));
  }, []);

  // Update Category
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleUpdateCategory = (e) => {
    const url = `https://ancient-scrubland-54558.herokuapp.com/category/${id}`;
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
          navigate("/dashboard/categoryList");
        }
      });
  };
  return (
    <>
      <div>
        <h1 className="mb-3">Update Category</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Update Category"
            defaultValue={UpdateCategory?.Title}
            onChange={handleUpdate}
            name="Title"
          />
          <label for="floatingInput">Update Category Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Banner Link"
            defaultValue={UpdateCategory?.Banner}
            onChange={handleUpdate}
            name="Banner"
          />
          <label for="floatingInput">Update Banner Link</label>
        </div>
        <button
          onClick={handleUpdateCategory}
          type="button"
          className="btn btn-outline-dark btn-lg"
        >
          Update Category
        </button>
      </div>
    </>
  );
};

export default UpdateCategory;
