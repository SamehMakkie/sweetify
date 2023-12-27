import Link from "next/link";
import React from "react";

const NotLoggedInNavItems = () => {
  return (
    <>
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
    </>
  );
};

export default NotLoggedInNavItems;
