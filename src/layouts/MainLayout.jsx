import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="p-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
