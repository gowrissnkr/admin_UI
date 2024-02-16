import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name, email or role"
        className="border border-gray-400 rounded p-[2px_5px] w-full"
        onChange={handleSearch}
      />
    </>
  );
};

export default SearchBar;
