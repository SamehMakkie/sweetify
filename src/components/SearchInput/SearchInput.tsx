import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className="flex w-full px-4 py-2 col-span-2 sm:col-span-1 justify-center items-center gap-2 rounded-full bg-dark-secondary hover:bg-lighter-dark-secondary">
      <IoIosSearch className="text-white" size={24} />
      <input
        className="w-full text-md bg-transparent outline-none text-white"
        placeholder="Search by recipe name or ingredient"
      />
    </div>
  );
};

export default SearchInput;
