// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../../features/auth/api/AuthApi";
import { userApi } from "../../features/auth/api/userApi";
import { clientApi } from "../../features/client/api/clientApi";
import { loanApi } from "../../features/loan/api/loanApi";
import { telecallApi } from "../../features/telecall/api/teleCallApi";

//slices

import authSlice from "../../features/auth/slice/authSlice";
import clientSlice from "../../features/client/slice/clientSlice";
import loanSlice from "../../features/loan/slice/loanSlice";
import teleSlice from "../../features/telecall/slice/teleSlice";
import userSlice from "../../features/auth/slice/userSlice";
import reportSlice from "../../features/reports/slice/reportSlice";
import fileSlice from "../../features/file/slice/fileSlice";
import { reportApi } from "../../features/reports/api/reportApi";
import { fileApi } from "../../features/file/api/FileApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    client: clientSlice,
    loan: loanSlice,
    telecall: teleSlice,
    user: userSlice,
    reports: reportSlice,
    file: fileSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [loanApi.reducerPath]: loanApi.reducer,
    [telecallApi.reducerPath]: telecallApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      clientApi.middleware,
      loanApi.middleware,
      telecallApi.middleware,
      reportApi.middleware,
      fileApi.middleware
    ), // Add the API middleware
});
