import Link from "next/link";
import React from "react";
import IconBtn from "../IconBtn/IconBtn";
import { CiUser } from "react-icons/ci";

const NotLoggedInNavItems = () => {
  return (
    <>
    <div className="hidden sm:block">
      <Link href={"/login"}>
        <button className="btn btn-ghost rounded-full text-white hover:bg-lighter-dark-secondary">
          Log in
        </button>
      </Link>
      <Link href={"/register"}>
        <button className="btn rounded-full btn-primary text-white">
          Register
        </button>
      </Link>
    </div>
    <div className="block sm:hidden">
      <Link href={"/login"}>
        <IconBtn Icon={CiUser} />
      </Link>
      
      </div>
    </>
  );
};

export default NotLoggedInNavItems;
