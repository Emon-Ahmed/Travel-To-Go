import React from "react";
import SubHeader from "../Components/SubHeader";
import PlaceSection from "../Components/PlaceSection";

const Category = () => {
  return (
    <div>
      <SubHeader pageName="Category" />
      <div className="mt-4 pt-5">
        <PlaceSection />
      </div>
    </div>
  );
};

export default Category;
