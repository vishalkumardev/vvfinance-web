import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setFilter, setSort, setPage } from "../slice/clientSlice";
import { useEffect } from "react";

export const useClientParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useSelector((state) => state.client);

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    const urlFilter = JSON.parse(searchParams.get("filter") || "{}");
    const urlSort = searchParams.get("sort") || "default";
    const urlPage = parseInt(searchParams.get("page")) || 1;

    dispatch(setSearch(urlSearch));
    dispatch(setFilter(urlFilter));
    dispatch(setSort(urlSort));
    dispatch(setPage(urlPage));
  }, [searchParams, dispatch]);

  useEffect(() => {
    setSearchParams({
      search,
      filter: JSON.stringify(filter),
      sort,
      page,
    });
  }, [search, filter, sort, page, setSearchParams]);

  return { search, filter, sort, page };
};
