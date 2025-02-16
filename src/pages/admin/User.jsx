import React from "react";
import { useDispatch } from "react-redux";
import { setPage, setSearch } from "../../features/auth/slice/userSlice";
import UserTable from "../../features/auth/components/Table";
import Pagination from "@/common/components/Pagination";
import SearchBar from "../../common/components/SearchBar";
import { useUserParams } from "../../features/auth/hooks/useUserParams";
import { useGetUsersQuery } from "../../features/auth/api/userApi";

const User = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useUserParams();

  const { data: userData, isLoading } = useGetUsersQuery({
    search,
    filter,
    sort,
    page,
  });

  const users = userData?.data?.records || [];
  const totalPages = userData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <SearchBar
        handleSearch={(query) => dispatch(setSearch(query))}
        placeholder="Search User..."
      />
      <UserTable users={users} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default User;
