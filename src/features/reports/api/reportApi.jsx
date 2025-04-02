import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithAuth from "../../../app/utils/baseQuery";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["SearchLists"], // Add tag types for caching and invalidation
  endpoints: (builder) => ({
    searchLists: builder.query({
      query: (data) => ({
        url: `/loan/search/list`,
        method: "POST",
        body: data,
      }),
      providesTags: ["SearchLists"], // Mark this query as providing the "SearchLists" tag
    }),
  }),
});

export const {
  useCreateLoanMutation,
  useGetLoansQuery,
  useDeleteLoanMutation,
  useUpdateLoanMutation,
  useGetLoanByIdMutation,
  useSearchListsQuery,
} = reportApi;
