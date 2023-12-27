import React from "react";
import IconBtn from "../IconBtn/IconBtn";
import NavMenu from "./NavMenu/NavMenu";
import { CiBoxList } from "react-icons/ci";
import Link from "next/link";

const LoggedInNavItems = () => {
  return (
    <>
      <Link href={"/user/my-list"} className="hidden sm:inline-block ">
        <IconBtn Icon={CiBoxList} />
      </Link>
      <NavMenu />
    </>
  );
};

export default LoggedInNavItems;
