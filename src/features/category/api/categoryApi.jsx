import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useResponse from "../../../common/hooks/useResponse";
import { constant } from "../../../app/config/constant";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
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
  tagTypes: ["Categorys"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    getCategorys: builder.query({
      query: (data) => ({
        url: `/category/get/all`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Categorys"], // Mark this query as providing the "Categorys" tag
    }),

    createCategory: builder.mutation({
      query: (data) => ({
        url: `/category/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Categorys"], // Mark this query as providing the "Categorys" tag
    }),

    updateCategory: builder.mutation({
      query: (data) => ({
        url: `/category`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Categorys"], // Invalidate the "Categorys" tag to refetch data
    }),

    deleteCategory: builder.mutation({
      query: (CategoryId) => ({
        url: `/category/${CategoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categorys"], // Invalidate the "Categorys" tag to refetch data
    }),

    getCategoryById: builder.query({
      query: (CategoryId) => `/category/${CategoryId}`,
      providesTags: ["CategoryById"], // Mark this query as providing the "CategoryById" tag
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategorysQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetCategoryByIdQuery,
} = categoryApi;
