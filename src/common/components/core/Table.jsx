import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/common/components/ui/pagination";
import * as React from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import { EmptyState } from "@/common/components/EmptyState";

export default function Tables({ ...props }) {
  const {
    rows,
    columns,
    RowComponent,
    nextPage,
    totalPages,
    previousPage,
    currentPage,
    handlePageChange,
    isLoading,
  } = props.extra;

  return (
    <div>
      <Table>
        <TableHeader className="text-xs uppercase bg-gray-50 dark:bg-gray-900 text-muted-foreground">
          <TableRow className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {columns?.map((column, index) => (
              <TableHead key={index}>{column?.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Display Empty State */}
          {!isLoading && rows?.length === 0 && (
            <TableRow>
              <td
                colSpan={columns?.length}
                className="py-10 text-center h-[65vh]"
              >
                <EmptyState
                  title="No Data Available"
                  description="There are no records to display at the moment."
                />
              </td>
            </TableRow>
          )}

          {/* Display Loading State */}
          {isLoading && (
            <TableRow>
              <td
                colSpan={columns?.length}
                className="py-10 text-center h-[65vh]"
              >
                <div
                  className={`animate-spin rounded-full w-12 h-12 border-4 border-t-transparent border-primary mx-auto`}
                  role="status"
                ></div>
              </td>
            </TableRow>
          )}

          {/* Display Rows */}
          {!isLoading &&
            rows?.length > 0 &&
            rows?.map((row, index) => (
              <RowComponent key={index} row={row} index={index} />
            ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      {totalPages >= 2 && (
        <Pagination className="mt-16">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
                disabled={previousPage === null}
              />
            </PaginationItem>

            {/* Dynamic Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page
                      ? "font-bold bg-primary text-white rounded" // Active style
                      : "hover:underline"
                  }
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Ellipsis for Large Pagination */}
            {totalPages > 5 && <PaginationEllipsis />}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                disabled={nextPage === null}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
