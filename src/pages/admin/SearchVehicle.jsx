import React from "react";
import { useDispatch } from "react-redux";
import { useSearchListsQuery } from "../../features/loan/api/loanApi";
import { setPage, setSearch } from "../../features/loan/slice/loanSlice";
import { useLoanParams } from "../../features/loan/hooks/useLoanParams";
import RecordTable from "../../features/reports/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";

const Loans = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useLoanParams();
  const navigate = useNavigate();

  const { data: loanData, isLoading } = useSearchListsQuery({
    search,
    filter,
    sort,
    page,
  });

  const searchData = loanData?.data?.records || [];

  const totalPages = loanData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <TopHeader
        title="Search List"
        placeholder="Search Loans..."
        description="You can view search list and details here"
        handleSearch={(query) => dispatch(setSearch(query))}
      />

      <RecordTable searchData={searchData} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Loans;
