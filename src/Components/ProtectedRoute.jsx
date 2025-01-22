import React, { memo } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectedRoute = ({ children, isAuthPage = false }) => {
  const { userToken } = useAuth();

  if (isAuthPage && userToken) {
    return <Navigate to="/" />;
  }

  if (!isAuthPage && !userToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
