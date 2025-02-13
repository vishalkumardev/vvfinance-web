import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "../../../app/config/constant";
import useResponse from "../../../common/hooks/useResponse";
import { login } from "../slice/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: constant?.baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("userToken");

      if (token) {
        headers.set("userorization", `Bearer ${token}`);
      }
      return headers;
    },
    responseHandler: async (response) => {
      return useResponse(response);
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          if (data?.success) {
            dispatch(login(data?.data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    register: builder.mutation({
      query: (user) => ({
        url: "/user",
        method: "POST",
        body: user,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/user/reset",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/user/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
