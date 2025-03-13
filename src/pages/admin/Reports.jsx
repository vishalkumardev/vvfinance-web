import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchListsQuery } from "../../features/reports/api/reportApi";
import { setPage, setSearch } from "../../features/reports/slice/reportSlice";
import RecordTable from "../../features/reports/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import Filter from "../../features/reports/components/Filter";
import { useReportParams } from "../../features/reports/hooks/useReportParams";
import useExportToExcel from "../../common/hooks/useExport";

const Reports = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useReportParams();
  const [isFilterOpen, setisFilterOpen] = useState(false);

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
        title="Reports"
        placeholder="Search Loans..."
        description="You can view search list and details here"
        handleSearch={(query) => dispatch(setSearch(query))}
        btn2Visible={true}
        btn2Text="Add Filter"
        btn2Fn={() => {
          setisFilterOpen(true);
        }}
      />

      <Filter isOpen={isFilterOpen} onClose={() => setisFilterOpen(false)} />

      <RecordTable searchData={searchData} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Reports;
