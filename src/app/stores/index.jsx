// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../../features/auth/api/AuthApi";
import { userApi } from "../../features/auth/api/userApi";
import { clientApi } from "../../features/client/api/clientApi";

//slices

import authSlice from "../../features/auth/slice/authSlice";
import clientSlice from "../../features/client/slice/clientSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    client: clientSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      clientApi.middleware
    ), // Add the API middleware
});
