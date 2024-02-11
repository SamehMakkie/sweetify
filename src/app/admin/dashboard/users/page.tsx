import Sidebar from "@/views/Admin/Dashboard/Sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex px-24 py-10 justify-between">
      <Sidebar path={"users"} />
    </div>
  );
};

export default page;
