import React from "react";
import SubHeader from "../Components/SubHeader";
import PlaceSection from "../Components/PlaceSection";

const Places = () => {
  return (
    <div>
      <SubHeader pageName="Places" />
      <div className="mt-4 pt-5">
        <PlaceSection />
      </div>
    </div>
  );
};

export default Places;
