import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className={"col-span-3 sm:col-span-1"}>
      <p className="text-primary text-4xl text-center sm:text-left">Sweetify</p>
    </Link>
  );
};

export default Logo;
