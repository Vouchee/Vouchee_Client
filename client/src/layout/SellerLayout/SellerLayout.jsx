import React from "react";
import { Outlet } from "react-router-dom";

import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";

const SellerLayout = () => {
  return (
    <main
      className="min-h-screen h-screen flex-1 flex 
      items-start justify-start"
    >
      <SellerSidebar />

      <div className="flex-1">
        <SellerHeader />
        <section className="w-full h-[calc(100vh-80px)] overflow-auto">
          <Outlet />
          <SellerFooter />
        </section>
      </div>
    </main>
  );
};

export default SellerLayout;
