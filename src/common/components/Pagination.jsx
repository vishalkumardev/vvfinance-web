import {
  Pagination as PageManager,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/common/components/ui/pagination";
function Pagination({ totalPages, currentPage, handlePageChange }) {
  return (
    <div>
      {totalPages >= 2 && (
        <PageManager className="mt-16">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>

            {/* Dynamic Page Numbers */}
            {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page
                      ? "font-bold bg-primary text-white rounded hover:cursor-pointer" // Active style
                      : "hover:cursor-pointer"
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 5 && <PaginationEllipsis />}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </PageManager>
      )}
    </div>
  );
}

export default Pagination;
