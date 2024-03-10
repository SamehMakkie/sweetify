import Sidebar from "@/views/Admin/Dashboard/Sidebar/Sidebar";
import Stats from "@/views/Admin/Dashboard/Stats/Stats";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-24 py-10 gap-10 justify-between">
      <Sidebar path={"stats"} />
      <Stats />
    </div>
  );
};

export default page;
