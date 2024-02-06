import React from "react";
import NameChangeSection from "@/views/Account/NameChange/NameChangeSection";
import EmailChangeSection from "@/views/Account/EmailChange/EmailChangeSection";
import PasswordChangeSection from "@/views/Account/PasswordChange/PasswordChangeSection";

const page = () => {
  return (
    <div className="flex w-full justify-center bg-secondary">
      <div className="grid grid-cols-2 max-w-4xl grow gap-10">
        <div className="col-span-2 flex flex-col w-full p-10 gap-3 rounded-2xl drop-shadow-2xl items-center bg-dark-secondary">
          <h1 className="text-primary text-4xl">Account</h1>
          <hr className="w-full max-w-sm border-primary" />
        </div>

        <div className="col-span-2 md:col-span-1">
          <NameChangeSection />
        </div>
        <div className="col-span-2 md:col-span-1">
          <PasswordChangeSection />
        </div>
      </div>
    </div>
  );
};

export default page;
