import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

function Action({ actions = [], menuLabel = "Actions", id, isLoading }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical size={16} className="hover:cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          actions.map(({ icon, label, onClick, className }, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => onClick(id)}
              className={className || ""}
            >
              {icon && React.cloneElement(icon, { size: 14 })}
              {label}
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Action;
