import {
  Pagination as PageManager,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/common/components/ui/pagination";
import Dropdown from "./core/Dropdown";

function Pagination({
  totalPages,
  currentPage,
  handlePageChange,
  pageSize,
  handlePageSize,
}) {
  // Determine the start and end of the visible page range
  const startPage = Math.max(currentPage - 2, 1);
  const endPage = Math.min(startPage + 4, totalPages);

  return (
    <div className="flex justify-between mt-8 flex-row items-center">
      {totalPages > 2 && (
        <PageManager>
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {/* First Page & Ellipsis */}
            {startPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink onClick={() => handlePageChange(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>
                {startPage > 2 && <PaginationEllipsis />}
              </>
            )}

            {/* Dynamic Page Numbers */}
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i
            ).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page
                      ? "font-bold bg-primary text-white rounded"
                      : ""
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Last Page & Ellipsis */}
            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && <PaginationEllipsis />}
                <PaginationItem>
                  <PaginationLink onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </PageManager>
      )}

      {pageSize && (
        <div className="w-2/12  ml-auto">
          <Dropdown
            value={pageSize}
            options={[
              { value: 15, label: "15 per page" },
              { value: 25, label: "25 per page" },
              { value: 50, label: "50 per page" },
              { value: 100, label: "100 per page" },
              { value: 250, label: "250 per page" },
              { value: 500, label: "500 per page" },
              { value: 1000, label: "1000 per page" },
            ]}
            onChange={handlePageSize}
          />
        </div>
      )}
    </div>
  );
}

export default Pagination;
