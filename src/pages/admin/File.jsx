import React from "react";
import { useDispatch } from "react-redux";
import { useGetFilesQuery } from "../../features/file/api/FileApi";
import { setPage, setSearch } from "../../features/file/slice/fileSlice";
import { useFileParams } from "../../features/file/hooks/useFileParams";
import FileTable from "../../features/file/components/Table";
import Pagination from "@/common/components/Pagination";
import TopHeader from "../../common/components/TopHeader";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useFileParams();
  const navigate = useNavigate();

  const { data: fileData, isLoading } = useGetFilesQuery({
    search,
    filter,
    sort,
    page,
  });

  const files = fileData?.data?.records || [];
  const totalPages = fileData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <TopHeader
        title="Files"
        placeholder="Search Files..."
        description="You can view Files and their details here"
        // btn1Text="Add New File"
        // btn1Visible={true}
        // btn1Fn={() => navigate("/dashboard/files/add")}
        // btn2Visible={true}
        // btn2Text="Add Filter"
        // handleSearch={(query) => dispatch(setSearch(query))}
      />
      <FileTable files={files} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Course;
