import FormsInput from "@/components/FormsInput/FormsInput";
import Link from "next/link";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const page = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex flex-col max-w-md grow gap-10 bg-dark-secondary rounded-2xl shadow-lg p-10">
        <div className="flex flex-col w-full gap-2">
          <Link href="/">
            <h1 className="text-primary text-center text-4xl">Sweetify</h1>
          </Link>
          <p className="text-body-text text-center text-xl">Reset password</p>
        </div>
        <div className="flex flex-col w-full gap-8">
          <FormsInput
            type="email"
            placeholder="Email"
            leftIcon={<MdOutlineEmail className="text-white" size={24} />}
            msgDetails="We will never share your email"
          />
          <button className="w-full btn rounded-full text-white btn-primary">
            Send Reset Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
