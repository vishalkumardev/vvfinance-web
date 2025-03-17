import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchListsQuery } from "../../features/reports/api/reportApi";
import {
  setPage,
  setPageSize,
  setSearch,
} from "../../features/reports/slice/reportSlice";
import RecordTable from "../../features/reports/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import Filter from "../../features/reports/components/Filter";
import { useReportParams } from "../../features/reports/hooks/useReportParams";
import useExportToExcel from "../../common/hooks/useExport";

const Reports = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page, pageSize } = useReportParams();
  const [isFilterOpen, setisFilterOpen] = useState(false);

  const { data: loanData, isLoading } = useSearchListsQuery({
    search,
    filter,
    sort,
    page,
    pageSize,
  });

  const searchData = loanData?.data?.records || [];

  const totalPages = loanData?.data?.totalPages || 0;

  const downLoadCSV = () => {
    const data = searchData.map((item) => ({
      "Agent Name": item.agent?.name || "N/A",
      "Registration Number": item.loan?.registration_no || "N/A",
      "Agent Phone": item.agent?.phone || "N/A",
      "Client Name": item.loan?.client || "N/A",
      Time: new Date(item.createdAt).toLocaleString(),
      Location: `https://www.google.com/maps?q=${item.location.coordinates[1]},${item.location.coordinates[0]}`,
    }));

    const fileName = "search_list";

    useExportToExcel(data, fileName);
  };

  return (
    <div className="px-5">
      <TopHeader
        title="Reports"
        placeholder="Search Loans..."
        description="You can view search list and details here"
        handleSearch={(query) => dispatch(setSearch(query))}
        btn1Visible={true}
        btn1Text="Export Data"
        btn1Fn={downLoadCSV}
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
        pageSize={pageSize}
        handlePageSize={(page) => dispatch(setPageSize(page))}
      />
    </div>
  );
};

export default Reports;
