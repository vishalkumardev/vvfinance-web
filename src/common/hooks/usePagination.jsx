import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentpage] = useState(1);

  const handlePageChange = (page) => {
    console.log(page);
    setCurrentpage(page);
  };

  return {
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
