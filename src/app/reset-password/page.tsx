"use client";
import FormsInput from "@/components/FormsInput/FormsInput";
import Link from "next/link";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
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

  const data = watch();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit(handleResetPassword);
    }
  };

  const handleResetPassword = async () => {
    const { email } = data;
    console.log(data);
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-secondary">
      <div className="flex flex-col max-w-md grow gap-10 bg-dark-secondary rounded-2xl shadow-lg p-10">
        <div className="flex flex-col w-full gap-2">
          <Link href="/">
            <h1 className="text-primary text-center text-4xl">Sweetify</h1>
          </Link>
          <p className="text-body-text text-center text-xl">Reset password</p>
        </div>
        <form
          noValidate
          className="flex flex-col w-full gap-8"
          onSubmit={handleSubmit(handleResetPassword)}>
          <FormsInput
            type="email"
            placeholder="Email"
            leftIcon={<MdOutlineEmail className="text-white" size={24} />}
            msgDetails="We will never share your email"
            register={register("email")}
            handleEnter={handleEnter}
            error={errors.email}
          />
          <button
            type="submit"
            className="w-full btn rounded-full text-white btn-primary">
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
