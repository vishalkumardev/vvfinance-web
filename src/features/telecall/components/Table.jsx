import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { CircleCheck, EyeIcon, Trash, XCircle } from "lucide-react";
import Status from "@/common/components/Status";
import { useSelector } from "react-redux";
import { useDeleteTellecallMutation } from "../api/teleCallApi";

function LoanTable({ telecalls, isLoading }) {
  const { role } = useSelector((state) => state.auth);
  const [deleteTellecall] = useDeleteTellecallMutation();
  const navigate = useNavigate();

  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No." },
      { name: "Registration No." },
      { name: "Cust. Name" },
      { name: "Mobile Number" },
      { name: "Lender" },
      { name: "Emi" },
      { name: "Pos" },
      { name: "City" },
      { name: "District" },
      { name: "SARFAESI STATUS" },
      { name: "Created At" },
      { name: "Action" },
    ],
    []
  );

  // Action configurations
  const actions = [
    // {
    //   label: "View",
    //   icon: <EyeIcon />,
    //   //   onClick: (teleCallId) =>
    //   //     navigate(`/${role}/dashboard/course/view/${teleCallId}`),
    //   className: "",
    // },
    // {
    //   label: "Approve",
    //   icon: <CircleCheck />,
    //   //   onClick: approveCourse,
    //   className: "text-green-600 hover:text-green-500",
    // },
    // {
    //   label: "Reject",
    //   icon: <XCircle />,
    //   //   onClick: rejectCourse,
    //   className: "text-red-600 hover:text-red-500",
    // },
    {
      label: "Delete",
      icon: <Trash />,
      onClick: deleteTellecall,
      className: "text-gray-600 hover:text-gray-500",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.teleCallId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.accountNo}</TableCell>
      <TableCell>{row?.borrowerName}</TableCell>
      <TableCell>{row?.mobileNumber}</TableCell>
      <TableCell>{row?.lender}</TableCell>
      <TableCell> ₹ {row?.emiAmount}</TableCell>
      <TableCell> ₹ {row?.principal}</TableCell>
      <TableCell>{row?.city}</TableCell>
      <TableCell>{row?.district}</TableCell>
      <TableCell>{row?.status}</TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Action actions={actions} id={row?.teleCallId} />
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: telecalls,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default LoanTable;
