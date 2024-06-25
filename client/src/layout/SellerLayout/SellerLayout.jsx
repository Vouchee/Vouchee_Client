import React from "react";
import { Outlet } from "react-router-dom";

import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";

const SellerLayout = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <SellerHeader />
      <Outlet />
      <SellerFooter />
    </div>
  );
};

export default SellerLayout;
