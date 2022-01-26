import React from "react";
import Img1 from "./../../Images/blog1.jpg";

const PlaceList = () => {
  return (
    <div>
      <h1 className="mb-3">Category List</h1>
      <div className="row">
        <div className="col-4">
          <div className="shadow-lg">
            <img className="w-100" height={250} src={Img1} alt="Category" />
            <div className="p-2">
              <h5 className="py-2">Category Name</h5>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-success mx-1">
                  Update
                </button>
                <button type="button" className="btn btn-outline-danger mx-1">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceList;
