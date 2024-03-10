"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";

interface User {
  uid: string;
  identifier: string;
  createdAt: string;
  lastSignedIn: string;
}

interface IProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

const UsersSearch: React.FC<IProps> = ({ searchString, setSearchString }) => {
  const handleSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="flex w-full px-7 py-5 col-span-2 sm:col-span-1 justify-center items-center gap-2 rounded-3xl bg-dark-secondary hover:bg-lighter-dark-secondary">
      <IoIosSearch className="text-white" size={24} />
      <input
        className="w-full text-md bg-transparent outline-none text-white"
        placeholder="Search by user email"
        value={searchString}
        onChange={handleSearchStringChange}
      />
    </div>
  );
};

export default UsersSearch;
