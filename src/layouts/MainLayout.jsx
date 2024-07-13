import React from "react";
import { Outlet } from "react-router-dom";
import HeroPage from "../components/HeroPage";

const MainLayout = () => {
  return (
    <div>
      <HeroPage />
      <Outlet />
    </div>
  );
};

export default MainLayout;
