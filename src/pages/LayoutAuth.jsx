import React from "react";
import { Navigate, Outlet } from "react-router";

const LayoutAuth = () => {
  const token = localStorage.getItem("token");
  return <>{token ? <Navigate to="/" /> : <Outlet />}</>;
};

export default LayoutAuth;
