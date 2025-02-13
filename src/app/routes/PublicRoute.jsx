import { Navigate } from "react-router-dom";
import React from "react";
import useSuspense from "../../common/hooks/useSuspense";

// Lazy Loading with React.lazy
const Login = React.lazy(() => import("../../pages/public/Login"));
const Forgot = React.lazy(() => import("../../pages/public/Forgot"));

const NotFoundPage = React.lazy(() => import("../../pages/public/NotFound"));
const PasswordReset = React.lazy(() =>
  import("../../pages/public/PasswordReset")
);

// Assuming useSuspense hook is defined elsewhere

// Apply Suspense to all routes
const LoginSuspense = useSuspense(Login);

const ForgotSuspense = useSuspense(Forgot);

const NotFoundPageSuspense = useSuspense(NotFoundPage);
const PasswordResetSuspense = useSuspense(PasswordReset);

export default function PublicRoute(isLoggedIn) {
  return [
    {
      path: "/user/login",
      element: isLoggedIn ? <Navigate to="/" /> : <LoginSuspense />,
    },
    {
      path: "/reset/:token",
      element: <PasswordResetSuspense />,
    },
    {
      path: "/user/forgot",
      element: isLoggedIn ? <Navigate to="/" /> : <ForgotSuspense />,
    },
    {
      path: "*",
      element: <NotFoundPageSuspense />,
    },
  ];
}
