import React from "react";
import { Button } from "@/common/components/ui/button";
import { Link } from "react-router-dom";

function TopHeader({ title, btnText, to, visible }) {
  return (
    <div className="flex justify-between mb-5">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {visible && (
        <Link to={to}>
          <Button>{btnText}</Button>
        </Link>
      )}
    </div>
  );
}

export default TopHeader;
