import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spin } from "antd";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

  if (loading) {
    return <Spin size="large" />;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;
