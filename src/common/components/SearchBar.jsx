import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import TextInput from "@/common/components/core/TextInput";

export default function SearchBar({ handleSearch, placeholder }) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // Use lodash debounce to delay dispatch
  const debouncedSearch = useCallback(
    _.debounce((value) => {
      handleSearch(value);
    }, 500), // 300ms debounce delay
    [dispatch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <TextInput
      type="text"
      placeholder={placeholder}
      className="my-5 border py-2 w-3/12 px-5 text-sm "
      value={query}
      onChange={handleInputChange}
    />
  );
}
