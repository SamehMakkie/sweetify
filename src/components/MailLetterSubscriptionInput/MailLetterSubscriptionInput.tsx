import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const MailLetterSubscriptionInput = () => {
  return (
    <div className="flex w-full px-4 py-3 col-span-2 sm:col-span-1 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary">
      <MdOutlineEmail className="text-white" size={24} />
      <input
        type="email"
        className="w-full text-md bg-transparent outline-none text-white"
        placeholder="Email"
      />
    </div>
  );
};

export default MailLetterSubscriptionInput;
