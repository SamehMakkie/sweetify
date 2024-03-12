import Logo from "@/components/Logo/Logo";
import NavItems from "@/components/NavItems/NavItems";
import SearchInput from "@/components/SearchInput/SearchInput";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full grid grid-cols-3 py-4 px-8 sm:px-12 md:px-24 lg:px-36 justify-center items-center gap-y-3 gap-x-1">
      <Logo />
      <div className="w-full col-span-3 flex gap-1 justify-center items-center md:hidden">
        <SearchInput />
        <NavItems />
      </div>
      <div className="hidden md:col-span-1 md:flex justify-center items-center gap-1">
        <SearchInput />
      </div>
      <div className="hidden md:flex justify-end items-center gap-3">
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
