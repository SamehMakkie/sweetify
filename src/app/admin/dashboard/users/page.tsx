import Sidebar from "@/views/Admin/Dashboard/Sidebar/Sidebar";
import Users from "@/views/Admin/Dashboard/Users/Users";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-24 py-10 gap-10 justify-between">
      <Sidebar path={"users"} />
      <Users />
    </div>
  );
};

export default page;
