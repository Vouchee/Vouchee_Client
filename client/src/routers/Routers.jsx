import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { Login, Register } from "../pages/Auth";
import { Cart, Home, VoucherDetail } from "../pages/Home";
import { SellerHome } from "../pages/Seller";
import { HomeLayout, SellerLayout } from "../layout";

const Routers = ({ isLogin }) => {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "detail", element: <VoucherDetail /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "/auth",
      element: !isLogin ? <HomeLayout /> : <Navigate to="/" />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/seller",
      element: <SellerLayout />,
      children: [{ path: "home", element: <SellerHome /> }],
    },
  ]);
  return routing;
};

export default Routers;
