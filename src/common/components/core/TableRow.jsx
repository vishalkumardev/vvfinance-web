import React from "react";

function TableRow({ children }) {
  return (
    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      {children}
    </tr>
  );
}

export default TableRow;
