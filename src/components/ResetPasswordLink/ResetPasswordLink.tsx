import Link from "next/link";
import React from "react";

const ResetPasswordLink = () => {
  return (
    <Link href="/reset-password">
      <div className="w-full flex justify-end">
        <div className="flex flex-col gap-1">
          <p className="text-card-text text-md ">Forgot your password?</p>
          <div className="w-full bg-primary h-[2px]"></div>
        </div>
      </div>
    </Link>
  );
};

export default ResetPasswordLink;
