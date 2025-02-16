import React from "react";
import { Button } from "@/common/components/ui/button";
import SearchBar from "./SearchBar";

function TopHeader({
  title,
  visible,
  handleSearch,
  placeholder,
  description,
  btn1Text,
  btn2Text,
  btn1Fn,
  btn2Fn,
  btn1Visible,
  btn2Visible,
}) {
  return (
    <div className="flex justify-between mb-5">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
        <SearchBar handleSearch={handleSearch} placeholder={placeholder} />
      </div>

      <div className="flex flex-col space-y-2">
        {btn1Visible && <Button onClick={btn1Fn}>{btn1Text}</Button>}
        {btn2Visible && (
          <Button variant="outline" onClick={btn2Fn}>
            {btn2Text}
          </Button>
        )}
      </div>
    </div>
  );
}

export default TopHeader;
