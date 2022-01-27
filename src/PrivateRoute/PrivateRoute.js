import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

export default function PrivateRoute({ children }) {
  let { user, loading} = useAuth();
  let location = useLocation();

  if(loading) return <p>Loading</p>;

  if (user?.email) return children;
  
  return <Navigate to="/account" state={{ from: location }} />;
 
}
