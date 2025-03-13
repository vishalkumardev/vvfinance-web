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
const AddLoan = React.lazy(() => import("../../pages/admin/AddLoan"));
const AddTelecall = React.lazy(() => import("../../pages/admin/AddTeleCall"));
const AddUser = React.lazy(() => import("../../pages/admin/AddUser"));
const AddClient = React.lazy(() => import("../../pages/admin/AddClient"));
const ViewLoan = React.lazy(() => import("../../pages/admin/ViewLoan"));
const Reports = React.lazy(() => import("../../pages/admin/Reports"));

// Wrap with suspense

const LayoutSuspense = useSuspense(Layout);

// Admin Files
const AdminDashboardSuspense = useSuspense(AdminDashboard);
const ClientsSuspense = useSuspense(Clients);
const LoansSuspense = useSuspense(Loans);
const TelecallSuspense = useSuspense(Telecall);
const NotFoundPageSuspense = useSuspense(NotFoundPage);
const UserSuspense = useSuspense(User);
const AddLoanSuspense = useSuspense(AddLoan);
const AddTelecallSuspense = useSuspense(AddTelecall);
const AddUserSuspense = useSuspense(AddUser);
const AddClientSuspense = useSuspense(AddClient);
const ViewLoanSuspense = useSuspense(ViewLoan);
const ReportsSuspense = useSuspense(Reports);

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
                path: "/",
                children: [
                  {
                    path: "/dashboard",
                    element: <AdminDashboardSuspense />,
                  },
                  {
                    path: "/dashboard/clients",
                    element: <ClientsSuspense />,
                  },
                  {
                    path: "/dashboard/clients/add",
                    element: <AddClientSuspense />,
                  },
                  {
                    path: "/dashboard/loans",
                    element: <LoansSuspense />,
                  },
                  {
                    path: "/dashboard/loans/add",
                    element: <AddLoanSuspense />,
                  },
                  {
                    path: "/dashboard/loans/view/:loanId",
                    element: <ViewLoanSuspense />,
                  },
                  {
                    path: "/dashboard/telecall",
                    element: <TelecallSuspense />,
                  },
                  {
                    path: "/dashboard/telecall/add",
                    element: <AddTelecallSuspense />,
                  },
                  {
                    path: "/dashboard/users",
                    element: <UserSuspense />,
                  },
                  {
                    path: "/dashboard/users/add",
                    element: <AddUserSuspense />,
                  },
                  {
                    path: "/dashboard/users/add",
                    element: <AddUserSuspense />,
                  },
                  {
                    path: "/dashboard/reports",
                    element: <Reports />,
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
