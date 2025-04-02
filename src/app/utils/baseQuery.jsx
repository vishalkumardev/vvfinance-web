import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../config/constant";
import { logout } from "../../features/auth/slice/authSlice";
import useResponse from "../../common/hooks/useResponse";

const baseQuery = fetchBaseQuery({
  baseUrl: constant?.baseUrl,
  prepareHeaders: async (headers, { getState }) => {
    const token = localStorage.getItem("userToken");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  responseHandler: async (response) => {
    return useResponse(response);
  },
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status == 401) {
    api.dispatch(logout());
  }
  return result;
};

export default baseQueryWithAuth;
