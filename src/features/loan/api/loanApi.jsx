import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useResponse from "../../../common/hooks/useResponse";
import { constant } from "../../../app/config/constant";

export const loanApi = createApi({
  reducerPath: "loanApi",
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

    getLoanById: builder.query({
      query: (loanId) => `/loan/${loanId}`,
      providesTags: ["LoanById"], // Mark this query as providing the "LoanById" tag
    }),
  }),
});

export const {
  useCreateLoanMutation,
  useGetLoansQuery,
  useDeleteLoanMutation,
  useUpdateLoanMutation,
  useGetLoanByIdQuery,
} = loanApi;
