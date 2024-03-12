"use client";
import React, { useState } from "react";
import LoggedInNavItems from "./LoggedInNavItems";
import NotLoggedInNavItems from "./NotLoggedInNavItems";
import { useAuth } from "@/context/AuthContext";

const NavItems = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-end items-center gap-3">
      {user ? <LoggedInNavItems /> : <NotLoggedInNavItems />}
    </div>
  );
};

export default NavItems;
