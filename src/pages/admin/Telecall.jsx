import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetTelecallQuery } from "../../features/telecall/api/teleCallApi";
import { setPage, setSearch } from "../../features/telecall/slice/teleSlice";
import { useTeleParams } from "../../features/telecall/hooks/useTeleParams";
import LoanTable from "../../features/telecall/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";
import Filter from "../../features/telecall/components/Filter";

const Telecall = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useTeleParams();
  const navigate = useNavigate();
  const [isFilterOpen, setisFilterOpen] = useState(false);

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
        btn2Visible={true}
        btn2Text="Add Filter"
        btn2Fn={() => {
          setisFilterOpen(true);
        }}
        handleSearch={(query) => dispatch(setSearch(query))}
      />

      <Filter isOpen={isFilterOpen} onClose={() => setisFilterOpen(false)} />

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
