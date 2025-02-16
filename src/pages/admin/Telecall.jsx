import React from "react";
import { useDispatch } from "react-redux";
import { useGetTelecallQuery } from "../../features/telecall/api/teleCallApi";
import { setPage, setSearch } from "../../features/telecall/slice/teleSlice";
import { useTeleParams } from "../../features/telecall/hooks/useTeleParams";
import LoanTable from "../../features/telecall/components/Table";
import Pagination from "@/common/components/Pagination";
import SearchBar from "../../common/components/SearchBar";

const Telecall = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useTeleParams();

  const { data: telecallData, isLoading } = useGetTelecallQuery({
    search,
    filter,
    sort,
    page,
  });

  const telecalls = telecallData?.data?.records || [];
  const totalPages = telecallData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <SearchBar
        handleSearch={(query) => dispatch(setSearch(query))}
        placeholder="Search Telecall..."
      />
      <LoanTable telecalls={telecalls} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Telecall;
