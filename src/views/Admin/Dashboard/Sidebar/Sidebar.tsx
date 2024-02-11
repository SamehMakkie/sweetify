"use client";
import React from "react";
import Link from "next/link";
import LetterLogo from "@/components/Logo/LetterLogo/LetterLogo";
import { CiBoxList } from "react-icons/ci";
import { MdExitToApp } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoStatsChartOutline } from "react-icons/io5";
import RoundedRectangularIconBtn from "@/components/IconBtn/RoundedRectangularIconBtn/RoundedRectangularIconBtn";

interface IProps {
  path: string;
}

const Sidebar: React.FC<IProps> = ({ path }) => {
  return (
    <div className="flex flex-col md:h-screen justify-center">
      <div className="flex flex-row md:flex-col px-5 py-10 gap-5 rounded-2xl justify-center items-center bg-dark-secondary drop-shadow-2xl">
        <Link href={"/admin/dashboard/stats"}>
          <RoundedRectangularIconBtn
            Icon={IoStatsChartOutline}
            size={24}
            isSelected={path === "stats" && true}
          />
        </Link>
        <Link href={"/admin/dashboard/recipes"} >
          <RoundedRectangularIconBtn
            Icon={CiBoxList}
            size={24}
            isSelected={path === "recipes" && true}
          />
        </Link>
        <hr className="w-full h-px hidden md:block bg-primary border-none" />
        <LetterLogo />
        <hr className="w-full h-px hidden md:block bg-primary border-none" />
        <Link href={"/admin/dashboard/users"}>
          <RoundedRectangularIconBtn
            Icon={HiOutlineUsers}
            size={24}
            isSelected={path === "users" && true}
          />
        </Link>
        <RoundedRectangularIconBtn
          Icon={MdExitToApp}
          size={24}
          isLogout={true}
          isSelected={false}
          onClick={() => {
            console.log("logout");
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
