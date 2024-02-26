"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const dumbData = [
  {
    uid: "1",
    identifier: "Cy Ganderton",
    createdAt: "Jan 16, 2024",
    lastSignedIn: "Feb 4, 2024",
  },
  {
    uid: "2",
    identifier: "Hart Hagerty",
    createdAt: "Desktop Support Technician",
    lastSignedIn: "Purple",
  },
  {
    uid: "3",
    identifier: "Brice Swyre",
    createdAt: "Tax Accountant",
    lastSignedIn: "Red",
  },
];

interface User {
  uid: string;
  identifier: string;
  createdAt: string;
  lastSignedIn: string;
}

interface IProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersSearch: React.FC<IProps> = ({
  searchString,
  setSearchString,
  setSearchResults,
}) => {
  const handleSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    if (e.target.value !== "") {
      // get search results
      const searchResults = dumbData.filter((user) => {
        return user.identifier.toLowerCase().includes(searchString.toLowerCase());
      });
      setSearchResults(searchResults)
    } else {
      setSearchResults(dumbData);
    }
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
