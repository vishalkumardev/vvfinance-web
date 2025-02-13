import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { useDeleteCategoryMutation } from "../api/categoryApi";
import { Trash } from "lucide-react";

function Table({ categorys, isLoading }) {
  const [deleteCategory] = useDeleteCategoryMutation();

  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No.", id: "serial" },
      { name: "Name", id: "name" },
      { name: "Course", id: "courses" },
      { name: "Created At", id: "createdAt" },
      { name: "Action", id: "action" },
    ],
    []
  );

  const actions = [
    // {
    //   label: "View",
    //   icon: <EyeIcon />,
    //   onClick: (courseId) =>
    //     navigate(`/${role}/dashboard/course/view/${courseId}`),
    //   className: "",
    // },
    // {
    //   label: "Approve",
    //   icon: <CircleCheck />,
    //   onClick: approveCourse,
    //   className: "text-green-600 hover:text-green-500",
    // },
    // {
    //   label: "Reject",
    //   icon: <XCircle />,
    //   onClick: rejectCourse,
    //   className: "text-red-600 hover:text-red-500",
    // },
    {
      label: "Delete",
      icon: <Trash />,
      onClick: deleteCategory,
      className: "text-red-600 hover:text-gray-500",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.courseId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.name}</TableCell>
      <TableCell>{row?.numOfCourse ?? 0}</TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Action actions={actions} id={row?.categoryId} />
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: categorys,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default Table;
