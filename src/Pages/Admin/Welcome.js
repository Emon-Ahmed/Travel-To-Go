import React from "react";
import WelcomeImg from "./../../Images/welcome.svg";

const Welcome = () => {
  return (
    <div>
      <img className="w-50" src={WelcomeImg} alt="Welcome" />
    </div>
  );
};

export default Welcome;
