import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../../app/utils/baseQuery";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Files"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    getFiles: builder.query({
      query: (data) => ({
        url: `/file/get/all`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Files"], // Mark this query as providing the "Files" tag
    }),

    createFile: builder.mutation({
      query: (data) => ({
        url: `/file/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Files"], // Mark this query as providing the "Files" tag
    }),

    updateFile: builder.mutation({
      query: (data) => ({
        url: `/file`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Files"], // Invalidate the "Files" tag to refetch data
    }),

    deleteFile: builder.mutation({
      query: (FileId) => ({
        url: `/file/${FileId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Files"], // Invalidate the "Files" tag to refetch data
    }),

    getFileById: builder.query({
      query: (FileId) => `/file/${FileId}`,
      providesTags: ["FileById"], // Mark this query as providing the "FileById" tag
    }),
  }),
});

export const {
  useCreateFileMutation,
  useGetFilesQuery,
  useDeleteFileMutation,
  useUpdateFileMutation,
  useGetFileByIdQuery,
} = fileApi;
