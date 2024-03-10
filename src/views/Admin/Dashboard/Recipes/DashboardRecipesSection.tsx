"use client";
import DashboardSearchInput from "@/components/SearchInput/DashboardSearchInput/DashboardSearchInput";
import SearchResults from "@/views/Search/SearchResults/SearchResults";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

interface recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

const DashboardRecipesSection = () => {
  const [searchResults, setSearchResults] = useState<recipe[]>([]);
  const [searchString, setSearchString] = useState<string>("");

  return (
    <div className="w-full md:px-5 flex flex-col gap-3">
      <div className="flex gap-3 justify-between items-center">
        <DashboardSearchInput
          searchString={searchString}
          setSearchString={setSearchString}
          setSearchResults={setSearchResults}
        />
        <Link href="/admin/dashboard/recipes/add">
          <button className="p-2 rounded-full bg-primary  text-white cursor-pointer transform transition-transform duration-200 hover:scale-110 active:scale-90">
            <IoMdAdd size={36} />
          </button>
        </Link>
      </div>
      <SearchResults
        mode="dashboard"
        searchString={searchString}
        data={searchResults}
      />
    </div>
  );
};

export default DashboardRecipesSection;
