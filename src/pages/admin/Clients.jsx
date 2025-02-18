import React from "react";
import { useDispatch } from "react-redux";
import { useGetClientsQuery } from "../../features/client/api/clientApi";
import { setPage, setSearch } from "../../features/client/slice/clientSlice";
import { useClientParams } from "../../features/client/hooks/useClientParams";
import ClientTable from "../../features/client/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useClientParams();
  const navigate = useNavigate();

  const { data: clientData, isLoading } = useGetClientsQuery({
    search,
    filter,
    sort,
    page,
  });

  const clients = clientData?.data?.records || [];
  const totalPages = clientData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <TopHeader
        title="Clients"
        placeholder="Search Clients..."
        description="You can view Clients and their details here"
        btn1Text="Add New Client"
        btn1Visible={true}
        btn1Fn={() => navigate("/dashboard/clients/add")}
        btn2Text="Add Filter"
        handleSearch={(query) => dispatch(setSearch(query))}
      />
      <ClientTable clients={clients} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Course;
