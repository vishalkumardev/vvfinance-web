import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminRoute(props) {
  return {
    path: props.path,
    element:
      props.role === "admin" ? props.element : <Navigate to="/user/login" />,
    children: props.children,
  };
}
