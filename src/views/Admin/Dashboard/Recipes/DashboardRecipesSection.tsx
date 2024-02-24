"use client";
import AddRecipeModal from "@/components/Modal/AddRecipeModal/AddRecipeModal";
import DashboardSearchInput from "@/components/SearchInput/DashboardSearchInput/DashboardSearchInput";
import SearchResults from "@/views/Search/SearchResults/SearchResults";
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
        <AddRecipeModal />
        <button
          className="p-2 rounded-full bg-primary hover:bg-dark-primary text-white cursor-pointer"
          onClick={() => {
            (
              document.getElementById("add-recipe-modal") as HTMLDialogElement
            ).showModal();
          }}>
          <IoMdAdd size={36} />
        </button>
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
