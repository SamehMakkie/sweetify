import FilterInput from "@/components/FilterInput/FilterInput";
import React from "react";
import { MdOutlineTimer } from "react-icons/md";

const SearchFilter = () => {
  const handleApply = () => {
    console.log("APPLY");
  };
  return (
    <aside className="col-span-1 w-full h-fit flex flex-col gap-4 px-7 py-12 rounded-2xl drop-shadow-2xl bg-dark-secondary">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl text-primary">Filter</h2>
        <hr className="max-w-[90px] h-px bg-primary border-none" />
      </div>
      <p className="text-card-text">Max duration</p>
      <FilterInput
        type="number"
        placeholder="180 m"
        leftIcon={<MdOutlineTimer className="text-white" size={24} />}
        handleEnter={handleApply}
      />
      <button
        className="btn w-full rounded-full btn-primary text-white"
        onClick={handleApply}>
        APPLY
      </button>
    </aside>
  );
};

export default SearchFilter;
