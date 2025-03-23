import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import { useNavigate } from "react-router-dom";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { PencilIcon, Trash } from "lucide-react";
import Status from "@/common/components/Status";
import { useDeleteClientMutation } from "../api/clientApi";

function ClientTable({ clients, isLoading }) {
  const [deleteClient] = useDeleteClientMutation();
  const navigate = useNavigate();
  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No.", id: "serial" },
      { name: "Name", id: "name" },
      { name: "Key", id: "key" },
      { name: "Created At", id: "createdAt" },
      { name: "Action", id: "action" },
    ],
    []
  );

  // Action configurations
  const actions = [
    {
      label: "Edit",
      icon: <PencilIcon />,
      onClick: (clientId) => {
        navigate(`/dashboard/clients/edit/${clientId}`);
      },
      className: "text-gray-500 hover:text-green-700",
    },
    {
      label: "Delete",
      icon: <Trash />,
      onClick: deleteClient,
      className: "text-red-500 hover:text-red-700",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.courseId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.name}</TableCell>
      <TableCell>
        <Status status={row?.key} />
      </TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Action actions={actions} id={row?.clientId} />
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: clients,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default ClientTable;
