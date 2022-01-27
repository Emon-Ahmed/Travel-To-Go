import React, { useEffect, useState } from "react";

const PlaceList = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h1 className="mb-3">Category List</h1>
      <div className="row">
        {category.map((category) => (
          <div className="col-4">
            <div className="shadow-lg">
              <img
                className="w-100"
                height={250}
                src={category.Banner}
                alt="Category"
              />
              <div className="p-2">
                <h5 className="py-2">{category.Title}</h5>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-outline-success mx-1"
                  >
                    Update
                  </button>
                  <button type="button" className="btn btn-outline-danger mx-1">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
