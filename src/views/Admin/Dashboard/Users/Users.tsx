"use client";
import React, { useEffect } from "react";
import UsersTable from "./UsersTable/UsersTable";
import UsersSearch from "./UsersSearch/UsersSearch";
import searchUsers from "@/services/searchUsers";
import { useAuth } from "@/context/AuthContext";

interface searchResults {
  uid: string;
  identifier: string;
  createdAt: string;
  lastSignedIn: string;
}

const Users = () => {
  const [searchString, setSearchString] = React.useState<string>("");
  const [searchResults, setSearchResults] = React.useState<searchResults[]>([]);
  const { idToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await searchUsers({ idToken, searchString, pageNum: 1 });
      setSearchResults(data);
    };
    fetchData();
  }, [searchString]);

  return (
    <div className="w-full flex flex-col p-10 rounded-3xl gap-5">
      <div className="flex justify-center items-center p-8 rounded-3xl bg-dark-secondary drop-shadow-2xl">
        <h1 className="text-primary text-3xl ">Users</h1>
      </div>
      <div className="flex flex-col gap-3 p-10 justify-center items-center rounded-3xl bg-dark-secondary drop-shadow-2xl overflow-hidden">
        <UsersSearch
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <UsersTable data={searchResults} />
      </div>
    </div>
  );
};

export default Users;
