import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from "react-redux";

function Route() {
  const { authorized, role } = useSelector((state) =>state.auth);

  const routes = (authorized, role) => {
    return createBrowserRouter([
      ...AuthRoute(authorized, role),
      ...PublicRoute(authorized, role),
    ]);
  };

  const routerConfig = routes(authorized, role);

  return <RouterProvider router={routerConfig} />;
}

export default Route;
