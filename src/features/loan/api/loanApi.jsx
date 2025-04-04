import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../../app/utils/baseQuery";

export const loanApi = createApi({
  reducerPath: "loanApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Loans"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    getLoans: builder.query({
      query: (data) => ({
        url: `/loan/get/all`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Loans"], // Mark this query as providing the "Loans" tag
    }),

    createLoan: builder.mutation({
      query: (data) => ({
        url: `/loan/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Loans"], // Mark this query as providing the "Loans" tag
    }),

    updateLoan: builder.mutation({
      query: (data) => ({
        url: `/loan`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Loans"], // Invalidate the "Loans" tag to refetch data
    }),

    deleteLoan: builder.mutation({
      query: (loanId) => ({
        url: `/loan/${loanId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Loans"], // Invalidate the "Loans" tag to refetch data
    }),

    getLoanById: builder.mutation({
      query: (data) => ({
        url: `/loan/view`,
        method: "POST",
        body: data,
      }),
      providesTags: ["LoanById"], // Mark this query as providing the "LoanById" tag
    }),

    deleteAllData: builder.mutation({
      query: (data) => ({
        url: "/loan/delete/all",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Loans", "LoanById"],
    }),
  }),
});

export const {
  useCreateLoanMutation,
  useGetLoansQuery,
  useDeleteLoanMutation,
  useUpdateLoanMutation,
  useGetLoanByIdMutation,
  useDeleteAllDataMutation,
} = loanApi;
