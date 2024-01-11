"use client";
import FormsInput from "@/components/FormsInput/FormsInput";
import PasswordInput from "@/components/FormsInput/PasswordInput/PasswordInput";
import Link from "next/link";
import React, { useState } from "react";
import {
  MdFamilyRestroom,
  MdLockOutline,
  MdOutlineEmail,
} from "react-icons/md";
import HaveAnAccount from "@/components/HaveAnAccount/HaveAnAccount";
import { FaPerson } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(1, "First name must be at least 1 character long")
      .max(255, "First name must be less than 255 characters long")
      .matches(/^[a-zA-Z]*$/, "First name can only contain letters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(1, "Last name must be at least 1 character long")
      .max(255, "Last name must be less than 255 characters long")
      .matches(/^[a-zA-Z]*$/, "Last name can only contain letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(255, "Password must be less than 255 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
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
      handleSubmit(handleSignUp);
    }
  };

  const handleSignUp = async () => {
    const { firstName, lastName, email, password, confirmPass } = data;
    console.log(data);
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex flex-col max-w-md grow gap-10 bg-dark-secondary rounded-2xl shadow-lg p-10">
        <div className="flex flex-col w-full gap-2">
          <Link href="/">
            <h1 className="text-primary text-center text-4xl">Sweetify</h1>
          </Link>
          <p className="text-body-text text-center text-xl">Register</p>
        </div>
        <form
          noValidate
          className="flex flex-col w-full gap-8"
          onSubmit={handleSubmit(handleSignUp)}>
          <div className="w-full flex gap-3">
            <FormsInput
              type="text"
              placeholder="First name"
              leftIcon={<FaPerson className="text-white" size={24} />}
              register={register("firstName")}
              handleEnter={handleEnter}
              error={errors.firstName}
            />
            <FormsInput
              type="text"
              placeholder="Last name"
              leftIcon={<MdFamilyRestroom className="text-white" size={24} />}
              register={register("lastName")}
              handleEnter={handleEnter}
              error={errors.lastName}
            />
          </div>
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
          <PasswordInput
            placeholder="Confirm password"
            isPasswordShown={isPasswordShown}
            togglePasswordVisibility={togglePasswordVisibility}
            leftIcon={<MdLockOutline className="text-white" size={24} />}
            msgDetails="Sorry, just to be sure"
            register={register("confirmPass")}
            handleEnter={handleEnter}
            error={errors.confirmPass}
          />
          <button
            type="submit"
            className="w-full btn rounded-full text-white btn-primary">
            Register
          </button>
          <HaveAnAccount
            linkPath="/login"
            msg="Already have an account?"
            linkMsg="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
