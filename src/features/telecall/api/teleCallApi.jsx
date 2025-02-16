import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useResponse from "../../../common/hooks/useResponse";
import { constant } from "../../../app/config/constant";

export const telecallApi = createApi({
  reducerPath: "telecallApi",
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
  tagTypes: ["Telecall"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    getTelecall: builder.query({
      query: (data) => ({
        url: `/telecall/get/all`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Telecall"], // Mark this query as providing the "Telecall" tag
    }),

    createTellecall: builder.mutation({
      query: (data) => ({
        url: `/telecall/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Telecall"], // Mark this query as providing the "Telecall" tag
    }),

    updateTellecall: builder.mutation({
      query: (data) => ({
        url: `/telecall`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Telecall"], // Invalidate the "Telecall" tag to refetch data
    }),

    deleteTellecall: builder.mutation({
      query: (telecallId) => ({
        url: `/telecall/${telecallId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Telecall"], // Invalidate the "Telecall" tag to refetch data
    }),

    getTellecallById: builder.query({
      query: (telecallId) => `/telecall/${telecallId}`,
      providesTags: ["TellecallById"], // Mark this query as providing the "TellecallById" tag
    }),
  }),
});

export const {
  useCreateTellecallMutation,
  useGetTelecallQuery,
  useDeleteTellecallMutation,
  useUpdateTellecallMutation,
  useGetTellecallByIdQuery,
} = telecallApi;
