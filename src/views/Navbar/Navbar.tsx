import Logo from "@/components/Logo/Logo";
import NavItems from "@/components/NavItems/NavItems";
import SearchInput from "@/components/SearchInput/SearchInput";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full grid grid-cols-3 py-4 px-8 sm:px-12 md:px-24 lg:px-36 justify-center items-center gap-y-3 gap-x-1">
      <Logo />
      <SearchInput />
      <NavItems />
    </nav>
  );
};

export default Navbar;
