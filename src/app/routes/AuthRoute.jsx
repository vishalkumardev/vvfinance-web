import React from "react";
import AdminRoute from "./AdminRoute";
import useSuspense from "../../common/hooks/useSuspense";
import { ROLES } from "../../data/role";
import Login from "../../pages/public/Login";

// Lazy loading components

const NotFoundPage = React.lazy(() => import("../../pages/public/NotFound"));
const Layout = React.lazy(() => import("../../pages/layouts/Layout"));

// Admin Files
const AdminDashboard = React.lazy(() => import("../../pages/admin/Dashboard"));
const Clients = React.lazy(() => import("../../pages/admin/Clients"));

// Wrap with suspense

const LayoutSuspense = useSuspense(Layout);

// Admin Files
const AdminDashboardSuspense = useSuspense(AdminDashboard);

const NotFoundPageSuspense = useSuspense(NotFoundPage);

export default function AuthRoute(isLoggedIn, role) {
  const routeObject = {
    role: role,
  };

  return [
    {
      path: "/",
      element: isLoggedIn ? <LayoutSuspense /> : <Login />,
      children:
        role === ROLES.ADMIN
          ? [
              AdminRoute({
                ...routeObject,
                path: "/admin",
                children: [
                  {
                    path: "/admin/dashboard",
                    element: <AdminDashboardSuspense />,
                  },
                  {
                    path: "/admin/dashboard/clients",
                    element: <Clients />,
                  },
                ],
              }),
            ]
          : [
              {
                path: "*",
                element: <NotFoundPageSuspense />,
              },
            ],
    },
  ];
}
