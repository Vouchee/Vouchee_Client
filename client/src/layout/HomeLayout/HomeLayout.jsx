import React from "react";
import { Outlet } from "react-router-dom";

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

const HomeLayout = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
