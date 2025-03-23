import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSuspense from "../../common/hooks/useSuspense";
import { useSelector } from "react-redux";

// Admin Files
const AdminDashboard = React.lazy(() => import("../../pages/admin/Dashboard"));
const UserProfile = React.lazy(() => import("../../pages/admin/UserProfile"));
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
const ManageData = React.lazy(() => import("../../pages/admin/ManageData"));
const Login = React.lazy(() => import("../../pages/public/Login"));
const Forgot = React.lazy(() => import("../../pages/public/Forgot"));
const PasswordReset = React.lazy(() =>
  import("../../pages/public/PasswordReset")
);
const NotFoundPage = React.lazy(() => import("../../pages/public/NotFound"));
const Layout = React.lazy(() => import("../../pages/layouts/Layout"));
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
const LoginSuspense = useSuspense(Login);
const ForgotSuspense = useSuspense(Forgot);
const PasswordResetSuspense = useSuspense(PasswordReset);
const ManageDataSuspense = useSuspense(ManageData);
const ProfileSuspense = useSuspense(UserProfile);

function AppRoute() {
  const { authorized, role } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        {authorized ? (
          <Route path="/" element={<LayoutSuspense />}>
            <Route
              path="/dashboard"
              index
              element={<AdminDashboardSuspense />}
            />
            <Route path="/dashboard/clients" element={<ClientsSuspense />} />
            <Route
              path="/dashboard/clients/edit/:clientId"
              element={<AddClientSuspense />}
            />
            <Route path="/dashboard/loans" element={<LoansSuspense />} />
            <Route path="/dashboard/telecall" element={<TelecallSuspense />} />
            <Route path="/dashboard/users" element={<UserSuspense />} />
            <Route
              path="/dashboard/users/profile/:id"
              element={<ProfileSuspense />}
            />
            <Route path="/dashboard/loans/add" element={<AddLoanSuspense />} />
            <Route
              path="/dashboard/telecall/add"
              element={<AddTelecallSuspense />}
            />
            <Route path="/dashboard/users/add" element={<AddUserSuspense />} />
            <Route
              path="/dashboard/clients/add"
              element={<AddClientSuspense />}
            />
            <Route
              path="/dashboard/loans/view/:loanId"
              element={<ViewLoanSuspense />}
            />
            <Route path="/dashboard/reports" element={<ReportsSuspense />} />
            <Route
              path="/dashboard/manage-data"
              element={<ManageDataSuspense />}
            />
            <Route path="*" element={<NotFoundPageSuspense />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<LoginSuspense />} />
            <Route path="/forgot" element={<ForgotSuspense />} />
            <Route path="/reset/:token" element={<PasswordResetSuspense />} />
            <Route path="*" element={<NotFoundPageSuspense />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
