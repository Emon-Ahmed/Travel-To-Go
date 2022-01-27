import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  //Delete Blog
  const handleCategoryDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/category/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted");
            const remainingCategory = category.filter(
              (category) => category._id !== id
            );
            setCategory(remainingCategory);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="mb-3">Category List</h1>
      <div className="row">
        {category.map((category) => (
          <div className="col-4 my-2">
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
                  <Link to={`/dashboard/categoryList/${category._id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-1"
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleCategoryDelete(category._id)}
                    type="button"
                    className="btn btn-outline-danger mx-1"
                  >
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

export default CategoryList;
