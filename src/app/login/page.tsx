"use client";
import FormsInput from "@/components/FormsInput/FormsInput";
import PasswordInput from "@/components/FormsInput/PasswordInput/PasswordInput";
import ResetPasswordLink from "@/components/ResetPasswordLink/ResetPasswordLink";
import Link from "next/link";
import React, { useState } from "react";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import HaveAnAccount from "@/components/HaveAnAccount/HaveAnAccount";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    password: yup.string().required("Password is required"),
  })
  .required();

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const data = watch();

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prevValue) => !prevValue);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit(handleLogin);
    }
  };

  const handleLogin = async () => {
    const { email, password } = data;
    console.log(data);
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
        <form
          noValidate
          className="flex flex-col w-full gap-8"
          onSubmit={handleSubmit(handleLogin)}>
          <FormsInput
            type="email"
            placeholder="Email"
            leftIcon={<MdOutlineEmail className="text-white" size={24} />}
            msgDetails="We will never share your email"
            register={register("email")}
            handleEnter={handleEnter}
            error={errors.email}
          />
          <PasswordInput
            placeholder="Password"
            isPasswordShown={isPasswordShown}
            togglePasswordVisibility={togglePasswordVisibility}
            leftIcon={<MdLockOutline className="text-white" size={24} />}
            msgDetails="Don't share your password with anyone 🤫"
            register={register("password")}
            handleEnter={handleEnter}
            error={errors.password}
          />
          <ResetPasswordLink />
          <button
            type="submit"
            className="w-full btn rounded-full text-white btn-primary">
            Login
          </button>
          <HaveAnAccount
            linkPath="/register"
            msg="Don't have an account?"
            linkMsg="register"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
