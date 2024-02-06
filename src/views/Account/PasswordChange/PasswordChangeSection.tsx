"use client";
import React, { useState } from "react";
import FormsInput from "@/components/FormsInput/FormsInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import PasswordInput from "@/components/FormsInput/PasswordInput/PasswordInput";

const schema = yup
  .object({
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

const PasswordChangeSection = () => {
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

  const handlePasswordChange = async () => {
    try {
      console.log(data.password);
    } catch (err) {
      console.log(err);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prevValue) => !prevValue);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit(handlePasswordChange);
    }
  };

  return (
    <form
      noValidate
      className="flex flex-col w-full p-10 gap-8 rounded-2xl drop-shadow-2xl bg-dark-secondary"
      onSubmit={handleSubmit(handlePasswordChange)}>
      <div className="flex flex-col gap-3">
        <p className="text-body-text text-lg">Password</p>
        <PasswordInput
          placeholder="New Password"
          isPasswordShown={isPasswordShown}
          togglePasswordVisibility={togglePasswordVisibility}
          leftIcon={<MdLockOutline className="text-white" size={24} />}
          msgDetails="Don't share your password with anyone 🤫"
          register={register("password")}
          handleEnter={handleEnter}
          error={errors.password}
        />
      </div>
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
        Update
      </button>
    </form>
  );
};

export default PasswordChangeSection;
