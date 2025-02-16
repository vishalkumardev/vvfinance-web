import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useResponse from "../../../common/hooks/useResponse";
import { constant } from "../../../app/config/constant";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: constant?.baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("userToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    responseHandler: async (response) => {
      return useResponse(response);
    },
  }),
  tagTypes: ["Users"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (data) => ({
        url: `/user/get/all`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Users"], // Mark this query as providing the "Users" tag
    }),

    updateuser: builder.mutation({
      query: (data) => ({
        url: `/user`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Users"], // Invalidate the "Users" tag to refetch data
    }),

    deleteuser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"], // Invalidate the "Users" tag to refetch data
    }),

    toggleUser: builder.mutation({
      query: (userId) => ({
        url: `/user/toggle/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"], // Invalidate the "Users" tag to refetch data
    }),

    getuserById: builder.query({
      query: (userId) => `/user/${userId}`,
      providesTags: ["userById"], // Mark this query as providing the "userById" tag
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetuserByIdQuery,
  useUpdateuserMutation,
  useDeleteuserMutation,
  useToggleUserMutation,
} = userApi;
