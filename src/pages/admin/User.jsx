import React from "react";
import { useDispatch } from "react-redux";
import { setPage, setSearch } from "../../features/auth/slice/userSlice";
import UserTable from "../../features/auth/components/Table";
import Pagination from "@/common/components/Pagination";
import { useUserParams } from "../../features/auth/hooks/useUserParams";
import { useGetUsersQuery } from "../../features/auth/api/userApi";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useUserParams();
  const navigate = useNavigate();

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
      <TopHeader
        title="Users"
        placeholder="Search Users..."
        description="You can view user and their details here"
        btn1Text="Add User"
        btn1Visible={true}
        btn1Fn={() => navigate("/dashboard/users/add")}
        btn2Text="Add Filter"
        handleSearch={(query) => dispatch(setSearch(query))}
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
