"use client";
import React, { useState } from "react";
import LoggedInNavItems from "./LoggedInNavItems";
import NotLoggedInNavItems from "./NotLoggedInNavItems";

const NavItems = () => {
  const [user, setUser] = useState({});

  return (
    <div className="flex w-full justify-end items-center gap-3">
      {user ? <LoggedInNavItems /> : <NotLoggedInNavItems />}
    </div>
  );
};

export default NavItems;
