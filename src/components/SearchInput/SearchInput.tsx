"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const formatSearchString = (str: string) => {
  // Replace spaces with hyphens
  let formatted = str.replace(/\s+/g, "-");

  // Encode special characters
  formatted = encodeURIComponent(formatted);

  return formatted;
};

const SearchInput = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    let searchString = inputRef.current?.value || "";
    searchString = searchString.trim();

    // Check if the search string is not empty
    if (searchString !== "") {
      // Format the search string
      const formattedSearchString = formatSearchString(searchString);

      // Navigate to the search results page
      router.push(`/search?searchString=${formattedSearchString}`);
    }
  };

  return (
    <div className="flex w-full h-fit px-4 py-2 col-span-2 sm:col-span-1 justify-center items-center gap-2 rounded-full bg-dark-secondary hover:bg-lighter-dark-secondary">
      <IoIosSearch className="text-white" size={24} onClick={handleSearch} />
      <input
        className="w-full text-md bg-transparent outline-none text-white"
        placeholder="Search by recipe name or ingredient"
        onKeyDown={handleEnter}
        ref={inputRef}
      />
    </div>
  );
};

export default SearchInput;
