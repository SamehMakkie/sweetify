import React, { useEffect, useState } from "react";
import Avatar from "@/components/Avatar/Avatar";
import NavMenuItems from "./NavMenuItems/NavMenuItems";
import { CiBoxList } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdExitToApp } from "react-icons/md";
import { useAuth } from "@/context/AuthContext";


const NavMenu = () => {
  const { user, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchClaims = async () => {
      const idTokenResult = await user.getIdTokenResult();
      if (!idTokenResult.claims.admin) {
        setIsAdmin(false);
      } else {
        setIsAdmin(true);
      }
    };

    fetchClaims();
  }, [user]);

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 border-none bg-primary hover:bg-dark-primary rounded-full">
        <Avatar username={user.displayName} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content wn-content z-[1] menu p-8 shadow bg-dark-secondary rounded-box w-56  sm:w-64 text-white gap-1.5">
        <NavMenuItems href="/user/my-list" Icon={CiBoxList} text="My list" />
        <NavMenuItems
          href="/user/liked-list"
          Icon={FaHeart}
          iconColor="text-error"
          text="Liked list"
        />
        <NavMenuItems
          href="/user/account"
          Icon={MdOutlineAccountCircle}
          text="Account"
        />
        {isAdmin && (
          <NavMenuItems
            href="/admin/dashboard/stats"
            Icon={LuLayoutDashboard}
            text="Dashboard"
          />
        )}
        <hr className="w-full h-px bg-primary border-none" />
        <NavMenuItems
          href=""
          Icon={MdExitToApp}
          text="Logout out"
          onClick={() => {
            logout();
          }}
        />
      </ul>
    </div>
  );
};

export default NavMenu;
