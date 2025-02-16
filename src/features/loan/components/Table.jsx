import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { CircleCheck, EyeIcon, Trash, XCircle } from "lucide-react";
// import //   useApproveCourseMutation,
// //   useDeleteCourseMutation,
// //   useRejectCourseMutation,
// "../api/courseApi";
import Status from "@/common/components/Status";
import { useSelector } from "react-redux";

function LoanTable({ loans, isLoading }) {
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //   // Mutations and their loading states
  //   const [approveCourse] = useApproveCourseMutation();
  //   const [rejectCourse] = useRejectCourseMutation();
  //   const [deleteCourse] = useDeleteCourseMutation();

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

  // Action configurations
  const actions = [
    {
      label: "View",
      icon: <EyeIcon />,
      //   onClick: (courseId) =>
      //     navigate(`/${role}/dashboard/course/view/${courseId}`),
      className: "",
    },
    {
      label: "Approve",
      icon: <CircleCheck />,
      //   onClick: approveCourse,
      className: "text-green-600 hover:text-green-500",
    },
    {
      label: "Reject",
      icon: <XCircle />,
      //   onClick: rejectCourse,
      className: "text-red-600 hover:text-red-500",
    },
    {
      label: "Delete",
      icon: <Trash />,
      //   onClick: deleteCourse,
      className: "text-gray-600 hover:text-gray-500",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.courseId}>
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
        <Action actions={actions} id={row?.courseId} />
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
