import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useResponse from "../../../common/hooks/useResponse";
import { constant } from "../../../app/config/constant";

export const reportApi = createApi({
  reducerPath: "reportApi",
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
