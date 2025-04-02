import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../../app/utils/baseQuery";

export const telecallApi = createApi({
  reducerPath: "telecallApi",
  baseQuery: baseQueryWithAuth,
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

    deleteAllTelecallData: builder.mutation({
      query: (data) => ({
        url: "/telecall/delete/all",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Telecall", "TellecallById"],
    }),
  }),
});

export const {
  useCreateTellecallMutation,
  useGetTelecallQuery,
  useDeleteTellecallMutation,
  useUpdateTellecallMutation,
  useGetTellecallByIdQuery,
  useDeleteAllTelecallDataMutation,
} = telecallApi;
