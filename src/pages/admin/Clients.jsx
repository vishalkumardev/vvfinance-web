import React from "react";
import { useDispatch } from "react-redux";
import { useGetClientsQuery } from "../../features/client/api/clientApi";
import { setPage, setSearch } from "../../features/client/slice/clientSlice";
import { useClientParams } from "../../features/client/hooks/useClientParams";
import ClientTable from "../../features/client/components/Table";
import Pagination from "@/common/components/Pagination";
import SearchBar from "../../common/components/SearchBar";

const Course = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useClientParams();

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
      <SearchBar
        handleSearch={(query) => dispatch(setSearch(query))}
        placeholder="Search Clients..."
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
