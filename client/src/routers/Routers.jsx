import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { HomeLayout } from "../layout/HomeLayout";

import { Login, Register } from "../pages/Auth";
import { Home, VoucherDetail } from "../pages/Home";

const Routers = ({ isLogin }) => {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ path: "", element: <Home /> }],
    },
    {
      path: "/voucher",
      element: <HomeLayout />,
      children: [{ path: "detail", element: <VoucherDetail /> }],
    },
    {
      path: "/auth",
      element: !isLogin ? <HomeLayout /> : <Navigate to="/" />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);
  return routing;
};

export default Routers;
