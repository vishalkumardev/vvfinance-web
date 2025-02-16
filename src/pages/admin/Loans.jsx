import React from "react";
import { useDispatch } from "react-redux";
import { useGetLoansQuery } from "../../features/loan/api/loanApi";
import { setPage, setSearch } from "../../features/loan/slice/loanSlice";
import { useLoanParams } from "../../features/loan/hooks/useLoanParams";
import ClientTable from "../../features/loan/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";

const Loans = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useLoanParams();
  const navigate = useNavigate();

  const { data: loanData, isLoading } = useGetLoansQuery({
    search,
    filter,
    sort,
    page,
  });

  const loans = loanData?.data?.records || [];
  const totalPages = loanData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <TopHeader
        title="Loans"
        placeholder="Search Loans..."
        description="You can view  vehicle loan and details here"
        btn1Text="Upload Data"
        btn1Visible={true}
        btn1Fn={() => navigate("/admin/dashboard/loans/add")}
        btn2Text="Add Filter"
        handleSearch={(query) => dispatch(setSearch(query))}
      />

      <ClientTable loans={loans} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Loans;
