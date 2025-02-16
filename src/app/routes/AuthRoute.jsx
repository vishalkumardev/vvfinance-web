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
const Loans = React.lazy(() => import("../../pages/admin/Loans"));
const Telecall = React.lazy(() => import("../../pages/admin/Telecall"));
const User = React.lazy(() => import("../../pages/admin/User"));

// Wrap with suspense

const LayoutSuspense = useSuspense(Layout);

// Admin Files
const AdminDashboardSuspense = useSuspense(AdminDashboard);
const ClientsSuspense = useSuspense(Clients);
const LoansSuspense = useSuspense(Loans);
const TelecallSuspense = useSuspense(Telecall);
const NotFoundPageSuspense = useSuspense(NotFoundPage);
const UserSuspense = useSuspense(User);

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
                    element: <ClientsSuspense />,
                  },
                  {
                    path: "/admin/dashboard/loans",
                    element: <LoansSuspense />,
                  },
                  {
                    path: "/admin/dashboard/telecall",
                    element: <TelecallSuspense />,
                  },
                  {
                    path: "/admin/dashboard/users",
                    element: <UserSuspense />,
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
