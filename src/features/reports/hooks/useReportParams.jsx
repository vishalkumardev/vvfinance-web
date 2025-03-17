import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setFilter,
  setSort,
  setPage,
  setPageSize,
} from "../slice/reportSlice";
import { useEffect } from "react";

export const useReportParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { search, filter, sort, page, pageSize } = useSelector(
    (state) => state.reports
  );

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    const urlFilter = JSON.parse(searchParams.get("filter") || "{}");
    const urlSort = searchParams.get("sort") || "default";
    const urlPage = parseInt(searchParams.get("page")) || 1;
    const urlPageSize = parseInt(searchParams.get("pageSize")) || 15;

    dispatch(setSearch(urlSearch));
    dispatch(setFilter(urlFilter));
    dispatch(setSort(urlSort));
    dispatch(setPage(urlPage));
    dispatch(setPageSize(urlPageSize));
  }, [searchParams, dispatch]);

  useEffect(() => {
    setSearchParams({
      search,
      filter: JSON.stringify(filter),
      sort,
      page,
      pageSize,
    });
  }, [search, filter, sort, page, setSearchParams]);

  return { search, filter, sort, page, pageSize };
};
