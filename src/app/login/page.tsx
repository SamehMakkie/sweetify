"use client"
import FormsInput from "@/components/FormsInput/FormsInput";
import PasswordInput from "@/components/FormsInput/PasswordInput/PasswordInput";
import ResetPasswordLink from "@/components/ResetPasswordLink/ResetPasswordLink";
import Link from "next/link";
import React, { useState } from "react";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import HaveAnAccount from "@/components/HaveAnAccount/HaveAnAccount";

const page = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prevValue) => !prevValue);
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex flex-col max-w-md grow gap-10 bg-dark-secondary rounded-2xl shadow-lg p-10">
        <div className="flex flex-col w-full gap-2">
          <Link href="/">
            <h1 className="text-primary text-center text-4xl">Sweetify</h1>
          </Link>
          <p className="text-body-text text-center text-xl">Login</p>
        </div>
        <div className="flex flex-col w-full gap-8">
          <FormsInput
            type="email"
            placeholder="Email"
            leftIcon={<MdOutlineEmail className="text-white" size={24} />}
            msgDetails="We will never share your email"
          />
          <PasswordInput
            placeholder="Password"
            isPasswordShown={isPasswordShown}
            togglePasswordVisibility={togglePasswordVisibility}
            leftIcon={<MdLockOutline className="text-white" size={24} />}
            msgDetails="Don't share your password with anyone 🤫"
          />
          <ResetPasswordLink />
          <button className="w-full btn rounded-full text-white btn-primary">
            Login
          </button>
          <HaveAnAccount
            linkPath="/register"
            msg="Don't have an account?"
            linkMsg="register"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
