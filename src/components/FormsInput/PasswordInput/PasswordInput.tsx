"use client";
import React, { ReactNode, useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

interface IProps {
  placeholder: string;
  leftIcon: ReactNode;
  msgDetails: string;
  error?: boolean;
  isPasswordShown: boolean;
  togglePasswordVisibility?: () => void;
}

const PasswordInput: React.FC<IProps> = ({
  placeholder,
  leftIcon,
  msgDetails,
  error = false,
  isPasswordShown,
  togglePasswordVisibility,
}) => {
  const errorView = error ? "border-2 border-error" : "";

  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className={
          "flex w-full px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary " +
          errorView
        }>
        {leftIcon}
        <input
          type={isPasswordShown ? "text" : "password"}
          className="w-full text-md bg-transparent outline-none placeholder:text-card-text text-white"
          placeholder={placeholder}
        />
        {isPasswordShown ? (
          <IoEyeOffSharp
            className="text-card-text cursor-pointer"
            size={24}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <IoEyeSharp
            className="text-card-text cursor-pointer"
            size={24}
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      <p className="pl-5 text-sm text-card-text">{msgDetails}</p>
    </div>
  );
};

export default PasswordInput;
