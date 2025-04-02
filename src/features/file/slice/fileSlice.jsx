import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  filter: {},
  sort: "default",
  page: 1,
  totalPages: 1,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});

export const { setSearch, setFilter, setSort, setPage, setTotalPages } =
  fileSlice.actions;

export default fileSlice.reducer;
