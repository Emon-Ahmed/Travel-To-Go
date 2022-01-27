import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

export default function PrivateRoute({ children }) {
  let { user} = useAuth();
  let location = useLocation();

  if (!user.email) {
    return <Navigate to="/account" state={{ from: location }} replace />;
  }

  return children;
}
