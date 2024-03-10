"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdLockOutline } from "react-icons/md";
import PasswordInput from "@/components/FormsInput/PasswordInput/PasswordInput";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

const schema = yup
  .object({
    currentPassword: yup.string().required("Current password is required"),
    newPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(255, "Password must be less than 255 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    newConfirmPass: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords do not match")
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
  const { changePassword } = useAuth();

  const data = watch();

  const handlePasswordChange = async () => {
    try {
      await changePassword(data.currentPassword, data.newPassword);
      console.log("Password updated successfully");
      toast.success("Password updated successfully");
    } catch (err) {
      console.error("Error updating password:", err);
      toast.error("Error updating password");
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
          placeholder="Current Password"
          isPasswordShown={isPasswordShown}
          togglePasswordVisibility={togglePasswordVisibility}
          leftIcon={<MdLockOutline className="text-white" size={24} />}
          msgDetails="We need your current password to confirm your changes"
          register={register("currentPassword")}
          handleEnter={handleEnter}
          error={errors.currentPassword}
        />
        <PasswordInput
          placeholder="New Password"
          isPasswordShown={isPasswordShown}
          togglePasswordVisibility={togglePasswordVisibility}
          leftIcon={<MdLockOutline className="text-white" size={24} />}
          msgDetails="Don't share your password with anyone 🤫"
          register={register("newPassword")}
          handleEnter={handleEnter}
          error={errors.newPassword}
        />
      </div>
      <PasswordInput
        placeholder="Confirm password"
        isPasswordShown={isPasswordShown}
        togglePasswordVisibility={togglePasswordVisibility}
        leftIcon={<MdLockOutline className="text-white" size={24} />}
        msgDetails="Sorry, just to be sure"
        register={register("newConfirmPass")}
        handleEnter={handleEnter}
        error={errors.newConfirmPass}
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
