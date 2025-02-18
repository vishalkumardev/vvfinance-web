import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import { useNavigate, redirect, Link } from "react-router-dom";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { EyeIcon } from "lucide-react";

function ViewTable({ searchData, isLoading }) {
  const navigate = useNavigate();

  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No." },
      { name: "Agent Name" },
      { name: "Agent Phone No." },
      { name: "Time" },
      { name: "Action" },
    ],
    []
  );

  const actions = [
    {
      label: "View Loan",
      icon: <EyeIcon />,
      onClick: (loanId) =>
        redirect("https://maps.app.goo.gl/N99T1M2tBK6rgLhq8"),
      className: "text-gray-600 hover:text-gray-500",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.loanId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.agents?.name}</TableCell>
      <TableCell>{row?.agents?.phone}</TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Link className="" to={`/dashboard/loans/view/${row.loanId}`}>
          <EyeIcon className="mx-auto" />
        </Link>
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: searchData,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default ViewTable;
