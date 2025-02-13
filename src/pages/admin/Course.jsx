import React from "react";
import { useDispatch } from "react-redux";
import { useGetCoursesQuery } from "../../features/course/api/courseApi";
import { setPage, setSearch } from "../../features/course/slice/courseSlice";
import { useCourseParams } from "../../features/course/hooks/useCourseParams";
import CourseTable from "../../features/course/components/Table";
import Pagination from "@/common/components/Pagination";
import SearchBar from "../../common/components/SearchBar";

const Course = () => {
  const dispatch = useDispatch();
  const { search, filter, sort, page } = useCourseParams();

  const { data: courseData, isLoading } = useGetCoursesQuery({
    search,
    filter,
    sort,
    page,
  });

  const courses = courseData?.data?.records || [];
  const totalPages = courseData?.data?.totalPages || 0;

  return (
    <div className="px-5">
      <SearchBar
        handleSearch={(query) => dispatch(setSearch(query))}
        placeholder="Search Courses..."
      />
      <CourseTable courses={courses} isLoading={isLoading} />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        handlePageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default Course;
