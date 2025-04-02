import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/common/components/ui/table";
import { useNavigate } from "react-router-dom";
import Action from "@/common/components/Action";
import Tables from "@/common/components/core/Table";
import formateDate from "@/common/hooks/formateDate";
import { DownloadCloud, EyeIcon, PencilIcon, Trash } from "lucide-react";
import Status from "@/common/components/Status";
import { useDeleteFileMutation } from "../api/FileApi";

function FileTable({ files, isLoading }) {
  const [deleteFile] = useDeleteFileMutation();
  const navigate = useNavigate();
  // Table headers
  const tableHeaders = useMemo(
    () => [
      { name: "Serial No.", id: "serial" },
      { name: "Name", id: "name" },
      { name: "Records", id: "records" },
      { name: "Client", id: "client" },
      { name: "Upload By", id: "upload" },
      { name: "Created At", id: "createdAt" },
      { name: "Action", id: "action" },
    ],
    []
  );

  // Action configurations
  const actions = [
    {
      label: "Download File",
      icon: <DownloadCloud />,
      onClick: (file) => {
        if (file?.fileUrl) {
          window.open(file.fileUrl, "_blank");
        }
      },
      className: "text-gray-500 hover:text-green-700",
    },
    {
      label: "Delete",
      icon: <Trash />,
      onClick: (file) => {
        deleteFile(file?.fileId);
      },
      className: "text-red-500 hover:text-red-700",
    },
  ];

  // Table row component
  const tableRow = ({ row, index }) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row?.courseId}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{row?.fileName}</TableCell>
      <TableCell>{row?.records}</TableCell>
      <TableCell>{row?.client}</TableCell>
      <TableCell>{row?.creator?.name}</TableCell>
      <TableCell>{formateDate(row?.createdAt)}</TableCell>
      <TableCell>
        <Action actions={actions} id={row} />
      </TableCell>
    </TableRow>
  );

  return (
    <Tables
      extra={{
        rows: files,
        columns: tableHeaders,
        RowComponent: tableRow,
        isLoading,
      }}
    />
  );
}

export default FileTable;
