"use client";
import React from "react";
import UsersTable from "./UsersTable/UsersTable";
import UsersSearch from "./UsersSearch/UsersSearch";

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

const Users = () => {
  const [searchString, setSearchString] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState(dumbData);

  return (
    <div className="w-full flex flex-col p-10 rounded-3xl gap-5">
      <div className="flex justify-center items-center p-8 rounded-3xl bg-dark-secondary">
        <h1 className="text-primary text-3xl ">Users</h1>
      </div>
      <div className="flex flex-col gap-3 p-10 justify-center items-center rounded-3xl bg-dark-secondary overflow-hidden">
        <UsersSearch
          searchString={searchString}
          setSearchString={setSearchString}
          setSearchResults={setSearchResults}
        />
        <UsersTable data={searchResults} />
      </div>
    </div>
  );
};

export default Users;
