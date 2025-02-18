import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { CircleCheck, EyeIcon, Trash, XCircle } from "lucide-react";
import Status from "@/common/components/Status";
import { useSelector } from "react-redux";
import { useDeleteLoanMutation } from "../api/loanApi";

function LoanTable({ loans, isLoading }) {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [deleteLoan] = useDeleteLoanMutation();

  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No." },
      { name: "Registration No." },
      { name: "Cust. Name" },
      { name: "Brand" },
      { name: "Emi" },
      { name: "Pos" },
      { name: "Chasis No." },
      { name: "Engine No." },
      { name: "Address" },
      { name: "Created At" },
      { name: "Action" },
    ],
    []
  );

  const actions = [
    {
      label: "View",
      icon: <EyeIcon />,
      onClick: (loanId) => navigate(`/dashboard/loans/view/${loanId}`),
      className: "text-gray-600 hover:text-gray-500",
    },
    {
      label: "Delete",
      icon: <Trash />,
      onClick: deleteLoan,
      className: "text-red-500 hover:text-red-600",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.loanId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.registration_no}</TableCell>
      <TableCell>{row?.customer}</TableCell>
      <TableCell>{row?.productname}</TableCell>
      <TableCell>{row?.emi_amt}</TableCell>
      <TableCell>{row?.total_due}</TableCell>
      <TableCell>{row?.chasisnum}</TableCell>
      <TableCell>{row?.enginenum}</TableCell>
      <TableCell>{row?.address}</TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Action actions={actions} id={row?.loanId} />
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: loans,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default LoanTable;
