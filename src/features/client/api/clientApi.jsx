import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../../app/utils/baseQuery";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Clients"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    getClients: builder.query({
      query: (data) => ({
        url: `/client/get/all`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Clients"], // Mark this query as providing the "Clients" tag
    }),

    createClient: builder.mutation({
      query: (data) => ({
        url: `/client/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Clients"], // Mark this query as providing the "Clients" tag
    }),

    updateClient: builder.mutation({
      query: (data) => ({
        url: `/client`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Clients"], // Invalidate the "Clients" tag to refetch data
    }),

    deleteClient: builder.mutation({
      query: (ClientId) => ({
        url: `/client/${ClientId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Clients"], // Invalidate the "Clients" tag to refetch data
    }),

    getClientById: builder.query({
      query: (ClientId) => `/client/${ClientId}`,
      providesTags: ["ClientById"], // Mark this query as providing the "ClientById" tag
    }),
  }),
});

export const {
  useCreateClientMutation,
  useGetClientsQuery,
  useDeleteClientMutation,
  useUpdateClientMutation,
  useGetClientByIdQuery,
} = clientApi;
