import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { HomeLayout } from "../layout/HomeLayout";

import { Login } from "../pages/Auth";

const Routers = ({ isLogin }) => {
  const routing = useRoutes([
    // {
    //   path: "/",
    //   element: <HomeLayout />,
    //   children: [{ path: "", element: <Home /> }],
    // },
    {
      path: "/auth",
      element: !isLogin ? <HomeLayout /> : <Navigate to="/" />,
      children: [
        { path: "login", element: <Login /> },
        // { path: "register", element: <Register /> },
      ],
    },
  ]);
  return routing;
};

export default Routers;
