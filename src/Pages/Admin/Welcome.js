import React from "react";
import useAuth from "../../Hooks/useAuth";
import WelcomeImg from "./../../Images/welcome.svg";

const Welcome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Hello {user.email}</h2>
      <img className="w-50" src={WelcomeImg} alt="Welcome" />
    </div>
  );
};

export default Welcome;
