"use client";
import React from "react";
import FormsInput from "@/components/FormsInput/FormsInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdOutlineEmail } from "react-icons/md";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
  })
  .required();

const EmailChangeSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const data = watch();

  const handleEmailNameChange = async () => {
    try {
      console.log(data.email);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit(handleEmailNameChange);
    }
  };

  return (
    <form
      noValidate
      className="flex flex-col w-full p-10 gap-8 rounded-2xl drop-shadow-2xl bg-dark-secondary"
      onSubmit={handleSubmit(handleEmailNameChange)}>
      <div className="flex flex-col w-full gap-3 bg-dark-secondary">
        <p className="text-body-text text-lg">Email</p>
        <FormsInput
          type="email"
          placeholder="email"
          leftIcon={<MdOutlineEmail className="text-white" size={24} />}
          msgDetails=""
          register={register("email")}
          handleEnter={handleEnter}
          error={errors.email}
        />
      </div>
      <button
        type="submit"
        className="w-full btn rounded-full text-white btn-primary">
        Update
      </button>
    </form>
  );
};

export default EmailChangeSection;
