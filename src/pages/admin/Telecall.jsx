import React from "react";
import { useDispatch } from "react-redux";
import { useGetTelecallQuery } from "../../features/telecall/api/teleCallApi";
import { setPage, setSearch } from "../../features/telecall/slice/teleSlice";
import { useTeleParams } from "../../features/telecall/hooks/useTeleParams";
import LoanTable from "../../features/telecall/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";

const Telecall = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useTeleParams();
  const navigate = useNavigate();

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
      <TopHeader
        title="Loans"
        placeholder="Search Loans..."
        description="You can view loan and details here"
        btn1Text="Upload Data"
        btn1Visible={true}
        btn1Fn={() => navigate("/dashboard/telecall/add")}
        btn2Text="Add Filter"
        handleSearch={(query) => dispatch(setSearch(query))}
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
