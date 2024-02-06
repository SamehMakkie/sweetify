"use client";
import React from "react";
import FormsInput from "@/components/FormsInput/FormsInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPerson } from "react-icons/fa6";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(1, "Name must be at least 1 character long")
      .max(255, "Name must be less than 255 characters long")
      .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  })
  .required();

const NameChangeSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const data = watch();

  const handleFullNameChange = async () => {
    try {
      console.log(data.fullName);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit(handleFullNameChange);
    }
  };

  return (
    <form
      noValidate
      className="flex flex-col w-full p-10 gap-8 rounded-2xl drop-shadow-2xl bg-dark-secondary"
      onSubmit={handleSubmit(handleFullNameChange)}>
      <div className="flex flex-col w-full gap-3 bg-dark-secondary">
        <p className="text-body-text text-lg">Full name</p>
        <FormsInput
          type="text"
          placeholder="Full Name"
          leftIcon={<FaPerson className="text-white" size={24} />}
          msgDetails=""
          register={register("fullName")}
          handleEnter={handleEnter}
          error={errors.fullName}
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

export default NameChangeSection;
