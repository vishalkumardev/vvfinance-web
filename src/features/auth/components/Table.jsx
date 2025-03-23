import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { useDeleteuserMutation, useToggleUserMutation } from "../api/userApi";
import { EyeIcon, Trash } from "lucide-react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

function CourseTable({ users, isLoading }) {
  const [deleteuser] = useDeleteuserMutation();
  const [toggleUser] = useToggleUserMutation();
  const navigate = useNavigate();

  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No.", id: "serial" },
      { name: "Name", id: "name" },
      { name: "Email", id: "email" },
      { name: "Phone", id: "phone" },
      { name: "Role", id: "role" },
      { name: "Status", id: "active" },
      { name: "Created At", id: "createdAt" },
      { name: "Action", id: "action" },
    ],
    []
  );

  const actions = [
    {
      label: "View",
      icon: <EyeIcon />,
      onClick: (userId) => {
        navigate(`/dashboard/users/profile/${userId}`);
      },
      className: "text-gray-600 hover:text-red-500",
    },
    {
      label: "Active/Inactive",
      icon: <ExclamationTriangleIcon />,
      onClick: toggleUser,
      className: "text-gray-600 hover:text-red-500",
    },
    {
      label: "Delete",
      icon: <Trash />,
      onClick: deleteuser,
      className: "text-red-600 hover:text-gray-500",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.userId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.name}</TableCell>
      <TableCell>{row?.email}</TableCell>
      <TableCell>{row?.phone}</TableCell>
      <TableCell className="uppercase">{row?.role}</TableCell>
      <TableCell className="uppercase">
        {row?.active ? "Active" : "Inactive"}
      </TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Action actions={actions} id={row?.userId} />
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: users,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default CourseTable;
